"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useMotionTemplate,
  MotionValue,
  useInView,
} from "framer-motion";
import {
  Code2,
  Zap,
  Search,
  Sparkles,
  Box,
  CheckCircle2,
  Layers,
  Terminal,
  User,
  Flame,
  Eye,
  Workflow,
  Database,
  Brain,
  Gauge,
  BarChart3,
} from "lucide-react";

// Inline branded SVG icons for pixel-crisp fidelity
const IconPython = ({ className, size = 20 }: { className?: string; size?: number | string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    role="img"
    aria-label="Python"
  >
    <path d="M11.914 0C5.82 0 6.193 2.657 6.193 2.657L6.2 5.4h5.814v.827H3.88S0 5.79 0 11.895c0 6.104 3.398 5.897 3.398 5.897l2.03-.002v-2.86s-.11-3.4 3.344-3.4h5.76v-.855H6.28s.02-3.32 5.634-3.32c5.615 0 5.37 2.92 5.37 2.92v2.42H20.1s3.9 0 3.9-6.046C24 .555 20.287 0 11.914 0zm-2.9 1.748a.953.953 0 1 1 0 1.905.953.953 0 0 1 0-1.905zM12.086 24c6.094 0 5.72-2.657 5.72-2.657l-.006-2.743h-5.815v-.827h8.134s3.88.437 3.88-5.668c0-6.105-3.398-5.897-3.398-5.897l-2.03.002v2.86s.11 3.4-3.344 3.4h-5.76v.855h8.252s-.02 3.32-5.634 3.32c-5.615 0-5.37-2.92-5.37-2.92v-2.42H3.9s-3.9 0-3.9 6.046C0 23.445 3.713 24 12.086 24zm2.9-1.748a.953.953 0 1 1 0-1.905.953.953 0 0 1 0-1.905z" />
  </svg>
);

const IconReact = ({ className, size = 20 }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    aria-label="React"
  >
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
  </svg>
);

const IconNext = ({ className, size = 20 }: { className?: string; size?: number | string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    aria-label="Next.js"
  >
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
  </svg>
);

const GRID_CONSTANTS = {
  STUD_WIDTH: 65,
  ROW_HEIGHT: 80,
  MAX_ROWS: 20,
  COLS: 6,
  APEX_HEIGHT: 150,
};

// Studio themes tailored to Nikita's neo-brutalist scrapbook palette
const STUD_THEMES = {
  yellow: {
    // Primary Marigold (#FBBF24)
    wall: "linear-gradient(90deg, #b45309 0%, #d97706 20%, #f59e0b 38%, #fbbf24 50%, #f59e0b 62%, #d97706 80%, #b45309 100%)",
    cap: "linear-gradient(135deg, #fef08a 0%, #fde047 40%, #fbbf24 70%, #d97706 100%)",
    shadow: "radial-gradient(ellipse, rgba(80,50,0,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  green: {
    // Mint / Emerald (#34D399 / #10B981)
    wall: "linear-gradient(90deg, #065f46 0%, #059669 20%, #10b981 38%, #34d399 50%, #10b981 62%, #059669 80%, #065f46 100%)",
    cap: "linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 40%, #34d399 70%, #059669 100%)",
    shadow: "radial-gradient(ellipse, rgba(0,40,20,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  blue: {
    // Sky / Cobalt (#38BDF8 / #3B82F6)
    wall: "linear-gradient(90deg, #1e3a8a 0%, #1d4ed8 20%, #2563eb 38%, #38bdf8 50%, #2563eb 62%, #1d4ed8 80%, #1e3a8a 100%)",
    cap: "linear-gradient(135deg, #bae6fd 0%, #60a5fa 40%, #38bdf8 70%, #1d4ed8 100%)",
    shadow: "radial-gradient(ellipse, rgba(0,0,80,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  purple: {
    // Lavender / Violet (#A78BFA)
    wall: "linear-gradient(90deg, #4c1d95 0%, #6d28d9 20%, #8b5cf6 38%, #a78bfa 50%, #8b5cf6 62%, #6d28d9 80%, #4c1d95 100%)",
    cap: "linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 40%, #a78bfa 70%, #6d28d9 100%)",
    shadow: "radial-gradient(ellipse, rgba(50,0,80,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  coral: {
    // Coral / Rose (#FB7185)
    wall: "linear-gradient(90deg, #881337 0%, #be123c 20%, #e11d48 38%, #fb7185 50%, #e11d48 62%, #be123c 80%, #881337 100%)",
    cap: "linear-gradient(135deg, #fecdd3 0%, #fda4af 40%, #fb7185 70%, #be123c 100%)",
    shadow: "radial-gradient(ellipse, rgba(80,0,20,0.6) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.7)",
  },
  dark: {
    // Deep Zinc / Neutral
    wall: "linear-gradient(90deg, #09090b 0%, #18181b 20%, #27272a 38%, #3f3f46 50%, #27272a 62%, #18181b 80%, #09090b 100%)",
    cap: "linear-gradient(135deg, #52525b 0%, #3f3f46 40%, #27272a 70%, #18181b 100%)",
    shadow: "radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)",
    rim: "rgba(255,255,255,0.25)",
  },
};

type StudColor = keyof typeof STUD_THEMES;

// Stud component with custom initials "NS" (Nikita Sachan)
const LegoStud = ({
  color = "yellow",
  yOffset = 0,
}: {
  color?: StudColor;
  yOffset?: number;
}) => {
  const t = STUD_THEMES[color] || STUD_THEMES.yellow;
  const studHeight = 16;
  const studWidth = 72;
  const studCapHeight = 16;

  return (
    <div
      className="flex-1 flex items-end justify-center relative"
      style={{ transform: `translateY(${yOffset}px)` }}
    >
      <div
        className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[75%] rounded-[50%] z-0"
        style={{ height: "10px", background: t.shadow }}
      />

      <div
        className="relative z-10"
        style={{ width: `${studWidth}%`, maxWidth: "42px", marginBottom: "-1px" }}
      >
        <div
          className="w-full relative overflow-hidden"
          style={{
            height: `${studHeight}px`,
            borderRadius: "50% / 20%",
            background: t.wall,
          }}
        >
          <div
            className="absolute top-0 h-full w-[25%] left-[20%]"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
            }}
          />
        </div>

        <div
          className="absolute left-0 w-full rounded-[50%] flex items-center justify-center overflow-hidden"
          style={{
            top: `-${studCapHeight / 2}px`,
            height: `${studCapHeight}px`,
            background: t.cap,
            boxShadow: `inset 0px 2px 4px rgba(255,255,255,0.6), inset 0px -2px 4px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.4)`,
            borderTop: `1px solid ${t.rim}`,
          }}
        >
          <span
            className="text-[10px] font-black font-mono tracking-wider select-none pointer-events-none opacity-85"
            style={{
              color: "rgba(0,0,0,0.2)",
              textShadow: "0px 1px 0px rgba(255,255,255,0.7)",
              transform: "scaleY(0.6) translateY(-1px)",
            }}
          >
            NS
          </span>
        </div>
      </div>
    </div>
  );
};

