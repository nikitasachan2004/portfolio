import React from 'react';
import { SparklesText } from './ui/sparkles-text';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative">
      <div className="folder-tab bg-[#FBBF24] text-black">
        ABOUT 01 // SNAPSHOT
      </div>

      <div className="bg-white border-[3px] border-black shadow-brutal-lg p-5 sm:p-8 md:p-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Physical Polaroid Photo Card */}
          <div className="md:col-span-5 flex justify-center">
            <div className="polaroid rotate-[-3deg] w-full max-w-sm relative">
              {/* Polaroid top washi tape */}
              <div className="washi-tape-pink absolute -top-3 left-8 px-5 py-0.5 text-[10px] font-mono font-bold rotate-[-2deg] select-none">
                NIKITA.JPG
              </div>

              {/* Avatar Graphic Card Frame */}
              <div className="w-full aspect-[4/4.5] bg-[#FEF08A] border-[2px] border-black flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                {/* Handcrafted Neo-Brutalist Illustrated Avatar */}
                <div className="w-28 h-28 rounded-full bg-white border-[3px] border-black flex items-center justify-center shadow-brutal mb-2 select-none hover:scale-105 transition-transform overflow-hidden relative">
                  <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle cx="60" cy="60" r="58" fill="#FDE047" stroke="#000" strokeWidth="4" />
                    
                    {/* Hair Back */}
                    <path
                      d="M25 80 C20 45 40 18 60 18 C80 18 100 45 95 80 C90 92 88 102 88 108 L32 108 C32 102 30 92 25 80 Z"
                      fill="#1E293B"
                    />

                    {/* Neck */}
                    <rect x="52" y="74" width="16" height="18" fill="#FBCFE8" stroke="#000" strokeWidth="2.5" />

                    {/* Face Base */}
                    <ellipse cx="60" cy="56" rx="26" ry="29" fill="#FDE2D6" stroke="#000" strokeWidth="3" />

                    {/* Hair Front / Fringe */}
                    <path
                      d="M34 45 C38 32 50 25 60 25 C70 25 82 32 86 45 C78 38 68 36 60 38 C52 36 42 38 34 45 Z"
                      fill="#0F172A"
                      stroke="#000"
                      strokeWidth="2.5"
                    />
                    {/* Side hair strands */}
                    <path d="M34 45 C32 60 34 76 38 84" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
                    <path d="M86 45 C88 60 86 76 82 84" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />

                    {/* Eyebrows */}
                    <path d="M43 45 Q50 42 54 44" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M66 44 Q70 42 77 45" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Glasses Frame (Bold Neo-Brutal Eyewear) */}
                    <rect x="40" y="48" width="16" height="13" rx="3" fill="#FFFFFF" fillOpacity="0.75" stroke="#000" strokeWidth="3" />
                    <rect x="64" y="48" width="16" height="13" rx="3" fill="#FFFFFF" fillOpacity="0.75" stroke="#000" strokeWidth="3" />
                    {/* Bridge */}
                    <path d="M56 53 L64 53" stroke="#000" strokeWidth="3" />

                    {/* Eyes inside glasses */}
                    <circle cx="48" cy="54" r="2.5" fill="#000" />
                    <circle cx="72" cy="54" r="2.5" fill="#000" />
                    <circle cx="49" cy="53" r="0.8" fill="#FFF" />
                    <circle cx="73" cy="53" r="0.8" fill="#FFF" />

                    {/* Nose */}
                    <path d="M60 58 Q62 63 59 64" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />

                    {/* Cheerful Smile with blush */}
                    <path d="M52 69 Q60 76 68 69" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <ellipse cx="43" cy="65" rx="3.5" ry="2" fill="#F43F5E" fillOpacity="0.4" />
                    <ellipse cx="77" cy="65" rx="3.5" ry="2" fill="#F43F5E" fillOpacity="0.4" />

                    {/* Hoodie / Shoulders */}
                    <path
                      d="M28 112 C30 92 42 86 60 86 C78 86 90 92 92 112 Z"
                      fill="#38BDF8"
                      stroke="#000"
                      strokeWidth="3"
                    />
                    {/* Hoodie string / zipper */}
                    <path d="M60 86 L60 112" stroke="#000" strokeWidth="2" strokeDasharray="3 2" />
                    <circle cx="56" cy="98" r="2" fill="#FFF" stroke="#000" strokeWidth="1.5" />
                    <circle cx="64" cy="98" r="2" fill="#FFF" stroke="#000" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="bg-white border-[2px] border-black px-3 py-0.5 rounded-md font-mono text-xs font-black text-black shadow-xs">
                  <SparklesText
                    text="Nikita"
                    sparklesCount={6}
                    colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                  />{' '}
                  Sachan
                </div>
                <span className="font-mono text-[10px] text-black/90 mt-1 font-bold">
                  CS &amp; AI @ Manipal University Jaipur
                </span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="font-mono text-[9px] bg-black text-white px-2 py-0.5 rounded-full font-extrabold tracking-wider">
                    BATCH &apos;27
                  </span>
                  <span className="font-mono text-[9px] bg-[#FBBF24] text-black border border-black px-1.5 py-0.5 rounded-full font-black">
                    CGPA: 9.1
                  </span>
                </div>
              </div>

              <div className="mt-3 flex justify-between items-center px-1">
                <span className="font-hand text-xl font-bold text-black">
                  Nikita S. (that&apos;s me!)
                </span>
                <span className="font-mono text-[10px] bg-black text-white px-1.5 py-0.5 rounded font-bold">
                  VER. 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right: Ruled Paper Card with Tab "What's up" */}
          <div className="md:col-span-7 bg-[#FFFDF7] border-[2.5px] border-black p-6 sm:p-8 rounded-xl shadow-brutal relative">
            <div className="inline-block bg-[#FBBF24] text-black border-[2px] border-black px-3 py-1 font-mono text-xs font-black shadow-brutal-sm mb-4">
              WHAT&apos;S UP ✏
            </div>

            <p className="font-kalam text-lg sm:text-xl font-medium leading-relaxed text-black">
              I&apos;m an <strong className="bg-[#FBBF24] px-1 font-black">AI/ML Engineer &amp; Full-Stack Developer</strong> who gets genuinely excited about turning convoluted research papers and noisy real-world datasets into human-centered software.
            </p>

            <p className="font-kalam text-base sm:text-lg text-black/80 mt-4 leading-relaxed">
              I care about the small details, the edge cases everyone else forgets, and shipping end-to-end architectures that make someone&apos;s everyday decisions faster and simpler.
            </p>

            {/* Saturated pastel badges replicating mockup style */}
            <div className="mt-6 pt-5 border-t-2 border-dashed border-black/20 flex flex-wrap gap-2.5">
              <span className="bg-[#FBBF24] text-black border-[2px] border-black px-3.5 py-1 text-xs font-mono font-bold shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                Machine Learning / Deep Learning
              </span>
              <span className="bg-[#34D399] text-black border-[2px] border-black px-3.5 py-1 text-xs font-mono font-bold shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                Computer Vision
              </span>
              <span className="bg-[#818CF8] text-black border-[2px] border-black px-3.5 py-1 text-xs font-mono font-bold shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                Full-Stack Systems
              </span>
              <span className="bg-[#38BDF8] text-black border-[2px] border-black px-3.5 py-1 text-xs font-mono font-bold shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                LLM & RAG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
