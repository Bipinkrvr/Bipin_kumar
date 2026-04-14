"use client";

import { useEffect, useState } from "react";
import { Zap, Database, Activity, Wifi, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStable(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Added min-h-[600px] as a fallback, padded top to clear navbar, padded bottom to clear bezels
    <section id="hero" className="relative w-full h-[100dvh] min-h-[600px] snap-center flex items-center justify-center pt-20 pb-8 overflow-hidden">
      
      {/* Background Green Grid Pattern for Hero Component */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* THE MASTER RECTANGULAR HMI CONSOLE - Light Theme */}
      {/* CHANGED: max-h-[75dvh] ensures the bottom rail doesn't get clipped by the screen edge */}
      <div className="w-full h-full max-h-[90dvh] flex flex-col relative z-10">
        
        {/* Top DIN Rail */}
        <div className="w-[90%] mx-auto h-4 bg-zinc-300 border-x-4 border-t-4 border-zinc-400 rounded-t-lg flex justify-between items-center px-12 shadow-sm shrink-0 z-0">
           <div className="w-12 h-1 bg-zinc-400 rounded-full shadow-inner border border-zinc-300"></div>
           <div className="w-12 h-1 bg-zinc-400 rounded-full shadow-inner border border-zinc-300"></div>
        </div>

        {/* MAIN CHASSIS */}
        <div className="flex-grow flex flex-col bg-white border-[6px] border-zinc-300 border-b-zinc-400 border-r-zinc-400 p-2 sm:p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 overflow-hidden">
          
          {/* Inner Plate */}
          <div className="flex-grow flex flex-col bg-zinc-100 border border-zinc-300 rounded-lg p-3 sm:p-4 relative shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] gap-3 sm:gap-4 overflow-hidden">
            
            {/* Corner Screws */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-45"></div></div>
            <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 -rotate-12"></div></div>
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-90"></div></div>
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-0"></div></div>

            {/* ROW 1: HEADER STRIP */}
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch h-auto md:h-16 shrink-0 z-20">
              
              {/* Status LEDs */}
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-2 flex flex-row md:flex-col justify-around items-center w-full md:w-20 shrink-0">
                 <div className="flex flex-row md:flex-col items-center gap-1">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${isStable ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">SYS_OK</span>
                  </div>
                  <div className="flex flex-row md:flex-col items-center gap-1">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${isStable ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'bg-zinc-300'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">D_LINK</span>
                  </div>
                  <div className="flex flex-row md:flex-col items-center gap-1">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${!isStable ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse' : 'bg-zinc-300'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">FAULT</span>
                  </div>
              </div>

              {/* Name Display */}
              <div className="flex-grow bg-white border-2 border-zinc-200 p-2 rounded-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-tighter text-cyan-600 text-center relative z-20">
                  BIPIN_KUMAR
                </h1>
                
                <div className="mt-1 flex items-center gap-2 relative z-20 max-w-xl mx-auto w-full px-2">
                   <div className="h-1 flex-grow bg-zinc-200 border border-zinc-300 overflow-hidden">
                      <div className={`h-full bg-cyan-500 transition-all duration-[1500ms] ease-out ${isStable ? 'w-full shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'w-[15%]'}`}></div>
                   </div>
                   <span className={`font-mono text-[8px] sm:text-[10px] uppercase transition-colors duration-300 w-24 text-right shrink-0 ${isStable ? 'text-cyan-600' : 'text-red-500 animate-pulse'}`}>
                      {isStable ? 'LOGIC_LOCKED' : 'CALIBRATING...'}
                   </span>
                </div>
              </div>

              {/* Model Info */}
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-2 flex flex-col justify-center items-end w-full md:w-40 shrink-0">
                 <div className="text-[9px] font-mono text-zinc-800 font-bold leading-tight mb-1">UNIT: BK-INT-X9</div>
                 <div className="text-[7px] font-mono text-zinc-500 mb-1">FW: BIT.SINDRI.v6</div>
                 <Cpu className="w-4 h-4 text-zinc-400" />
              </div>

            </div>

            {/* ROW 2: MAIN 3-PANEL DASHBOARD */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-3 h-full min-h-0 z-20">
              
              {/* LEFT PANEL */}
              <div className="lg:col-span-3 bg-white border border-zinc-200 rounded-sm shadow-sm flex flex-col h-full overflow-hidden">
                <div className="bg-zinc-100 border-b border-zinc-200 px-3 py-1.5 flex items-center gap-2 shrink-0">
                  <Terminal className="w-3 h-3 text-emerald-600" />
                  <span className="font-mono text-[8px] text-zinc-600 font-bold tracking-widest">SYSTEM_LOG.exe</span>
                </div>
                
                <div className="p-3 font-mono text-[11px] text-zinc-600 space-y-3 leading-relaxed overflow-y-auto custom-scrollbar flex-grow">
                  <div>
                    <span className="text-emerald-500">{">"}</span> <strong className="text-zinc-900">IDENTIFICATION:</strong>
                    <p className="pl-3 mt-1">3rd-Year Electrical Engineering Node @ BIT Sindri.</p>
                  </div>
                  <div>
                    <span className="text-emerald-500">{">"}</span> <strong className="text-zinc-900">CORE_DIRECTIVE:</strong>
                    <p className="pl-3 mt-1">Bridging high-voltage physical hardware with scalable digital software architecture.</p>
                  </div>
                  <div>
                    <span className="text-emerald-500">{">"}</span> <strong className="text-zinc-900">CURRENT_STATE:</strong>
                    <p className="pl-3 mt-1">Discharging potential as Front-End Dev Intern. FW calibrated for IoT telemetry & Server-Driven UIs.</p>
                  </div>
                  <p className={`text-emerald-600/70 pt-1 text-[9px] ${isStable ? 'animate-pulse' : 'hidden'}`}>
                    <span className="opacity-50">_</span>WAITING_FOR_INPUT...
                  </p>
                </div>
              </div>

              {/* CENTER PANEL */}
              <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-sm p-2 shadow-sm flex flex-col h-full relative">
                <div className="absolute top-3 right-3 z-30 flex items-center gap-2 bg-white/80 px-2 py-1 rounded border border-zinc-200 backdrop-blur-sm shadow-sm">
                  <span className="font-mono text-[8px] text-zinc-600 font-bold tracking-widest">TELEMETRY_FEED</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isStable ? 'bg-cyan-500 shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'bg-red-500 animate-pulse'}`}></div>
                </div>
                
                {/* Screen */}
                <div className="flex-grow bg-zinc-900 border-[3px] border-zinc-300 rounded-md shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center min-h-0">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10 mix-blend-screen"></div>

                  <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
                    <Image 
                      src="/placeholder-user.jpg" 
                      alt="Bipin Kumar" 
                      fill
                      priority
                      className={`object-cover transition-all duration-700
                        ${isStable 
                          ? 'opacity-100 grayscale-0 brightness-110 blur-0' 
                          : 'opacity-60 contrast-125 sepia-[0.3] blur-[0.5px] animate-[osc_glitch_0.2s_infinite]'
                        }
                      `}
                    />

                    {/* Signal Trace */}
                    <div className="absolute bottom-2 left-2 right-2 h-1/4 z-20 overflow-hidden flex items-end">
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
                <div className="h-6 shrink-0 flex justify-center items-center gap-10 pt-2">
                   <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-zinc-200 border border-zinc-300 shadow-sm relative">
                         <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-emerald-500 rounded-sm"></div>
                      </div>
                      <span className="text-[7px] font-mono text-zinc-500">CH_1</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full bg-zinc-200 border border-zinc-300 shadow-sm relative transition-transform duration-300 ${isStable ? 'rotate-0' : 'animate-[spin_0.5s_infinite]'}`}>
                         <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 rounded-sm transition-colors duration-300 ${isStable ? 'bg-cyan-500' : 'bg-red-500'}`}></div>
                      </div>
                      <span className="text-[7px] font-mono text-zinc-500">SYNC</span>
                   </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="lg:col-span-3 flex flex-col gap-3 h-full overflow-hidden">
                
                {/* Specifications Column */}
                <div className="flex-grow bg-white border border-zinc-200 rounded-sm p-3 shadow-sm flex flex-col">
                  <div className="flex items-center gap-2 border-b border-zinc-200 pb-1.5 mb-2 shrink-0">
                    <Activity className="w-3 h-3 text-cyan-600" />
                    <h3 className="font-mono text-[8px] font-bold text-zinc-800 tracking-widest">DATASHEET_SPECS</h3>
                  </div>
                  
                  <div className="flex flex-col gap-2 flex-grow justify-around overflow-y-auto">
                    <div className="flex flex-col border-b border-zinc-100 pb-1">
                      <span className="font-mono text-[8px] text-zinc-400 mb-0.5">PRIMARY_ROLE</span>
                      <span className="font-mono text-[10px] text-zinc-700 font-bold tracking-wide">ELECTRICAL_ENGINEER</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-100 pb-1">
                      <span className="font-mono text-[8px] text-zinc-400 mb-0.5">SOFTWARE_STACK</span>
                      <span className="font-mono text-[10px] text-cyan-600 font-bold tracking-wide">FULL_STACK_DEV</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-100 pb-1">
                      <span className="font-mono text-[8px] text-zinc-400 mb-0.5">HARDWARE_DOMAIN</span>
                      <span className="font-mono text-[10px] text-amber-500 font-bold tracking-wide">IoT_SPECIALIST</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono text-[8px] text-zinc-400">NETWORK_I/O</span>
                      <span className="font-mono text-[10px] font-bold flex items-center gap-1.5">
                        <Wifi className={`w-3 h-3 ${isStable ? 'text-emerald-500' : 'text-red-500'}`} /> 
                        <span className={isStable ? 'text-zinc-700' : 'text-red-500'}>{isStable ? 'ACTIVE' : 'OFFLINE'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Ports */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  <Link href="#projects" className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[10px] font-bold px-3 py-2 rounded-sm transition-all duration-300 shadow-md">
                    <Zap className="w-3 h-3" /> INITIALIZE_NODE
                  </Link>
                  <Link href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-2 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-600 font-mono text-[10px] font-bold px-3 py-2 rounded-sm transition-all duration-300 shadow-sm">
                    <Database className="w-3 h-3" /> FETCH_RECORDS
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom DIN Rail Mount */}
        <div className="w-[60%] mx-auto h-5 bg-zinc-300 border-x-4 border-b-4 border-zinc-400 rounded-b-md relative flex items-center justify-center shadow-sm shrink-0 z-0">
          <div className="absolute inset-x-0 h-2 bg-zinc-200 top-1/2 -translate-y-1/2 border-y border-zinc-300 shadow-inner"></div>
          <div className="px-3 py-0.5 bg-white border border-zinc-300 text-[7px] font-mono text-zinc-500 z-10 rounded-sm shadow-sm">MOUNTING_RAIL: DIN_EN_50022</div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes osc_glitch {
          0% { transform: translateX(0); filter: hue-rotate(0deg) contrast(120%); }
          25% { transform: translateX(-3px); filter: hue-rotate(45deg) contrast(150%); }
          50% { transform: translateX(3px) skewX(1deg); filter: hue-rotate(-45deg) contrast(110%); }
          75% { transform: translateX(-2px) skewX(-1deg); filter: hue-rotate(90deg) contrast(160%); }
          100% { transform: translateX(0); filter: hue-rotate(0deg) contrast(120%); }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(244, 244, 245, 1); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 212, 216, 1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(161, 161, 170, 1); 
        }
      `}} />
    </section>
  );
}