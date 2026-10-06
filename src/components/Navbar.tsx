import React, { useState, useEffect } from 'react';
import Switch from './ui/sky-toggle';
import { LINKS } from '../data/links';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'philosophy', 'experience', 'projects', 'skills', 'credentials', 'contact'];
      const scrollY = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId === 'philosophy' ? 'about' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = targetId === 'hero' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = targetId === 'hero' ? 0 : elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  };

  const navItems = LINKS.nav;

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4 flex justify-center pointer-events-none">
      <nav
        id="main-nav"
        className="pointer-events-auto max-w-5xl w-full bg-white/95 backdrop-blur border-[2.5px] border-black shadow-brutal rounded-full px-3.5 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-200 select-none"
      >
        {/* MacOS Window Window Controls */}
        <div aria-label="Window decorations" className="flex items-center gap-1.5 pl-1 shrink-0">
          <button
            type="button"
            title="Scroll to top"
            className="w-3 h-3 rounded-full bg-[#EF4444] border-[1.5px] border-black inline-block hover:scale-110 transition-transform cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <button
            type="button"
            title="Scroll down"
            className="w-3 h-3 rounded-full bg-[#F59E0B] border-[1.5px] border-black inline-block hover:scale-110 transition-transform cursor-pointer"
            onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
          />
          <button
            type="button"
            title="Scroll to bottom"
            className="w-3 h-3 rounded-full bg-[#10B981] border-[1.5px] border-black inline-block hover:scale-110 transition-transform cursor-pointer"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Jump Navigation Links */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all whitespace-nowrap cursor-pointer ${isActive
                    ? 'bg-[#FBBF24] border-[1.5px] border-black shadow-brutal-sm text-black font-black'
                    : 'hover:bg-black/5 text-black/80 font-bold'
                  }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black block shrink-0"></span>}
                <span className="leading-none mt-[1px]">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA Button: Switch Day/Night + Pink Pill LET'S TALK Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Day / Night Animated Sky Toggle */}
          <div className="flex items-center">
            <Switch size="12px" />
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            aria-label="Let's Connect"
            className="shrink-0 inline-flex items-center justify-center bg-[#FB7185] hover:bg-[#F43F5E] text-black border-[2px] border-black font-syne font-black text-[10px] sm:text-xs px-3.5 py-1 rounded-full shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all tracking-wider uppercase cursor-pointer"
          >
            LET&apos;S CONNECT
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-2.5 py-1 text-xs font-mono font-bold bg-[#FAF8F3] border-[1.5px] border-black rounded-full text-black"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-14 left-4 right-4 bg-white dark:bg-[#1A1F2C] border-[2.5px] border-black shadow-brutal-lg rounded-2xl p-4 md:hidden flex flex-col gap-2 z-50 text-black dark:text-white">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-black/20 dark:border-white/20 mb-1">
            <span className="font-mono text-xs font-bold text-black/70 dark:text-white/70 uppercase">Theme</span>
            <Switch size="12px" />
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, item.href);
              }}
              className="px-3 py-2 font-mono text-sm font-bold rounded-lg hover:bg-[#FBBF24] hover:text-black transition-colors border border-transparent hover:border-black flex items-center justify-between text-black dark:text-white cursor-pointer"
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
              )}
            </a>
          ))}
          <div className="pt-2 border-t border-black/20 dark:border-white/20 mt-1">
            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, '#contact');
              }}
              className="w-full text-center bg-[#FB7185] hover:bg-[#F43F5E] text-black border-[2px] border-black font-syne font-black text-xs py-2 rounded-full block shadow-brutal-sm uppercase tracking-wider cursor-pointer"
            >
              LET&apos;S CONNECT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
