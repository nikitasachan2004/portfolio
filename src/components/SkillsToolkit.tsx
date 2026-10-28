import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { SiFramer } from 'react-icons/si';

interface SkillItem {
  id: string;
  name: string;
  category: string;
  isFeatured?: boolean;
  bg: string;
  iconUrl: string;
  source: 'devicon' | 'lobehub' | 'simple-icons' | 'monogram';
  spec: string;
  imgClass?: string;
  featuredPosition?: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// 18 Bento Grid Tiles (2 featured 2x2 + 15 small 1x1 + 1 "+15 MORE" expandable tile = 24 grid units)
// Uses official full-color SVG brand logos from devicon and @lobehub/icons-static-svg
const BENTO_SKILLS: SkillItem[] = [
  // 1. Featured Top-Left (2x2): Python — AI/ML foundation
  {
    id: 'python',
    name: 'Python',
    category: 'Core AI & Backend',
    isFeatured: true,
    bg: 'bg-[#BAE6FD] dark:bg-[#071927] dark:border-[#38BDF8]/50 hover:dark:border-[#38BDF8]', // Sky Pastel -> Deep Navy Obsidian
    iconUrl: '/skills/python.svg',
    source: 'devicon',
    spec: 'CORE RUNTIME · RAG & AI',
    featuredPosition: {
      mobile: 'col-start-1 row-start-1 col-span-2 row-span-2',
      tablet: 'md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2',
      desktop: 'lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2'
    }
  },
  // 2. PyTorch (1x1)
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'Deep Learning',
    bg: 'bg-[#FEF9C3] dark:bg-[#1E1107] dark:border-[#FB923C]/50 hover:dark:border-[#FB923C]', // Cream -> Deep Amber Ember
    iconUrl: '/skills/pytorch.svg',
    source: 'devicon',
    spec: 'DEEP LEARNING & CV'
  },
  // 3. TypeScript (1x1)
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Full-Stack Language',
    bg: 'bg-[#E0F2FE] dark:bg-[#06182C] dark:border-[#38BDF8]/50 hover:dark:border-[#38BDF8]', // Soft Sky -> Deep Blue Obsidian
    iconUrl: '/skills/typescript.svg',
    source: 'devicon',
    spec: 'TYPE-SAFE ARCHITECTURE'
  },
  // 4. FastAPI (1x1)
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend & APIs',
    bg: 'bg-[#D1FAE5] dark:bg-[#051C13] dark:border-[#34D399]/50 hover:dark:border-[#34D399]', // Mint -> Deep Emerald Obsidian
    iconUrl: '/skills/fastapi.svg',
    source: 'devicon',
    spec: 'ASYNC REST SERVICES'
  },
  // 5. Next.js (1x1)
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Web Framework',
    bg: 'bg-[#FEF08A] dark:bg-[#1C1605] dark:border-[#FBBF24]/50 hover:dark:border-[#FBBF24]', // Golden Yellow -> Deep Gold Obsidian
    iconUrl: '/skills/nextjs.svg',
    source: 'devicon',
    spec: 'PRODUCTION SSR APPS'
  },
  // 6. Docker (1x1) - Swapped to crisp white backing for maximum blue whale contrast
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infra & DevOps',
    bg: 'bg-[#FFFFFF] dark:bg-[#061828] dark:border-[#0284C7]/50 hover:dark:border-[#38BDF8]', // White -> Deep Marine Obsidian
    iconUrl: '/skills/docker.svg',
    source: 'devicon',
    spec: 'CONTAINER RUNTIMES'
  },
  // 7. OpenCV (1x1) - Swapped to neutral cream so red/green/blue rings never wash out
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'Computer Vision',
    bg: 'bg-[#FEF9C3] dark:bg-[#161616] dark:border-[#525252] hover:dark:border-[#A3A3A3]', // Cream -> Neutral Obsidian
    iconUrl: '/skills/opencv.svg',
    source: 'devicon',
    spec: 'REAL-TIME VISION & EDA'
  },
  // 8. PostgreSQL (1x1)
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases & Vector',
    bg: 'bg-[#EDE9FE] dark:bg-[#140D26] dark:border-[#A78BFA]/50 hover:dark:border-[#A78BFA]', // Lavender -> Deep Violet Obsidian
    iconUrl: '/skills/postgresql.svg',
    source: 'devicon',
    spec: 'RELATIONAL & PGVECTOR'
  },
  // 9. Tailwind CSS (1x1) - Swapped to crisp white backing for maximum cyan contrast
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'Design Systems',
    bg: 'bg-[#FFFFFF] dark:bg-[#051924] dark:border-[#06B6D4]/50 hover:dark:border-[#22D3EE]', // White -> Deep Cyan Obsidian
    iconUrl: '/skills/tailwindcss.svg',
    source: 'devicon',
    spec: 'NEO-BRUTALIST STYLING'
  },
  // 10. LangChain (1x1) - Official Lobehub mark
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'Agentic AI',
    bg: 'bg-[#FEF08A] dark:bg-[#1A1604] dark:border-[#FBBF24]/50 hover:dark:border-[#FBBF24]', // Golden Yellow -> Deep Amber Obsidian
    iconUrl: '/skills/langchain.svg',
    source: 'lobehub',
    spec: 'AGENTIC ORCHESTRATION'
  },
  // 11. Pandas (1x1)
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Data Science',
    bg: 'bg-[#FFE4E6] dark:bg-[#220B16] dark:border-[#FB7185]/50 hover:dark:border-[#FB7185]', // Rose -> Deep Rose Obsidian
    iconUrl: '/skills/pandas.svg',
    source: 'devicon',
    spec: 'DATASETS & STATS'
  },
  // 12. TensorFlow (1x1)
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'Deep Learning',
    bg: 'bg-[#EDE9FE] dark:bg-[#1B0F26] dark:border-[#FB923C]/50 hover:dark:border-[#FB923C]', // Lavender -> Deep Twilight Obsidian
    iconUrl: '/skills/tensorflow.svg',
    source: 'devicon',
    spec: 'NEURAL NETWORKS & KERAS'
  },
  // 13. scikit-learn (1x1) - Official gear logo, fixed to full 52% tile proportion
  {
    id: 'scikitlearn',
    name: 'scikit-learn',
    category: 'Machine Learning',
    bg: 'bg-[#FEF9C3] dark:bg-[#1C1306] dark:border-[#F59E0B]/50 hover:dark:border-[#FBBF24]', // Cream -> Deep Amber Obsidian
    iconUrl: '/skills/scikitlearn.svg',
    source: 'devicon',
    spec: 'ML MODELS & TIME-SERIES'
  },
  // 14. Featured Bottom-Right (2x2): React — Full-Stack foundation
  {
    id: 'react',
    name: 'React',
    category: 'Frontend & UI Architecture',
    isFeatured: true,
    bg: 'bg-[#FCE7F3] dark:bg-[#061828] dark:border-[#38BDF8]/60 hover:dark:border-[#38BDF8]', // Pink -> Deep Midnight Cyan
    iconUrl: '/skills/react.svg',
    source: 'devicon',
    spec: 'CLIENT ARCHITECTURE & UIS',
    featuredPosition: {
      mobile: 'col-start-2 row-start-7 col-span-2 row-span-2',
      tablet: 'md:col-start-3 md:row-start-5 md:col-span-2 md:row-span-2',
      desktop: 'lg:col-start-5 lg:row-start-3 lg:col-span-2 lg:row-span-2'
    }
  },
  // 15. NumPy (1x1)
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'Scientific Compute',
    bg: 'bg-[#D1FAE5] dark:bg-[#09152B] dark:border-[#6366F1]/50 hover:dark:border-[#818CF8]', // Mint -> Deep Indigo Obsidian
    iconUrl: '/skills/numpy.svg',
    source: 'devicon',
    spec: 'TENSORS & ARRAY MATH'
  },
  // 16. Linux (1x1) - Full-color Tux Penguin
  {
    id: 'linux',
    name: 'Linux',
    category: 'Systems & Shell',
    bg: 'bg-[#FEF08A] dark:bg-[#1C1605] dark:border-[#FBBF24]/50 hover:dark:border-[#FBBF24]', // Golden Yellow -> Deep Amber Obsidian
    iconUrl: '/skills/linux.svg',
    source: 'devicon',
    spec: 'SERVERS & BASH SCRIPTING'
  },
  // 17. Ollama (1x1) - Official Lobehub mascot on neutral white, with dark mode ink/light inversion
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'Local LLMs',
    bg: 'bg-[#FFFFFF] dark:bg-[#141414] dark:border-[#404040] hover:dark:border-[#737373]', // Neutral White -> Obsidian
    iconUrl: '/skills/ollama.svg',
    source: 'lobehub',
    spec: 'LOCAL INFERENCE RUNTIMES',
    imgClass: 'dark:invert'
  }
];