interface LegoBlockProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  topColor: string;
  faceGradient: string;
  bottomColor: string;
  topHeight?: number;
  bottomHeight?: number;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  className?: string;
  children: React.ReactNode;
  studs?: number;
  studColor?: StudColor;
  hideStuds?: boolean | number[];
  studYOffset?: number;
}

const LegoBlock = ({
  mouseX,
  mouseY,
  topColor,
  faceGradient,
  bottomColor,
  topHeight = 19,
  bottomHeight = 15,
  roundedTop = false,
  roundedBottom = false,
  className = "",
  children,
  studs = 0,
  studColor = "yellow",
  hideStuds = false,
  studYOffset = 12,
}: LegoBlockProps) => {
  const topDarkenEnd = 100;
  const topShadow = "inset 0px 0px 4px rgba(0,0,0,0.28)";
  const faceShadow = "inset 0px 2px 6px rgba(255,255,255,0.47)";

  const highlightBg = useMotionTemplate`radial-gradient(circle 120px at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.25), transparent)`;

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative w-full"
        style={{
          height: `${topHeight}px`,
          background: `linear-gradient(to bottom, ${topColor}, color-mix(in srgb, ${topColor} ${topDarkenEnd}%, black))`,
          boxShadow: topShadow,
          borderRadius: roundedTop ? "6px 6px 0 0" : "0",
        }}
      >
        {studs > 0 && (
          <div className="absolute bottom-full left-0 w-full flex">
            {[...Array(studs)].map((_, i) => {
              const isHidden = Array.isArray(hideStuds)
                ? hideStuds.includes(i)
                : hideStuds;
              return isHidden ? (
                <div key={i} className="flex-1" />
              ) : (
                <LegoStud key={i} color={studColor} yOffset={studYOffset} />
              );
            })}
          </div>
        )}
      </div>
      <div
        className="relative w-full border-x border-black/10 overflow-hidden"
        style={{
          background: faceGradient,
          boxShadow: faceShadow,
        }}
      >
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none opacity-60"
          style={{
            background: highlightBg,
          }}
        />
        <div className="relative z-30">{children}</div>
      </div>
      <div
        className="relative w-full"
        style={{
          height: `${bottomHeight}px`,
          background: bottomColor,
          boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.15)",
          borderRadius: roundedBottom ? "0 0 6px 6px" : "0",
        }}
      />
    </div>
  );
};

