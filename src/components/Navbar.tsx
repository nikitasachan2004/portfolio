import React, { useState, useEffect, useRef } from 'react';
import Switch from './ui/sky-toggle';
import { LINKS } from '../data/links';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

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

  // Background scroll lock when mobile/tablet menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click outside listener to dismiss menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

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
      {/* Dimmed backdrop when mobile/tablet drawer is open */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs lg:hidden pointer-events-auto z-40 transition-opacity"
        />
      )}

      <div ref={navContainerRef} className="max-w-5xl w-full pointer-events-auto relative z-50">
        <nav
          id="main-nav"
          className="w-full bg-white/95 backdrop-blur border-[2.5px] border-black shadow-brutal rounded-full px-3.5 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-200 select-none"
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

          {/* Desktop Jump Navigation Links (>= 1024px untouched) */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider py-1">
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
              aria-label="Let's Talk"
              className="shrink-0 inline-flex items-center justify-center bg-[#FB7185] hover:bg-[#F43F5E] text-black border-[2px] border-black font-syne font-black text-[10px] sm:text-xs px-3.5 py-1 min-h-[36px] sm:min-h-0 rounded-full shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all tracking-wider uppercase cursor-pointer"
            >
              LET&apos;S TALK
            </a>

            {/* Mobile / Tablet menu toggle (< 1025px) with min 44x44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-sm font-mono font-bold bg-[#FAF8F3] dark:bg-[#1E283A] border-[1.5px] border-black dark:border-[#3D4F6E] rounded-full text-black dark:text-[#E8EDF5] shadow-brutal-sm hover:bg-[#FBBF24] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile / Tablet Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white dark:bg-[#18202F] border-[2.5px] border-black dark:border-[#3D4F6E] shadow-brutal-lg rounded-2xl p-4 lg:hidden flex flex-col gap-1.5 z-50 text-black dark:text-[#E8EDF5] animate-fadeIn">
            <div className="flex items-center justify-between px-2 pb-2.5 border-b border-black/20 dark:border-white/10 mb-1">
              <span className="font-mono text-xs font-black text-black/70 dark:text-[#9BAAC0] uppercase tracking-wider">Theme / Mode</span>
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
                className="min-h-[44px] px-3.5 py-2 font-mono text-sm font-bold rounded-lg hover:bg-[#F5B838] hover:text-black transition-colors border border-transparent hover:border-black flex items-center justify-between text-black dark:text-[#E8EDF5] cursor-pointer"
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2.5 h-2.5 rounded-full bg-black dark:bg-[#F5B838]"></span>
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
                className="w-full min-h-[44px] flex items-center justify-center text-center bg-[#FB7185] hover:bg-[#F43F5E] text-black border-[2px] border-black font-syne font-black text-xs py-2.5 rounded-full shadow-brutal-sm uppercase tracking-wider cursor-pointer"
              >
                LET&apos;S TALK
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

