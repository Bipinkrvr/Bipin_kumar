"use client";

import { useEffect, useState } from "react";
import { Zap, Database, Activity, Wifi, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    // Hardware locks onto the signal after 1.5 seconds
    const timer = setTimeout(() => setIsStable(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Switched to h-[100dvh] with uniform padding so the console fits perfectly in the window
    <section id="hero" className="relative w-full h-[100dvh] lg:min-h-[700px] lg:max-h-[1000px] flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-zinc-950">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* --- THE MASTER RECTANGULAR HMI CONSOLE --- */}
      {/* Set a strict height constraint here so it never pushes the DIN rail off-screen */}
      <div className="w-full max-w-[1400px] h-full max-h-[calc(100dvh-3rem)] flex flex-col relative z-10">
        
        {/* Top DIN Rail / Mounting Bracket */}
        <div className="w-[90%] mx-auto h-4 bg-zinc-800 border-x-4 border-t-4 border-zinc-700 rounded-t-lg flex justify-between items-center px-12 shadow-sm shrink-0 z-0">
           <div className="w-12 h-1 bg-zinc-950 rounded-full shadow-inner border border-zinc-900"></div>
           <div className="w-12 h-1 bg-zinc-950 rounded-full shadow-inner border border-zinc-900"></div>
        </div>

        {/* MAIN CHASSIS */}
        <div className="flex-grow flex flex-col bg-zinc-900 border-[6px] border-zinc-700 border-b-zinc-800 border-r-zinc-800 p-2 sm:p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-10 overflow-hidden">
          
          {/* Inner Plate */}
          <div className="flex-grow flex flex-col bg-[#0a0a0a] border border-zinc-800 rounded-lg p-4 sm:p-5 relative shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] gap-4 overflow-hidden">
            
            {/* Corner Screws */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 rotate-45"></div></div>
            <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 -rotate-12"></div></div>
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 rotate-90"></div></div>
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 rotate-0"></div></div>

            {/* --- ROW 1: HEADER STRIP (LEDs & Name) --- */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch h-auto md:h-20 shrink-0 z-20">
              
              {/* Status LEDs (Left) */}
              <div className="bg-zinc-950 border border-zinc-800/50 rounded-sm shadow-inner p-3 flex flex-row md:flex-col justify-around items-center w-full md:w-24 shrink-0">
                 <div className="flex flex-row md:flex-col items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full border border-zinc-950 transition-colors duration-300 ${isStable ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-zinc-800'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">SYS_OK</span>
                  </div>
                  <div className="flex flex-row md:flex-col items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full border border-zinc-950 transition-colors duration-300 ${isStable ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]' : 'bg-zinc-800'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">D_LINK</span>
                  </div>
                  <div className="flex flex-row md:flex-col items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full border border-zinc-950 transition-colors duration-300 ${!isStable ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse' : 'bg-zinc-800'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">FAULT</span>
                  </div>
              </div>

              {/* Massive Name Display (Center) */}
              <div className="flex-grow bg-[#050505] border-2 border-zinc-800 p-2 rounded-sm shadow-[inset_0_2px_15px_rgba(0,0,0,1)] relative overflow-hidden group flex flex-col justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-10"></div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-black tracking-tighter text-cyan-500/90 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] text-center relative z-20">
                  BIPIN_KUMAR
                </h1>
                
                <div className="mt-1 flex items-center gap-3 relative z-20 max-w-xl mx-auto w-full px-4">
                   <div className="h-1 flex-grow bg-zinc-900 border border-zinc-800 overflow-hidden">
                      <div className={`h-full bg-cyan-500 transition-all duration-[1500ms] ease-out ${isStable ? 'w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'w-[15%]'}`}></div>
                   </div>
                   <span className={`font-mono text-[8px] sm:text-[10px] uppercase transition-colors duration-300 w-24 text-right shrink-0 ${isStable ? 'text-cyan-400' : 'text-red-500 animate-pulse'}`}>
                      {isStable ? 'LOGIC_LOCKED' : 'CALIBRATING...'}
                   </span>
                </div>
              </div>

              {/* Model Info (Right) */}
              <div className="bg-zinc-950 border border-zinc-800/50 rounded-sm shadow-inner p-3 flex flex-col justify-center items-end w-full md:w-48 shrink-0">
                 <div className="text-[10px] font-mono text-zinc-400 font-bold leading-tight mb-1">UNIT: BK-INT-X9</div>
                 <div className="text-[8px] font-mono text-zinc-600 mb-2">FW: BIT.SINDRI.v6</div>
                 <Cpu className="w-5 h-5 text-zinc-700" />
              </div>

            </div>

            {/* --- ROW 2: MAIN 3-PANEL DASHBOARD --- */}
            {/* min-h-0 prevents flex children from pushing bounds out */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-4 h-full min-h-0 z-20">
              
              {/* LEFT PANEL: SYSTEM DIAGNOSTIC LOG (Col 1-3) */}
              <div className="lg:col-span-3 bg-zinc-950 border border-zinc-800 rounded-sm shadow-inner flex flex-col h-full overflow-hidden">
                <div className="bg-zinc-900 border-b border-zinc-800 px-3 py-2 flex items-center gap-2 shrink-0">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  <span className="font-mono text-[9px] text-zinc-400 font-bold tracking-widest">SYSTEM_LOG.exe</span>
                </div>
                
                <div className="p-4 font-mono text-xs text-zinc-400 space-y-4 leading-relaxed overflow-y-auto custom-scrollbar flex-grow">
                  <div>
                    <span className="text-emerald-400">{">"}</span> <strong className="text-zinc-200">IDENTIFICATION:</strong>
                    <p className="pl-3 mt-1">3rd-Year Electrical Engineering Node @ BIT Sindri.</p>
                  </div>
                  <div>
                    <span className="text-emerald-400">{">"}</span> <strong className="text-zinc-200">CORE_DIRECTIVE:</strong>
                    <p className="pl-3 mt-1">Bridging high-voltage physical hardware with scalable digital software architecture.</p>
                  </div>
                  <div>
                    <span className="text-emerald-400">{">"}</span> <strong className="text-zinc-200">CURRENT_STATE:</strong>
                    <p className="pl-3 mt-1">Discharging potential as Front-End Dev Intern. FW calibrated for IoT telemetry & Server-Driven UIs.</p>
                  </div>
                  <p className={`text-emerald-500/70 pt-2 text-[10px] ${isStable ? 'animate-pulse' : 'hidden'}`}>
                    <span className="opacity-50">_</span>WAITING_FOR_INPUT...
                  </p>
                </div>
              </div>

              {/* CENTER PANEL: TELEMETRY OSCILLOSCOPE (Col 4-9) */}
              <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 rounded-sm p-2 shadow-inner flex flex-col h-full relative">
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-zinc-900/80 px-2 py-1 rounded border border-zinc-800 backdrop-blur-sm">
                  <span className="font-mono text-[8px] text-zinc-400 font-bold tracking-widest">TELEMETRY_FEED</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isStable ? 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'bg-red-500 animate-pulse'}`}></div>
                </div>
                
                {/* Screen */}
                <div className="flex-grow bg-[#050505] border-[4px] border-zinc-900 rounded-md shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center min-h-0">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.15)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none z-10 mix-blend-screen"></div>

                  <div className="relative w-full h-full bg-zinc-950 overflow-hidden">
<Image 
  src="/placeholder-user.jpg" // Remember to change this to your actual photo!
  alt="Bipin Kumar" 
  fill
  priority // <--- ADD THIS WORD HERE
  className={`object-cover transition-all duration-700
    ${isStable 
      ? 'opacity-100 grayscale-0 brightness-100 blur-0' 
      : 'opacity-60 contrast-125 sepia-[0.3] blur-[0.5px] animate-[osc_glitch_0.2s_infinite]'
    }
  `}
/>

                    {/* Authentic SVG Fractal Noise Grain Overlay */}
                    <div className={`absolute inset-0 mix-blend-overlay pointer-events-none transition-opacity duration-700 z-10 ${isStable ? 'opacity-0' : 'opacity-[0.25]'}`}>
                      <svg className="w-full h-full opacity-100">
                         <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
                         </filter>
                         <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                      </svg>
                    </div>

                    {/* Signal Trace */}
                    <div className="absolute bottom-2 left-2 right-2 h-1/3 z-20 overflow-hidden flex items-end">
                      <svg viewBox="0 0 400 40" className="w-full h-full" preserveAspectRatio="none">
                        {isStable ? (
                          <g>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="2s" repeatCount="indefinite" />
                            <path
                              d="M 0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 T 450 20 T 500 20"
                              className="fill-none stroke-2 stroke-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]"
                            />
                          </g>
                        ) : (
                          <g>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="0.3s" repeatCount="indefinite" />
                            <path
                              d="M 0 20 L 10 -5 L 20 45 L 35 5 L 45 35 L 60 10 L 75 30 L 85 -5 L 95 25 L 100 20 L 110 -5 L 120 45 L 135 5 L 145 35 L 160 10 L 175 30 L 185 -5 L 195 25 L 200 20 L 210 -5 L 220 45 L 235 5 L 245 35 L 260 10 L 275 30 L 285 -5 L 295 25 L 300 20 L 310 -5 L 320 45 L 335 5 L 345 35 L 360 10 L 375 30 L 385 -5 L 395 25 L 400 20 L 410 -5 L 420 45 L 435 5 L 445 35 L 460 10 L 475 30 L 485 -5 L 495 25 L 500 20"
                              className="fill-none stroke-[1.5] stroke-red-500 drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]"
                            />
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Knobs */}
                <div className="h-8 shrink-0 flex justify-center items-center gap-12 pt-2">
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-zinc-900 shadow-[1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.1)] relative">
                         <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-emerald-400 rounded-sm"></div>
                      </div>
                      <span className="text-[8px] font-mono text-zinc-500">CH_1</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full bg-zinc-800 border-2 border-zinc-900 shadow-[1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.1)] relative transition-transform duration-300 ${isStable ? 'rotate-0' : 'animate-[spin_0.5s_infinite]'}`}>
                         <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 rounded-sm transition-colors duration-300 ${isStable ? 'bg-cyan-400' : 'bg-red-500'}`}></div>
                      </div>
                      <span className="text-[8px] font-mono text-zinc-500">SYNC</span>
                   </div>
                </div>
              </div>

              {/* RIGHT PANEL: DATASHEET & ACTIONS (Col 10-12) */}
              <div className="lg:col-span-3 flex flex-col gap-4 h-full overflow-hidden">
                
                {/* Specifications Column */}
                <div className="flex-grow bg-zinc-950 border border-zinc-800 rounded-sm p-4 shadow-inner flex flex-col">
                  <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 mb-3 shrink-0">
                    <Activity className="w-3 h-3 text-cyan-400" />
                    <h3 className="font-mono text-[9px] font-bold text-zinc-300 tracking-widest">DATASHEET_SPECS</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3 flex-grow justify-around overflow-y-auto">
                    <div className="flex flex-col border-b border-zinc-800/50 pb-2">
                      <span className="font-mono text-[9px] text-zinc-500 mb-0.5">PRIMARY_ROLE</span>
                      <span className="font-mono text-xs text-zinc-200 font-bold tracking-wide">ELECTRICAL_ENGINEER</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-800/50 pb-2">
                      <span className="font-mono text-[9px] text-zinc-500 mb-0.5">SOFTWARE_STACK</span>
                      <span className="font-mono text-xs text-cyan-400 font-bold tracking-wide">FULL_STACK_DEV</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-800/50 pb-2">
                      <span className="font-mono text-[9px] text-zinc-500 mb-0.5">HARDWARE_DOMAIN</span>
                      <span className="font-mono text-xs text-amber-400 font-bold tracking-wide">IoT_SPECIALIST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-zinc-500">NETWORK_I/O</span>
                      <span className="font-mono text-xs font-bold flex items-center gap-1.5">
                        <Wifi className={`w-3 h-3 ${isStable ? 'text-emerald-400' : 'text-red-500'}`} /> 
                        <span className={isStable ? 'text-zinc-200' : 'text-red-500'}>{isStable ? 'ACTIVE' : 'OFFLINE'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Ports */}
                <div className="flex flex-col gap-2 shrink-0">
                  <Link href="#projects" className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-cyan-400 text-zinc-950 font-mono text-xs font-bold px-4 py-3 rounded-sm transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    <Zap className="w-4 h-4" /> INITIALIZE_NODE
                  </Link>
                  <Link href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-zinc-100 font-mono text-xs font-bold px-4 py-3 rounded-sm transition-all duration-300 shadow-inner">
                    <Database className="w-4 h-4" /> FETCH_RECORDS
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom DIN Rail Mount */}
        <div className="w-[60%] mx-auto h-6 bg-zinc-800 border-x-4 border-b-4 border-zinc-700 rounded-b-md relative flex items-center justify-center shadow-md shrink-0 z-0">
          <div className="absolute inset-x-0 h-3 bg-zinc-700 top-1/2 -translate-y-1/2 border-y border-zinc-600 shadow-inner"></div>
          <div className="px-4 py-0.5 bg-zinc-900 border border-zinc-700 text-[8px] font-mono text-zinc-500 z-10 rounded-sm">MOUNTING_RAIL: DIN_EN_50022</div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* New Glitch Animation: NO SCALING, just jitters, hue shifts, and contrast */
        @keyframes osc_glitch {
          0% { transform: translateX(0); filter: hue-rotate(0deg) contrast(120%); }
          25% { transform: translateX(-3px); filter: hue-rotate(45deg) contrast(150%); }
          50% { transform: translateX(3px) skewX(1deg); filter: hue-rotate(-45deg) contrast(110%); }
          75% { transform: translateX(-2px) skewX(-1deg); filter: hue-rotate(90deg) contrast(160%); }
          100% { transform: translateX(0); filter: hue-rotate(0deg) contrast(120%); }
        }
        
        /* Custom scrollbar for the bio log to keep it neat */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(24, 24, 27, 0.5); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(82, 82, 91, 0.8); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(161, 161, 170, 1); 
        }
      `}} />
    </section>
  );
}