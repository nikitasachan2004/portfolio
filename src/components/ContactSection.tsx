import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import { LINKS } from '../data/links';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [visits, setVisits] = useState<number | null>(null);
  const email = LINKS.emailRaw;

  useEffect(() => {
    fetch(LINKS.visitorCounter)
      .then((r) => r.json())
      .then((data) => {
        if (data && data.total) {
          setVisits(Number(data.total) + 269);
        }
      })
      .catch(() => {});
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="relative pb-12">
      {/* Folder Tab */}
      <div className="folder-tab bg-[#FBBF24] text-black">
        OUTBOX 06 // DISPATCH
      </div>

      <div className="bg-white border-[3px] border-black shadow-brutal-xl p-6 sm:p-10 md:p-14 relative overflow-hidden text-center flex flex-col items-center transition-colors">
        {/* Animated Floating Mascot Character Card */}
        <div className="mb-4">
          <CharacterCard
            size={120}
            bgColor="#FDE047"
            glowColor="rgba(251, 191, 36, 0.65)"
            floatAmplitude={10}
            floatDuration={3}
            alt="Nikita's mascot character"
          />
        </div>

        <h2 className="font-syne font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-black uppercase">
          LET&apos;S TALK
        </h2>

        <p className="font-grotesk text-base sm:text-xl font-medium max-w-lg mt-2 text-black/85 leading-relaxed">
          Got an ambitious project, an AI research question, an internship opportunity, or just want to chat about models?
        </p>

        {/* Pinned Manila Envelope / Note with washi tape at all 4 corners */}
        <div className="w-full max-w-xl bg-[#FEF9C3] border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-brutal-lg my-8 relative text-black">
          {/* 4 Washi Tapes at corners */}
          <div className="washi-tape-mint absolute -top-3 -left-3 px-4 py-0.5 text-[9px] font-mono font-bold rotate-[-12deg] select-none text-black">
            AIRMAIL
          </div>
          <div className="washi-tape absolute -top-3 -right-3 px-4 py-0.5 text-[9px] font-mono font-bold rotate-[15deg] select-none text-black">
            STAMP
          </div>
          <div className="washi-tape-pink absolute -bottom-3 -left-3 px-4 py-0.5 text-[9px] font-mono font-bold rotate-[8deg] select-none text-black">
            2026
          </div>
          <div className="washi-tape-blue absolute -bottom-3 -right-3 px-4 py-0.5 text-[9px] font-mono font-bold rotate-[-10deg] select-none text-black">
            CONFIDENTIAL
          </div>

          <div className="font-mono text-xs font-black text-black/70 uppercase mb-3 tracking-wider">
            // DIRECT INBOX DISPATCH
          </div>

          {/* Email display & Action Buttons Box */}
          <div className="bg-white border-[2.5px] border-black p-3.5 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-brutal-sm text-black">
            <span 
              id="email-address"
              className="font-mono text-sm sm:text-base font-black text-black select-all"
            >
              {email}
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className={`brutal-btn font-mono font-black text-xs px-4 py-2.5 rounded-lg flex-1 sm:flex-initial cursor-pointer transition-colors border-[2px] border-black ${
                  copied ? 'bg-[#34D399] text-black' : 'bg-[#FBBF24] text-black hover:bg-[#F59E0B]'
                }`}
              >
                {copied ? '✔ COPIED!' : 'COPY EMAIL'}
              </button>

              <a
                href={`mailto:${email}?subject=Hello%20Nikita%20—%20Let's%20Connect`}
                className="brutal-btn bg-black text-white hover:bg-neutral-800 font-mono font-black text-xs px-4 py-2.5 rounded-lg flex-1 sm:flex-initial text-center border-[2px] border-black"
              >
                SEND EMAIL ↗
              </a>
            </div>
          </div>

          <p 
            id="copy-notification"
            className={`font-mono text-xs font-black text-[#059669] mt-2.5 h-4 transition-opacity duration-200 ${
              copied ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ✔ Email copied to clipboard!
          </p>
        </div>

        {/* Dedicated "FIND ME" Social Channels Section */}
        <div className="w-full max-w-xl flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="bg-[#F472B6] text-black border-[2px] border-black px-4 py-1.5 font-mono text-xs sm:text-sm font-black uppercase shadow-brutal-sm -rotate-1 tracking-wider inline-block">
              ★ FIND ME ONLINE // SOCIAL CHANNELS
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nikita on GitHub"
              className="brutal-btn bg-black text-white hover:bg-neutral-800 font-mono font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 border-[2.5px] border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
            >
              <span className="text-base">⌨</span>
              <span>GITHUB</span>
              <span className="text-[10px] opacity-75">↗</span>
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nikita on LinkedIn"
              className="brutal-btn bg-[#0A66C2] text-white hover:bg-[#004182] font-mono font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 border-[2.5px] border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
            >
              <span className="text-base">💼</span>
              <span>LINKEDIN</span>
              <span className="text-[10px] opacity-75">↗</span>
            </a>

            <a
              href={LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nikita on LeetCode"
              className="brutal-btn bg-[#FFA116] text-black hover:bg-[#F59E0B] font-mono font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 border-[2.5px] border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
            >
              <span className="text-base">⚡</span>
              <span>LEETCODE</span>
              <span className="text-[10px] opacity-75">↗</span>
            </a>
          </div>
        </div>

        {/* Footer Colophon Credits */}
        <div className="mt-12 pt-6 border-t-2 border-black/20 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-black/75 gap-2">
          <div className="font-bold">
            Nikita Sachan · AI · ML · Data · Systems
          </div>
          {visits !== null && (
            <div className="flex items-center gap-1.5 bg-[#FAF8F3] dark:bg-[#1A1F2C] text-black dark:text-white border border-black/20 px-2.5 py-0.5 rounded-full select-none text-[11px] font-bold">
              <span>👁</span>
              <span>{visits.toLocaleString()} visits</span>
            </div>
          )}
          <div className="font-bold">
            © 2026 · Built with clarity &amp; code.
          </div>
        </div>
      </div>
    </section>
  );
};
