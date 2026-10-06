import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface DualShowcaseProps {
  onOpenModal: (project: Project) => void;
}

export const DualShowcase: React.FC<DualShowcaseProps> = ({ onOpenModal }) => {
  const cookProject = PROJECTS_DATA.find((p) => p.title.toLowerCase().includes('cook')) || PROJECTS_DATA[0];
  const mandiProject = PROJECTS_DATA.find((p) => p.title.toLowerCase().includes('krishi')) || PROJECTS_DATA[1];

  // Interactive CookAI state
  const [activeCookPreset, setActiveCookPreset] = useState<number>(0);
  const cookPresets = [
    {
      items: ['Greek Yogurt (450g)', 'Baby Spinach (200g)', 'Cherry Tomatoes & Garlic'],
      recipe: 'Roasted Garlic Spinach Tzatziki Bowl',
      time: '15 mins',
      macros: '24g P · 12g C · 8g F'
    },
    {
      items: ['Paneer Cubes (250g)', 'Green Bell Peppers', 'Onion & Garam Masala'],
      recipe: 'Kadai Paneer Skillet with Charred Peppers',
      time: '18 mins',
      macros: '32g P · 14g C · 22g F'
    },
    {
      items: ['Rolled Oats (150g)', 'Ripe Banana', 'Peanut Butter & Chia Seeds'],
      recipe: 'Overnight Protein Crunch Energy Bowl',
      time: '5 mins',
      macros: '18g P · 48g C · 14g F'
    }
  ];

  // Interactive KrishiMind state
  const [activeMandiPreset, setActiveMandiPreset] = useState<number>(0);
  const mandiPresets = [
    {
      crop: 'JAIPUR DISTRICT (RAJASTHAN)',
      price: 'Mustard Yield: 1.82 T/Ha · ₹5,420/Q',
      trend: '+14% Eco-Score',
      trendPositive: true,
      query: 'Simulate +2°C Heatwave Stress Test',
      advice: 'Heat-tolerant variety recommended. 18% water conservation advantage over wheat.'
    },
    {
      crop: 'KOTA DISTRICT (RAJASTHAN)',
      price: 'Soybean Yield: 2.15 T/Ha · ₹4,750/Q',
      trend: '+8.5% Net Profit',
      trendPositive: true,
      query: 'Simulate -20% Monsoon Deficit Drought',
      advice: 'Deep root structure minimizes yield decline. Fertilizer nitrogen runoff reduced by 22%.'
    },
    {
      crop: 'INDORE DISTRICT (MADHYA PRADESH)',
      price: 'Chickpea Yield: 1.64 T/Ha · ₹5,890/Q',
      trend: '+19% Eco-Score',
      trendPositive: true,
      query: 'Multi-Criteria Sustainable Optimization',
      advice: 'Optimal crop rotation candidate. Enhances soil nitrogen fixing for subsequent Kharif cycle.'
    }
  ];

  const currentCook = cookPresets[activeCookPreset];
  const currentMandi = mandiPresets[activeMandiPreset];

  return (
    <section className="space-y-6">
      <div className="folder-tab bg-[#A78BFA] text-black">
        DUAL SHOWCASE 08 // PRODUCT SLICES
      </div>

      {/* Split Dual Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1 ("CookAI" - Dark Cobalt Tech Style) */}
        <div className="bg-[#18181B] text-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-brutal-lg flex flex-col justify-between relative overflow-hidden">
          {/* Chamfered/Sticker Tab */}
          <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
            <span className="bg-[#3B82F6] text-white border-[2px] border-black px-3 py-1 font-mono text-xs font-extrabold shadow-brutal-sm">
              ◆ PROJECT #02 // SMART PANTRY
            </span>
            <span className="washi-tape text-black px-3 py-0.5 font-mono text-[10px] font-bold rotate-2">
              TF-IDF + GEMINI 2.5
            </span>
          </div>

          <div>
            <h3 className="font-syne font-black text-3xl sm:text-4xl text-white">
              CookAI Engine
            </h3>
            <p className="font-grotesk text-sm text-white/80 mt-2 max-w-md">
              From leftover fridge ingredients to verified recipes. Solves the empty-fridge dilemma using TF-IDF vector matching and Gemini 2.5 Flash.
            </p>

            {/* Interactive Fridge preset selector */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Greek Yogurt & Greens', 'Tofu & Peppers (Swap)', 'Oats & Banana'].map((lbl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCookPreset(idx)}
                  className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded border transition-all cursor-pointer ${
                    activeCookPreset === idx
                      ? 'bg-[#38BDF8] text-black border-black font-extrabold shadow-xs'
                      : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>

            {/* Embedded Mock Phone/Card */}
            <div className="bg-[#27272A] border-[2px] border-white/20 rounded-xl p-4 mt-4 font-mono text-xs text-white/90 shadow-inner">
              <div className="flex justify-between text-[#34D399] text-[11px] pb-2 border-b border-white/10 font-bold">
                <span>TF-IDF INGREDIENT RETRIEVAL</span>
                <span>{currentCook.items.length} INGREDIENTS INDEXED</span>
              </div>
              <div className="mt-2 space-y-1 text-white/70 text-[11px]">
                {currentCook.items.map((item, i) => (
                  <div key={i}>• {item}</div>
                ))}
              </div>
              <div className="mt-3 bg-[#3B82F6]/30 border border-[#3B82F6] p-2.5 rounded text-[#38BDF8] text-[11px]">
                <div className="font-bold flex items-center justify-between">
                  <span>💡 {currentCook.recipe}</span>
                  <span className="text-white/80 text-[10px] bg-[#3B82F6] px-1.5 py-0.5 rounded text-white">
                    {currentCook.time}
                  </span>
                </div>
                <div className="text-white/70 text-[10px] mt-1 font-mono">
                  Macros: {currentCook.macros}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="font-mono text-xs text-white/60">
              React 19 · Node.js · Express · Gemini 2.5
            </span>
            <button
              type="button"
              onClick={() => onOpenModal(cookProject)}
              className="brutal-btn bg-white text-black font-mono font-bold text-xs px-4 py-1.5 rounded-full hover:bg-[#FBBF24] cursor-pointer"
            >
              Examine ↗
            </button>
          </div>
        </div>

        {/* Card 2 ("KrishiMind SustainAI" - Solid Rich Mustard Yellow Container) */}
        <div className="bg-[#F59E0B] text-black border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-brutal-lg flex flex-col justify-between relative">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
            <span className="bg-black text-white border-[2px] border-black px-3 py-1 font-mono text-xs font-extrabold shadow-brutal-sm">
              ◆ PROJECT #03 // AGRI-TECH &amp; CLIMATE
            </span>
            <span className="washi-tape-mint text-black px-3 py-0.5 font-mono text-[10px] font-bold -rotate-2">
              DUAL ML + GREEN AI
            </span>
          </div>

          <div>
            <h3 className="font-syne font-black text-3xl sm:text-4xl text-black">
              KrishiMind SustainAI
            </h3>
            <p className="font-grotesk text-sm text-black/90 mt-2 max-w-md font-medium">
              Agro-climatic decision engine across 706 districts: forecasts empirical yields &amp; mandi rates while simulating climate stress in sub-15ms.
            </p>

            {/* Interactive Commodity preset selector */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Jaipur Mustard (+2°C)', 'Kota Soybean (-20% Rain)', 'Indore Chickpea (Eco)'].map((cropName, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveMandiPreset(idx)}
                  className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded border-[1.5px] border-black transition-all cursor-pointer ${
                    activeMandiPreset === idx
                      ? 'bg-black text-white font-extrabold shadow-xs'
                      : 'bg-white/80 text-black hover:bg-white'
                  }`}
                >
                  {cropName}
                </button>
              ))}
            </div>

            {/* Embedded Mock Tablet/Chart Card */}
            <div className="bg-white border-[2.5px] border-black rounded-xl p-4 mt-4 shadow-brutal font-mono text-xs">
              <div className="flex justify-between items-center text-black font-bold pb-2 border-b border-black/20">
                <span className="text-[11px] truncate max-w-[200px]">{currentMandi.crop}</span>
                <span className={`font-black ${currentMandi.trendPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {currentMandi.trend}
                </span>
              </div>
              <div className="mt-2 text-black/80 text-[11px] leading-relaxed">
                <div className="font-semibold text-black">{currentMandi.price}</div>
                <div className="text-black/70 mt-1">{currentMandi.advice}</div>
              </div>
              <div className="mt-3 bg-[#34D399]/40 border border-black p-2 rounded text-[11px] font-bold">
                🌾 Stress Simulation: &ldquo;{currentMandi.query}&rdquo;
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-black/20 flex justify-between items-center">
            <span className="font-mono text-xs font-bold text-black/70">
              FastAPI · Next.js 15 · Scikit-Learn · &lt;15ms CPU
            </span>
            <button
              type="button"
              onClick={() => onOpenModal(mandiProject)}
              className="brutal-btn bg-black text-white font-mono font-bold text-xs px-4 py-1.5 rounded-full hover:bg-neutral-800 cursor-pointer"
            >
              Examine ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
