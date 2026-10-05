import React from 'react';
import { MANIFESTO_CARDS } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative">
      <div className="folder-tab bg-[#FB7185] text-black">
        PHILOSOPHY // HOW I WORK
      </div>

      <div className="bg-white border-[3px] border-black shadow-brutal-lg p-5 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-black pb-4 mb-8">
          <div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl uppercase tracking-tight text-black">
              HOW I WORK
            </h2>
            <p className="font-mono text-xs text-black/70 mt-1">
              // THE 4 UNBREAKABLE PRINCIPLES GUIDING MY REPOSITORIES
            </p>
          </div>
          <div className="washi-tape px-4 py-1 font-mono text-black text-xs font-bold rotate-1 shrink-0 select-none">
            4-POINT MANIFESTO
          </div>
        </div>

        {/* 2x2 Colorful Grid with Stickers & Washi Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 pt-3">
          {MANIFESTO_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className={`${card.bgClass} border-[2.5px] border-black p-6 sm:p-7 rounded-xl shadow-brutal relative hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-200 flex flex-col justify-between text-black`}
            >
              {/* Top Washi Tape Accent */}
              {card.washiText && (
                <div
                  className={`absolute -top-3.5 left-6 font-mono text-[10px] font-black uppercase tracking-wider px-3 py-0.5 border border-black shadow-xs bg-white text-black select-none z-10 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-1'
                    }`}
                >
                  {card.washiText}
                </div>
              )}

              {/* Corner Tactile Sticker */}
              {card.sticker && (
                <div
                  className={`absolute -top-3 -right-2 font-mono text-[10px] sm:text-[11px] font-black tracking-wider px-2.5 py-1 bg-black text-white border-[1.5px] border-black shadow-brutal-sm rounded-sm uppercase select-none z-10 transition-transform group-hover:scale-105 ${idx % 2 === 0 ? 'rotate-3' : '-rotate-2'
                    }`}
                >
                  {card.sticker}
                </div>
              )}

              <div>
                <div className="mb-3.5 mt-1">
                  <span className={`${card.pillClass} border-[2px] border-black px-3 py-1 font-mono text-xs font-black shadow-xs inline-block`}>
                    {card.number} — {card.title}
                  </span>
                </div>
                <p className="font-grotesk text-sm sm:text-base leading-relaxed text-black/90 font-medium">
                  {card.description}
                </p>
              </div>

              {/* Bottom Metadata Rule */}
              <div className="mt-5 pt-3.5 border-t-2 border-black/15 flex items-center justify-between">
                <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-white/95 border border-black px-2 py-0.5 rounded shadow-2xs text-black">
                  // {card.subtag || 'PRINCIPLE'}
                </span>
                <span className="font-mono text-[10px] font-bold text-black/60 uppercase tracking-widest">
                  RULE #{card.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
