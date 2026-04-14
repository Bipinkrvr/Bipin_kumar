import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Terminal, Database, Code2, Zap } from "lucide-react";

export function SkillsSection() {
  const subsystems = [
    {
      id: "card-amber", // Unique identifier for the Main Trunk color routing
      title: "Hardware_&_IoT",
      icon: Cpu,
      theme: {
        text: "text-amber-500",
        border: "group-hover:border-amber-500/50",
        shadow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
        pin: "group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)]",
        led: "group-hover:bg-amber-400",
        badgeText: "group-hover:text-amber-300",
        badgeBorder: "group-hover:border-amber-500/30",
        wire: "group-hover:bg-amber-400 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.8)]",
        svgStroke: "group-hover:stroke-amber-400",
        svgFill: "group-hover:fill-amber-400",
        svgGlow: "group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]",
      },
      skills: ["ESP32 Microcontrollers", "Embedded C++", "Termux Upcycling", "Sensors (DHT11)"],
    },
    {
      id: "card-cyan",
      title: "Client_Architecture",
      icon: Terminal,
      theme: {
        text: "text-cyan-500",
        border: "group-hover:border-cyan-500/50",
        shadow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
        pin: "group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]",
        led: "group-hover:bg-cyan-400",
        badgeText: "group-hover:text-cyan-300",
        badgeBorder: "group-hover:border-cyan-500/30",
        wire: "group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]",
        svgStroke: "group-hover:stroke-cyan-400",
        svgFill: "group-hover:fill-cyan-400",
        svgGlow: "group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]",
      },
      skills: ["React 19", "Next.js 15", "Flutter", "Tailwind CSS"],
    },
    {
      id: "card-emerald",
      title: "Server_&_Database",
      icon: Database,
      theme: {
        text: "text-emerald-500",
        border: "group-hover:border-emerald-500/50",
        shadow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        pin: "group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)]",
        led: "group-hover:bg-emerald-400",
        badgeText: "group-hover:text-emerald-300",
        badgeBorder: "group-hover:border-emerald-500/30",
        wire: "group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)]",
        svgStroke: "group-hover:stroke-emerald-400",
        svgFill: "group-hover:fill-emerald-400",
        svgGlow: "group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]",
      },
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      id: "card-purple",
      title: "Core_Engineering",
      icon: Code2,
      theme: {
        text: "text-purple-500",
        border: "group-hover:border-purple-500/50",
        shadow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
        pin: "group-hover:bg-purple-400 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.8)]",
        led: "group-hover:bg-purple-400",
        badgeText: "group-hover:text-purple-300",
        badgeBorder: "group-hover:border-purple-500/30",
        wire: "group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]",
        svgStroke: "group-hover:stroke-purple-400",
        svgFill: "group-hover:fill-purple-400",
        svgGlow: "group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]",
      },
      skills: ["Power Electronics", "Synchronous Machines", "Control Systems", "ZPF Methods"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
        <Code2 className="w-6 h-6 text-cyan-400" />
        <h2 className="text-2xl font-mono font-bold text-zinc-100 tracking-wider">
          [SUBSYSTEMS_TOOLKIT]
        </h2>
      </div>

      {/* MASTER CONTAINER */}
      <div className="relative mt-12 mb-12 max-w-4xl mx-auto group/board">
        
        {/* --- DYNAMIC POWER HUB --- */}
        {/* Changes color based on which specific card inside 'group/board' is being hovered */}
        <div className="flex justify-center relative z-20 mb-12 pointer-events-none">
          <div className="px-6 py-3 bg-zinc-950 border-2 rounded-sm transition-all duration-500 flex items-center gap-3
            border-zinc-800 shadow-none
            group-has-[.card-amber:hover]/board:border-amber-500/30 group-has-[.card-amber:hover]/board:shadow-[0_0_15px_rgba(245,158,11,0.2)]
            group-has-[.card-cyan:hover]/board:border-cyan-500/30 group-has-[.card-cyan:hover]/board:shadow-[0_0_15px_rgba(34,211,238,0.2)]
            group-has-[.card-emerald:hover]/board:border-emerald-500/30 group-has-[.card-emerald:hover]/board:shadow-[0_0_15px_rgba(16,185,129,0.2)]
            group-has-[.card-purple:hover]/board:border-purple-500/30 group-has-[.card-purple:hover]/board:shadow-[0_0_15px_rgba(168,85,247,0.2)]
          ">
            <Zap className="w-5 h-5 transition-colors duration-500 group-hover/board:animate-pulse
              text-zinc-600
              group-has-[.card-amber:hover]/board:text-amber-500
              group-has-[.card-cyan:hover]/board:text-cyan-500
              group-has-[.card-emerald:hover]/board:text-emerald-500
              group-has-[.card-purple:hover]/board:text-purple-500
            " />
            <span className="font-mono text-sm font-bold tracking-widest transition-colors duration-500
              text-zinc-600
              group-has-[.card-amber:hover]/board:text-amber-400
              group-has-[.card-cyan:hover]/board:text-cyan-400
              group-has-[.card-emerald:hover]/board:text-emerald-400
              group-has-[.card-purple:hover]/board:text-purple-400
            ">
              MAIN_VCC_BUS
            </span>
          </div>
        </div>

        {/* --- DYNAMIC VERTICAL TRUNK WIRE --- */}
        {/* Glows with the specific color of the currently hovered card */}
        <div className="absolute top-[48px] bottom-8 left-[2.25rem] md:left-1/2 w-[4px] -translate-x-[2px] rounded-full z-0 pointer-events-none transition-all duration-500
          bg-zinc-800
          group-has-[.card-amber:hover]/board:bg-amber-400 group-has-[.card-amber:hover]/board:shadow-[0_0_15px_rgba(245,158,11,0.8)]
          group-has-[.card-cyan:hover]/board:bg-cyan-400 group-has-[.card-cyan:hover]/board:shadow-[0_0_15px_rgba(34,211,238,0.8)]
          group-has-[.card-emerald:hover]/board:bg-emerald-400 group-has-[.card-emerald:hover]/board:shadow-[0_0_15px_rgba(16,185,129,0.8)]
          group-has-[.card-purple:hover]/board:bg-purple-400 group-has-[.card-purple:hover]/board:shadow-[0_0_15px_rgba(168,85,247,0.8)]
        "></div>


        {/* THE CIRCUIT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 pl-[4.5rem] md:pl-0 relative z-10">
          {subsystems.map((system, idx) => {
            const isLeftCol = idx % 2 === 0;

            return (
              <div key={idx} className={`relative group cursor-pointer ${system.id}`}>
                
                {/* --- FLAWLESS SMART DIODES --- */}
                
                {/* Desktop Left Column */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-6 pointer-events-none ${isLeftCol ? '-right-12' : 'hidden'}`}>
                  <svg width="48" height="24" viewBox="0 0 48 24" className={`overflow-visible w-full h-full transition-all duration-300 ${system.theme.svgGlow}`}>
                    <line x1="0" y1="12" x2="16" y2="12" className={`stroke-2 stroke-zinc-800 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <line x1="32" y1="12" x2="48" y2="12" className={`stroke-2 stroke-zinc-800 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <g style={{ transformOrigin: "24px 12px" }} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-0 group-hover:rotate-180">
                      <path d="M 19 6 L 29 12 L 19 18 Z" className={`fill-red-500 transition-colors duration-300 ${system.theme.svgFill}`} />
                      <line x1="29" y1="4" x2="29" y2="20" className={`stroke-[2px] stroke-red-500 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    </g>
                  </svg>
                </div>

                {/* Desktop Right Column */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-6 pointer-events-none ${!isLeftCol ? '-left-12' : 'hidden'}`}>
                  <svg width="48" height="24" viewBox="0 0 48 24" className={`overflow-visible w-full h-full transition-all duration-300 ${system.theme.svgGlow}`}>
                    <line x1="0" y1="12" x2="16" y2="12" className={`stroke-2 stroke-zinc-800 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <line x1="32" y1="12" x2="48" y2="12" className={`stroke-2 stroke-zinc-800 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <g style={{ transformOrigin: "24px 12px" }} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-180 group-hover:rotate-0">
                      <path d="M 19 6 L 29 12 L 19 18 Z" className={`fill-red-500 transition-colors duration-300 ${system.theme.svgFill}`} />
                      <line x1="29" y1="4" x2="29" y2="20" className={`stroke-[2px] stroke-red-500 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    </g>
                  </svg>
                </div>

                {/* Mobile Wiring */}
                <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-12 w-12 h-6 pointer-events-none">
                  <svg width="48" height="24" viewBox="0 0 48 24" className={`overflow-visible w-full h-full transition-all duration-300 ${system.theme.svgGlow}`}>
                    <line x1="0" y1="12" x2="16" y2="12" className={`stroke-2 stroke-zinc-800 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <line x1="32" y1="12" x2="48" y2="12" className={`stroke-2 stroke-zinc-800 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <g style={{ transformOrigin: "24px 12px" }} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-180 group-hover:rotate-0">
                      <path d="M 19 6 L 29 12 L 19 18 Z" className={`fill-red-500 transition-colors duration-300 ${system.theme.svgFill}`} />
                      <line x1="29" y1="4" x2="29" y2="20" className={`stroke-[2px] stroke-red-500 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    </g>
                  </svg>
                </div>


                {/* --- GROUND TERMINAL --- */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-0 pointer-events-none">
                  <div className={`w-[2px] h-4 bg-zinc-800 transition-all duration-300 ${system.theme.wire}`} />
                  <div className={`w-5 h-[2px] bg-zinc-600 mb-[2px] transition-all duration-300 ${system.theme.wire}`} />
                  <div className={`w-3 h-[2px] bg-zinc-600 mb-[2px] transition-all duration-300 ${system.theme.wire}`} />
                  <div className={`w-1 h-[2px] bg-zinc-600 transition-all duration-300 ${system.theme.wire}`} />
                </div>


                {/* --- IC PINS --- */}
                <div className="absolute -left-[6px] top-6 bottom-6 flex flex-col justify-between py-2 z-0 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((pin) => (
                    <div key={`l-${pin}`} className={`w-[6px] h-2.5 bg-zinc-800 rounded-l-sm transition-all duration-300 ${system.theme.pin}`} />
                  ))}
                </div>
                <div className="absolute -right-[6px] top-6 bottom-6 flex flex-col justify-between py-2 z-0 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((pin) => (
                    <div key={`r-${pin}`} className={`w-[6px] h-2.5 bg-zinc-800 rounded-r-sm transition-all duration-300 ${system.theme.pin}`} />
                  ))}
                </div>


                {/* --- MAIN CARD --- */}
                <Card className={`relative z-10 bg-zinc-950 border-2 border-zinc-800 h-full transition-all duration-300 ${system.theme.border} ${system.theme.shadow}`}>
                  <div className="absolute top-4 right-4 flex gap-1.5 pointer-events-none">
                    <div className={`w-1.5 h-1.5 rounded-full bg-zinc-800 transition-colors duration-300 ${system.theme.led} group-hover:animate-ping`} style={{ animationDuration: '1s' }} />
                    <div className={`w-1.5 h-1.5 rounded-full bg-zinc-800 transition-colors duration-300 ${system.theme.led} group-hover:animate-ping`} style={{ animationDuration: '1s', animationDelay: '0.3s' }} />
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-mono text-zinc-100 flex items-center gap-3">
                      <system.icon className={`w-5 h-5 text-zinc-600 transition-colors duration-300 group-hover:${system.theme.text}`} />
                      <span className="tracking-tight">{system.title}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 pt-2 pointer-events-none">
                      {system.skills.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx} 
                          variant="secondary" 
                          className={`bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs transition-colors duration-300 ${system.theme.badgeBorder} ${system.theme.badgeText}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}