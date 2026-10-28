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

              {/* Full-bleed Polaroid Photo Card Frame */}
              <div className="w-full aspect-[4/4.8] sm:aspect-[4/5] bg-black border-[2px] border-black relative overflow-hidden group rounded-xs">
                {/* Photo Filling Whole Box */}
                <img
                  src="/remote_work_tools.jpeg"
                  alt="Nikita Sachan"
                  className="w-full h-full object-cover object-[center_20%] select-none group-hover:scale-105 transition-transform duration-300"
                />

                {/* Top Corner Tactile Badge */}
                <div className="absolute top-2.5 right-2.5 z-10 select-none">
                  <span className="font-mono text-[9px] sm:text-[10px] bg-black/85 text-[#FBBF24] px-2.5 py-0.5 rounded-full font-black tracking-wider border border-[#FBBF24]/60 shadow-sm backdrop-blur-xs">
                    BATCH &apos;27
                  </span>
                </div>

                {/* Bottom Overlay Gradient & Name Badges */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 pt-10 bg-gradient-to-t from-black/90 via-black/55 to-transparent flex flex-col items-start z-10 select-none">
                  <div className="bg-white/95 dark:bg-black/80 backdrop-blur-xs border-[1.5px] border-black dark:border-white/20 px-2.5 py-0.5 rounded-md font-mono text-xs font-black text-black dark:text-[#F1F5F9] shadow-xs inline-flex items-center gap-1">
                    <span className="text-black dark:text-[#F1F5F9]">
                      <SparklesText
                        text="Nikita"
                        sparklesCount={4}
                        colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                      />
                    </span>
                    <span className="text-black dark:text-[#F1F5F9]">Sachan</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-white/90 mt-1 font-bold drop-shadow-sm">
                    CS &amp; AI @ Manipal University Jaipur
                  </span>
                </div>
              </div>

              <div className="mt-3 flex justify-between items-center px-1">
                <span className="font-hand text-xl font-bold text-black dark:text-[#F8FAFC]">
                  Nikita S. (that&apos;s me!)
                </span>
                <span className="font-mono text-[10px] bg-black dark:bg-[#1C1C1C] text-white dark:text-[#CBD5E1] px-1.5 py-0.5 rounded font-bold border border-transparent dark:border-[#2C2C2C]">
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

            <p className="font-kalam text-lg sm:text-xl font-medium leading-relaxed text-black dark:text-[#F1F5F9]">
              I&apos;m an <strong className="bg-[#FBBF24] text-black px-1 font-black">AI/ML Engineer &amp; Full-Stack Developer</strong> who gets genuinely excited about turning convoluted research papers and noisy real-world datasets into human-centered software.
            </p>

            <p className="font-kalam text-base sm:text-lg text-black/80 dark:text-[#CBD5E1] mt-4 leading-relaxed">
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
