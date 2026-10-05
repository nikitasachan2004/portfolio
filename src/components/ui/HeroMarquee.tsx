import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface HeroMarqueeProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  targetRef: React.RefObject<HTMLElement | null>;
  className?: string;
}

interface DragState {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  isDragging: boolean;
}

interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Authentic Apple macOS pointer cursor (crisp black arrow with white border, exact macOS proportions)
const MacCursor: React.FC<{ isClicking?: boolean }> = ({ isClicking = false }) => {
  return (
    <div
      className="relative select-none pointer-events-none filter drop-shadow-[0px_2px_4px_rgba(0,0,0,0.4)]"
      style={{
        transform: isClicking ? 'scale(0.92)' : 'scale(1)',
        transformOrigin: '1px 1px',
        transition: 'transform 0.1s ease',
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none select-none block"
      >
        {/* Authentic macOS arrow pointer geometry */}
        <path
          d="M 1 1 V 18.2 L 4.7 14.5 L 8.2 23 L 11.3 21.5 L 7.9 13.5 H 13.3 Z"
          fill="#000000"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Corner handles for marquee selection rectangle
const CornerHandles = () => (
  <>
    {/* Top-Left */}
    <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white dark:bg-[#1A1F2C] border-2 border-[#FB7185] shadow-xs pointer-events-none select-none rounded-[1px]" />
    {/* Top-Right */}
    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white dark:bg-[#1A1F2C] border-2 border-[#FB7185] shadow-xs pointer-events-none select-none rounded-[1px]" />
    {/* Bottom-Left */}
    <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white dark:bg-[#1A1F2C] border-2 border-[#FB7185] shadow-xs pointer-events-none select-none rounded-[1px]" />
    {/* Bottom-Right */}
    <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white dark:bg-[#1A1F2C] border-2 border-[#FB7185] shadow-xs pointer-events-none select-none rounded-[1px]" />
  </>
);

// Figma/Canvas style selection tag with dimensions
const DimensionTag: React.FC<{ width: number; height: number; label?: string }> = ({
  width,
  height,
  label = 'NIKITA',
}) => {
  if (width < 60 || height < 24) return null;
  return (
    <div className="absolute -top-6 left-0 bg-[#FB7185] text-white font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded-[2px] border border-black/30 shadow-xs flex items-center gap-1.5 select-none pointer-events-none whitespace-nowrap">
      <span>{label}</span>
      <span className="opacity-90 font-mono text-[8px] font-normal">
        {Math.round(width)} × {Math.round(height)}
      </span>
    </div>
  );
};

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({
  containerRef,
  targetRef,
  className = '',
}) => {
  const [bounds, setBounds] = useState<Bounds>({ x: 0, y: 0, width: 0, height: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [manualDrag, setManualDrag] = useState<DragState | null>(null);
  const [fadeManual, setFadeManual] = useState<boolean>(false);

  const cursorControls = useAnimationControls();
  const marqueeControls = useAnimationControls();

  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Measure target text element relative to container
  const updateBounds = useCallback(() => {
    if (!targetRef.current || !containerRef.current) return;
    const targetRect = targetRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setBounds({
      x: targetRect.left - containerRect.left,
      y: targetRect.top - containerRect.top,
      width: targetRect.width,
      height: targetRect.height,
    });
  }, [containerRef, targetRef]);

  // Keep bounds in sync with resize and font loading
  useEffect(() => {
    updateBounds();

    const handleResize = () => updateBounds();
    window.addEventListener('resize', handleResize);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateBounds());
      if (containerRef.current) ro.observe(containerRef.current);
      if (targetRef.current) ro.observe(targetRef.current);
    }

    if (document.fonts) {
      document.fonts.ready.then(updateBounds);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      ro?.disconnect();
    };
  }, [containerRef, targetRef, updateBounds]);

  // Generous padding around text for marquee selection box so it completely
  // encloses all letters of "NIKITA", including the wide slant of 'N', the 'A' leg,
  // the 8px drop-shadow, and floating sparkles.
  const PADDING_LEFT = 36;
  const PADDING_RIGHT = 42;
  const PADDING_TOP = 22;
  const PADDING_BOTTOM = 28;

  const startX = bounds.x - PADDING_LEFT;
  const startY = bounds.y - PADDING_TOP;
  const boxWidth = bounds.width + PADDING_LEFT + PADDING_RIGHT;
  const boxHeight = bounds.height + PADDING_TOP + PADDING_BOTTOM;
  const endX = startX + boxWidth;
  const endY = startY + boxHeight;

  // Automated looping marquee animation timeline
  useEffect(() => {
    let isCancelled = false;

    const runLoop = async () => {
      // Must have valid dimensions and be in autoplay mode
      if (!isAutoPlaying || bounds.width <= 0 || bounds.height <= 0) return;

      while (!isCancelled && isAutoPlaying) {
        try {
          // Reset positions
          setIsClicking(false);
          cursorControls.set({
            x: startX - 45,
            y: startY + 45,
            opacity: 0,
            scale: 1,
          });
          marqueeControls.set({
            opacity: 0,
            width: 0,
            height: 0,
          });

          // Brief breather before cycle begins
          await new Promise((r) => setTimeout(r, 200));
          if (isCancelled) break;

          // Stage 1: Enter - cursor glides to top-left of marquee box
          await cursorControls.start({
            x: startX,
            y: startY,
            opacity: 1,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          });
          if (isCancelled) break;

          // Stage 2: Click down - simulate mouse down
          setIsClicking(true);
          await cursorControls.start({
            scale: 0.84,
            transition: { duration: 0.2, ease: 'easeInOut' },
          });
          if (isCancelled) break;

          // Stage 3: Drag - cursor drags across text while marquee box expands
          marqueeControls.set({ opacity: 1, width: 0, height: 0 });
          await Promise.all([
            cursorControls.start({
              x: endX,
              y: endY,
              transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            }),
            marqueeControls.start({
              width: boxWidth,
              height: boxHeight,
              transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            }),
          ]);
          if (isCancelled) break;

          // Stage 4: Hold - release click, showcase selection with corner handles
          setIsClicking(false);
          await cursorControls.start({
            scale: 1,
            transition: { duration: 0.2, ease: 'backOut' },
          });
          if (isCancelled) break;

          // Hold full selection state
          await new Promise((r) => setTimeout(r, 1800));
          if (isCancelled) break;

          // Stage 5: Fade out
          await Promise.all([
            cursorControls.start({
              opacity: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }),
            marqueeControls.start({
              opacity: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }),
          ]);
          if (isCancelled) break;

          // Stage 6: Pause before next loop
          await new Promise((r) => setTimeout(r, 1600));
        } catch {
          break;
        }
      }
    };

    runLoop();

    return () => {
      isCancelled = true;
      cursorControls.stop();
      marqueeControls.stop();
      cursorControls.set({ opacity: 0 });
      marqueeControls.set({ opacity: 0 });
    };
  }, [
    isAutoPlaying,
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    startX,
    startY,
    endX,
    endY,
    boxWidth,
    boxHeight,
    cursorControls,
    marqueeControls,
  ]);

  // Restart 5-second inactivity timer to resume automated loop
  const startInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    inactivityTimerRef.current = setTimeout(() => {
      setFadeManual(true);
      setTimeout(() => {
        setManualDrag(null);
        setFadeManual(false);
        setIsAutoPlaying(true);
      }, 400);
    }, 5000);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  // Manual Pointer Down
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;

    const target = e.target as HTMLElement;
    if (target.closest('a, button, [data-interactive="true"]')) {
      return;
    }

    e.preventDefault();

    // Pause auto animation immediately
    setIsAutoPlaying(false);
    cursorControls.stop();
    cursorControls.set({ opacity: 0 });
    marqueeControls.stop();
    marqueeControls.set({ opacity: 0 });

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if not supported
    }

    setFadeManual(false);
    setManualDrag({
      startX: x,
      startY: y,
      currentX: x,
      currentY: y,
      isDragging: true,
    });
  };

  // Manual Pointer Move
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!manualDrag || !manualDrag.isDragging) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

    setManualDrag((prev) =>
      prev
        ? {
            ...prev,
            currentX: x,
            currentY: y,
          }
        : null
    );
  };

  // Manual Pointer Up
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!manualDrag || !manualDrag.isDragging) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    const w = Math.abs(manualDrag.currentX - manualDrag.startX);
    const h = Math.abs(manualDrag.currentY - manualDrag.startY);

    if (w < 8 && h < 8) {
      setManualDrag(null);
    } else {
      setManualDrag((prev) => (prev ? { ...prev, isDragging: false } : null));
    }

    startInactivityTimer();
  };

  // Calculated geometry for manual marquee
  const manualLeft = manualDrag ? Math.min(manualDrag.startX, manualDrag.currentX) : 0;
  const manualTop = manualDrag ? Math.min(manualDrag.startY, manualDrag.currentY) : 0;
  const manualWidth = manualDrag ? Math.abs(manualDrag.currentX - manualDrag.startX) : 0;
  const manualHeight = manualDrag ? Math.abs(manualDrag.currentY - manualDrag.startY) : 0;

  return (
    <div className={`absolute inset-0 overflow-visible pointer-events-none select-none ${className}`}>
      {/* Interactive layer to handle manual drag-selection */}
      <div
        className="absolute inset-0 z-10 cursor-crosshair touch-none select-none pointer-events-auto"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      {/* Automated Marquee Box */}
      {isAutoPlaying && bounds.width > 0 && (
        <motion.div
          animate={marqueeControls}
          initial={{ opacity: 0, width: 0, height: 0 }}
          style={{
            position: 'absolute',
            left: startX,
            top: startY,
          }}
          className="border-2 border-[#FB7185] bg-[#FB7185]/15 pointer-events-none z-20 overflow-visible"
        >
          <CornerHandles />
          <DimensionTag width={boxWidth} height={boxHeight} label="NIKITA" />
        </motion.div>
      )}

      {/* Automated macOS Cursor */}
      {isAutoPlaying && bounds.width > 0 && (
        <motion.div
          animate={cursorControls}
          initial={{ opacity: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: '1px 1px',
          }}
          className="pointer-events-none z-30 flex items-start"
        >
          <MacCursor isClicking={isClicking} />
        </motion.div>
      )}

      {/* Manual Drag Marquee Selection Box */}
      {manualDrag && (manualDrag.isDragging || manualWidth > 8) && (
        <div
          className={`absolute border-2 border-[#FB7185] bg-[#FB7185]/15 pointer-events-none z-20 overflow-visible transition-opacity duration-300 ${
            fadeManual ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            left: manualLeft,
            top: manualTop,
            width: manualWidth,
            height: manualHeight,
          }}
        >
          <CornerHandles />
          <DimensionTag width={manualWidth} height={manualHeight} label="Selection" />
        </div>
      )}
    </div>
  );
};
