import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const shouldReduceMotion = useReducedMotion();

  // Reverse education so it reads chronologically oldest -> newest:
  // 1. Carmel Convent Class X (2021)
  // 2. Carmel Convent Class XII (2023)
  // 3. Manipal University Jaipur B.Tech (2023 - 2027) (Current)
  const timelineData = [...EDUCATION_DATA].reverse();

  // 6 Certifications styling: cycled pastel fills from the Skills bento palette
  // Neighbors never share a background hue
  const certMetadata = [
    {
      cardBg: 'bg-[#FFE4E6]', // Rose Pastel
      issuerTag: 'IBM',
      logoUrl: '/credentials/ibm.svg',
      hasLogo: true,
      tagBg: 'bg-[#F472B6]'
    },
    {
      cardBg: 'bg-[#E0F2FE]', // Sky Pastel
      issuerTag: 'MICROSOFT',
      logoUrl: '/credentials/microsoft.svg',
      hasLogo: true,
      tagBg: 'bg-[#38BDF8]'
    },
    {
      cardBg: 'bg-[#FEF08A]', // Golden Yellow Pastel
      issuerTag: 'NPTEL',
      logoUrl: '',
      hasLogo: false, // Monogram fallback for NPTEL
      tagBg: 'bg-[#FBBF24]'
    },
    {
      cardBg: 'bg-[#D1FAE5]', // Mint Pastel
      issuerTag: 'RED HAT',
      logoUrl: '/credentials/redhat.svg',
      hasLogo: true,
      tagBg: 'bg-[#34D399]'
    },
    {
      cardBg: 'bg-[#EDE9FE]', // Lavender Pastel
      issuerTag: 'ORACLE',
      logoUrl: '/credentials/oracle.svg',
      hasLogo: true,
      tagBg: 'bg-[#A78BFA]'
    },
    {
      cardBg: 'bg-[#FEF9C3]', // Manila Cream Pastel
      issuerTag: 'CISCO',
      logoUrl: '/credentials/cisco.svg',
      hasLogo: true,
      tagBg: 'bg-[#FDE047]'
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

      {/* Main Neo-Brutalist Frame (matching Projects & Skills width, border, and shadow) */}
      <div className="bg-white dark:bg-[#171B26] border-[3px] border-black dark:border-[#333C4D] shadow-brutal-lg p-4 sm:p-7 md:p-8 flex flex-col gap-8 transition-colors">
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b-2 border-black/15 dark:border-white/15">
          <div>
            <h2 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black dark:text-white leading-none">
              ACADEMICS &amp; CERTIFICATIONS
            </h2>
            <p className="font-mono text-xs text-black/70 dark:text-slate-300 mt-1.5 font-bold tracking-wider section-subhead">
              // CHRONOLOGICAL ACADEMIC PROGRESSION &amp; VERIFIED INDUSTRY ACCREDITATIONS
            </p>
          </div>

          {/* Single, accurate count badge matching real certification data */}
          <div className="font-mono text-xs font-black bg-[#FBBF24] border-[2px] border-black px-3.5 py-1.5 shadow-brutal-sm select-none text-black whitespace-nowrap self-start sm:self-auto">
            ★ {CERTIFICATIONS_DATA.length} VERIFIED CERTS
          </div>
        </div>

        {/* STEP 1: EDUCATION AS A SLIM TIMELINE STRIP */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-black/70 dark:text-slate-300 section-label">
              // EDUCATION TIMELINE (2021 → 2027)
            </span>
            <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-2xs">
              OLDEST → NEWEST
            </span>
          </div>

          {/* Timeline Container */}
          <div className="relative pt-2 pb-1">
            {/* Desktop Horizontal Line (drawn left-to-right) */}
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              animate={shouldReduceMotion || isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ originX: 0 }}
              className="hidden md:block absolute top-[21px] left-[15%] right-[15%] h-[3px] bg-black dark:bg-[#475569] pointer-events-none"
            />

            {/* Mobile Vertical Track Line */}
            <div className="md:hidden absolute top-4 bottom-4 left-[19px] w-[3px] bg-black dark:bg-[#475569] pointer-events-none" />

            {/* Ordered Timeline List */}
            <ol
              role="list"
              aria-label="Chronological Education Timeline"
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 relative"
            >
              {timelineData.map((item, idx) => {
                const isCurrent = idx === timelineData.length - 1; // Manipal University Jaipur (Current)
                const nodeDelay = shouldReduceMotion ? 0 : 0.08 + idx * 0.08;

                return (
                  <motion.li
                    key={item.period}
                    initial={shouldReduceMotion ? false : { opacity: 0.9, y: 8 }}
                    animate={
                      isInView || shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.9, y: 8 }
                    }
                    transition={{
                      duration: 0.25,
                      delay: shouldReduceMotion ? 0 : idx * 0.05,
                      type: 'spring',
                      stiffness: 300,
                      damping: 24
                    }}
                    className="relative flex flex-row md:flex-col items-start md:items-center pl-10 md:pl-0"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute left-2.5 md:left-auto md:relative top-1.5 md:top-auto md:mb-3 flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10">
                      {isCurrent ? (
                        <div className="relative flex items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-[#10B981] opacity-60"></span>
                          <span className="relative inline-flex rounded-full h-5 w-5 bg-[#10B981] border-[2.5px] border-black shadow-brutal-sm"></span>
                        </div>
                      ) : (
                        <span className="inline-block w-4 h-4 rounded-full bg-black border-[2.5px] border-white shadow-2xs"></span>
                      )}
                    </div>

                    {/* Timeline Compact Card */}
                    <div
                      className={`timeline-card w-full rounded-xl border-[2.5px] border-black p-4 transition-all flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-[#FEF9C3] shadow-brutal hover:shadow-brutal-lg -translate-y-0.5'
                          : 'bg-white shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5'
                      }`}
                    >
                      <div>
                        {/* Year Chip & Tag */}
                        <div className="flex items-center justify-between gap-1.5 mb-2">
                          <span
                            className={`font-mono text-xs font-black px-2 py-0.5 rounded border border-black shadow-2xs text-black ${
                              isCurrent ? 'bg-[#FBBF24]' : idx === 1 ? 'bg-[#38BDF8]' : 'bg-[#A7F3D0]'
                            }`}
                          >
                            {isCurrent ? '2023 - 2027' : item.period}
                          </span>

                          {isCurrent ? (
                            <span className="bg-black text-white font-mono text-[9px] font-black px-2 py-0.5 rounded shadow-2xs tracking-wider uppercase">
                              ★ CURRENT
                            </span>
                          ) : (
                            <span className="font-mono text-[9px] font-bold text-black/75 uppercase">
                              {idx === 0 ? 'CLASS X' : 'CLASS XII'}
                            </span>
                          )}
                        </div>

                        {/* Institution Name (fits naturally without truncation) */}
                        <h3 className="font-syne font-black text-sm sm:text-base text-black leading-snug">
                          {item.institution}
                        </h3>

                        {/* Degree / Program */}
                        <p className="font-grotesk font-bold text-xs text-black/80 mt-1">
                          {item.degree}
                        </p>
                      </div>

                      {/* Score & Specialization Badges */}
                      <div className="mt-3.5 pt-2.5 border-t border-black/10 flex flex-wrap gap-1.5 items-center">
                        {isCurrent ? (
                          <>
                            <span className="bg-[#34D399] text-black border border-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-2xs">
                              CGPA: 9.1
                            </span>
                            <span className="bg-[#DDD6FE] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-2xs">
                              AI &amp; ML SPECIALIZATION
                            </span>
                          </>
                        ) : idx === 1 ? (
                          <>
                            <span className="bg-[#BAE6FD] text-black border border-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-2xs">
                              CBSE BOARD
                            </span>
                            <span className="bg-[#FEF08A] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-2xs">
                              SCIENCE &amp; MATHS
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="bg-[#A7F3D0] text-black border border-black font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-2xs">
                              CBSE BOARD
                            </span>
                            <span className="bg-[#FED7AA] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-2xs">
                              FOUNDATION MERIT
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* STEP 2: CERTIFICATIONS AS A BADGE WALL */}
        <div className="flex flex-col gap-3 pt-2 border-t-2 border-black/15 dark:border-white/15">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-black/70 dark:text-slate-300 section-label">
              // INDUSTRY CERTIFICATIONS ({CERTIFICATIONS_DATA.length} ACCREDITED BENCHMARKS)
            </span>
            <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-2xs">
              EXAM VERIFIED
            </span>
          </div>

          {/* 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
          <div
            role="list"
            aria-label="Verified Industry Certifications Badge Wall"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5"
          >
            {CERTIFICATIONS_DATA.map((cert, cIdx) => {
              const meta = certMetadata[cIdx % certMetadata.length];
              const cardDelay = shouldReduceMotion ? 0 : 0.2 + cIdx * 0.05;

              return (
                <motion.div
                  key={cert.name}
                  role="listitem"
                  initial={shouldReduceMotion ? false : { opacity: 0.9, y: 10 }}
                  animate={
                    isInView || shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0.9, y: 10 }
                  }
                  transition={{
                    duration: 0.22,
                    delay: shouldReduceMotion ? 0 : Math.min(cIdx * 0.03, 0.18),
                    type: 'spring',
                    stiffness: 300,
                    damping: 24
                  }}
                  whileHover={shouldReduceMotion ? {} : { x: -4, y: -4, transition: { duration: 0.12 } }}
                  className={`cert-tile group border-[2.5px] border-black p-4 sm:p-4.5 rounded-xl shadow-brutal hover:shadow-brutal-lg transition-shadow flex flex-col justify-between ${meta.cardBg} outline-none focus-within:ring-3 focus-within:ring-[#FBBF24] focus-within:ring-offset-2`}
                >
                  <div>
                    {/* Top Row: Official Logo + Issuer Mono Label */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      {/* Official Logo Box */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white border-[1.5px] border-black rounded-lg p-1.5 shadow-2xs flex items-center justify-center shrink-0">
                        {meta.hasLogo ? (
                          <img
                            src={meta.logoUrl}
                            alt={`${cert.issuer} official logo`}
                            className="w-full h-full object-contain pointer-events-none select-none"
                            loading="eager"
                            decoding="sync"
                          />
                        ) : (
                          <span className="font-syne font-black text-[10px] sm:text-xs text-black tracking-wider bg-[#FBBF24] border border-black px-1.5 py-0.5 rounded shadow-2xs select-none">
                            NPTEL
                          </span>
                        )}
                      </div>

                      {/* Issuer Name Mono Label */}
                      <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded shadow-2xs shrink-0 truncate max-w-[170px]">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Certification Title (max 2 lines, clamped with full tooltip) */}
                    <h4
                      title={cert.name}
                      aria-label={cert.name}
                      className="font-syne font-black text-sm sm:text-base text-black leading-snug line-clamp-2 my-1 min-h-[2.6rem]"
                    >
                      {cert.name}
                    </h4>
                  </div>

                  {/* Bottom Row: Category Marker & Never-Wrapping "Verify ↗" Link */}
                  <div className="mt-3.5 pt-2.5 border-t border-black/10 flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-black text-black select-none">
                      ★ 0{cIdx + 1}
                    </span>

                    <a
                      href={cert.credentialId || '#credentials'}
                      target={cert.credentialId ? '_blank' : undefined}
                      rel={cert.credentialId ? 'noopener noreferrer' : undefined}
                      aria-label={`Verify ${cert.issuer} ${cert.name} certificate`}
                      onClick={(e) => {
                        if (!cert.credentialId) {
                          e.preventDefault();
                        }
                      }}
                      className="font-mono text-[11px] font-black text-black bg-white hover:bg-black hover:text-white border-[1.5px] border-black px-2.5 py-1 rounded shadow-2xs transition-colors whitespace-nowrap inline-flex items-center gap-1 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]"
                    >
                      <span className="whitespace-nowrap">Verify</span>
                      <span aria-hidden="true" className="whitespace-nowrap">↗</span>
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
