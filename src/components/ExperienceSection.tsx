import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { LINKS } from '../data/links';

export const ExperienceSection: React.FC = () => {
  const drytisExp = EXPERIENCES[0]; // Most recent: AI Engineer @ Drytis Inc.
  const aiDataExp = EXPERIENCES[1]; // AI Data Analytics Intern
  const webDevExp = EXPERIENCES[2]; // Web Development Intern

  return (
    <section id="experience" className="relative text-black">
      {/* Folder Tab Header with cyan accent */}
      <div className="folder-tab bg-[#38BDF8] text-black shadow-brutal-sm font-black flex items-center gap-2 select-none">
        <span>EXPERIENCE 02 // CHRONOLOGICAL LOGBOOK</span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FB7185] animate-pulse" />
      </div>

      {/* Main Container - Crisp White Scrapbook Paper (Not Black) */}
      <div className="bg-white border-[3px] border-black shadow-brutal-lg p-5 sm:p-8 md:p-10 relative overflow-visible text-black">
        {/* Section Header with Scrapbook Ribbon & Verified Stamp */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b-2 border-black relative overflow-visible">
          <div>
            {/* Top Sticker Cloud */}
            <div className="flex items-center gap-2 mb-2 flex-wrap select-none">
              <span className="washi-tape px-3 py-0.5 text-[10px] font-mono font-extrabold text-black rotate-[-1.5deg] shadow-2xs">
                ★ CAREER PROGRESSION
              </span>
              <span className="bg-[#10B981] text-black border-[1.5px] border-black text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded shadow-2xs rotate-[1deg]">
                ✦ ACTIVE CONTRACTOR @ DRYTIS INC.
              </span>
              <span className="bg-[#F472B6] text-black border-[1.5px] border-black text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded shadow-2xs rotate-[-1deg]">
                PRODUCTION TRACK
              </span>
            </div>

            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-black leading-none drop-shadow-[4px_4px_0px_rgba(56,189,248,0.45)]">
              EXPERIENCE
            </h2>
            <p className="font-mono text-xs text-black/80 mt-2 font-bold tracking-wider">
              // PRODUCTION TIMELINE: AI ENGINEERING &amp; FULL-STACK SYSTEMS
            </p>
          </div>

          {/* Official Tactile Inspection Seal */}
          <div className="border-[2.5px] border-dashed border-[#FB7185] bg-[#FFE4E6] text-black p-3 rounded-xl rotate-[-2deg] hover:rotate-0 transition-transform select-none shadow-xs text-center shrink-0">
            <div className="font-mono font-extrabold text-[9px] tracking-widest text-[#E11D48]">
              [ ACTIVE VERIFIED ]
            </div>
            <div className="font-syne font-black text-sm text-black my-0.5">
              3 ROLES SHIPPED
            </div>
            <div className="bg-[#34D399] text-black border border-black text-[9px] font-mono font-black px-2 py-0.5 rounded-xs shadow-2xs inline-block">
              OCT 2026 – PRESENT ✓
            </div>
          </div>
        </div>

        {/* Sequential Timeline: Top Role is Most Recent (Drytis Inc.) */}
        <div className="space-y-0 relative overflow-visible">
          {/* ========================================================================= */}
          {/* ROLE 01 (TOP / CURRENT): AI ENGINEER @ DRYTIS INC.                        */}
          {/* ========================================================================= */}
          <div className="w-full bg-[#ECFDF5] border-[3px] border-black border-l-[10px] border-l-[#10B981] shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl relative pt-8 pb-6 px-6 sm:px-8 overflow-visible group">
            {/* Top Frosted Washi Tape (overflow-visible, no clipping) */}
            <div className="washi-tape-mint absolute -top-3.5 left-6 sm:left-8 px-5 py-1 font-mono text-[11px] font-black text-black rotate-[-1.5deg] select-none shadow-xs">
              CURRENT ROLE // OCT 2026 – PRESENT
            </div>

            {/* Top-Right Perforated Tag */}
            <span className="bg-[#10B981] text-black font-mono font-black text-[10px] px-3 py-1 border-[1.5px] border-black shadow-xs rotate-[1.5deg] absolute -top-3 right-6 uppercase select-none">
              INDEPENDENT CONTRACTOR // REMOTE
            </span>

            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-black/15">
              <div className="flex items-center gap-3.5">
                {/* Clean Vector AI Neural Chip Icon (Zero Emojis) */}
                <div className="w-12 h-12 rounded-xl bg-[#10B981] border-[2px] border-black shadow-brutal-sm flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl text-black leading-tight">
                    {drytisExp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="bg-black text-white font-mono text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                      {drytisExp.company}
                    </span>
                    <span className="bg-white text-black font-mono text-[10px] font-bold border border-black px-2 py-0.5 rounded">
                      REMOTE / CONTRACT
                    </span>
                    <span className="bg-[#A7F3D0] text-black font-mono text-[10px] font-black border border-black px-2 py-0.5 rounded">
                      {drytisExp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlight Metric Pill */}
              <div className="self-start sm:self-auto shrink-0">
                <span className="bg-[#10B981] text-black font-mono font-black text-xs px-3.5 py-1.5 border-[2px] border-black rounded-full shadow-brutal-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>Active Contractor</span>
                </span>
              </div>
            </div>

            {/* Landscape 2-Column Split: Field Notes & Deliverables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
              {/* Left Column (5 Cols): Handwritten Note & Tech Stack */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                {/* Handwritten Scrapbook Margin Callout */}
                <div className="bg-white border-[1.5px] border-dashed border-black/40 p-4 rounded-xl shadow-2xs rotate-[-0.5deg]">
                  <div className="font-mono text-[9px] font-black text-black/60 uppercase tracking-wider mb-1">
                    // ROLE SUMMARY &amp; SCOPE
                  </div>
                  <p className="font-kalam text-base sm:text-lg text-black font-bold leading-snug">
                    &ldquo;Engineering AI-assisted developer solutions, building prompt pipelines, and supporting clients in real-time cloud dev environments to ship robust software faster.&rdquo;
                  </p>
                </div>

                {/* Tech Stack Stickers */}
                <div>
                  <div className="font-mono text-[10px] font-black uppercase text-black/80 mb-2 flex items-center gap-1.5">
                    <span>TECHNOLOGIES &amp; TOOLS:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {drytisExp.skills.map((skill, sIdx) => {
                      const colors = [
                        'bg-[#10B981] text-black',
                        'bg-[#38BDF8] text-black',
                        'bg-[#FBBF24] text-black',
                        'bg-[#A78BFA] text-black',
                        'bg-[#F472B6] text-black',
                        'bg-[#FEF08A] text-black'
                      ];
                      const color = colors[sIdx % colors.length];
                      return (
                        <span
                          key={sIdx}
                          className={`${color} border-[1.5px] border-black font-mono text-[11px] font-black px-2.5 py-1 rounded shadow-xs hover:-translate-y-0.5 hover:rotate-1 transition-all select-none cursor-default`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Production Deliverables Checklist */}
              <div className="lg:col-span-7 bg-white/95 border-[2px] border-black p-4 sm:p-5 rounded-xl shadow-xs">
                <div className="font-mono text-[11px] font-black uppercase text-black mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>ACHIEVEMENTS &amp; RESPONSIBILITIES</span>
                </div>
                <ul className="space-y-3 font-grotesk text-sm text-black">
                  {drytisExp.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-[#ECFDF5]/80 p-3 rounded-lg border border-black/20 shadow-2xs hover:border-black transition-colors"
                    >
                      <span className="w-5 h-5 rounded bg-[#10B981] border-[1.5px] border-black shadow-2xs flex items-center justify-center font-mono font-black text-black text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed font-semibold">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CONNECTING SPINE: "THEN HERE" PROGRESSION                                 */}
          {/* ========================================================================= */}
          <div className="flex flex-col items-center py-5 relative select-none z-20">
            <div className="w-0.5 h-6 bg-black border-dashed border-l-2 border-black" />
            <div className="bg-[#FEF08A] border-[2.5px] border-black px-5 py-2 rounded-full shadow-brutal-sm font-mono text-xs font-black text-black flex items-center gap-2.5 rotate-[-1deg] hover:rotate-0 transition-transform cursor-default">
              <span>✦</span>
              <span>PREVIOUS ROLE: APPLIED DATA ANALYTICS &amp; ML</span>
              <span className="text-base font-black leading-none">↓</span>
            </div>
            <div className="w-0.5 h-6 bg-black border-dashed border-l-2 border-black" />
          </div>

          {/* ========================================================================= */}
          {/* ROLE 02: AI DATA ANALYTICS INTERN @ INAMIGOS FOUNDATION                   */}
          {/* ========================================================================= */}
          <div className="w-full bg-[#FFFDF5] border-[3px] border-black border-l-[10px] border-l-[#F59E0B] shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl relative pt-8 pb-6 px-6 sm:px-8 overflow-visible group">
            {/* Top Frosted Washi Tape (overflow-visible, no clipping) */}
            <div className="washi-tape absolute -top-3.5 left-6 sm:left-8 px-5 py-1 font-mono text-[11px] font-black text-black rotate-[1.5deg] select-none shadow-xs">
              PHASE 02 // JUN 2026 – JUL 2026
            </div>

            {/* Top-Right Perforated Tag */}
            <span className="bg-[#FBBF24] text-black font-mono font-black text-[10px] px-3 py-1 border-[1.5px] border-black shadow-xs rotate-[-1.5deg] absolute -top-3 right-6 uppercase select-none">
              SUMMER 2026 INTERNSHIP
            </span>

            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-black/15">
              <div className="flex items-center gap-3.5">
                {/* Clean Vector Chart Icon (Zero Emojis) */}
                <div className="w-12 h-12 rounded-xl bg-[#FBBF24] border-[2px] border-black shadow-brutal-sm flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 4 4 6-7" />
                    <circle cx="7" cy="14" r="1.5" fill="currentColor" />
                    <circle cx="11" cy="10" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="14" r="1.5" fill="currentColor" />
                    <circle cx="21" cy="7" r="1.5" fill="currentColor" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl text-black leading-tight">
                    {aiDataExp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="bg-black text-white font-mono text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                      {aiDataExp.company}
                    </span>
                    <span className="bg-white text-black font-mono text-[10px] font-bold border border-black px-2 py-0.5 rounded">
                      HYBRID
                    </span>
                    <span className="bg-[#FEF08A] text-black font-mono text-[10px] font-black border border-black px-2 py-0.5 rounded">
                      {aiDataExp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlight Metric Pill */}
              <div className="self-start sm:self-auto shrink-0">
                <span className="bg-[#FBBF24] text-black font-mono font-black text-xs px-3 py-1.5 border-[2px] border-black rounded-full shadow-brutal-sm flex items-center gap-1.5">
                  <span>★</span>
                  <span>{aiDataExp.highlightStat?.value || '100% Python Driven'}</span>
                </span>
              </div>
            </div>

            {/* Landscape 2-Column Split: Field Notes & Deliverables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
              {/* Left Column (5 Cols): Handwritten Note & Tech Stack */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                {/* Handwritten Scrapbook Margin Callout */}
                <div className="bg-white border-[1.5px] border-dashed border-black/40 p-4 rounded-xl shadow-2xs rotate-[0.5deg]">
                  <div className="font-mono text-[9px] font-black text-black/60 uppercase tracking-wider mb-1">
                    // INTERN FIELD NOTES
                  </div>
                  <p className="font-kalam text-base sm:text-lg text-black font-bold leading-snug">
                    &ldquo;Analyzed noisy production datasets, engineered features, and built clear Matplotlib/Seaborn graphics that simplified key stakeholder decisions.&rdquo;
                  </p>
                </div>

                {/* Tech Stack Stickers */}
                <div>
                  <div className="font-mono text-[10px] font-black uppercase text-black/80 mb-2 flex items-center gap-1.5">
                    <span>TECHNOLOGIES SHIPPED:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {aiDataExp.skills.map((skill, sIdx) => {
                      const colors = [
                        'bg-[#FBBF24] text-black',
                        'bg-[#34D399] text-black',
                        'bg-[#FEF08A] text-black',
                        'bg-[#F472B6] text-black',
                        'bg-[#38BDF8] text-black',
                        'bg-[#A78BFA] text-black'
                      ];
                      const color = colors[sIdx % colors.length];
                      return (
                        <span
                          key={sIdx}
                          className={`${color} border-[1.5px] border-black font-mono text-[11px] font-black px-2.5 py-1 rounded shadow-xs hover:-translate-y-0.5 hover:rotate-1 transition-all select-none cursor-default`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Production Deliverables Checklist */}
              <div className="lg:col-span-7 bg-white/95 border-[2px] border-black p-4 sm:p-5 rounded-xl shadow-xs">
                <div className="font-mono text-[11px] font-black uppercase text-black mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span>KEY PRODUCTION IMPACT &amp; DELIVERABLES</span>
                </div>
                <ul className="space-y-3 font-grotesk text-sm text-black">
                  {aiDataExp.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-[#FFFDF5]/80 p-3 rounded-lg border border-black/20 shadow-2xs hover:border-black transition-colors"
                    >
                      <span className="w-5 h-5 rounded bg-[#34D399] border-[1.5px] border-black shadow-2xs flex items-center justify-center font-mono font-black text-black text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed font-semibold">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CONNECTING SPINE: "AND THEN HERE" (FOUNDATION WEB DEV)                    */}
          {/* ========================================================================= */}
          <div className="flex flex-col items-center py-5 relative select-none z-20">
            <div className="w-0.5 h-6 bg-black border-dashed border-l-2 border-black" />
            <div className="bg-[#BAE6FD] border-[2.5px] border-black px-5 py-2 rounded-full shadow-brutal-sm font-mono text-xs font-black text-black flex items-center gap-2.5 rotate-[-1deg] hover:rotate-0 transition-transform cursor-default">
              <span>✦</span>
              <span>PREVIOUS ROLE: FRONTEND &amp; REST APIS</span>
              <span className="text-base font-black leading-none">↓</span>
            </div>
            <div className="w-0.5 h-6 bg-black border-dashed border-l-2 border-black" />
          </div>

          {/* ========================================================================= */}
          {/* ROLE 03: WEB DEVELOPMENT INTERN @ INAMIGOS FOUNDATION                     */}
          {/* ========================================================================= */}
          <div className="w-full bg-[#F0F9FF] border-[3px] border-black border-l-[10px] border-l-[#0284C7] shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl relative pt-8 pb-6 px-6 sm:px-8 overflow-visible group">
            {/* Top Frosted Washi Tape (overflow-visible, no clipping) */}
            <div className="washi-tape-blue absolute -top-3.5 left-6 sm:left-8 px-5 py-1 font-mono text-[11px] font-black text-black rotate-[-1.5deg] select-none shadow-xs">
              PHASE 01 // MAY 2026 – JUN 2026
            </div>

            {/* Top-Right Perforated Tag */}
            <span className="bg-[#38BDF8] text-black font-mono font-black text-[10px] px-3 py-1 border-[1.5px] border-black shadow-xs rotate-[1.5deg] absolute -top-3 right-6 uppercase select-none">
              SPRING 2026 INTERNSHIP
            </span>

            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-black/15">
              <div className="flex items-center gap-3.5">
                {/* Clean Vector Code Icon (Zero Emojis) */}
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8] border-[2px] border-black shadow-brutal-sm flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl text-black leading-tight">
                    {webDevExp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="bg-black text-white font-mono text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                      {webDevExp.company}
                    </span>
                    <span className="bg-white text-black font-mono text-[10px] font-bold border border-black px-2 py-0.5 rounded">
                      HYBRID
                    </span>
                    <span className="bg-[#BAE6FD] text-black font-mono text-[10px] font-black border border-black px-2 py-0.5 rounded">
                      {webDevExp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlight Metric Pill */}
              <div className="self-start sm:self-auto shrink-0">
                <span className="bg-[#38BDF8] text-black font-mono font-black text-xs px-3 py-1.5 border-[2px] border-black rounded-full shadow-brutal-sm flex items-center gap-1.5">
                  <span>★</span>
                  <span>{webDevExp.highlightStat?.value || '3+ Features Shipped'}</span>
                </span>
              </div>
            </div>

            {/* Landscape 2-Column Split: Field Notes & Deliverables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
              {/* Left Column (5 Cols): Handwritten Note & Tech Stack */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                {/* Handwritten Scrapbook Margin Callout */}
                <div className="bg-white border-[1.5px] border-dashed border-black/40 p-4 rounded-xl shadow-2xs rotate-[-0.5deg]">
                  <div className="font-mono text-[9px] font-black text-black/60 uppercase tracking-wider mb-1">
                    // INTERN FIELD NOTES
                  </div>
                  <p className="font-kalam text-base sm:text-lg text-black font-bold leading-snug">
                    &ldquo;Cut into the foundation&apos;s codebase, tested 5+ API endpoints, fixed frontend bottlenecks, and pushed production code across fast-paced weekly sprints.&rdquo;
                  </p>
                </div>

                {/* Tech Stack Stickers */}
                <div>
                  <div className="font-mono text-[10px] font-black uppercase text-black/80 mb-2 flex items-center gap-1.5">
                    <span>TECHNOLOGIES SHIPPED:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {webDevExp.skills.map((skill, sIdx) => {
                      const colors = [
                        'bg-[#38BDF8] text-black',
                        'bg-[#FBBF24] text-black',
                        'bg-[#34D399] text-black',
                        'bg-[#F472B6] text-black',
                        'bg-[#FEF08A] text-black'
                      ];
                      const color = colors[sIdx % colors.length];
                      return (
                        <span
                          key={sIdx}
                          className={`${color} border-[1.5px] border-black font-mono text-[11px] font-black px-2.5 py-1 rounded shadow-xs hover:-translate-y-0.5 hover:rotate-1 transition-all select-none cursor-default`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Production Deliverables Checklist */}
              <div className="lg:col-span-7 bg-white/95 border-[2px] border-black p-4 sm:p-5 rounded-xl shadow-xs">
                <div className="font-mono text-[11px] font-black uppercase text-black mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                  <span>KEY PRODUCTION IMPACT &amp; DELIVERABLES</span>
                </div>
                <ul className="space-y-3 font-grotesk text-sm text-black">
                  {webDevExp.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-[#F0F9FF]/80 p-3 rounded-lg border border-black/20 shadow-2xs hover:border-black transition-colors"
                    >
                      <span className="w-5 h-5 rounded bg-[#38BDF8] border-[1.5px] border-black shadow-2xs flex items-center justify-center font-mono font-black text-black text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed font-semibold">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FOOTNOTE MILESTONE BAR (PRESENT DAY / OPEN TO ROLES)                       */}
          {/* ========================================================================= */}
          <div className="w-full bg-[#FAF8F3] border-[2.5px] border-black p-5 sm:p-6 rounded-2xl shadow-brutal flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-visible z-10 mt-8">
            {/* Corner washi tape (overflow-visible, no clipping) */}
            <div className="washi-tape-mint absolute -bottom-3 right-8 px-4 py-0.5 font-mono text-[10px] font-black rotate-[-1deg] text-black select-none shadow-2xs">
              VERIFIED APPRENTICESHIP
            </div>

            <div className="flex items-start gap-3.5">
              <span className="relative flex h-3 w-3 mt-1 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]" />
              </span>
              <div>
                <div className="font-mono text-xs font-black text-black uppercase tracking-wider">
                  INDUSTRIAL TRACK ARCHIVE // 3 PRODUCTION ROLES VERIFIED
                </div>
                <p className="font-grotesk text-xs sm:text-sm text-black/80 mt-1 font-medium leading-relaxed">
                  Real engineering discipline: LLM prompt architectures, cloud coding environments, agile sprints, exploratory Python telemetry, and modular React systems.
                </p>
              </div>
            </div>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn bg-[#FBBF24] hover:bg-[#F59E0B] text-black font-mono font-black text-xs px-5 py-2.5 rounded-md border-[2px] border-black shadow-brutal-sm flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-transform select-none"
            >
              <span>VIEW CREDENTIALS</span>
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
