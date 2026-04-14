import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Terminal, Database, Code2, Zap } from "lucide-react";

export function SkillsSection() {
  const subsystems = [
    {
      id: "card-amber",
      title: "Hardware_&_IoT",
      icon: Cpu,
      theme: {
        text: "text-amber-600",
        border: "group-hover:border-amber-400",
        shadow: "group-hover:shadow-[0_4px_20px_rgba(245,158,11,0.15)]",
        pin: "group-hover:bg-amber-400 group-hover:shadow-[0_0_5px_rgba(245,158,11,0.5)]",
        led: "group-hover:bg-amber-500",
        badgeText: "group-hover:text-amber-700",
        badgeBorder: "group-hover:border-amber-300",
        wire: "group-hover:bg-amber-400",
        svgStroke: "group-hover:stroke-amber-500",
        svgFill: "group-hover:fill-amber-500",
        svgGlow: "group-hover:drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]",
      },
      skills: ["ESP32 Microcontrollers", "Embedded C++", "Termux Upcycling", "Sensors (DHT11)"],
    },
    {
      id: "card-cyan",
      title: "Client_Architecture",
      icon: Terminal,
      theme: {
        text: "text-cyan-600",
        border: "group-hover:border-cyan-400",
        shadow: "group-hover:shadow-[0_4px_20px_rgba(34,211,238,0.15)]",
        pin: "group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(34,211,238,0.5)]",
        led: "group-hover:bg-cyan-500",
        badgeText: "group-hover:text-cyan-700",
        badgeBorder: "group-hover:border-cyan-300",
        wire: "group-hover:bg-cyan-400",
        svgStroke: "group-hover:stroke-cyan-500",
        svgFill: "group-hover:fill-cyan-500",
        svgGlow: "group-hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]",
      },
      skills: ["React 19", "Next.js 15", "Flutter", "Tailwind CSS"],
    },
    {
      id: "card-emerald",
      title: "Server_&_Database",
      icon: Database,
      theme: {
        text: "text-emerald-600",
        border: "group-hover:border-emerald-400",
        shadow: "group-hover:shadow-[0_4px_20px_rgba(16,185,129,0.15)]",
        pin: "group-hover:bg-emerald-400 group-hover:shadow-[0_0_5px_rgba(16,185,129,0.5)]",
        led: "group-hover:bg-emerald-500",
        badgeText: "group-hover:text-emerald-700",
        badgeBorder: "group-hover:border-emerald-300",
        wire: "group-hover:bg-emerald-400",
        svgStroke: "group-hover:stroke-emerald-500",
        svgFill: "group-hover:fill-emerald-500",
        svgGlow: "group-hover:drop-shadow-[0_0_4px_rgba(16,185,129,0.4)]",
      },
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      id: "card-purple",
      title: "Core_Engineering",
      icon: Code2,
      theme: {
        text: "text-purple-600",
        border: "group-hover:border-purple-400",
        shadow: "group-hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)]",
        pin: "group-hover:bg-purple-400 group-hover:shadow-[0_0_5px_rgba(168,85,247,0.5)]",
        led: "group-hover:bg-purple-500",
        badgeText: "group-hover:text-purple-700",
        badgeBorder: "group-hover:border-purple-300",
        wire: "group-hover:bg-purple-400",
        svgStroke: "group-hover:stroke-purple-500",
        svgFill: "group-hover:fill-purple-500",
        svgGlow: "group-hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.4)]",
      },
      skills: ["Power Electronics", "Synchronous Machines", "Control Systems", "ZPF Methods"],
    },
  ];

  return (
    // STRICT WINDOW HEIGHT AND SNAPPING
    <section id="skills" className="w-full h-[100dvh] min-h-[600px] snap-center flex flex-col justify-center relative pt-16 pb-4">
      <div className="flex items-center gap-3 mb-6 border-b border-zinc-200 pb-3">
        <Code2 className="w-6 h-6 text-cyan-600" />
        <h2 className="text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [SUBSYSTEMS_TOOLKIT]
        </h2>
      </div>

      {/* MASTER CONTAINER */}
      <div className="relative mt-6 mb-6 w-full max-w-4xl mx-auto group/board">
        
        {/* --- DYNAMIC POWER HUB --- */}
        <div className="flex justify-center relative z-20 mb-8 pointer-events-none">
          <div className="px-5 py-2.5 bg-white border-2 rounded-sm transition-all duration-500 flex items-center gap-3
            border-zinc-300 shadow-sm
            group-has-[.card-amber:hover]/board:border-amber-400 group-has-[.card-amber:hover]/board:shadow-[0_4px_15px_rgba(245,158,11,0.15)]
            group-has-[.card-cyan:hover]/board:border-cyan-400 group-has-[.card-cyan:hover]/board:shadow-[0_4px_15px_rgba(34,211,238,0.15)]
            group-has-[.card-emerald:hover]/board:border-emerald-400 group-has-[.card-emerald:hover]/board:shadow-[0_4px_15px_rgba(16,185,129,0.15)]
            group-has-[.card-purple:hover]/board:border-purple-400 group-has-[.card-purple:hover]/board:shadow-[0_4px_15px_rgba(168,85,247,0.15)]
          ">
            <Zap className="w-5 h-5 transition-colors duration-500 group-hover/board:animate-pulse
              text-zinc-400
              group-has-[.card-amber:hover]/board:text-amber-500
              group-has-[.card-cyan:hover]/board:text-cyan-500
              group-has-[.card-emerald:hover]/board:text-emerald-500
              group-has-[.card-purple:hover]/board:text-purple-500
            " />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors duration-500
              text-zinc-500
              group-has-[.card-amber:hover]/board:text-amber-600
              group-has-[.card-cyan:hover]/board:text-cyan-600
              group-has-[.card-emerald:hover]/board:text-emerald-600
              group-has-[.card-purple:hover]/board:text-purple-600
            ">
              MAIN_VCC_BUS
            </span>
          </div>
        </div>

        {/* --- DYNAMIC VERTICAL TRUNK WIRE --- */}
        <div className="absolute top-[40px] bottom-6 left-[2.25rem] md:left-1/2 w-[3px] -translate-x-[1.5px] rounded-full z-0 pointer-events-none transition-all duration-500
          bg-zinc-300
          group-has-[.card-amber:hover]/board:bg-amber-400
          group-has-[.card-cyan:hover]/board:bg-cyan-400
          group-has-[.card-emerald:hover]/board:bg-emerald-400
          group-has-[.card-purple:hover]/board:bg-purple-400
        "></div>


        {/* THE CIRCUIT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pl-[4.5rem] md:pl-0 relative z-10">
          {subsystems.map((system, idx) => {
            const isLeftCol = idx % 2 === 0;

            return (
              <div key={idx} className={`relative group cursor-pointer ${system.id}`}>
                
                {/* --- FLAWLESS SMART DIODES --- */}
                
                {/* Desktop Left Column */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-6 pointer-events-none ${isLeftCol ? '-right-10' : 'hidden'}`}>
                  <svg width="40" height="24" viewBox="0 0 40 24" className={`overflow-visible w-full h-full transition-all duration-300 ${system.theme.svgGlow}`}>
                    <line x1="0" y1="12" x2="12" y2="12" className={`stroke-2 stroke-zinc-300 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <line x1="28" y1="12" x2="40" y2="12" className={`stroke-2 stroke-zinc-300 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <g style={{ transformOrigin: "20px 12px" }} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-0 group-hover:rotate-180">
                      <path d="M 15 6 L 25 12 L 15 18 Z" className={`fill-rose-400 transition-colors duration-300 ${system.theme.svgFill}`} />
                      <line x1="25" y1="4" x2="25" y2="20" className={`stroke-[2px] stroke-rose-400 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    </g>
                  </svg>
                </div>

                {/* Desktop Right Column */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-6 pointer-events-none ${!isLeftCol ? '-left-10' : 'hidden'}`}>
                  <svg width="40" height="24" viewBox="0 0 40 24" className={`overflow-visible w-full h-full transition-all duration-300 ${system.theme.svgGlow}`}>
                    <line x1="0" y1="12" x2="12" y2="12" className={`stroke-2 stroke-zinc-300 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <line x1="28" y1="12" x2="40" y2="12" className={`stroke-2 stroke-zinc-300 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <g style={{ transformOrigin: "20px 12px" }} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-180 group-hover:rotate-0">
                      <path d="M 15 6 L 25 12 L 15 18 Z" className={`fill-rose-400 transition-colors duration-300 ${system.theme.svgFill}`} />
                      <line x1="25" y1="4" x2="25" y2="20" className={`stroke-[2px] stroke-rose-400 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    </g>
                  </svg>
                </div>

                {/* Mobile Wiring */}
                <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-10 w-10 h-6 pointer-events-none">
                  <svg width="40" height="24" viewBox="0 0 40 24" className={`overflow-visible w-full h-full transition-all duration-300 ${system.theme.svgGlow}`}>
                    <line x1="0" y1="12" x2="12" y2="12" className={`stroke-2 stroke-zinc-300 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <line x1="28" y1="12" x2="40" y2="12" className={`stroke-2 stroke-zinc-300 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    <g style={{ transformOrigin: "20px 12px" }} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-180 group-hover:rotate-0">
                      <path d="M 15 6 L 25 12 L 15 18 Z" className={`fill-rose-400 transition-colors duration-300 ${system.theme.svgFill}`} />
                      <line x1="25" y1="4" x2="25" y2="20" className={`stroke-[2px] stroke-rose-400 transition-colors duration-300 ${system.theme.svgStroke}`} />
                    </g>
                  </svg>
                </div>


                {/* --- GROUND TERMINAL --- */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-0 pointer-events-none">
                  <div className={`w-[2px] h-3 bg-zinc-300 transition-all duration-300 ${system.theme.wire}`} />
                  <div className={`w-4 h-[2px] bg-zinc-400 mb-[2px] transition-all duration-300 ${system.theme.wire}`} />
                  <div className={`w-2.5 h-[2px] bg-zinc-400 mb-[2px] transition-all duration-300 ${system.theme.wire}`} />
                  <div className={`w-1 h-[2px] bg-zinc-400 transition-all duration-300 ${system.theme.wire}`} />
                </div>


                {/* --- IC PINS --- */}
                <div className="absolute -left-[5px] top-5 bottom-5 flex flex-col justify-between py-1.5 z-0 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((pin) => (
                    <div key={`l-${pin}`} className={`w-[5px] h-2 bg-zinc-300 rounded-l-sm transition-all duration-300 ${system.theme.pin}`} />
                  ))}
                </div>
                <div className="absolute -right-[5px] top-5 bottom-5 flex flex-col justify-between py-1.5 z-0 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((pin) => (
                    <div key={`r-${pin}`} className={`w-[5px] h-2 bg-zinc-300 rounded-r-sm transition-all duration-300 ${system.theme.pin}`} />
                  ))}
                </div>


                {/* --- MAIN CARD --- */}
                <Card className={`relative z-10 bg-white border-2 border-zinc-200 h-full transition-all duration-300 shadow-sm ${system.theme.border} ${system.theme.shadow}`}>
                  <div className="absolute top-3 right-3 flex gap-1.5 pointer-events-none">
                    <div className={`w-1.5 h-1.5 rounded-full bg-zinc-200 transition-colors duration-300 ${system.theme.led} group-hover:animate-ping`} style={{ animationDuration: '1s' }} />
                    <div className={`w-1.5 h-1.5 rounded-full bg-zinc-200 transition-colors duration-300 ${system.theme.led} group-hover:animate-ping`} style={{ animationDuration: '1s', animationDelay: '0.3s' }} />
                  </div>

                  <CardHeader className="pb-2 pt-4 px-4 sm:px-5">
                    <CardTitle className="text-base sm:text-lg font-mono text-zinc-800 flex items-center gap-2">
                      <system.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 transition-colors duration-300 group-hover:${system.theme.text}`} />
                      <span className="tracking-tight">{system.title}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-4 sm:px-5 pb-5">
                    <div className="flex flex-wrap gap-1.5 pt-1 pointer-events-none">
                      {system.skills.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx} 
                          variant="secondary" 
                          className={`bg-zinc-50 border border-zinc-200 text-zinc-600 font-mono text-[10px] sm:text-xs transition-colors duration-300 ${system.theme.badgeBorder} ${system.theme.badgeText}`}
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