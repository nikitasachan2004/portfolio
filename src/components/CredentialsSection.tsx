import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { LINKS } from '../data/links';

export const CredentialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const shouldReduceMotion = useReducedMotion();

  // Education data items:
  // [0] Manipal University Jaipur (Current B.Tech CS & AI, 2023 - 2027) -> HERO CARD
  // [1] Carmel Convent Class XII (2021 - 2023) -> SCHOOL CARD 1
  // [2] Carmel Convent Class X (2019 - 2021)   -> SCHOOL CARD 2
  const universityItem = EDUCATION_DATA[0];
  const class12Item = EDUCATION_DATA[1];
  const class10Item = EDUCATION_DATA[2];

  // Certifications metadata: curated brand accents, logos, and colored left glow borders
  const certMetadata = [
    {
      issuer: 'IBM',
      logoUrl: '/credentials/ibm.svg',
      accentColor: '#38BDF8', // Sky Blue
      borderLeftClass: 'border-l-[#38BDF8]',
      tagBgClass: 'bg-[#38BDF8]/15 text-[#0284C7] dark:bg-[#38BDF8]/20 dark:text-[#7DD3FC] border-[#38BDF8]/40',
      darkGlowStyle: { boxShadow: 'inset 4px 0 16px rgba(56, 189, 248, 0.12)' }
    },
    {
      issuer: 'MICROSOFT',
      logoUrl: '/credentials/microsoft.svg',
      accentColor: '#00A4EF', // Azure Cyan
      borderLeftClass: 'border-l-[#00A4EF]',
      tagBgClass: 'bg-[#00A4EF]/15 text-[#0369A1] dark:bg-[#00A4EF]/20 dark:text-[#38BDF8] border-[#00A4EF]/40',
      darkGlowStyle: { boxShadow: 'inset 4px 0 16px rgba(0, 164, 239, 0.12)' }
    },
    {
      issuer: 'NPTEL',
      logoUrl: '/credentials/nptel.svg',
      accentColor: '#FBBF24', // Amber Gold
      borderLeftClass: 'border-l-[#FBBF24]',
      tagBgClass: 'bg-[#FBBF24]/15 text-[#B45309] dark:bg-[#FBBF24]/20 dark:text-[#FDE047] border-[#FBBF24]/40',
      darkGlowStyle: { boxShadow: 'inset 4px 0 16px rgba(251, 191, 36, 0.12)' }
    },
    {
      issuer: 'RED HAT',
      logoUrl: '/credentials/redhat.svg',
      accentColor: '#EF4444', // Red Hat Crimson
      borderLeftClass: 'border-l-[#EF4444]',
      tagBgClass: 'bg-[#EF4444]/15 text-[#DC2626] dark:bg-[#EF4444]/20 dark:text-[#F87171] border-[#EF4444]/40',
      darkGlowStyle: { boxShadow: 'inset 4px 0 16px rgba(239, 68, 68, 0.12)' }
    },
    {
      issuer: 'ORACLE',
      logoUrl: '/credentials/oracle.svg',
      accentColor: '#EA580C', // Flame Orange / Crimson
      borderLeftClass: 'border-l-[#EA580C]',
      tagBgClass: 'bg-[#EA580C]/15 text-[#C2410C] dark:bg-[#EA580C]/20 dark:text-[#FB923C] border-[#EA580C]/40',
      darkGlowStyle: { boxShadow: 'inset 4px 0 16px rgba(234, 88, 12, 0.12)' }
    },
    {
      issuer: 'CISCO',
      logoUrl: '/credentials/cisco.svg',
      accentColor: '#10B981', // Cisco Emerald
      borderLeftClass: 'border-l-[#10B981]',
      tagBgClass: 'bg-[#10B981]/15 text-[#047857] dark:bg-[#10B981]/20 dark:text-[#34D399] border-[#10B981]/40',
      darkGlowStyle: { boxShadow: 'inset 4px 0 16px rgba(16, 185, 129, 0.12)' }
    }
  ];

  return (
    <section id="credentials" ref={sectionRef} className="relative outline-none">
      {/* Top Folder Tab */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="folder-tab bg-[#A78BFA] text-black">
          CREDENTIALS 05 // RECORD
        </div>
      </div>

      {/* Main Neo-Brutalist Frame */}
      <div className="bg-white dark:bg-[#0A0A0A] border-[3px] border-black dark:border-[#222222] shadow-brutal-lg dark:shadow-[8px_8px_0px_#000000] p-4 sm:p-7 md:p-8 flex flex-col gap-8 transition-colors">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b-2 border-black/15 dark:border-white/10">
          <div>
            <h2 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black dark:text-[#F8FAFC] leading-none">
              ACADEMICS &amp; CERTIFICATIONS
            </h2>
            <p className="font-mono text-xs text-black/70 dark:text-[#94A3B8] mt-1.5 font-bold tracking-wider section-subhead">
              // CHRONOLOGICAL ACADEMIC PROGRESSION &amp; VERIFIED INDUSTRY ACCREDITATIONS
            </p>
          </div>

          {/* Accurate count badge */}
          <div className="font-mono text-xs font-black bg-[#FBBF24] border-[2px] border-black px-3.5 py-1.5 shadow-brutal-sm select-none text-black whitespace-nowrap self-start sm:self-auto">
            ★ {CERTIFICATIONS_DATA.length} VERIFIED CERTS
          </div>
        </div>

        {/* STEP 1: EDUCATION BENTO GRID (Clean Bento Hierarchy, No Timeline Dots) */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-black/70 dark:text-[#94A3B8] section-label">
              // ACADEMIC FOUNDATION (BENTO GRID)
            </span>
            <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-2xs">
              DEGREE &amp; SECONDARY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            {/* HERO CARD: University Education (Manipal University Jaipur, spans 2 columns) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0.9, y: 12 }}
              animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 12 }}
              transition={{ duration: 0.25, type: 'spring', stiffness: 300, damping: 24 }}
              className="md:col-span-2 group relative rounded-xl border-[2.5px] border-black dark:border-[#A78BFA]/50 border-l-[6px] sm:border-l-[8px] border-l-[#A78BFA] p-5 sm:p-6 md:p-7 bg-[#F8F5FF] dark:bg-[#1A1025] shadow-brutal md:shadow-brutal-lg dark:shadow-[6px_6px_0px_#000000] transition-all hover:-translate-y-0.5 overflow-hidden"
              style={{
                boxShadow: undefined // Tailwind classes handle light & dark shadows cleanly
              }}
            >
              {/* Subtle Ambient Violet Glow in Dark Mode */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(167, 139, 250, 0.12), transparent 70%)'
                }}
              />

              <div className="relative z-10 flex flex-col justify-between gap-5">
                {/* Top Row: Current Status & Amber Accent Year Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-800 dark:bg-emerald-500/20 dark:text-[#34D399] border border-emerald-500/40 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      CURRENT ENROLLMENT
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-black/60 dark:text-[#A78BFA]/90 uppercase font-bold tracking-wider hidden sm:inline">
                      // 4-YEAR B.TECH PROGRAM
                    </span>
                  </div>

                  <span className="font-mono text-xs sm:text-sm font-black bg-[#FBBF24] text-black px-3 py-1 rounded border-2 border-black shadow-brutal-sm select-none whitespace-nowrap">
                    2023 – 2027
                  </span>
                </div>

                {/* Institution & Degree Title */}
                <div>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-black dark:text-[#F8FAFC] leading-tight">
                    {universityItem.institution}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-2.5">
                    <span className="font-grotesk font-black text-base sm:text-lg text-black/90 dark:text-[#E2E8F0]">
                      {universityItem.degree}
                    </span>
                    <span className="hidden sm:inline text-black/30 dark:text-white/20">•</span>
                    <span className="font-mono font-black text-xs sm:text-sm text-[#6D28D9] dark:text-[#C4B5FD] bg-[#6D28D9]/10 dark:bg-[#A78BFA]/15 px-2.5 py-1 rounded border border-[#6D28D9]/30 dark:border-[#A78BFA]/40 tracking-wide">
                      {universityItem.specialization}
                    </span>
                  </div>
                </div>

                {/* Coursework & Metadata Row */}
                <div className="pt-3.5 border-t border-black/10 dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[10px] sm:text-xs font-black uppercase text-black/50 dark:text-[#94A3B8] mr-1">
                      KEY CURRICULUM:
                    </span>
                    {universityItem.coursework?.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] sm:text-xs font-bold bg-white dark:bg-[#251838] text-black dark:text-[#E2E8F0] border border-black/25 dark:border-[#A78BFA]/40 px-2.5 py-0.5 rounded shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0 font-mono text-[11px] font-bold text-black/70 dark:text-[#CBD5E1]">
                    <span className="flex items-center gap-1">📍 Jaipur, Rajasthan</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">🎓 Batch of &apos;27</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SCHOOL CARD 1: Class XII (Senior Secondary) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0.9, y: 12 }}
              animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 12 }}
              transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : 0.05, type: 'spring', stiffness: 300, damping: 24 }}
              className="relative rounded-xl border-[2.5px] border-black dark:border-[#38BDF8]/40 border-l-[5px] sm:border-l-[6px] border-l-[#38BDF8] p-4.5 sm:p-5 bg-[#F0F9FF] dark:bg-[#0E1520] shadow-brutal-sm hover:shadow-brutal dark:shadow-[4px_4px_0px_#000000] transition-all hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Ambient Sky Glow in Dark Mode */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(56, 189, 248, 0.08), transparent 70%)'
                }}
              />

              <div className="relative z-10 flex flex-col gap-3">
                {/* Year Badge & Sub-label */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black bg-[#38BDF8] text-black px-2.5 py-0.5 rounded border border-black shadow-2xs">
                    {class12Item.period}
                  </span>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#0284C7] dark:text-[#7DD3FC] bg-[#38BDF8]/15 dark:bg-[#38BDF8]/20 px-2 py-0.5 rounded border border-[#38BDF8]/30">
                    CLASS XII // SENIOR SECONDARY
                  </span>
                </div>

                {/* Institution & Degree */}
                <div>
                  <h4 className="font-syne font-black text-lg sm:text-xl text-black dark:text-[#F8FAFC] leading-snug">
                    {class12Item.institution}
                  </h4>
                  <p className="font-grotesk font-bold text-xs sm:text-sm text-black/80 dark:text-[#CBD5E1] mt-0.5">
                    {class12Item.degree}
                  </p>
                </div>
              </div>

              {/* Bottom Details Badges */}
              <div className="relative z-10 mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-1.5">
                <span className="bg-neutral-900 text-white dark:bg-white dark:text-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-2xs">
                  CBSE BOARD
                </span>
                <span className="bg-[#E0F2FE] dark:bg-[#071D2E] text-[#0369A1] dark:text-[#7DD3FC] border border-[#0369A1]/30 dark:border-[#38BDF8]/40 font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-2xs">
                  SCIENCE &amp; MATHS
                </span>
                <span className="font-mono text-[10px] text-black/60 dark:text-[#94A3B8] ml-auto">
                  Physics, Chemistry, Maths &amp; CS
                </span>
              </div>
            </motion.div>

            {/* SCHOOL CARD 2: Class X (Secondary School) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0.9, y: 12 }}
              animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 12 }}
              transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : 0.08, type: 'spring', stiffness: 300, damping: 24 }}
              className="relative rounded-xl border-[2.5px] border-black dark:border-[#34D399]/40 border-l-[5px] sm:border-l-[6px] border-l-[#34D399] p-4.5 sm:p-5 bg-[#F0FDF4] dark:bg-[#0A1813] shadow-brutal-sm hover:shadow-brutal dark:shadow-[4px_4px_0px_#000000] transition-all hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Ambient Mint Glow in Dark Mode */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(52, 211, 153, 0.08), transparent 70%)'
                }}
              />

              <div className="relative z-10 flex flex-col gap-3">
                {/* Year Badge & Sub-label */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black bg-[#34D399] text-black px-2.5 py-0.5 rounded border border-black shadow-2xs">
                    {class10Item.period}
                  </span>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#059669] dark:text-[#6EE7B7] bg-[#34D399]/15 dark:bg-[#34D399]/20 px-2 py-0.5 rounded border border-[#34D399]/30">
                    CLASS X // SECONDARY
                  </span>
                </div>

                {/* Institution & Degree */}
                <div>
                  <h4 className="font-syne font-black text-lg sm:text-xl text-black dark:text-[#F8FAFC] leading-snug">
                    {class10Item.institution}
                  </h4>
                  <p className="font-grotesk font-bold text-xs sm:text-sm text-black/80 dark:text-[#CBD5E1] mt-0.5">
                    {class10Item.degree}
                  </p>
                </div>
              </div>

              {/* Bottom Details Badges */}
              <div className="relative z-10 mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-1.5">
                <span className="bg-neutral-900 text-white dark:bg-white dark:text-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-2xs">
                  CBSE BOARD
                </span>
                <span className="bg-[#DCFCE7] dark:bg-[#052115] text-[#15803D] dark:text-[#6EE7B7] border border-[#15803D]/30 dark:border-[#34D399]/40 font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-2xs">
                  FOUNDATION MERIT
                </span>
                <span className="font-mono text-[10px] text-black/60 dark:text-[#94A3B8] ml-auto">
                  Science, Math &amp; Applications
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* STEP 2: VERIFIED CERTIFICATIONS SECTION (Clean sleek cards with colored left borders) */}
        <div className="flex flex-col gap-3.5 pt-3 border-t-2 border-black/15 dark:border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-black/70 dark:text-[#94A3B8] section-label">
              // VERIFIED INDUSTRY ACCREDITATIONS ({CERTIFICATIONS_DATA.length} BENCHMARKS)
            </span>
            <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-2xs">
              EXAM VERIFIED
            </span>
          </div>

          {/* 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
          <div
            role="list"
            aria-label="Verified Industry Certifications Grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5"
          >
            {CERTIFICATIONS_DATA.map((cert, cIdx) => {
              const meta = certMetadata[cIdx % certMetadata.length];

              return (
                <motion.div
                  key={cert.name}
                  role="listitem"
                  initial={shouldReduceMotion ? false : { opacity: 0.9, y: 10 }}
                  animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 10 }}
                  transition={{
                    duration: 0.22,
                    delay: shouldReduceMotion ? 0 : Math.min(cIdx * 0.03, 0.15),
                    type: 'spring',
                    stiffness: 300,
                    damping: 24
                  }}
                  whileHover={shouldReduceMotion ? {} : { x: -3, y: -3, transition: { duration: 0.12 } }}
                  className={`group relative rounded-xl border-[2px] sm:border-[2.5px] border-black dark:border-[#262626] border-l-4 sm:border-l-[5px] ${meta.borderLeftClass} p-4 sm:p-5 bg-white dark:bg-[#121212] shadow-brutal hover:shadow-brutal-lg dark:shadow-[4px_4px_0px_#000000] transition-all flex flex-col justify-between overflow-hidden outline-none focus-within:ring-2 focus-within:ring-[#FBBF24]`}
                >
                  {/* Subtle Brand Ambient Glow in Dark Mode */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(ellipse 70% 50% at 0% 50%, ${meta.accentColor}18, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10">
                    {/* Top Row: Official Logo + Issuer Brand Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      {/* Official Logo Box */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-[#1A1A1A] border-[2px] border-black dark:border-[#333333] rounded-lg p-1.5 shadow-2xs flex items-center justify-center shrink-0">
                        <img
                          src={meta.logoUrl}
                          alt={`${cert.issuer} official logo`}
                          className="w-full h-full object-contain pointer-events-none select-none"
                          loading="eager"
                          decoding="sync"
                        />
                      </div>

                      {/* Issuer Name Tag */}
                      <span className={`font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider ${meta.tagBgClass} border-[1.5px] px-2.5 py-1 rounded shadow-2xs shrink-0 truncate max-w-[170px]`}>
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Certification Title */}
                    <h4
                      title={cert.name}
                      aria-label={cert.name}
                      className="font-syne font-black text-sm sm:text-base text-black dark:text-[#F8FAFC] leading-snug line-clamp-2 my-1.5 min-h-[2.6rem]"
                    >
                      {cert.name}
                    </h4>
                  </div>

                  {/* Bottom Row: Index Counter & High-Contrast "VERIFY ↗" Link */}
                  <div className="relative z-10 mt-3.5 pt-2.5 border-t border-black/15 dark:border-white/10 flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-black text-black/70 dark:text-[#94A3B8] select-none flex items-center gap-1.5">
                      <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{ backgroundColor: meta.accentColor }}
                      />
                      <span>★ 0{cIdx + 1}</span>
                    </span>

                    <a
                      href={cert.credentialId || LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.issuer} ${cert.name} on LinkedIn`}
                      className="brutal-btn font-mono font-black text-xs px-3.5 py-1.5 rounded-lg border-[2px] border-black shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 cursor-pointer bg-black text-white hover:bg-[#FBBF24] hover:text-black dark:bg-white dark:text-black dark:hover:bg-[#FBBF24] dark:hover:text-black select-none shrink-0"
                    >
                      <span className="tracking-wider">VERIFY</span>
                      <span className="font-black text-xs">↗</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};