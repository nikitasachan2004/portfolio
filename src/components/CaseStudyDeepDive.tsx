import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface CaseStudyDeepDiveProps {
  onOpenModal: (project: Project) => void;
}

export const CaseStudyDeepDive: React.FC<CaseStudyDeepDiveProps> = ({ onOpenModal }) => {
  const [selectedStation, setSelectedStation] = useState<'delhi' | 'anand_vihar' | 'rk_puram' | 'jaipur'>('delhi');

  const stationsData = {
    delhi: {
      name: 'DELHI-NCR ENSEMBLE',
      coords: '28.6139° N, 77.2090° E',
      peakAqi: '342 µg/m³ (SEVERE)',
      h00: '145 µg/m³',
      h06: '260 µg/m³ (Rush Hour Spike)',
      h12: '342 µg/m³ (SEVERE ALERT)',
      h18: '190 µg/m³',
      bars: { h0: 8, h6: 12, h12: 15, h18: 10 }
    },
    anand_vihar: {
      name: 'ANAND VIHAR SENSOR #04',
      coords: '28.6508° N, 77.3152° E',
      peakAqi: '412 µg/m³ (HAZARDOUS)',
      h00: '180 µg/m³',
      h06: '315 µg/m³',
      h12: '412 µg/m³ (HAZARDOUS SPIKE)',
      h18: '240 µg/m³',
      bars: { h0: 9, h6: 14, h12: 18, h18: 11 }
    },
    rk_puram: {
      name: 'RK PURAM STATION #12',
      coords: '28.5665° N, 77.1767° E',
      peakAqi: '298 µg/m³ (VERY POOR)',
      h00: '120 µg/m³',
      h06: '235 µg/m³',
      h12: '298 µg/m³ (ALERT)',
      h18: '165 µg/m³',
      bars: { h0: 6, h6: 11, h12: 13, h18: 8 }
    },
    jaipur: {
      name: 'JAIPUR AJMER ROAD SENSOR',
      coords: '26.9124° N, 75.7873° E',
      peakAqi: '194 µg/m³ (MODERATE/POOR)',
      h00: '88 µg/m³',
      h06: '142 µg/m³',
      h12: '194 µg/m³ (AFTERNOON DUST)',
      h18: '128 µg/m³',
      bars: { h0: 4, h6: 7, h12: 9, h18: 6 }
    }
  };

  const cur = stationsData[selectedStation];
  const vayuProject = PROJECTS_DATA[0];

  const renderBar = (count: number) => {
    const total = 18;
    return '█'.repeat(count) + '░'.repeat(Math.max(0, total - count));
  };

  return (
    <section id="casestudy" className="relative">
      <div className="flex flex-wrap items-center gap-2">
        <div className="folder-tab bg-[#38BDF8] text-black border-b-0">
          CASE STUDY 07 // VAYUDRISHTI AQI FORECASTER
        </div>
        <div className="flex flex-wrap items-center gap-1 mb-1">
          <span className="bg-[#34D399] border-[1.5px] border-black px-2 py-0.5 font-mono text-[10px] font-bold">
            ENVIRONMENTAL AI
          </span>
          <span className="bg-[#FBBF24] border-[1.5px] border-black px-2 py-0.5 font-mono text-[10px] font-bold">
            BI-LSTM + LIGHTGBM
          </span>
          <span className="bg-[#A78BFA] border-[1.5px] border-black px-2 py-0.5 font-mono text-[10px] font-bold">
            SENTINEL-5P SATELLITE
          </span>
        </div>
      </div>

      <div className="bg-white border-[3px] border-black shadow-brutal-lg p-5 sm:p-8 md:p-10">
        {/* Case Study Title Bar */}
        <div className="border-b-2 border-black pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-extrabold text-black/60">
              ● DEEP DIVE SPECIFICATION SHEET
            </span>
            <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mt-1">
              VAYUDRISHTI
            </h2>
          </div>
          <p className="font-grotesk text-base sm:text-lg font-bold max-w-md text-black/80">
            &ldquo;Can we forecast dangerous PM2.5 air pollution spikes 24 hours before citizens step out into harmful smog?&rdquo;
          </p>
        </div>

        {/* Split Terminal & Stat Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Sleek Dark Terminal / Monitor Mockup */}
          <div className="lg:col-span-7 bg-[#121214] border-[3px] border-black rounded-xl p-4 sm:p-5 shadow-brutal flex flex-col justify-between text-white font-mono">
            <div>
              {/* Window top pill header */}
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-xs text-white/60 ml-2 hidden sm:inline">
                    vayudrishti_core_pipeline.py
                  </span>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-[#38BDF8] font-bold">
                  AQI SENSOR TELEMETRY
                </span>
              </div>

              {/* Station selector buttons */}
              <div className="flex flex-wrap gap-1 mb-3 text-[10px]">
                {(['delhi', 'anand_vihar', 'rk_puram', 'jaipur'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStation(st)}
                    className={`px-2 py-0.5 rounded border border-white/20 uppercase transition-all ${
                      selectedStation === st
                        ? 'bg-[#FBBF24] text-black font-extrabold border-black'
                        : 'bg-white/5 text-white/70 hover:bg-white/15'
                    }`}
                  >
                    {st.replace('_', ' ')}
                  </button>
                ))}
              </div>

              {/* Terminal Telemetry Mock Visualizer */}
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="text-white/60">
                  [06:00:12 IST] Connecting Copernicus Sentinel-5P Satellite feed...
                </div>
                <div className="text-[#34D399] font-bold">
                  [06:00:14 IST] SATELLITE_STREAM: {cur.coords} ({cur.name})
                </div>

                {/* Mock ASCII/Block Data Graph */}
                <div className="bg-black/60 p-3 rounded border border-white/15 my-2">
                  <div className="flex flex-wrap justify-between text-[11px] text-white/70 mb-1 gap-1">
                    <span>SENSOR ARRAY PM2.5 CONCENTRATION CURVE</span>
                    <span className="text-[#FB7185] font-bold">PEAK: {cur.peakAqi}</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#FBBF24] leading-relaxed whitespace-pre-wrap">
                    00h: [{renderBar(cur.bars.h0)}] {cur.h00}
                    <br />
                    06h: [{renderBar(cur.bars.h6)}] {cur.h06}
                    <br />
                    12h: [{renderBar(cur.bars.h12)}] {cur.h12}
                    <br />
                    18h: [{renderBar(cur.bars.h18)}] {cur.h18}
                  </div>
                </div>

                <div className="text-white/80 text-[11px]">
                  &gt; Ensemble inference completed with Gradient Boost + Bi-LSTM.<br />
                  &gt; Anomaly score: <span className="text-[#34D399]">0.021</span> (High confidence forecast window).
                </div>
              </div>
            </div>

            {/* Terminal footer badges */}
            <div className="border-t border-white/20 pt-3 mt-6 flex flex-wrap gap-2 text-[10px]">
              <span className="bg-white/10 px-2 py-1 rounded text-white font-mono">
                LATENCY: 142ms
              </span>
              <span className="bg-white/10 px-2 py-1 rounded text-white font-mono">
                STATION COUNT: 40+ CPCB
              </span>
              <span className="bg-[#34D399]/20 text-[#34D399] px-2 py-1 rounded font-mono font-bold">
                DEPLOYED // FASTAPI
              </span>
            </div>
          </div>

          {/* Right: Metric Stat Blocks in Solid Pastel Saturated Colors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Metric 1: Sky Blue */}
            <div className="bg-[#38BDF8] border-[2.5px] border-black p-5 sm:p-6 rounded-xl shadow-brutal flex-1">
              <span className="font-mono text-xs font-black uppercase tracking-wider block text-black/70">
                PREDICTION ACCURACY
              </span>
              <div className="font-syne font-black text-5xl sm:text-6xl text-black my-1">
                88%
              </div>
              <p className="font-grotesk text-xs sm:text-sm font-semibold text-black/90">
                Maintained across rolling 24-hour horizons validated against Central Pollution Control Board physical monitoring rigs.
              </p>
            </div>

            {/* Metric 2: Mint Green */}
            <div className="bg-[#34D399] border-[2.5px] border-black p-5 sm:p-6 rounded-xl shadow-brutal flex-1">
              <span className="font-mono text-xs font-black uppercase tracking-wider block text-black/70">
                LATENCY OPTIMIZATION
              </span>
              <div className="font-syne font-black text-5xl sm:text-6xl text-black my-1">
                -42%
              </div>
              <p className="font-grotesk text-xs sm:text-sm font-semibold text-black/90">
                Reduced inference bottleneck via ONNX runtime model graph distillation and caching recurrent feature embeddings.
              </p>
            </div>

            {/* Coral Quote Banner */}
            <div className="bg-[#FB7185] border-[2.5px] border-black p-4 rounded-xl shadow-brutal">
              <p className="font-mono text-xs font-bold text-black flex items-center gap-2">
                <span>✦</span> Zero friction for public health dashboards &amp; city advisories.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Linkout */}
        <div className="mt-8 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-mono text-xs font-bold text-black/70">
            ARCHIVE ENTRY // PROJECT.ML.VAYU.2026
          </div>
          <button
            type="button"
            onClick={() => onOpenModal(vayuProject)}
            className="brutal-btn bg-black text-white font-mono font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:bg-neutral-800"
          >
            <span>READ FULL CASE STUDY MANIFESTO</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};
