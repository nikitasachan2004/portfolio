import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsDeckProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsDeck: React.FC<ProjectsDeckProps> = ({ onSelectProject }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const total = PROJECTS_DATA.length;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrev();
    }
  };

  const activeProject = PROJECTS_DATA[activeIdx];

  // The 3 cards peeking out directly behind the front card (k = 3 is deepest, k = 1 is directly behind)
  // Each step exposes 28px on desktop (22px on mobile)
  const peekingLayers = [
    { offsetK: 3, topOffset: 0, scale: 0.89, zIndex: 10, shadow: 'shadow-brutal-sm' },
    { offsetK: 2, topOffset: 28, scale: 0.93, zIndex: 20, shadow: 'shadow-brutal-sm' },
    { offsetK: 1, topOffset: 56, scale: 0.97, zIndex: 30, shadow: 'shadow-brutal' },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Featured Works Portfolio Showcase"
    >
      {/* Folder Header Tab */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="folder-tab bg-[#FB7185] text-black">
          PROJECTS 03 // SHOWCASE DECK
        </div>
        <div className="font-mono text-xs font-black bg-[#FBBF24] border-[2px] border-black px-3 py-1 mb-1 shadow-brutal-sm select-none text-black">
          [ 08 SHIPPED // CLICK TAB OR PILL TO BRING FORWARD ]
        </div>
      </div>

      {/* Main Neo-Brutalist Frame */}
      <div className="bg-white border-[3px] border-black shadow-brutal-lg p-4 sm:p-7 md:p-8 flex flex-col justify-between transition-colors">
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b-2 border-black/15">
          <div>
            <h2 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black">
              FEATURED WORKS
            </h2>
            <p className="font-mono text-xs text-black/70 mt-1">
              // INTERACTIVE STACKED CARDS · {total} PRODUCTION &amp; RESEARCH REPOSITORIES
            </p>
          </div>

          <div className="font-mono text-xs font-bold text-black/80 flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>STACK RECEPTOR ACTIVE</span>
          </div>
        </div>

        {/* Stack Showcase Canvas */}
        <div className="relative pt-24 sm:pt-28 pb-2 min-h-[530px] sm:min-h-[500px]">
          {/* Peeking Background Cards */}
          {peekingLayers.map(({ offsetK, topOffset, scale, zIndex, shadow }) => {
            const peekIdx = (activeIdx + offsetK) % total;
            const peekProject = PROJECTS_DATA[peekIdx];

            return (
              <motion.div
                key={`peek-${peekProject.id}-${offsetK}`}
                initial={
                  shouldReduceMotion || !isInView
                    ? { y: 0, opacity: 1 }
                    : { y: 60, opacity: 0 }
                }
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 280, damping: 26 }
                }
                style={{
                  top: `${topOffset}px`,
                  zIndex,
                  width: `${scale * 100}%`,
                }}
                onClick={() => setActiveIdx(peekIdx)}
                role="button"
                tabIndex={0}
                aria-label={`Bring project ${peekProject.number}: ${peekProject.title} to front`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIdx(peekIdx);
                  }
                }}
                className={`project-card absolute inset-x-0 mx-auto h-[480px] sm:h-[440px] ${peekProject.accentColor} border-[2.5px] border-black rounded-2xl ${shadow} cursor-pointer hover:-translate-y-1 transition-transform group select-none overflow-hidden`}
              >
                {/* Exposed Top Strip / Header Tab (28px height) */}
                <div className="h-[28px] px-3 sm:px-5 flex items-center justify-between gap-2 border-b-2 border-black/20 bg-black/5 group-hover:bg-black/10 transition-colors">
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-mono text-[10px] sm:text-[11px] font-black bg-black text-white px-1.5 py-0.2 rounded shadow-2xs shrink-0">
                      {peekProject.number}
                    </span>
                    <span className="font-syne font-black text-xs sm:text-sm text-black tracking-tight truncate">
                      {peekProject.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-black/70 shrink-0">
                    {peekProject.badge} ↗
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Active Front Card */}
          <div className="relative z-40 w-full" style={{ marginTop: '0px' }}>
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0.7, y: 20, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20, scale: 0.97 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 300, damping: 28, mass: 0.8 }
                }
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (offset.x < -50 || swipe < -80) {
                    handleNext();
                  } else if (offset.x > 50 || swipe > 80) {
                    handlePrev();
                  }
                }}
                className={`project-card w-full ${activeProject.accentColor} border-[3px] border-black rounded-2xl p-5 sm:p-7 md:p-8 shadow-brutal-lg hover:shadow-brutal-xl transition-shadow select-none relative min-h-[460px] sm:min-h-[430px] flex flex-col justify-between cursor-grab active:cursor-grabbing text-black`}
              >
                {/* Card Anatomy: Left Info & Right Visual Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Left Column (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Meta Row: Number Chip & Category Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="font-mono text-xs font-black bg-black text-white px-2.5 py-1 rounded shadow-2xs shrink-0 tracking-wider">
                          {activeProject.number} // {String(total).padStart(2, '0')}
                        </span>
                        <span className="font-mono text-xs font-bold text-black bg-white/70 border border-black/30 px-2 py-0.5 rounded">
                          {activeProject.category}
                        </span>
                        <span className="font-mono text-xs font-extrabold text-black/80 uppercase tracking-wide">
                          {activeProject.badge}
                        </span>
                      </div>

                      {/* Fluid Responsive Title */}
                      <h3 className="font-syne font-black text-2xl sm:text-3xl lg:text-[2rem] text-black leading-tight tracking-tight break-words [overflow-wrap:anywhere]">
                        {activeProject.title}
                      </h3>

                      {/* 3-Line Description */}
                      <p className="font-grotesk text-sm sm:text-base text-black font-medium line-clamp-3 leading-relaxed mt-2.5">
                        {activeProject.shortDescription}
                      </p>
                    </div>

                    {/* Tags and Action Buttons */}
                    <div className="pt-2 border-t-2 border-black/15 space-y-3">
                      {/* Tech Tags: Exactly 4 tags + "+N" chip */}
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {activeProject.tags.slice(0, 4).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-[#FEF08A] border-[1.5px] border-black px-2.5 py-0.5 text-xs font-mono font-bold text-black shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {activeProject.tags.length > 4 && (
                          <span className="bg-white border-[1.5px] border-black px-2 py-0.5 text-xs font-mono font-bold text-black shadow-2xs">
                            +{activeProject.tags.length - 4} more
                          </span>
                        )}
                      </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2.5 items-center pt-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProject(activeProject);
                            }}
                            className="brutal-btn bg-black text-white hover:bg-neutral-800 font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FBBF24] shadow-brutal-sm"
                          >
                            <span className="text-white">Open details</span>
                            <span className="text-white">↗</span>
                          </button>

                          {activeProject.liveUrl && (
                            <a
                              href={activeProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="brutal-btn bg-[#34D399] text-black hover:bg-[#10B981] font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-black shadow-brutal-sm"
                            >
                              <span>🌐 Live Site</span>
                              <span>↗</span>
                            </a>
                          )}

                          {activeProject.demoUrl && (
                            <a
                              href={activeProject.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="brutal-btn bg-[#FF0000] text-white hover:bg-[#DC2626] font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-black shadow-brutal-sm"
                            >
                              <span>▶ Watch Demo</span>
                            </a>
                          )}

                          {activeProject.githubUrl && (
                            <a
                              href={activeProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="brutal-btn bg-white text-black hover:bg-neutral-100 font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-black shadow-brutal-sm"
                            >
                              <span>Code</span>
                              <span>↗</span>
                            </a>
                          )}
                        </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Panel (col-span-5) */}
                  <div className="lg:col-span-5 bg-white/80 border-[2px] border-black rounded-xl p-4 sm:p-5 relative overflow-hidden flex flex-col justify-between min-h-[220px] lg:min-h-full">
                    {/* Large Faint Watermark Number */}
                    <div
                      style={{ opacity: 0.12 }}
                      className="font-syne font-black text-7xl sm:text-8xl lg:text-9xl text-black select-none absolute right-2 bottom-0 leading-none pointer-events-none"
                    >
                      {activeProject.number.replace('#', '')}
                    </div>

                    {/* Panel Header Status */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] sm:text-[11px] font-black bg-black text-white px-2.5 py-1 rounded inline-flex items-center gap-1 shadow-2xs tracking-wide">
                        <span className="text-white">{activeProject.metaStatus || activeProject.badge}</span>
                      </span>
                      <span className="font-mono text-[10px] font-black text-black/60 uppercase">
                        SCHEMATIC
                      </span>
                    </div>

                    {/* Visual Content: Architecture Flow or Impact Highlights */}
                    <div className="relative z-10 my-auto py-3">
                      {activeProject.architectureFlow && activeProject.architectureFlow.length > 0 ? (
                        <div className="space-y-1.5">
                          <div className="font-mono text-[10px] font-black text-black/60 uppercase tracking-wider mb-1">
                            // PIPELINE ARCHITECTURE
                          </div>
                          {activeProject.architectureFlow.slice(0, 3).map((step, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <span className="font-mono text-[10px] font-black bg-black text-white w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-white">{sIdx + 1}</span>
                              </span>
                              <div className="font-mono text-[11px] font-bold text-black bg-white border border-black px-2 py-0.5 rounded shadow-2xs truncate flex-1">
                                {step}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="font-mono text-[10px] font-black text-black/60 uppercase tracking-wider mb-1">
                            // BENCHMARKED HIGHLIGHTS
                          </div>
                          {activeProject.impactMetrics.slice(0, 2).map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="font-grotesk text-xs font-bold text-black bg-white border border-black p-2 rounded-lg shadow-2xs flex items-start gap-1.5"
                            >
                              <span className="text-black font-black">★</span>
                              <span className="line-clamp-2">{metric}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Panel Footer */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono font-black text-black/75 pt-2 border-t border-black/20">
                      <span className="truncate">{activeProject.category}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(activeProject);
                        }}
                        className="underline hover:text-black shrink-0 cursor-pointer font-bold"
                      >
                        Technical Specs ↗
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Controls: Arrows, Monospace Counter & 8 Index Pills */}
        <div className="mt-8 pt-5 border-t-2 border-black/15 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation Controls: Prev / Counter / Next */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="brutal-btn bg-white hover:bg-[#FBBF24] w-10 h-10 rounded-lg flex items-center justify-center font-mono font-black text-lg border-[2px] border-black cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FBBF24] text-black"
            >
              ←
            </button>

            <div className="font-mono text-xs sm:text-sm font-black px-3.5 py-1.5 bg-black text-white rounded-md shadow-2xs select-none tracking-widest">
              <span className="text-white">{String(activeIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
            </div>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="brutal-btn bg-white hover:bg-[#FBBF24] w-10 h-10 rounded-lg flex items-center justify-center font-mono font-black text-lg border-[2px] border-black cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FBBF24] text-black"
            >
              →
            </button>
          </div>

          {/* 8 Compact Numbered Index Pills */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar max-w-full py-1"
            role="tablist"
            aria-label="Project index pills"
          >
            {PROJECTS_DATA.map((proj, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={proj.id}
                  role="tab"
                  onClick={() => setActiveIdx(idx)}
                  aria-selected={isActive}
                  aria-label={`Switch to project ${proj.number}: ${proj.title}`}
                  aria-current={isActive ? 'true' : undefined}
                  title={`${proj.number}: ${proj.title}`}
                  className={`font-mono text-xs font-black px-2.5 sm:px-3 py-1.5 rounded-md border-[2px] border-black transition-all duration-150 shrink-0 select-none flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FBBF24] text-black ${
                    isActive
                      ? 'bg-[#FBBF24] shadow-brutal -translate-y-0.5'
                      : 'bg-white hover:bg-neutral-100 hover:-translate-y-0.5 shadow-2xs'
                  }`}
                >
                  <span className="text-black">{proj.number.replace('#', '')}</span>
                  {isActive && (
                    <span className="hidden sm:inline-block max-w-[130px] truncate text-[11px] font-bold text-black">
                      {proj.title}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