// Additional verified skills displayed when "+15 MORE" tile is clicked
interface OverflowSkill {
  name: string;
  category: string;
  badge: string;
  spec: string;
  iconUrl?: string;
  iconComponent?: React.ComponentType<{ className?: string }>;
  source: 'devicon' | 'lobehub' | 'simple-icons' | 'monogram';
}

const OVERFLOW_SKILLS: OverflowSkill[] = [
  { name: 'Prompt Engineering', category: 'AI & LLMS', badge: 'PE', spec: 'Few-shot, Chain-of-Thought, System Architecture', source: 'monogram' },
  { name: 'RAG Pipelines', category: 'AI & LLMS', badge: 'RAG', spec: 'Hybrid Dense + BM25 Reciprocal Rank Fusion', source: 'monogram' },
  { name: 'Vector Search', category: 'AI & LLMS', badge: 'VS', spec: 'all-MiniLM-L6-v2 & dense embeddings', source: 'monogram' },
  { name: 'BM25 Indexing', category: 'AI & LLMS', badge: 'BM25', spec: 'Sparse keyword retrieval & ranking', source: 'monogram' },
  { name: 'RAGAS Evals', category: 'AI & LLMS', badge: 'RAGAS', spec: 'Context precision & faithfulness metrics', source: 'monogram' },
  { name: 'Groq Cloud SDK', category: 'AI & LLMS', badge: 'GROQ', spec: 'High-throughput LPU cloud inference', iconUrl: '/skills/groq.svg', source: 'lobehub' },
  { name: 'EDA & Statistics', category: 'DATA & MATH', badge: 'EDA', spec: 'Exploratory data analysis & feature engineering', source: 'monogram' },
  { name: 'Matplotlib', category: 'DATA & MATH', badge: 'MPL', spec: 'Scientific visual telemetry & plotting', source: 'monogram' },
  { name: 'Seaborn', category: 'DATA & MATH', badge: 'SNS', spec: 'Statistical correlations & distribution plots', source: 'monogram' },
  { name: 'REST APIs', category: 'BACKEND & DATA', badge: 'REST', spec: 'OpenAPI specification & resilient routing', source: 'monogram' },
  { name: 'SQL', category: 'BACKEND & DATA', badge: 'SQL', spec: 'Relational queries, indexing & normalization', source: 'monogram' },
  { name: 'MySQL', category: 'BACKEND & DATA', badge: 'MYSQL', spec: 'ACID transactions & schema design', iconUrl: '/skills/mysql.svg', source: 'devicon' },
  { name: 'Node.js', category: 'BACKEND & DATA', badge: 'NODE', spec: 'JavaScript backends & build automation', iconUrl: '/skills/nodejs.svg', source: 'devicon' },
  { name: 'JavaScript (ES6+)', category: 'FRONTEND & CLOUD', badge: 'JS', spec: 'Modern async/await & DOM APIs', iconUrl: '/skills/javascript.svg', source: 'devicon' },
  { name: 'Framer Motion', category: 'FRONTEND & CLOUD', badge: 'FM', spec: 'Spring physics & micro-interactions', iconComponent: SiFramer, source: 'simple-icons' },
  { name: 'Streamlit', category: 'FRONTEND & CLOUD', badge: 'ST', spec: 'Interactive data apps & ML prototypes', iconUrl: '/skills/streamlit.svg', source: 'devicon' },
  { name: 'Azure AI', category: 'FRONTEND & CLOUD', badge: 'AZ', spec: 'Cloud AI services & cognitive APIs', source: 'monogram' },
  { name: 'CI / Automated Tests', category: 'FRONTEND & CLOUD', badge: 'CI', spec: 'Unit tests, pytest suites & automated verification', source: 'monogram' }
];

