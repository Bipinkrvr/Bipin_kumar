"use client";

import { useEffect, useState } from "react";
import { Zap, Database, Activity, Wifi, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    // 1.5s delay mimics a realistic sensor calibration sequence
    const timer = setTimeout(() => setIsStable(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // STRICT SINGLE WINDOW: h-[100dvh] forces it to fit exactly one screen. bg-transparent removes the color.
    <section id="hero" className="relative w-full h-[100dvh] snap-center flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden bg-transparent">
      
      {/* BACKGROUND GRID REMOVED ENTIRELY AS REQUESTED */}

      {/* THE MASTER RECTANGULAR HMI CONSOLE */}
      {/* h-full and max-h-[95dvh] ensure the chassis never exceeds the screen boundaries */}
      <div className="w-full h-full max-w-6xl max-h-[95dvh] flex flex-col relative z-10">
        
        {/* Top DIN Rail */}
        <div aria-hidden="true" className="w-[90%] mx-auto h-3 sm:h-4 bg-zinc-300 border-x-4 border-t-4 border-zinc-400 rounded-t-lg flex justify-between items-center px-12 shadow-sm shrink-0 z-0">
           <div className="w-12 h-1 bg-zinc-400 rounded-full shadow-inner border border-zinc-300"></div>
           <div className="w-12 h-1 bg-zinc-400 rounded-full shadow-inner border border-zinc-300"></div>
        </div>

        {/* MAIN CHASSIS - flex-grow ensures it fills the available vertical space */}
        <div className="flex-grow flex flex-col bg-white border-[6px] border-zinc-300 border-b-zinc-400 border-r-zinc-400 p-2 sm:p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 overflow-hidden min-h-0">
          
          {/* Inner Plate */}
          <div className="flex-grow flex flex-col bg-zinc-100 border border-zinc-300 rounded-lg p-2 sm:p-3 md:p-4 relative shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] gap-2 sm:gap-3 md:gap-4 overflow-hidden min-h-0">
            
            {/* Corner Screws (Aria-hidden for accessibility) */}
            <div aria-hidden="true" className="absolute top-2 left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-45"></div></div>
            <div aria-hidden="true" className="absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 -rotate-12"></div></div>
            <div aria-hidden="true" className="absolute bottom-2 left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-90"></div></div>
            <div aria-hidden="true" className="absolute bottom-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-300 flex items-center justify-center shadow-inner"><div className="w-1.5 h-[1px] bg-zinc-500 rotate-0"></div></div>

            {/* ROW 1: HEADER STRIP */}
            <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 items-stretch h-auto shrink-0 z-20">
              
              {/* Status LEDs */}
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-2 flex flex-row md:flex-col justify-around items-center w-full md:w-20 shrink-0">
                 <div className="flex flex-row md:flex-col items-center gap-1">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${isStable ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">SYS_OK</span>
                 </div>
                 <div className="flex flex-row md:flex-col items-center gap-1">
                    <div className={`w-2 h-2 rounded-full border border-zinc-200 transition-colors duration-300 ${isStable ? 'bg-zinc-300' : 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)] animate-pulse'}`}></div>
                    <span className="text-[6px] font-mono text-zinc-500 font-bold tracking-widest hidden md:block">DIAG</span>
                 </div>
              </div>

              {/* Name Display */}
              <div className="flex-grow bg-white border-2 border-zinc-200 p-2 rounded-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-mono font-black tracking-tighter text-cyan-600 text-center relative z-20">
                  BIPIN_KUMAR
                </h1>
                
                <div className="mt-1 flex items-center gap-2 relative z-20 max-w-xl mx-auto w-full px-2">
                   <div className="h-1 flex-grow bg-zinc-200 border border-zinc-300 overflow-hidden">
                      <div className={`h-full transition-all duration-[1500ms] ease-out ${isStable ? 'bg-cyan-500 w-full shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'bg-amber-400 w-[20%]'}`}></div>
                   </div>
                   <span className={`font-mono text-[7px] sm:text-[9px] md:text-[10px] uppercase transition-colors duration-300 w-20 sm:w-24 text-right shrink-0 ${isStable ? 'text-cyan-600' : 'text-amber-500 animate-pulse'}`}>
                      {isStable ? 'LOGIC_LOCKED' : 'CALIBRATING...'}
                   </span>
                </div>
              </div>

              {/* Model Info */}
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-2 flex flex-col justify-center items-end w-full md:w-32 lg:w-40 shrink-0">
                 <div className="text-[8px] lg:text-[9px] font-mono text-zinc-800 font-bold leading-tight mb-1">UNIT: BK-INT-X9</div>
                 <div className="text-[6px] lg:text-[7px] font-mono text-zinc-500 mb-1">FW: BIT.SINDRI.v6</div>
                 <Cpu className="w-3 h-3 lg:w-4 lg:h-4 text-zinc-400" />
              </div>

            </div>

            {/* ROW 2: MAIN 3-PANEL DASHBOARD */}
            {/* min-h-0 allows this grid to compress naturally if the screen is short */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 min-h-0 z-20">
              
              {/* LEFT PANEL */}
              <div className="hidden md:flex lg:col-span-3 bg-white border border-zinc-200 rounded-sm shadow-sm flex-col h-full overflow-hidden min-h-0">
                <div className="bg-zinc-100 border-b border-zinc-200 px-3 py-1.5 flex items-center gap-2 shrink-0">
                  <Terminal className="w-3 h-3 text-emerald-600" />
                  <span className="font-mono text-[8px] text-zinc-600 font-bold tracking-widest">SYSTEM_LOG.exe</span>
                </div>
                
                <div className="p-3 font-mono text-[10px] lg:text-[11px] text-zinc-600 space-y-2 lg:space-y-3 leading-relaxed overflow-y-auto custom-scrollbar flex-grow min-h-0">
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
                    <p className="pl-3 mt-1">Discharging potential as Front-End Dev Intern. FW calibrated for IoT telemetry.</p>
                  </div>
                  <p className={`text-amber-600/80 pt-1 text-[9px] ${isStable ? 'hidden' : 'animate-pulse'}`}>
                    <span className="opacity-50">_</span>RUNNING_DIAGNOSTICS...
                  </p>
                </div>
              </div>

              {/* CENTER PANEL */}
              <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-sm p-1.5 sm:p-2 shadow-sm flex flex-col h-full relative min-h-0">
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-30 flex items-center gap-2 bg-white/80 px-2 py-1 rounded border border-zinc-200 backdrop-blur-sm shadow-sm">
                  <span className="font-mono text-[7px] sm:text-[8px] text-zinc-600 font-bold tracking-widest">TELEMETRY_FEED</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isStable ? 'bg-cyan-500 shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'bg-amber-400 animate-pulse'}`}></div>
                </div>
                
                {/* Screen */}
                <div className="flex-grow bg-zinc-900 border-[3px] border-zinc-300 rounded-md shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center min-h-0">
                  <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:10px_10px] sm:bg-[size:20px_20px] pointer-events-none z-10 mix-blend-screen"></div>

                  <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
                    <Image 
                      src="/placeholder-user.jpg" 
                      alt="Bipin Kumar" 
                      fill
                      priority
                      className={`object-cover transition-all duration-1000 ease-in-out
                        ${isStable 
                          ? 'opacity-100 grayscale-0 brightness-110 blur-0' 
                          : 'opacity-40 grayscale brightness-75 blur-[2px]'
                        }
                      `}
                    />

                    {/* Signal Trace */}
                    <div className="absolute bottom-2 left-2 right-2 h-[20%] sm:h-1/4 z-20 overflow-hidden flex items-end">
                      <svg viewBox="0 0 400 40" className="w-full h-full" preserveAspectRatio="none">
                        {isStable ? (
                          <g>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="2s" repeatCount="indefinite" />
                            <path
                              d="M 0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 T 450 20 T 500 20"
                              className="fill-none stroke-[1.5] sm:stroke-2 stroke-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]"
                            />
                          </g>
                        ) : (
                          <g>
                            <animateTransform attributeName="transform" type="translate" from="0 0" to="-100 0" dur="0.5s" repeatCount="indefinite" />
                            <path
                              d="M 0 20 Q 12.5 -5, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20 T 225 20 T 250 20 T 275 20 T 300 20 T 325 20 T 350 20 T 375 20 T 400 20 T 425 20 T 450 20 T 475 20 T 500 20"
                              className="fill-none stroke-[1.5] stroke-amber-400 opacity-80 drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]"
                            />
                          </g>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Knobs */}
                <div className="h-4 sm:h-6 shrink-0 flex justify-center items-center gap-6 sm:gap-10 pt-1 sm:pt-2">
                   <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-zinc-200 border border-zinc-300 shadow-sm relative">
                         <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 rounded-sm transition-colors duration-500 ${isStable ? 'bg-emerald-500' : 'bg-zinc-400'}`}></div>
                      </div>
                      <span className="text-[6px] sm:text-[7px] font-mono text-zinc-500">CH_1</span>
                   </div>
                   <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-zinc-200 border border-zinc-300 shadow-sm relative transition-transform duration-300 ${isStable ? 'rotate-0' : 'animate-[spin_1s_linear_infinite]'}`}>
                         <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 rounded-sm transition-colors duration-300 ${isStable ? 'bg-cyan-500' : 'bg-amber-400'}`}></div>
                      </div>
                      <span className="text-[6px] sm:text-[7px] font-mono text-zinc-500">SYNC</span>
                   </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="lg:col-span-3 flex flex-col gap-2 sm:gap-3 h-full overflow-hidden min-h-0">
                
                {/* Specifications Column */}
                <div className="flex-grow bg-white border border-zinc-200 rounded-sm p-2 sm:p-3 shadow-sm flex flex-col min-h-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 border-b border-zinc-200 pb-1.5 mb-1.5 sm:mb-2 shrink-0">
                    <Activity className="w-3 h-3 text-cyan-600 hidden sm:block" />
                    <h3 className="font-mono text-[7px] sm:text-[8px] font-bold text-zinc-800 tracking-widest">DATASHEET_SPECS</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 sm:gap-2 flex-grow justify-around overflow-y-auto custom-scrollbar pr-1">
                    <div className="flex flex-col border-b border-zinc-100 pb-0.5 sm:pb-1">
                      <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 mb-[1px] sm:mb-0.5">PRIMARY_ROLE</span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-zinc-700 font-bold tracking-wide">ELECTRICAL_ENGINEER</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-100 pb-0.5 sm:pb-1">
                      <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 mb-[1px] sm:mb-0.5">SOFTWARE_STACK</span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-cyan-600 font-bold tracking-wide">FULL_STACK_DEV</span>
                    </div>
                    <div className="flex flex-col border-b border-zinc-100 pb-0.5 sm:pb-1 hidden xs:flex">
                      <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400 mb-[1px] sm:mb-0.5">HARDWARE_DOMAIN</span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-amber-500 font-bold tracking-wide">IoT_SPECIALIST</span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5 sm:mt-1">
                      <span className="font-mono text-[7px] sm:text-[8px] text-zinc-400">NETWORK_I/O</span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold flex items-center gap-1 sm:gap-1.5">
                        <Wifi className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${isStable ? 'text-emerald-500' : 'text-amber-500 animate-pulse'}`} /> 
                        <span className={isStable ? 'text-zinc-700' : 'text-amber-600'}>{isStable ? 'ACTIVE' : 'STANDBY'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Ports */}
                <div className="flex flex-col gap-1 sm:gap-1.5 shrink-0">
                  <Link href="#projects" className="flex items-center justify-center gap-1.5 sm:gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm transition-all duration-300 shadow-md">
                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> INITIALIZE_NODE
                  </Link>
                  <Link href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-600 font-mono text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm transition-all duration-300 shadow-sm">
                    <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> FETCH_RECORDS
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom DIN Rail Mount */}
        <div aria-hidden="true" className="w-[60%] mx-auto h-3 sm:h-5 bg-zinc-300 border-x-4 border-b-4 border-zinc-400 rounded-b-md relative flex items-center justify-center shadow-sm shrink-0 z-0">
          <div className="absolute inset-x-0 h-1.5 sm:h-2 bg-zinc-200 top-1/2 -translate-y-1/2 border-y border-zinc-300 shadow-inner"></div>
          <div className="px-2 sm:px-3 py-0.5 bg-white border border-zinc-300 text-[6px] sm:text-[7px] font-mono text-zinc-500 z-10 rounded-sm shadow-sm hidden sm:block">MOUNTING_RAIL: DIN_EN_50022</div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
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