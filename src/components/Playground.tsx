import React, { useState } from 'react';

export const Playground: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'whoami', output: 'Nikita Sachan — AI/ML Engineer @ MUJ Jaipur' },
    { cmd: 'weights', output: 'quantized 4-bit // 48.2 tok/sec // memory: 1.4GB' }
  ]);
  const [latentSeed, setLatentSeed] = useState(42);
  const [afkStatus, setAfkStatus] = useState('AFK: Training models ☕');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available: whoami, weights, stack, ping, status, clear';
        break;
      case 'whoami':
        output = 'Nikita Sachan — CS & AI @ MUJ | Full-Stack ML Engineer';
        break;
      case 'weights':
        output = 'PyTorch FP16 quantized to INT4 | VRAM: 1.8GB | 48.2 tok/s';
        break;
      case 'stack':
        output = 'PyTorch, FastAPI, React, YOLOv8, Whisper, LangChain';
        break;
      case 'ping':
        output = 'pong! [latency: 14ms]';
        break;
      case 'status':
        output = 'All pipelines nominal. 7 projects shipped & active.';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `Command not recognized: "${cmd}". Type "help" for commands.`;
    }

    setTerminalHistory(prev => [...prev.slice(-3), { cmd, output }]);
    setTerminalInput('');
  };

  const handleQuickCmd = (c: string) => {
    setTerminalInput(c);
  };

  const toggleAfk = () => {
    const statuses = [
      'AFK: Training models ☕',
      'ACTIVE: Debugging ONNX graphs ⚡',
      'AFK: Reading ArXiv papers 📚',
      'LIVE: Tuning hyperparameters 🎛️'
    ];
    const currentIndex = statuses.indexOf(afkStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setAfkStatus(statuses[nextIndex]);
  };

  return (
    <section id="playground" className="relative">
      <div className="folder-tab bg-[#34D399] text-black">
        BOARD 02 // PLAYGROUND
      </div>

      {/* Main Pinboard Card */}
      <div className="relative bg-white border-[3px] border-black shadow-brutal-lg p-5 sm:p-8 md:p-10 overflow-hidden">
        {/* Header badge */}
        <div className="flex flex-col items-center mb-8 text-center">
          <span className="font-hand text-2xl md:text-3xl text-[#FB7185] -rotate-6">
            curated chaos &amp; artifacts
          </span>
          <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight text-black">
            JUST FOR FUN
          </h2>
        </div>

        {/* Scrapbook Grid Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative items-center">
          {/* Item 1: Vector Macintosh 128k Mockup with interactive CRT */}
          <div className="md:col-span-5 bg-[#EAE8E0] border-[2.5px] border-black p-4 rounded-xl shadow-brutal flex flex-col items-center relative">
            {/* Washi tape at top of Mac */}
            <div className="absolute -top-3 washi-tape px-4 py-0.5 text-[10px] font-mono font-bold">
              SYS_6.0.8 // BOOT
            </div>

            {/* Mac Bezel */}
            <div className="w-full bg-[#D6D2C4] border-[2px] border-black rounded-lg p-3 pt-4 flex flex-col items-center">
              {/* CRT Screen */}
              <div className="w-full min-h-48 bg-[#1A1A1A] border-[2px] border-black rounded-md p-3 flex flex-col justify-between font-mono text-xs text-[#34D399] shadow-inner">
                <div>
                  <div className="flex justify-between items-center text-white/40 text-[9px] border-b border-white/15 pb-1">
                    <span>LLM_REASONING_TERMINAL</span>
                    <span className="text-[#FBBF24]">v128k</span>
                  </div>

                  {/* Terminal history */}
                  <div className="mt-2 space-y-1.5 text-[11px] overflow-y-auto max-h-28">
                    {terminalHistory.map((item, idx) => (
                      <div key={idx} className="leading-tight">
                        <span className="text-white/60">&gt; {item.cmd}</span>
                        <div className="text-[#34D399] pl-2">{item.output}</div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive input row */}
                  <form onSubmit={handleCommand} className="mt-2 flex items-center gap-1 border-t border-white/10 pt-1.5">
                    <span className="text-[#34D399] font-bold">&gt;</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="try 'help', 'weights'..."
                      className="w-full bg-transparent text-[#34D399] outline-none text-[11px] font-mono placeholder:text-white/30"
                    />
                  </form>

                  {/* Quick buttons */}
                  <div className="flex gap-1 mt-2 pt-1 border-t border-white/10 text-[9px]">
                    {['help', 'whoami', 'stack'].map(c => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => handleQuickCmd(c)}
                        className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 rounded text-white/80 transition-colors"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-white/50 border-t border-white/20 pt-1 mt-2">
                  <span>[MUJ.AI.LAB]</span>
                  <span className="flex items-center gap-1 text-[#34D399]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Floppy Drive Slot & Rainbow Logo Mock */}
              <div className="w-full flex items-center justify-between px-2 mt-3">
                <div className="w-16 h-1.5 bg-black/70 rounded-full"></div>
                <div className="w-3.5 h-4 bg-[#FBBF24] border border-black rounded-sm flex items-center justify-center text-[8px] font-black shadow-xs">
                  ☺
                </div>
              </div>
            </div>
            <span className="font-mono text-xs font-bold mt-2 text-black/80">
              Macintosh 128K AI Terminal
            </span>
          </div>

          {/* Item 2: Polaroid - Neural Latent Space */}
          <div className="md:col-span-4 flex justify-center">
            <div 
              className="polaroid rotate-[-4deg] max-w-xs w-full relative cursor-pointer"
              onClick={() => setLatentSeed(s => s + 1)}
              title="Click to re-sample latent vector!"
            >
              <div className="washi-tape-mint absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 text-[10px] font-mono font-bold whitespace-nowrap">
                TENSOR FLOW ✈
              </div>

              {/* Neural visualizer graphic box */}
              <div className="w-full h-44 bg-gradient-to-tr from-[#8B5CF6] via-[#F472B6] to-[#FBBF24] border-[2px] border-black flex flex-col items-center justify-center p-3 text-center text-white relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-black"
                  style={{ transform: `rotate(${latentSeed * 30}deg)` }}
                />
                <span className="font-mono font-extrabold text-2xl tracking-widest relative z-10 drop-shadow-md">
                  ⟨Z ~ N(0,I)⟩
                </span>
                <span className="font-mono text-[10px] mt-1 bg-black/70 px-2.5 py-0.5 rounded border border-white/20 relative z-10">
                  Seed #{latentSeed} · Click to Mutate
                </span>
              </div>
              <p className="font-hand text-xl font-bold text-black mt-2 text-center">
                latent space exploration ✦
              </p>
            </div>
          </div>

          {/* Item 3: Pinned Sticky Notes & Keycap Tooling */}
          <div className="md:col-span-3 space-y-4">
            {/* Sticky Note pinned with red pushpin */}
            <div className="bg-[#FEF08A] border-[2px] border-black p-4 shadow-brutal rotate-[3deg] relative hover:rotate-0 transition-transform">
              <div className="w-3.5 h-3.5 rounded-full bg-red-600 border border-black absolute -top-2 left-1/2 -translate-x-1/2 shadow"></div>
              <p className="font-hand text-lg font-bold text-black leading-snug">
                &ldquo;Design is how it works, not just how it looks.&rdquo;
              </p>
              <span className="font-mono text-[10px] block text-right mt-2 text-black/60">
                — Steve J. / ML Motto
              </span>
            </div>

            {/* Sticker: Infinite lore */}
            <div className="bg-[#A78BFA] border-[2px] border-black p-2.5 rounded-lg shadow-brutal-sm rotate-[-2deg] flex items-center gap-2 hover:rotate-0 transition-transform">
              <span className="text-xl">🧪</span>
              <div className="font-mono text-xs font-bold leading-tight">
                PromptQuest Engine<br />
                <span className="text-[10px] font-normal text-black/70">
                  infinite fantasy loops
                </span>
              </div>
            </div>

            {/* Pill: AFK status */}
            <button
              type="button"
              onClick={toggleAfk}
              title="Click to toggle status!"
              className="w-full bg-[#34D399] border-[2px] border-black px-3 py-1.5 rounded-full shadow-brutal-sm text-center font-mono text-xs font-extrabold hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
            >
              {afkStatus}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
