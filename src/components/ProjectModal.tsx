import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      setActiveTab('overview');
      setCopiedCode(false);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sampleCode) {
      navigator.clipboard.writeText(project.sampleCode).then(() => {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-[#FFFDF9] dark:bg-[#131722] border-[3.5px] border-black dark:border-white/80 rounded-2xl shadow-brutal-xl dark:shadow-[8px_8px_0px_#FBBF24] max-w-2xl w-full relative max-h-[92vh] flex flex-col overflow-hidden animate-scaleUp select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bold Themed Header Banner in Project's Accent Color */}
        <div className={`${project.accentColor} border-b-[3.5px] border-black p-5 sm:p-6 relative overflow-hidden shrink-0`}>
          {/* Subtle Watermark Number */}
          <div
            style={{ opacity: 0.14 }}
            className="font-syne font-black text-6xl sm:text-7xl text-black select-none absolute right-16 -bottom-3 leading-none pointer-events-none"
          >
            {project.number}
          </div>

          {/* Badge & Category Strip (pr-14 prevents overlap with close button) */}
          <div className="flex flex-wrap items-center gap-2 mb-2 relative z-10 pr-14">
            <span className="font-mono text-xs font-black bg-black text-white px-2.5 py-0.5 rounded shadow-2xs">
              {project.number}
            </span>
            <span className="font-mono text-xs font-black bg-white text-black border-[1.5px] border-black px-2.5 py-0.5 rounded-full shadow-2xs rotate-[-1deg]">
              ★ {project.badge}
            </span>
            <span className="font-mono text-[11px] font-bold text-black/75">
              // {project.tagline}
            </span>
          </div>

          {/* Bold Project Title */}
          <h3 
            id="modal-title" 
            className="font-syne font-black text-3xl sm:text-4xl text-black tracking-tight leading-tight relative z-10 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.7)] pr-14"
          >
            {project.title}
          </h3>

          {/* Meta Status */}
          <div className="mt-2.5 flex items-center gap-2 relative z-10">
            <span className="font-mono text-[10px] sm:text-[11px] font-black bg-black text-white px-2 py-0.5 rounded shadow-2xs">
              {project.metaStatus}
            </span>
          </div>

          {/* Top-Right Close Button - Placed last in DOM with z-50 and pointer-events-auto */}
          <button
            type="button"
            id="modal-close-btn"
            aria-label="Close modal"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-[#FB7185] hover:text-white text-black border-[2.5px] border-black rounded-full font-mono font-black text-base flex items-center justify-center shadow-brutal-sm hover:scale-105 active:scale-95 transition-all cursor-pointer z-50 pointer-events-auto"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b-2 border-black/20 dark:border-white/20 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`font-mono text-xs font-black px-3.5 py-1.5 border-[2px] border-black rounded-lg transition-all cursor-pointer shadow-brutal-sm ${
                activeTab === 'overview'
                  ? 'bg-black text-white dark:bg-[#FBBF24] dark:text-black scale-[1.02]'
                  : 'bg-white dark:bg-[#1E2433] text-black dark:text-white hover:bg-[#FEF08A] hover:text-black'
              }`}
            >
              OVERVIEW &amp; IMPACT
            </button>
            {project.architectureFlow && (
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`font-mono text-xs font-black px-3.5 py-1.5 border-[2px] border-black rounded-lg transition-all cursor-pointer shadow-brutal-sm ${
                  activeTab === 'architecture'
                    ? 'bg-[#38BDF8] text-black scale-[1.02]'
                    : 'bg-white dark:bg-[#1E2433] text-black dark:text-white hover:bg-[#38BDF8] hover:text-black'
                }`}
              >
                ARCHITECTURE PIPELINE
              </button>
            )}
            {project.sampleCode && (
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`font-mono text-xs font-black px-3.5 py-1.5 border-[2px] border-black rounded-lg transition-all cursor-pointer shadow-brutal-sm ${
                  activeTab === 'code'
                    ? 'bg-[#34D399] text-black scale-[1.02]'
                    : 'bg-white dark:bg-[#1E2433] text-black dark:text-white hover:bg-[#34D399] hover:text-black'
                }`}
              >
                SAMPLE CODE ⌨
              </button>
            )}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Problem Statement Card */}
              <div className="p-4 sm:p-5 bg-[#FFF1F2] dark:bg-[#251216] border-[2.5px] border-black dark:border-rose-400/50 rounded-xl shadow-brutal-sm">
                <span className="font-mono text-[11px] font-black uppercase bg-[#F43F5E] text-white px-2.5 py-0.5 rounded border border-black shadow-2xs rotate-[-1deg] inline-block mb-1.5">
                  ⚠️ PROBLEM STATEMENT &amp; INTENT
                </span>
                <p className="font-grotesk text-sm sm:text-base text-black dark:text-[#F3F4F6] font-semibold mt-1 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Engineering Approach Card */}
              <div className="p-4 sm:p-5 bg-[#EFF6FF] dark:bg-[#0E1E38] border-[2.5px] border-black dark:border-blue-400/50 rounded-xl shadow-brutal-sm">
                <span className="font-mono text-[11px] font-black uppercase bg-[#3B82F6] text-white px-2.5 py-0.5 rounded border border-black shadow-2xs rotate-[1deg] inline-block mb-1.5">
                  ⚡ ENGINEERING APPROACH &amp; PIPELINE
                </span>
                <p className="font-grotesk text-sm sm:text-base text-black dark:text-[#F3F4F6] font-semibold mt-1 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Quantified Impact Card */}
              {project.impactMetrics && project.impactMetrics.length > 0 && (
                <div className="p-4 sm:p-5 bg-[#ECFDF5] dark:bg-[#062A1D] border-[2.5px] border-black dark:border-emerald-400/50 rounded-xl shadow-brutal-sm">
                  <span className="font-mono text-[11px] font-black uppercase bg-[#10B981] text-black px-2.5 py-0.5 rounded border border-black shadow-2xs inline-block mb-2.5">
                    📈 QUANTIFIED IMPACT &amp; VALIDATION
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-grotesk font-bold text-black dark:text-[#E2E8F0]">
                    {project.impactMetrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2.5">
                        <span className="bg-[#10B981] text-black border border-black rounded-full w-5 h-5 flex items-center justify-center font-black text-xs shadow-2xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Architecture Pipeline */}
          {activeTab === 'architecture' && project.architectureFlow && (
            <div className="p-4 sm:p-5 bg-[#F0FDF4] dark:bg-[#0E2319] border-[2.5px] border-black dark:border-emerald-400/50 rounded-xl shadow-brutal-sm">
              <span className="font-mono text-[11px] font-black uppercase bg-[#22C55E] text-black px-2.5 py-0.5 rounded border border-black shadow-2xs inline-block mb-3">
                // DATA &amp; INFERENCE PIPELINE
              </span>
              <div className="space-y-3">
                {project.architectureFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs bg-[#FBBF24] text-black border-[1.5px] border-black px-2.5 py-1 rounded font-black shrink-0 shadow-2xs">
                      0{idx + 1}
                    </span>
                    <div className="bg-white dark:bg-[#1A202C] border-[2px] border-black dark:border-white/30 p-3 rounded-lg text-xs sm:text-sm font-grotesk font-bold flex-1 shadow-2xs text-black dark:text-white leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Sample Code */}
          {activeTab === 'code' && project.sampleCode && (
            <div className="bg-[#0B0F19] text-[#34D399] border-[2.5px] border-black rounded-xl overflow-hidden shadow-brutal-sm">
              {/* Terminal Window Header Bar */}
              <div className="bg-[#1A202C] px-4 py-2.5 flex justify-between items-center border-b-[2px] border-black text-white/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-black/60 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-black/60 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] border border-black/60 inline-block" />
                  <span className="ml-2 font-mono text-[11px] font-bold text-white/70">
                    inference_pipeline.py
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-2.5 py-1 rounded text-[11px] font-mono font-bold cursor-pointer transition-colors shadow-2xs"
                >
                  {copiedCode ? 'COPIED! ✔' : 'COPY ⌨'}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto whitespace-pre leading-relaxed text-xs font-mono">
                <code>{project.sampleCode}</code>
              </pre>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="pt-2">
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white mb-2 tracking-wider flex items-center gap-1.5">
              <span className="text-[#F59E0B]">✦</span> TECHNOLOGY STACK:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-[#FEF08A] dark:bg-[#FBBF24] text-black border-[2px] border-black px-3 py-1 text-xs font-mono font-black shadow-brutal-sm rounded-md hover:-translate-y-0.5 transition-transform"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links & Footer: Distinct Website (Live) vs YouTube (Demo) vs GitHub */}
        <div className="p-4 sm:p-5 border-t-[3px] border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="font-mono text-xs text-black/70 dark:text-white/70 font-bold">
            {project.category}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Live Website Link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-[#34D399] hover:bg-[#10B981] text-black font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 border-[2px] border-black shadow-brutal-sm"
              >
                <span>🌐 Live Website</span>
                <span>↗</span>
              </a>
            )}

            {/* YouTube Demo Video Link */}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-[#FF0000] hover:bg-[#DC2626] text-white font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 border-[2px] border-black shadow-brutal-sm"
              >
                <span>▶ Watch Demo (YouTube)</span>
              </a>
            )}

            {/* GitHub Repository */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 border-[2px] border-black shadow-brutal-sm"
              >
                <span>⌨ GitHub Code</span>
                <span>↗</span>
              </a>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="brutal-btn bg-[#FBBF24] hover:bg-[#F59E0B] text-black font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-1 border-[2px] border-black shadow-brutal-sm cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
