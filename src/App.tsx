import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsDeck } from './components/ProjectsDeck';
import { SkillsToolkit } from './components/SkillsToolkit';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CrowdCanvas } from './components/ui/skiper39';
import { VisitorCounter } from './components/VisitorCounter';
import { Project } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'new' | 'old'>('new');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Synchronize browser history and window message communication
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.view === 'old') {
        setCurrentView('old');
      } else {
        setCurrentView((prev) => {
          if (prev === 'old') {
            window.scrollTo({ top: 0, behavior: 'instant' });
            return 'new';
          }
          return prev;
        });
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'BACK_TO_NEW') {
        handleBackToNew();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleOpenOldPortfolio = () => {
    // Push history entry so Back button navigates to new portfolio
    window.history.pushState({ view: 'old' }, '', window.location.pathname);
    setCurrentView('old');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToNew = () => {
    if (window.history.state?.view === 'old') {
      window.history.back();
    } else {
      setCurrentView('new');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <AnimatePresence mode="wait">
      {currentView === 'new' ? (
        <motion.div
          key="new-portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-black dark:text-[#F3F4F6] font-grotesk min-h-screen overflow-x-hidden selection:bg-[#FBBF24] selection:text-black relative transition-colors duration-300"
        >
          {/* Left notebook red margin wire line */}
          <div aria-hidden="true" className="margin-rule"></div>

          {/* Floating Navigation Bar */}
          <Navbar />

          {/* Main Portfolio Scrapbook Canvas */}
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 space-y-20 sm:space-y-24 relative z-10">
            {/* Panel 1: Hero */}
            <Hero />

            {/* Panel 2: About 01 // Snapshot */}
            <AboutSection />

            {/* Panel 3: Philosophy // How I Work */}
            <PhilosophySection />

            {/* Panel 4: Experience 02 // Logbook */}
            <ExperienceSection />

            {/* Panel 5: Projects 03 // Portfolio Cards */}
            <ProjectsDeck onSelectProject={handleOpenModal} />

            {/* Panel 6: Skills 04 // Toolkit */}
            <SkillsToolkit />

            {/* Panel 7: Credentials 05 // Education & Certs */}
            <CredentialsSection />

            {/* Panel 8: Outbox 06 // Dispatch */}
            <ContactSection />
          </main>

          {/* Full-Height Handcrafted Crowd Canvas Footer */}
          <footer className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[560px] overflow-hidden z-20 flex flex-col justify-between items-center">
            {/* The Crowd Canvas spanning the entire footer area, perfectly blended with notebook paper */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:invert opacity-95 dark:opacity-85"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%)',
              }}
            >
              <CrowdCanvas
                src="https://cdn.21st.dev/assets/localized/abdb8990a7bef8c2f5af3e45f0a3c969c4b0603fba8be92e81347de4ea4e1ed7.png"
                rows={15}
                cols={7}
                className="absolute bottom-0 h-full w-full pointer-events-none"
              />
            </div>

            {/* Top: MK-1 Sticker + Small, sleek, floating "My First Project" yellow button */}
            <div className="relative z-30 pt-6 sm:pt-8 flex flex-col items-center select-none">
              {/* Iron Man MK-1 Sticker (Washi tape style matching scrapbook reference) */}
              <div className="washi-tape-blue inline-flex items-center gap-2.5 px-3.5 sm:px-4.5 py-1 font-mono text-black rotate-[-1.5deg] select-none hover:rotate-0 hover:scale-105 transition-all mb-3 cursor-default">
                <img
                  src="/IRON.svg"
                  alt="Iron Man"
                  className="h-7 sm:h-8 w-auto shrink-0 object-contain drop-shadow-xs"
                />
                <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-tight uppercase text-black">
                  MK-1: BUILT THIS IN A CAVE WITH A BOX OF SCRAPS!
                </span>
              </div>

              {/* Small Yellow My First Project Button */}
              <button
                type="button"
                id="btn-my-first-portfolio"
                onClick={handleOpenOldPortfolio}
                aria-label="View My First Project archive"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-black text-black bg-[#FBBF24] hover:bg-[#F59E0B] border-[1.5px] border-black shadow-brutal-sm hover:shadow-brutal transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="text-black group-hover:rotate-45 transition-transform duration-200 text-xs">✦</span>
                <span className="tracking-wide uppercase text-[11px]">My First Project</span>
                <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </button>
            </div>

            {/* Bottom: Clean copyright line with zero watermark */}
            <div className="relative z-30 w-full py-3 flex items-center justify-center font-mono text-[10px] text-black/50 dark:text-white/40">
              <span>© {new Date().getFullYear()} Nikita Sachan · All Rights Reserved</span>
            </div>

            {/* Bottom Corner: Visitor Counter Sticker */}
            <VisitorCounter />
          </footer>

          {/* Interactive Project Inspector Modal */}
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </motion.div>
      ) : (
        <motion.div
          key="old-portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 w-full h-full bg-[#f6f4ef] dark:bg-[#1B1F1E] z-50 flex flex-col"
        >
          {/* Top navigation header for Old Portfolio view */}
          <header className="h-12 bg-white/95 dark:bg-[#202524]/95 backdrop-blur border-b border-[#e5e3dc] dark:border-[#323938] px-4 sm:px-6 flex items-center justify-between shadow-xs shrink-0 z-50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="font-mono text-xs font-bold text-gray-800 dark:text-gray-200">
                ARCHIVED FIRST PORTFOLIO (V1)
              </span>
            </div>

            <button
              type="button"
              id="btn-back-to-new"
              onClick={handleBackToNew}
              aria-label="Back to new portfolio"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold bg-[#1B1F1E] dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm cursor-pointer border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]"
            >
              <span>←</span>
              <span>Back to new portfolio</span>
            </button>
          </header>

          {/* Fully isolated iframe hosting the intact Old Portfolio */}
          <iframe
            src="/old-portfolio/index.html"
            title="Nikita Sachan — First Portfolio"
            id="old-portfolio-frame"
            className="w-full flex-1 border-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