export const SkillsToolkit: React.FC = () => {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const handleTileClick = (id: string) => {
    setActiveTileId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" ref={sectionRef} className="relative outline-none">
      {/* Folder Tab Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="folder-tab bg-[#34D399] text-black">
          SKILLS 04 // WHAT I BUILD WITH
        </div>
        <div className="font-mono text-xs font-black bg-[#FBBF24] border-[2px] border-black px-3 py-1 mb-1 shadow-brutal-sm select-none text-black">
          [ 32 TOOLS IN MY WORKFLOW · CLICK TO EXPLORE ]
        </div>
      </div>

      {/* Main Neo-Brutalist Frame */}
      <div className="bg-white border-[3px] border-black shadow-brutal-lg p-4 sm:p-7 md:p-8 flex flex-col justify-between transition-colors">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b-2 border-black/15">
          <div>
            <h2 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black">
              ENGINEERING ARSENAL
            </h2>
            <p className="font-mono text-xs text-black/70 dark:text-[#94A3B8] mt-1 font-bold">
              // What I reach for daily — from LLM pipelines and models to production backends
            </p>
          </div>

          <div className="font-mono text-xs font-bold text-black/80 dark:text-[#CBD5E1] flex items-center gap-2 whitespace-nowrap shrink-0">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shrink-0"></span>
            <span className="whitespace-nowrap">CLICK ANY TOOL TO INSPECT</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          role="list"
          aria-label="Technical skills bento grid"
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 [grid-auto-flow:dense] gap-3 sm:gap-4.5"
        >
          {BENTO_SKILLS.map((skill, index) => {
            const isFeatured = !!skill.isFeatured;
            const isActive = activeTileId === skill.id;

            // Pop-in stagger: Featured tiles pop in first (Python @ 0.05s, React @ 0.12s)
            const popDelay = skill.id === 'python' ? 0.05 : skill.id === 'react' ? 0.12 : 0.16 + (index * 0.025);
            // Subtle idle floating: desynchronized loop
            const floatDuration = 3.6 + (index % 4) * 0.45;
            const floatDelay = (index * 0.22) % 2.0;

            const gridPosClasses = isFeatured && skill.featuredPosition
              ? `${skill.featuredPosition.mobile} ${skill.featuredPosition.tablet} ${skill.featuredPosition.desktop}`
              : 'col-span-1 row-span-1';

            return (
              <motion.div
                key={skill.id}
                role="listitem"
                tabIndex={0}
                aria-label={`${skill.name} - ${skill.spec}`}
                onClick={() => handleTileClick(skill.id)}
                onFocus={() => setActiveTileId(skill.id)}
                onBlur={() => setActiveTileId(null)}
                initial={shouldReduceMotion ? false : { scale: 0.8, opacity: 0 }}
                animate={
                  shouldReduceMotion || !isInView
                    ? { scale: 1, opacity: 1, y: 0 }
                    : {
                        scale: 1,
                        opacity: 1,
                        y: [0, -3.5, 0],
                        transition: {
                          scale: { type: 'spring', stiffness: 280, damping: 22, delay: popDelay },
                          opacity: { duration: 0.35, delay: popDelay },
                          y: {
                            duration: floatDuration,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: popDelay + floatDelay,
                          },
                        },
                      }
                }
                whileHover={shouldReduceMotion ? {} : { x: -4, y: -4, transition: { duration: 0.15 } }}
                className={`skill-tile group relative aspect-square rounded-2xl sm:rounded-3xl border-[2.5px] sm:border-[3px] border-black p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer select-none transition-shadow duration-150 outline-none focus-visible:ring-3 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 ${skill.bg} ${gridPosClasses} shadow-brutal hover:shadow-brutal-lg`}
              >
                {/* Featured Corner Badge */}
                {isFeatured && (
                  <span className="absolute top-2 left-2.5 sm:top-3.5 sm:left-3.5 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-2xs select-none pointer-events-none">
                    ★ CORE // {skill.name === 'Python' ? 'AI / ML' : 'FULL-STACK'}
                  </span>
                )}

                {/* Centered Brand Logo with exact 52% (1x1) or 36% (2x2) bounding box */}
                <div
                  className={`flex items-center justify-center pointer-events-none select-none ${
                    isFeatured ? 'w-[36%] h-[36%]' : 'w-[52%] h-[52%]'
                  }`}
                >
                  <img
                    src={skill.iconUrl}
                    alt={`${skill.name} official logo`}
                    className={`w-full h-full object-contain transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110 ${
                      skill.imgClass || ''
                    }`}
                    loading="eager"
                    decoding="sync"
                  />
                </div>

                {/* Slide-Up Mono Label on Hover, Focus or Mobile Tap */}
                <div
                  className={`absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 pointer-events-none transition-all duration-200 transform ${
                    isActive
                      ? 'translate-y-0 opacity-100 scale-100'
                      : 'translate-y-3 opacity-0 scale-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:scale-100'
                  }`}
                >
                  <div className="bg-black text-white px-2 py-1 rounded-md text-center shadow-brutal-sm">
                    <div className="font-mono text-[10px] sm:text-xs font-black tracking-tight uppercase truncate text-white">
                      {skill.name}
                    </div>
                    <div className="font-mono text-[8px] sm:text-[9px] text-[#FDE047] font-bold tracking-wider uppercase truncate hidden sm:block">
                      {skill.spec}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 18. "+15 MORE" Interactive Tile */}
          <motion.div
            role="listitem"
            tabIndex={0}
            aria-label="Expand 15 more technical skills"
            onClick={() => setIsExpanded(!isExpanded)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }
            }}
            initial={shouldReduceMotion ? false : { scale: 0.8, opacity: 0 }}
            animate={
              shouldReduceMotion || !isInView
                ? { scale: 1, opacity: 1, y: 0 }
                : {
                    scale: 1,
                    opacity: 1,
                    y: [0, -3.5, 0],
                    transition: {
                      scale: { type: 'spring', stiffness: 280, damping: 22, delay: 0.45 },
                      opacity: { duration: 0.35, delay: 0.45 },
                      y: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.7,
                      },
                    },
                  }
            }
            whileHover={shouldReduceMotion ? {} : { x: -4, y: -4, transition: { duration: 0.15 } }}
            className="skill-tile group relative aspect-square rounded-2xl sm:rounded-3xl border-[2.5px] sm:border-[3px] border-black p-3 sm:p-4 flex flex-col items-center justify-center cursor-pointer select-none col-span-1 row-span-1 bg-[#FDE047] dark:bg-[#FBBF24] shadow-brutal hover:shadow-brutal-lg transition-shadow outline-none focus-visible:ring-3 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2"
          >
            <div className="font-syne font-black text-2xl sm:text-3xl md:text-4xl text-black dark:text-black tracking-tighter leading-none group-hover:scale-110 transition-transform">
              +15
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] font-black uppercase text-black dark:text-black tracking-wider mt-1 sm:mt-1.5 flex items-center gap-1">
              <span>{isExpanded ? 'CLOSE' : 'EXPAND'}</span>
              <span>{isExpanded ? '▲' : '▼'}</span>
            </div>

            {/* Slide-Up Mono Label */}
            <div className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 pointer-events-none transition-all duration-200 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              <div className="bg-black text-white px-2 py-0.5 rounded text-[9px] font-mono font-black text-center shadow-2xs">
                VIEW REPERTORY
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expandable Tray for Remaining 15+ Skills */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden mt-6 pt-6 border-t-2 border-dashed border-black/25 dark:border-white/15"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black uppercase tracking-wider bg-black text-white dark:bg-[#FBBF24] dark:text-black px-2.5 py-1 rounded shadow-2xs">
                    EXPANDED STACK REPERTORY
                  </span>
                  <span className="font-mono text-xs text-black/70 dark:text-[#94A3B8] font-bold">
                    // 15 SPECIALIZED PRODUCTION TOOLS &amp; ALGORITHMS
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="font-mono text-xs font-black bg-white hover:bg-black hover:text-white dark:bg-[#1A1A1A] dark:hover:bg-[#282828] dark:text-[#FBBF24] dark:border-[#FBBF24] border-[2px] border-black px-2.5 py-1 rounded shadow-brutal-sm transition-colors cursor-pointer"
                >
                  COLLAPSE ▲
                </button>
              </div>

              {/* Categorized Chip Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {['AI & LLMS', 'DATA & MATH', 'BACKEND & DATA', 'FRONTEND & CLOUD'].map((cat) => {
                  const catSkills = OVERFLOW_SKILLS.filter((s) => s.category === cat);
                  return (
                    <div
                      key={cat}
                      className="bg-[#FAF8F3] dark:bg-[#121212] border-[2px] border-black dark:border-[#2C2C2C] p-3.5 rounded-xl shadow-brutal-sm dark:shadow-[3px_3px_0px_#000000] flex flex-col justify-between"
                    >
                      <div className="font-mono text-[10px] font-black uppercase tracking-wider text-black/75 dark:text-[#F8FAFC] mb-2.5 pb-1 border-b border-black/15 dark:border-[#262626] flex items-center justify-between">
                        <span>{cat}</span>
                        <span className="bg-black text-white dark:bg-[#222222] dark:text-[#FBBF24] dark:border dark:border-[#383838] px-1.5 py-0.5 rounded text-[9px] font-mono">
                          {catSkills.length}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {catSkills.map((item, idx) => {
                          const IconComp = item.iconComponent;
                          return (
                            <div
                              key={idx}
                              title={item.spec}
                              className="group/chip bg-[#FEF08A] hover:bg-black hover:text-white dark:bg-[#181818] dark:hover:bg-[#242424] dark:text-[#F1F5F9] dark:border-[#333333] border-[1.5px] border-black px-2.5 py-1 rounded-md text-[11px] font-mono font-black text-black shadow-2xs transition-all cursor-default flex items-center gap-1.5 select-none"
                            >
                              {item.iconUrl ? (
                                <img
                                  src={item.iconUrl}
                                  alt={item.name}
                                  className="w-3.5 h-3.5 object-contain"
                                />
                              ) : IconComp ? (
                                <IconComp className="w-3.5 h-3.5" />
                              ) : (
                                <span className="text-[9px] font-black font-mono px-1 bg-black/10 dark:bg-black/60 text-black dark:text-[#FBBF24] rounded border border-transparent dark:border-[#383838] group-hover/chip:bg-white/20">
                                  {item.badge}
                                </span>
                              )}
                              <span className="dark:text-[#F1F5F9]">{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