// Nikita's verified skills mapped to 2-stud and 4-stud pairs (total 6 studs per row)
export const NIKITA_SKILL_MODULES = [
  {
    id: "python",
    name: "Python",
    desc: "Core ML & Backend",
    icon: IconPython,
    studs: 4,
    colors: {
      topColor: "#38bdf8",
      faceGradient: "linear-gradient(180deg, #0284c7 0%, #0369a1 50%, #075985 100%)",
      bottomColor: "#0c4a6e",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-sky-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "fastapi",
    name: "FastAPI",
    desc: "Async Web APIs",
    icon: Zap,
    studs: 2,
    colors: {
      topColor: "#34d399",
      faceGradient: "linear-gradient(180deg, #10b981 0%, #059669 50%, #047857 100%)",
      bottomColor: "#064e3b",
      studColor: "green" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-emerald-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "rag-retrieval",
    name: "RAG & Retrieval",
    desc: "Dense + BM25 RRF",
    icon: Search,
    studs: 4,
    colors: {
      topColor: "#c084fc",
      faceGradient: "linear-gradient(180deg, #9333ea 0%, #7e22ce 50%, #6b21a8 100%)",
      bottomColor: "#581c87",
      studColor: "purple" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-purple-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "docker",
    name: "Docker",
    desc: "Containers",
    icon: Box,
    studs: 2,
    colors: {
      topColor: "#27272a",
      faceGradient: "linear-gradient(180deg, #3f3f46 0%, #27272a 50%, #18181b 100%)",
      bottomColor: "#09090b",
      studColor: "dark" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-zinc-300",
      iconBg: "bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "llms",
    name: "LLMs & Prompting",
    desc: "Reasoning & Chains",
    icon: Sparkles,
    studs: 4,
    colors: {
      topColor: "#fbbf24",
      faceGradient: "linear-gradient(180deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
      bottomColor: "#78350f",
      studColor: "yellow" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-amber-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "react",
    name: "React",
    desc: "UI Runtime",
    icon: IconReact,
    studs: 2,
    colors: {
      topColor: "#38bdf8",
      faceGradient: "linear-gradient(180deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)",
      bottomColor: "#075985",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-sky-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    desc: "Full-Stack App",
    icon: IconNext,
    studs: 4,
    colors: {
      topColor: "#1e293b",
      faceGradient: "linear-gradient(180deg, #334155 0%, #1e293b 50%, #0f172a 100%)",
      bottomColor: "#020617",
      studColor: "dark" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-slate-300",
      iconBg: "bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "ragas-evals",
    name: "RAGAS Evals",
    desc: "Faithfulness & Guardrails",
    icon: CheckCircle2,
    studs: 2,
    colors: {
      topColor: "#fb7185",
      faceGradient: "linear-gradient(180deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)",
      bottomColor: "#881337",
      studColor: "coral" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-rose-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "pytorch",
    name: "PyTorch",
    desc: "Deep Learning & Tensors",
    icon: Flame,
    studs: 4,
    colors: {
      topColor: "#f97316",
      faceGradient: "linear-gradient(180deg, #ea580c 0%, #c2410c 50%, #9a3412 100%)",
      bottomColor: "#7c2d12",
      studColor: "yellow" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-orange-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "opencv",
    name: "OpenCV",
    desc: "CV & 60 FPS",
    icon: Eye,
    studs: 2,
    colors: {
      topColor: "#34d399",
      faceGradient: "linear-gradient(180deg, #10b981 0%, #059669 50%, #047857 100%)",
      bottomColor: "#064e3b",
      studColor: "green" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-emerald-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "langchain",
    name: "LangChain",
    desc: "Agentic Workflows",
    icon: Workflow,
    studs: 4,
    colors: {
      topColor: "#a855f7",
      faceGradient: "linear-gradient(180deg, #9333ea 0%, #7e22ce 50%, #6b21a8 100%)",
      bottomColor: "#581c87",
      studColor: "purple" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-purple-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    desc: "Relational & Vector",
    icon: Database,
    studs: 2,
    colors: {
      topColor: "#38bdf8",
      faceGradient: "linear-gradient(180deg, #0284c7 0%, #0369a1 50%, #075985 100%)",
      bottomColor: "#0c4a6e",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-sky-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "scikit",
    name: "scikit-learn",
    desc: "ML & Regressors",
    icon: Brain,
    studs: 4,
    colors: {
      topColor: "#fbbf24",
      faceGradient: "linear-gradient(180deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
      bottomColor: "#78350f",
      studColor: "yellow" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-amber-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "onnx",
    name: "ONNX Runtime",
    desc: "Quantized Inference",
    icon: Gauge,
    studs: 2,
    colors: {
      topColor: "#334155",
      faceGradient: "linear-gradient(180deg, #475569 0%, #334155 50%, #1e293b 100%)",
      bottomColor: "#0f172a",
      studColor: "dark" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-slate-300",
      iconBg: "bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    desc: "Type-Safe Systems",
    icon: Code2,
    studs: 4,
    colors: {
      topColor: "#2563eb",
      faceGradient: "linear-gradient(180deg, #1d4ed8 0%, #1e40af 50%, #172554 100%)",
      bottomColor: "#0f172a",
      studColor: "blue" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-blue-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
  {
    id: "streamlit",
    name: "Streamlit",
    desc: "ML Telemetry",
    icon: BarChart3,
    studs: 2,
    colors: {
      topColor: "#fb7185",
      faceGradient: "linear-gradient(180deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)",
      bottomColor: "#881337",
      studColor: "coral" as StudColor,
      text: "text-white drop-shadow-md",
      subtext: "text-rose-100",
      iconBg: "bg-black/25 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  },
];

interface ModuleBlockProps {
  module: (typeof NIKITA_SKILL_MODULES)[0];
  hiddenStuds?: number[];
  onClick: (e: React.MouseEvent) => void;
  isAnimating?: boolean;
  startRect?: DOMRect | null;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  onAnimationComplete?: () => void;
  isEquipped?: boolean;
}

const ModuleBlock = ({
  module,
  hiddenStuds = [],
  onClick,
  isAnimating,
  startRect,
  mouseX,
  mouseY,
  onAnimationComplete,
  isEquipped = false,
}: ModuleBlockProps) => {
  const widthPx = module.studs * GRID_CONSTANTS.STUD_WIDTH;
  const isCompact = module.studs <= 2;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAnimating && startRect && wrapperRef.current) {
      // Respect user's accessibility preference
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        onAnimationComplete?.();
        return;
      }

      const endRect = wrapperRef.current.getBoundingClientRect();
      const dx = startRect.left - endRect.left;
      const dy = startRect.top - endRect.top;

      // Arc apex: guarantees the block jumps higher than start and end point
      const apexY = Math.min(dy, 0) - GRID_CONSTANTS.APEX_HEIGHT;

      const animation = wrapperRef.current.animate(
        [
          {
            transform: `translate(${dx}px, ${dy}px) scale(1, 1)`,
            filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.2))",
            offset: 0,
          },
          {
            transform: `translate(${dx}px, ${dy}px) scale(1.1, 0.85)`,
            filter: "drop-shadow(0px 5px 5px rgba(0,0,0,0.3))",
            offset: 0.15,
          },
          {
            transform: `translate(${dx * 0.75}px, ${dy + (apexY - dy) * 0.5}px) scale(0.9, 1.15)`,
            filter: "drop-shadow(0px 30px 20px rgba(0,0,0,0.05))",
            offset: 0.35,
          },
          {
            transform: `translate(${dx * 0.5}px, ${apexY}px) scale(1, 1)`,
            filter: "drop-shadow(0px 40px 20px rgba(0,0,0,0))",
            offset: 0.55,
          },
          {
            transform: `translate(${dx * 0.25}px, ${apexY * 0.5}px) scale(0.9, 1.15)`,
            filter: "drop-shadow(0px 30px 20px rgba(0,0,0,0.05))",
            offset: 0.75,
          },
          {
            transform: `translate(0px, 0px) scale(1.15, 0.85)`,
            filter: "drop-shadow(0px 5px 5px rgba(0,0,0,0.3))",
            offset: 0.9,
          },
          {
            transform: `translate(0px, 0px) scale(1, 1)`,
            filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.2))",
            offset: 1,
          },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "both",
        }
      );

      animation.onfinish = () => onAnimationComplete?.();

      return () => animation.cancel();
    }
  }, [isAnimating, startRect, onAnimationComplete]);

  return (
    <div
      ref={wrapperRef}
      className="z-50 relative lego-block-wrapper shrink-0"
      style={{ width: widthPx }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={`${isEquipped ? "Remove" : "Add"} ${module.name} from stack`}
        aria-pressed={isEquipped}
        className="cursor-pointer w-full shrink-0 touch-none group relative focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 rounded-lg hover:-translate-y-1 active:scale-95 transition-all duration-200 text-left select-none"
      >
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-30 rounded-lg pointer-events-none" />
        <LegoBlock
          mouseX={mouseX}
          mouseY={mouseY}
          topColor={module.colors.topColor}
          faceGradient={module.colors.faceGradient}
          bottomColor={module.colors.bottomColor}
          roundedTop
          roundedBottom
          studs={module.studs}
          studColor={module.colors.studColor}
          hideStuds={hiddenStuds}
        >
          <div
            className={`flex items-center w-full h-[60px] ${
              isCompact ? "px-3 gap-2" : "px-4 gap-3"
            }`}
          >
            {isCompact ? (
              <>
                <div
                  className={`w-7 h-7 rounded-md ${module.colors.iconBg} flex items-center justify-center shrink-0`}
                >
                  <module.icon className={module.colors.iconColor} size={16} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-syne font-bold text-white text-[14px] tracking-wide truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    {module.name}
                  </h4>
                  <p className="font-mono text-[9px] text-white/80 uppercase tracking-wider truncate">
                    {module.desc}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`w-9 h-9 rounded-lg ${module.colors.iconBg} flex items-center justify-center shrink-0`}
                >
                  <module.icon className={module.colors.iconColor} size={22} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-syne font-bold text-white text-[16px] tracking-wide truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    {module.name}
                  </h4>
                  <p className="font-mono text-[10px] text-white/85 uppercase tracking-wider truncate">
                    {module.desc}
                  </p>
                </div>
              </>
            )}
          </div>
        </LegoBlock>
      </button>
    </div>
  );
};

export interface InteractiveTechStackBuilderProps {
  modules?: typeof NIKITA_SKILL_MODULES;
  className?: string;
  onStackChange?: (equippedIds: string[]) => void;
}

export default function InteractiveTechStackBuilder({
  modules = NIKITA_SKILL_MODULES,
  className = "",
  onStackChange,
}: InteractiveTechStackBuilderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  const [equippedIds, setEquippedIds] = useState<string[]>([]);
  const [animatingBlocks, setAnimatingBlocks] = useState<Record<string, DOMRect>>({});
  const hasAutoEquippedRef = useRef(false);

  const controls = useAnimation();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(Math.max(0, Math.min(100, x)));
    mouseY.set(Math.max(0, Math.min(100, y)));
  };

  // Auto-equip sequence when scrolled into view: stacks modules one after another
  useEffect(() => {
    if (isInView && !hasAutoEquippedRef.current) {
      hasAutoEquippedRef.current = true;

      // Stagger auto-equipping initial 8 foundation modules so the tower rises dynamically
      const initialEquip = modules.slice(0, 8);
      initialEquip.forEach((mod, index) => {
        setTimeout(() => {
          setEquippedIds((prev) => {
            if (prev.includes(mod.id)) return prev;
            const updated = [...prev, mod.id];
            onStackChange?.(updated);
            return updated;
          });

          // Impact haptic bounce
          controls.start({
            y: [0, 6, -2, 0],
            transition: { duration: 0.35, ease: "easeInOut" },
          });
        }, index * 240 + 150);
      });
    }
  }, [isInView, modules, controls, onStackChange]);

  const handleToggleEquip = (id: string, e: React.MouseEvent) => {
    if (animatingBlocks[id]) return;

    const el = (e.currentTarget as HTMLElement).closest(".lego-block-wrapper");
    if (!el) return;
    const startRect = el.getBoundingClientRect();

    setAnimatingBlocks((prev) => ({ ...prev, [id]: startRect }));

    setEquippedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      onStackChange?.(next);
      return next;
    });

    // Heavy landing bounce at 90% of animation
    setTimeout(() => {
      controls.start({
        y: [0, 8, -3, 0],
        transition: { duration: 0.4, times: [0, 0.4, 0.7, 1], ease: "easeInOut" },
      });
    }, 1080);
  };

  const equippedModules = equippedIds
    .map((id) => modules.find((m) => m.id === id)!)
    .filter(Boolean);
  const unequippedModules = modules.filter((m) => !equippedIds.includes(m.id));

  // Compute 2D Grid inside useMemo for performance
  const { grid, positionedModules } = useMemo(() => {
    const calculatedGrid: (string | null)[][] = [];
    const positioned = equippedModules.map((m) => {
      let placedRow = -1;
      let placedCol = -1;
      for (let r = 0; r < GRID_CONSTANTS.MAX_ROWS; r++) {
        if (!calculatedGrid[r]) calculatedGrid[r] = Array(GRID_CONSTANTS.COLS).fill(null);
        let contiguous = 0;
        for (let c = 0; c < GRID_CONSTANTS.COLS; c++) {
          if (!calculatedGrid[r][c]) {
            contiguous++;
            if (contiguous === m.studs) {
              placedRow = r;
              placedCol = c - m.studs + 1;
              break;
            }
          } else {
            contiguous = 0;
          }
        }
        if (placedRow !== -1) break;
      }
      if (placedRow !== -1) {
        for (let i = 0; i < m.studs; i++) {
          calculatedGrid[placedRow][placedCol + i] = m.id;
        }
      } else {
        placedRow = 0;
        placedCol = 0;
      }
      return { module: m, rowIndex: placedRow, colIndex: placedCol };
    });
    return { grid: calculatedGrid, positionedModules: positioned };
  }, [equippedModules]);

  const hiddenServerStuds: number[] = [];
  if (grid[0]) {
    grid[0].forEach((occupantId, idx) => {
      if (occupantId && !animatingBlocks[occupantId]) hiddenServerStuds.push(idx);
    });
  }

  const towerHeight =
    equippedModules.length > 0
      ? (Math.max(...positionedModules.map((m) => m.rowIndex)) + 1) *
        GRID_CONSTANTS.ROW_HEIGHT
      : 0;

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={`w-full relative select-none font-grotesk ${className}`}
    >
      {/* Interactive Helper Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-black/15">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-xs font-black uppercase text-black tracking-wider">
            LIVE COMPOSABLE ARCHITECTURE
          </span>
        </div>
        <p className="font-mono text-xs text-black font-black bg-[#FDE047] border-[1.5px] border-black px-3.5 py-1 rounded shadow-2xs">
          ✦ Click any block to equip or detach from the stack
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-16 w-full py-4">
        {/* LEFT / TRAY: Unassigned Modular Blocks */}
        <div className="w-full lg:flex-1 max-w-[540px] flex flex-col justify-start">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
              AVAILABLE MODULES ({unequippedModules.length})
            </span>
            {unequippedModules.length > 0 && (
              <span className="font-mono text-[10px] text-black font-bold">
                Click block to attach ↑
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-start gap-4 p-5 bg-[#FEF9C3] dark:bg-[#1E2333] border-[2.5px] border-black rounded-xl shadow-brutal min-h-[190px]">
            {unequippedModules.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center py-8 text-center">
                <span className="font-mono text-xs font-black text-black uppercase bg-[#4ADE80] border-[1.5px] border-black px-3.5 py-1 rounded shadow-2xs">
                  ✓ ALL {modules.length} MODULES EQUIPPED
                </span>
                <p className="font-grotesk text-xs text-black font-semibold mt-2">
                  Click any block on the tower to remove it back into this tray.
                </p>
              </div>
            ) : (
              unequippedModules.map((module) => {
                const startRect = animatingBlocks[module.id];
                return (
                  <ModuleBlock
                    key={module.id}
                    module={module}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    isAnimating={!!startRect}
                    startRect={startRect || null}
                    isEquipped={false}
                    onAnimationComplete={() => {
                      setAnimatingBlocks((prev) => {
                        const next = { ...prev };
                        delete next[module.id];
                        return next;
                      });
                    }}
                    onClick={(e) => handleToggleEquip(module.id, e)}
                  />
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT: The Tower Stack Base Structure */}
        <div className="flex flex-col items-center w-full lg:w-auto shrink-0">
          <div className="scale-[0.8] sm:scale-[0.9] lg:scale-100 origin-bottom shrink-0 flex flex-col items-center">
            <motion.div
              animate={controls}
              className="relative w-[390px] shadow-brutal-lg rounded-xl transition-all duration-700 ease-out"
              style={{ marginTop: `${towerHeight}px` }}
            >
              {/* Stacked Equipped Modules */}
              <div
                className="absolute left-0 w-full h-0 z-20"
                style={{ bottom: "calc(100% - 14px)" }}
              >
                {positionedModules.map(({ module, rowIndex, colIndex }) => {
                  const hiddenLocalStuds: number[] = [];
                  if (grid[rowIndex + 1]) {
                    for (let i = 0; i < module.studs; i++) {
                      const occupantId = grid[rowIndex + 1][colIndex + i];
                      if (occupantId && !animatingBlocks[occupantId]) {
                        hiddenLocalStuds.push(i);
                      }
                    }
                  }

                  const startRect = animatingBlocks[module.id];

                  return (
                    <div
                      key={module.id}
                      className="absolute"
                      style={{
                        bottom: rowIndex * GRID_CONSTANTS.ROW_HEIGHT,
                        left: colIndex * GRID_CONSTANTS.STUD_WIDTH,
                        zIndex: rowIndex * 10,
                      }}
                    >
                      <ModuleBlock
                        module={module}
                        hiddenStuds={hiddenLocalStuds}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        isAnimating={!!startRect}
                        startRect={startRect || null}
                        isEquipped={true}
                        onAnimationComplete={() => {
                          setAnimatingBlocks((prev) => {
                            const next = { ...prev };
                            delete next[module.id];
                            return next;
                          });
                        }}
                        onClick={(e) => handleToggleEquip(module.id, e)}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Base Profile Block: Nikita's Skill Stack */}
              <LegoBlock
                mouseX={mouseX}
                mouseY={mouseY}
                topColor="#fbbf24"
                faceGradient="linear-gradient(180deg, #fde047 0%, #fbbf24 50%, #d97706 100%)"
                bottomColor="#b45309"
                roundedTop
                roundedBottom
                studs={6}
                studColor="yellow"
                hideStuds={hiddenServerStuds}
                className="relative z-10 border-[2px] border-black rounded-lg"
              >
                <div className="px-5 py-4 pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center shadow-inner shrink-0 border border-black/20">
                      <Terminal className="w-5 h-5 text-black drop-shadow-sm" />
                    </div>
                    <div>
                      <h3 className="font-syne font-black text-black text-[17px] tracking-tight drop-shadow-xs">
                        Nikita&apos;s Skill Stack
                      </h3>
                      <p className="font-mono text-[10px] font-black text-black/80 tracking-widest uppercase mt-0.5">
                        {equippedModules.length} / {modules.length} SKILLS EQUIPPED
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] font-black bg-black text-white px-2 py-0.5 rounded shadow-2xs">
                    FOUNDATION
                  </span>
                </div>
              </LegoBlock>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { InteractiveTechStackBuilder as Component };
