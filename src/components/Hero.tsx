import React, { useRef, useState, useEffect } from 'react';
import { SparklesText } from './ui/sparkles-text';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { HeroMarquee } from './ui/HeroMarquee';
import { LINKS } from '../data/links';

export const Hero: React.FC = () => {
  const headlineContainerRef = useRef<HTMLDivElement>(null);
  const headlineTextRef = useRef<HTMLSpanElement>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="hero" className="pt-6 sm:pt-8 pb-4 relative flex flex-col items-center text-center overflow-x-clip sm:overflow-x-visible max-w-full">
      {/* Subtle ambient glow behind Hero in dark mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 w-[340px] xs:w-[500px] sm:w-[720px] md:w-[900px] h-[260px] sm:h-[380px] rounded-full blur-[120px] opacity-0 dark:opacity-20 bg-[radial-gradient(ellipse_at_center,_#F59E0B_0%,_#F472B6_40%,_transparent_75%)] -z-10 transition-opacity duration-700 select-none"
      />

      {/* Top washi tape on hero */}
      <div className="washi-tape px-6 py-1 font-mono text-xs font-bold text-black dark:text-[#FBBF24] rotate-[-1.5deg] mb-6 inline-block select-none transition-all">
        PORTFOLIO SCRAPBOOK
      </div>

      {/* Sticker Cloud Top */}
      <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mb-2 px-2">
        <span className="bg-[#F472B6] text-black font-mono font-extrabold text-xs px-3 py-1 rounded-full border-[2px] border-black shadow-brutal-sm rotate-[-3deg] hover:rotate-0 transition-all cursor-default">
          ★ HEY, I&apos;M NIKITA
        </span>
        <span className="bg-[#FBBF24] text-black font-mono font-extrabold text-xs px-3 py-1 border-[2px] border-black shadow-brutal-sm rotate-[2deg] hover:rotate-0 transition-all cursor-default">
          AI / ML ENGINEER +
        </span>
        <span className="bg-[#34D399] text-black font-mono font-extrabold text-xs px-3 py-1 rounded-full border-[2px] border-black shadow-brutal-sm rotate-[-2deg] hover:rotate-0 transition-all cursor-default">
          MUJ &apos;27
        </span>
        <div className="relative inline-block">
          <span className="bg-[#38BDF8] text-black font-mono font-extrabold text-xs px-3 py-1 border-[2px] border-black shadow-brutal-sm rotate-[3deg] inline-block hover:rotate-0 transition-all cursor-default">
            SOLVE THE HARD PROBLEMS
          </span>
          <span className="absolute -bottom-2.5 right-1 bg-white dark:bg-[#121212] text-black dark:text-[#38BDF8] font-mono font-extrabold text-[10px] px-2 py-0.2 border-[1.5px] border-black dark:border-[#2C2C2C] shadow-xs rotate-[-4deg] transition-all">
            [ FULL-STACK ]
          </span>
        </div>
      </div>

      {/* Giant Condensed Headline: NIKITA */}
      <div
        ref={headlineContainerRef}
        className="relative my-2 sm:my-4 select-none w-full max-w-5xl flex flex-col items-center justify-center px-4 sm:px-8 overflow-visible"
      >
        <h1
          className="font-syne font-black text-5xl xs:text-6xl sm:text-8xl md:text-[10rem] lg:text-[11.5rem] tracking-tighter leading-none text-black dark:text-[#F8FAFC] drop-shadow-[5px_5px_0px_rgba(245,158,11,0.9)] sm:drop-shadow-[8px_8px_0px_rgba(245,158,11,0.9)]"
        >
          <span ref={headlineTextRef} className="inline-block relative">
            <SparklesText
              text="NIKITA"
              sparklesCount={12}
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              className="tracking-tighter"
            />
          </span>
        </h1>

        {/* Looping Marquee Selection Interaction */}
        <HeroMarquee
          containerRef={headlineContainerRef}
          targetRef={headlineTextRef}
        />

        {/* Pinned tactile stickers overlapping the title */}
        <span
          data-interactive="true"
          className="absolute -bottom-3 left-2 sm:left-12 md:left-20 bg-[#A78BFA] text-black font-mono font-extrabold text-xs px-3 py-1 rounded-md border-[2px] border-black shadow-brutal-sm rotate-[-5deg] hover:rotate-0 transition-all z-30 cursor-default"
        >
          10+ CERTIFIED ↗
        </span>
      </div>

      {/* Punchy Hero Tagline */}
      <div className="mt-8 sm:mt-10 max-w-xl px-2 relative">
        <p className="font-syne font-black text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-tight text-black dark:text-[#F1F5F9] relative inline-block transition-colors">
          I build AI systems that{' '}
          <span className="inline-flex items-center gap-1 bg-[#FBBF24] border-[2.5px] border-black px-3 py-0.5 rounded-full shadow-brutal-sm rotate-[-1deg] text-black">
            <span>✳</span>
            <span>gets out</span>
          </span>{' '}
          of your way. <span className="text-[#FB7185] inline-block font-black">✦</span>
          <span className="absolute -right-2 -bottom-2 sm:-right-24 md:-right-32 sm:bottom-2 bg-[#34D399] text-black font-mono font-extrabold text-[10px] sm:text-xs px-3 py-1 rounded-md border-[2px] border-black shadow-brutal-sm rotate-[-5deg] hover:rotate-0 transition-all z-10 whitespace-nowrap">
            CURRENTLY BUILDING
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 max-w-3xl px-2">
        <span className="bg-white dark:bg-[#121212] border-[2px] border-black dark:border-[#2C2C2C] text-black dark:text-[#CBD5E1] px-3 py-1 rounded-full font-mono text-xs font-bold shadow-brutal-sm transition-all">
          15+ Projects
        </span>
        <span className="bg-[#FBBF24] border-[2px] border-black text-black px-3 py-1 rounded-full font-mono text-xs font-bold shadow-brutal-sm transition-all">
          LLMs / RAG / AI
        </span>
        <span className="bg-[#DDD6FE] dark:bg-[#C4B5FD] border-[2px] border-black text-black px-3 py-1 rounded-full font-mono text-xs font-bold shadow-brutal-sm transition-all">
          2023-27 B.Tech
        </span>
        <div className="flex items-center gap-2 bg-white dark:bg-[#121212] px-3 py-1 border-[2px] border-black dark:border-[#2C2C2C] rounded-full shadow-brutal-sm transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span className="font-mono text-xs font-bold text-black dark:text-[#34D399] tracking-wide">
            OPEN TO JOBS
          </span>
        </div>
      </div>

      {/* Direct CTA Buttons with Interactive Hover Liquid Fill Effect */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <InteractiveHoverButton
          text="Explore Work"
          hoverBgColor="bg-[#FBBF24]"
          hoverTextColor="text-black"
          onClick={() => {
            const el = document.getElementById('projects');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#projects');
            }
          }}
          className="!w-44 border-[2.5px] border-black bg-white text-black font-mono font-black text-sm py-2.5 shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] dark:bg-[#121212] dark:text-[#F1F5F9] dark:border-[#FBBF24] dark:shadow-[3.5px_3.5px_0px_#000000] hover:dark:shadow-[5px_5px_0px_#FBBF24] transition-all"
        />

        {/* Resume Dropdown */}
        <div className="relative inline-block" ref={resumeRef}>
          <div onClick={() => setResumeOpen(!resumeOpen)} className="cursor-pointer">
            <InteractiveHoverButton
              text="Resume ▾"
              hoverBgColor="bg-[#F472B6]"
              hoverTextColor="text-black"
              className="!w-36 border-[2.5px] border-black bg-white text-black font-mono font-black text-sm py-2.5 shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] dark:bg-[#121212] dark:text-[#F1F5F9] dark:border-[#F472B6] dark:shadow-[3.5px_3.5px_0px_#000000] hover:dark:shadow-[5px_5px_0px_#F472B6] transition-all"
            />
          </div>

          {resumeOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white dark:bg-[#121212] border-[2.5px] border-black dark:border-[#2C2C2C] rounded-xl shadow-brutal overflow-hidden z-50 animate-fadeIn">
              <a
                href={LINKS.resumes.aiMl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResumeOpen(false)}
                className="block px-4 py-2.5 font-mono text-xs font-bold text-black dark:text-[#F1F5F9] hover:bg-[#F5B838] hover:text-black transition-colors border-b border-black/15 dark:border-white/10 flex items-center justify-between"
              >
                <span>AI / ML Resume</span>
                <span>↗</span>
              </a>
              <a
                href={LINKS.resumes.sde}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResumeOpen(false)}
                className="block px-4 py-2.5 font-mono text-xs font-bold text-black dark:text-[#F1F5F9] hover:bg-[#34D399] hover:text-black transition-colors flex items-center justify-between"
              >
                <span>SDE Resume</span>
                <span>↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
