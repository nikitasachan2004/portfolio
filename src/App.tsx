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

          {/* Very Bottom: Subtle "My First Portfolio" link */}
          <footer className="pb-16 pt-4 flex flex-col items-center justify-center text-center relative z-20 px-4">
            <button
              type="button"
              id="btn-my-first-portfolio"
              onClick={handleOpenOldPortfolio}
              aria-label="View My First Portfolio archive"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold text-black/75 dark:text-white/75 bg-white/70 dark:bg-neutral-800/80 hover:bg-[#FBBF24] dark:hover:bg-[#FBBF24] hover:text-black dark:hover:text-black border-[1.5px] border-black/25 dark:border-white/20 hover:border-black shadow-2xs hover:shadow-brutal-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]"
            >
              <span className="text-[#F59E0B] group-hover:text-black transition-colors">✦</span>
              <span>My First Portfolio</span>
              <span className="text-[10px] opacity-75 group-hover:translate-x-0.5 transition-transform">↗</span>
            </button>
            <p className="font-mono text-[10px] text-black/50 dark:text-white/40 mt-2">
              Historical archive · Originally built with Three.js, R3F &amp; React
            </p>
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
