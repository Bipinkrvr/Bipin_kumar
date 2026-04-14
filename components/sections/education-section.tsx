import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, HardDrive, Fan, Zap } from "lucide-react";

export function EducationSection() {
  const liveWire = `
    transition-all duration-1000 ease-in-out pointer-events-none z-10 bg-zinc-800
    group-has-[.edu-cyan:hover]/board:bg-cyan-400 group-has-[.edu-cyan:hover]/board:shadow-[0_0_15px_rgba(34,211,238,0.8)]
    group-has-[.edu-emerald:hover]/board:bg-emerald-400 group-has-[.edu-emerald:hover]/board:shadow-[0_0_15px_rgba(16,185,129,0.8)]
    group-has-[.edu-amber:hover]/board:bg-amber-400 group-has-[.edu-amber:hover]/board:shadow-[0_0_15px_rgba(245,158,11,0.8)]
  `;

  const education = [
    {
      id: "edu-cyan",
      title: "B.Tech // Electrical Engineering",
      institution: "Birsa Institute of Technology (BIT) Sindri",
      timeline: "2023 - 2027",
      status: "DISCHARGING: 75%",
      chargeHeight: "h-[75%]",
      description: "Current State: 6th Semester. Bridging core hardware physics with scalable full-stack software architecture.",
      modules: ["Power Electronics", "Synchronous Machines", "Control Systems"],
      icon: Cpu,
      theme: {
        text: "text-cyan-400",
        border: "group-hover:border-cyan-500/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
        badge: "group-hover:border-cyan-500/30 group-hover:text-cyan-300",
        energyFill: "bg-cyan-500/5 group-has-[.battery-cell:hover]/board:bg-cyan-500/25 group-has-[.battery-cell:hover]/board:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
      }
    },
    {
      id: "edu-emerald", 
      title: "Senior Secondary // 12th Grade",
      institution: "Your School Name Here [Board]", 
      timeline: "2021 - 2023",
      status: "CAPACITY: 100%", 
      chargeHeight: "h-[100%]",
      description: "Core processing focus on Physics, Chemistry, and Mathematics (PCM). Established fundamental analytical and logical algorithms.",
      modules: ["Physics", "Calculus", "Circuit Basics"],
      icon: Database,
      theme: {
        text: "text-emerald-400",
        border: "group-hover:border-emerald-500/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
        badge: "group-hover:border-emerald-500/30 group-hover:text-emerald-300",
        energyFill: "bg-emerald-500/5 group-has-[.battery-cell:hover]/board:bg-emerald-500/25 group-has-[.battery-cell:hover]/board:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      }
    },
    {
      id: "edu-amber", 
      title: "Secondary // 10th Grade",
      institution: "Your School Name Here [Board]",
      timeline: "2019 - 2021",
      status: "CAPACITY: 100%",
      chargeHeight: "h-[100%]",
      description: "System initialization sequence. High performance in foundational sciences, mathematical reasoning, and base compute.",
      modules: ["Mathematics", "General Science", "Logic Foundation"],
      icon: HardDrive,
      theme: {
        text: "text-amber-400",
        border: "group-hover:border-amber-500/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
        badge: "group-hover:border-amber-500/30 group-hover:text-amber-300",
        energyFill: "bg-amber-500/5 group-has-[.battery-cell:hover]/board:bg-amber-500/25 group-has-[.battery-cell:hover]/board:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      }
    }
  ];

  return (
    <section id="education" className="scroll-mt-20">
      
      <div className="flex items-center gap-3 mb-16 border-b border-zinc-800 pb-4">
        <Zap className="w-6 h-6 text-cyan-400" />
        <h2 className="text-2xl font-mono font-bold text-zinc-100 tracking-wider">
          [CORE_ARCHITECTURE]
        </h2>
      </div>

      {/* MASTER CONTAINER */}
      <div className="relative max-w-5xl mx-auto group/board pt-[320px] flex flex-col items-center">
        
        {/* --- 0. THE NEGATIVE RETURN LOOP (Master Container) --- */}
        {/* FIXED: The vertical drop now goes all the way down to bottom-0 to complete the perfect corner! */}
        <div className={`hidden md:block absolute top-[62px] left-[-40px] right-[calc(50%+60px)] h-[4px] z-10 ${liveWire}`}></div>
        <div className={`hidden md:block absolute top-[62px] bottom-0 left-[-40px] w-[4px] z-10 ${liveWire}`}></div>


        {/* --- 1. THE LOAD (DC MOTOR & FAN) --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30">
          <div className="w-32 h-32 rounded-full border-4 border-zinc-800 bg-zinc-950 shadow-[inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center transition-all duration-1000 ease-in-out
            group-has-[.battery-cell:hover]/board:border-zinc-500
            group-has-[.edu-cyan:hover]/board:border-cyan-500/50 group-has-[.edu-cyan:hover]/board:shadow-[0_0_40px_rgba(34,211,238,0.2)]
            group-has-[.edu-emerald:hover]/board:border-emerald-500/50 group-has-[.edu-emerald:hover]/board:shadow-[0_0_40px_rgba(16,185,129,0.2)]
            group-has-[.edu-amber:hover]/board:border-amber-500/50 group-has-[.edu-amber:hover]/board:shadow-[0_0_40px_rgba(245,158,11,0.2)]
          ">
            {/* Fan is COMPLETELY STOPPED by default. Only spins when hovered. */}
            <Fan className="w-20 h-20 text-zinc-700 transition-colors duration-500
              group-has-[.battery-cell:hover]/board:animate-spin group-has-[.battery-cell:hover]/board:[animation-duration:0.4s]
              group-has-[.edu-cyan:hover]/board:text-cyan-400 group-has-[.edu-cyan:hover]/board:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
              group-has-[.edu-emerald:hover]/board:text-emerald-400 group-has-[.edu-emerald:hover]/board:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]
              group-has-[.edu-amber:hover]/board:text-amber-400 group-has-[.edu-amber:hover]/board:drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]
            " />
            <div className="absolute w-6 h-6 bg-zinc-800 rounded-full border-2 border-zinc-900 z-10"></div>
          </div>
          <div className="mt-6 px-4 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500 tracking-widest transition-colors duration-1000 group-has-[.battery-cell:hover]/board:text-zinc-300">
            PARALLEL_ARRAY_LOAD
          </div>
        </div>

        {/* --- 2. TRUNK WIRE 1 (Motor to MCB) --- */}
        <div className={`absolute top-[128px] h-[72px] w-[4px] left-1/2 -translate-x-[2px] z-10 ${liveWire}`}></div>

        {/* --- 3. MAIN MCB (CIRCUIT BREAKER) --- */}
        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
          <div className="w-16 h-20 bg-zinc-900 border-2 border-zinc-700 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative">
            <div className="w-3 h-2 bg-zinc-500 absolute -top-2 rounded-t-sm" />
            <div className="w-3 h-2 bg-zinc-500 absolute -bottom-2 rounded-b-sm" />
            
            <span className="text-[8px] font-mono text-zinc-500 absolute top-2 font-bold">MAIN_MCB</span>
            
            <div className="w-1.5 h-1.5 rounded-full absolute top-5 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)] transition-all duration-1000 ease-in-out
              group-has-[.battery-cell:hover]/board:bg-emerald-400 group-has-[.battery-cell:hover]/board:shadow-[0_0_8px_rgba(52,211,153,0.8)]
            " />

            <div className="w-6 h-8 mt-4 bg-zinc-950 rounded-sm shadow-inner relative flex justify-center">
               <div className="w-4 h-5 bg-zinc-600 border-b-2 border-zinc-800 rounded-sm absolute bottom-0 origin-bottom transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                 rotate-[-40deg] translate-y-[2px]
                 group-has-[.battery-cell:hover]/board:rotate-0 group-has-[.battery-cell:hover]/board:bg-zinc-300 group-has-[.battery-cell:hover]/board:-translate-y-[12px]
               " />
            </div>
          </div>
        </div>

        {/* --- 4. TRUNK WIRE 2 (MCB to VCC Bus) --- */}
        <div className={`absolute top-[280px] h-[40px] w-[4px] left-1/2 -translate-x-[2px] z-10 ${liveWire}`}></div>


        {/* --- 5. THE GEOMETRIC WIRING LAYER (DESKTOP) --- */}
        <div className="hidden md:grid absolute top-[320px] bottom-0 left-0 right-0 grid-cols-3 gap-x-8 z-10 pointer-events-none">
            
            {/* Col 0 (Left - Cyan) */}
            <div className="relative w-full h-full">
                {/* VCC Bus segment */}
                <div className={`absolute top-0 left-[50%] right-[-16px] h-[4px] ${liveWire}`}></div>
                <div className={`absolute top-0 h-[40px] w-[4px] left-[50%] -translate-x-[2px] ${liveWire}`}></div>
                
                {/* GND Drop & Bottom Bus segment */}
                <div className={`absolute bottom-0 h-[40px] w-[4px] left-[50%] -translate-x-[2px] ${liveWire}`}></div>
                <div className={`absolute bottom-0 left-[-40px] right-[-16px] h-[4px] ${liveWire}`}></div>
            </div>

            {/* Col 1 (Center - Emerald) */}
            <div className="relative w-full h-full">
                <div className={`absolute top-0 left-[-16px] right-[-16px] h-[4px] ${liveWire}`}></div>
                <div className={`absolute top-0 h-[40px] w-[4px] left-[50%] -translate-x-[2px] ${liveWire}`}></div>
                
                <div className={`absolute bottom-0 h-[40px] w-[4px] left-[50%] -translate-x-[2px] ${liveWire}`}></div>
                <div className={`absolute bottom-0 left-[-16px] right-[-16px] h-[4px] ${liveWire}`}></div>
            </div>

            {/* Col 2 (Right - Amber) */}
            <div className="relative w-full h-full">
                <div className={`absolute top-0 left-[-16px] right-[50%] h-[4px] ${liveWire}`}></div>
                <div className={`absolute top-0 h-[40px] w-[4px] left-[50%] -translate-x-[2px] ${liveWire}`}></div>
                
                <div className={`absolute bottom-0 h-[40px] w-[4px] left-[50%] -translate-x-[2px] ${liveWire}`}></div>
                <div className={`absolute bottom-0 left-[-16px] right-[50%] h-[4px] ${liveWire}`}></div>
            </div>
        </div>


        {/* --- 6. THE BATTERY CELLS LAYER --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-8 gap-y-12 relative z-20 pt-[40px] pb-[40px]">
          {education.map((edu, idx) => (
            <div key={idx} className={`battery-cell relative group flex flex-col items-center cursor-pointer ${edu.id}`}>
              
              <div className="w-16 h-4 bg-zinc-600 rounded-t-sm border-t border-x border-zinc-500 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] z-20 flex items-center justify-center transition-all duration-1000 ease-in-out group-has-[.battery-cell:hover]/board:bg-zinc-300 group-has-[.battery-cell:hover]/board:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <span className="text-[10px] font-bold text-zinc-900">+</span>
              </div>

              <Card className={`relative overflow-hidden w-full h-full flex flex-col bg-zinc-950 border-2 border-zinc-800 rounded-b-xl rounded-t-sm transition-all duration-1000 ease-in-out z-30 ${edu.theme.border} ${edu.theme.shadow}`}>
                
                <div className={`absolute bottom-0 left-0 right-0 w-full transition-all duration-1000 ease-in-out ${edu.chargeHeight} ${edu.theme.energyFill}`}>
                   <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 transition-colors duration-1000 group-hover:bg-white/40"></div>
                </div>

                <div className="px-5 py-6 sm:px-6 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6 border-b border-zinc-800/50 pb-4 transition-colors duration-1000">
                    <Badge variant="outline" className={`bg-zinc-950 font-mono text-[10px] tracking-widest text-zinc-500 border-zinc-800 transition-colors duration-1000 ease-in-out whitespace-nowrap shadow-none ${edu.theme.badge}`}>
                      {edu.status}
                    </Badge>
                    <edu.icon className={`w-5 h-5 text-zinc-600 transition-colors duration-1000 ease-in-out group-hover:${edu.theme.text}`} />
                  </div>

                  <div className="mb-4">
                    <h3 className={`font-mono text-lg font-bold text-zinc-200 transition-colors duration-1000 ease-in-out mb-1 group-hover:${edu.theme.text}`}>
                      {edu.title}
                    </h3>
                    <div className="text-xs font-mono text-zinc-500 transition-colors duration-1000">
                      {edu.institution} <br/> <span className="text-zinc-600">[{edu.timeline}]</span>
                    </div>
                  </div>

                  <p className="text-sm font-mono text-zinc-400 leading-relaxed mb-6 flex-grow transition-colors duration-1000">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {edu.modules.map((mod, modIdx) => (
                      <Badge 
                        key={modIdx} 
                        variant="secondary" 
                        className={`bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono text-[10px] transition-colors duration-1000 ease-in-out ${edu.theme.badge}`}
                      >
                        {mod}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="w-16 h-3 bg-zinc-700 rounded-b-sm border-b border-x border-zinc-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center transition-all duration-1000 ease-in-out group-has-[.battery-cell:hover]/board:bg-zinc-400">
                <span className="text-[10px] font-bold text-zinc-900">-</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}