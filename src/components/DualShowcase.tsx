import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface DualShowcaseProps {
  onOpenModal: (project: Project) => void;
}

export const DualShowcase: React.FC<DualShowcaseProps> = ({ onOpenModal }) => {
  const cookProject = PROJECTS_DATA[1];
  const mandiProject = PROJECTS_DATA[2];

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

  // Interactive KrishiMandi state
  const [activeMandiPreset, setActiveMandiPreset] = useState<number>(0);
  const mandiPresets = [
    {
      crop: 'MUSTARD SEED (JAIPUR APMC)',
      price: '₹5,420 / QNTL',
      trend: '+4.2%',
      trendPositive: true,
      query: 'सरसों का भाव कल क्या रहेगा?',
      advice: 'Strong regional mill demand. Hold inventory for 48–72 hours.'
    },
    {
      crop: 'SHARBATI WHEAT (KOTA MANDI)',
      price: '₹2,680 / QNTL',
      trend: '+1.8%',
      trendPositive: true,
      query: 'कोटा मंडी में गेहूं का रेट आज क्या है?',
      advice: 'Procurement steady. Suitable for immediate sale at gate.'
    },
    {
      crop: 'YELLOW SOYBEAN (BARAN MANDI)',
      price: '₹4,750 / QNTL',
      trend: '-2.1%',
      trendPositive: false,
      query: 'सोयाबीन का ताजा भाव बताओ सा?',
      advice: 'High moisture arrivals. Dry produce before bringing to auction.'
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
              YOLOv8 + LLM
            </span>
          </div>

          <div>
            <h3 className="font-syne font-black text-3xl sm:text-4xl text-white">
              CookAI Engine
            </h3>
            <p className="font-grotesk text-sm text-white/80 mt-2 max-w-md">
              From raw refrigerator photograph to gourmet nutrient-balanced dinner. Zero food wasted, zero guesswork.
            </p>

            {/* Interactive Fridge preset selector */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Greek Yogurt & Greens', 'Paneer & Peppers', 'Oats & Banana'].map((lbl, idx) => (
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
                <span>INVENTORY SCANNED</span>
                <span>{currentCook.items.length} DETECTIONS</span>
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
              FastAPI · PyTorch · YOLOv8
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

        {/* Card 2 ("KrishiMandi AI" - Solid Rich Mustard Yellow Container) */}
        <div className="bg-[#F59E0B] text-black border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-brutal-lg flex flex-col justify-between relative">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
            <span className="bg-black text-white border-[2px] border-black px-3 py-1 font-mono text-xs font-extrabold shadow-brutal-sm">
              ◆ PROJECT #03 // AGRI-FINTECH
            </span>
            <span className="washi-tape-mint text-black px-3 py-0.5 font-mono text-[10px] font-bold -rotate-2">
              VOICE + XGBOOST
            </span>
          </div>

          <div>
            <h3 className="font-syne font-black text-3xl sm:text-4xl text-black">
              KrishiMandi AI
            </h3>
            <p className="font-grotesk text-sm text-black/90 mt-2 max-w-md font-medium">
              Real-time commodity mandi arbitrage intelligence. Multilingual voice queries in local vernacular dialects.
            </p>

            {/* Interactive Commodity preset selector */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Jaipur Mustard', 'Kota Wheat', 'Baran Soybean'].map((cropName, idx) => (
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
                  {currentMandi.price} ({currentMandi.trend})
                </span>
              </div>
              <div className="mt-2 text-black/80 text-[11px] leading-relaxed">
                <div className="font-semibold">{currentMandi.advice}</div>
              </div>
              <div className="mt-3 bg-[#34D399]/40 border border-black p-2 rounded text-[11px] font-bold">
                🎙 Vernacular Query: &ldquo;{currentMandi.query}&rdquo;
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-black/20 flex justify-between items-center">
            <span className="font-mono text-xs font-bold text-black/70">
              Python · Whisper · XGBoost
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
