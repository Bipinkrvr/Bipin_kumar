"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  // Main Category Icons
  Cpu, Database, Code2, Zap, Lightbulb,
  // Core Electrical Icons
  PenTool, Settings, GitMerge, Calculator, Factory,
  // Hardware & IoT Icons
  Network, Server, Plug, Radio,
  // Data & Analytics Icons
  BarChart, LineChart, Activity, LayoutDashboard, TrendingUp,
  // Cloud & Architecture Icons
  Sparkles, Layers, Cloud, Braces, Monitor,
  // Strategic Leadership Icons
  Puzzle, Users, Flag, Mic, Target
} from "lucide-react";

const subsystems = [
  {
    id: "card-amber",
    title: "Core_Electrical",
    icon: Zap,
    theme: {
      color: "amber",
      text: "text-amber-600",
      border: "border-amber-400",
      shadow: "shadow-[0_4px_20px_rgba(245,158,11,0.15)]",
      pin: "bg-amber-400 shadow-[0_0_5px_rgba(245,158,11,0.5)]",
      led: "bg-amber-500",
      badgeText: "text-amber-700",
      badgeBorder: "border-amber-300",
      wire: "bg-amber-400",
      svgStroke: "stroke-amber-500",
      svgFill: "fill-amber-500",
      svgGlow: "drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]", // Increased glow slightly
    },
    skills: [
      { name: "AutoCAD Electrical", icon: PenTool }, 
      { name: "PLC Programming", icon: Settings }, 
      { name: "Ladder Logic", icon: GitMerge }, 
      { name: "MATLAB", icon: Calculator }, 
      { name: "Industrial Auto", icon: Factory }
    ],
  },
  {
    id: "card-cyan",
    title: "Hardware_&_IoT",
    icon: Cpu,
    theme: {
      color: "cyan",
      text: "text-cyan-600",
      border: "border-cyan-400",
      shadow: "shadow-[0_4px_20px_rgba(34,211,238,0.15)]",
      pin: "bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.5)]",
      led: "bg-cyan-500",
      badgeText: "text-cyan-700",
      badgeBorder: "border-cyan-300",
      wire: "bg-cyan-400",
      svgStroke: "stroke-cyan-500",
      svgFill: "fill-cyan-500",
      svgGlow: "drop-shadow-[0_0_4px_rgba(34,211,238,0.6)]",
    },
    skills: [
      { name: "IoT Architecture", icon: Network }, 
      { name: "ESP32 & Arduino", icon: Cpu }, 
      { name: "Edge Computing", icon: Server }, 
      { name: "Hardware Integration", icon: Plug }, 
      { name: "Real-Time Telemetry", icon: Radio }
    ],
  },
  {
    id: "card-emerald",
    title: "Data_&_Analytics",
    icon: Database,
    theme: {
      color: "emerald",
      text: "text-emerald-600",
      border: "border-emerald-400",
      shadow: "shadow-[0_4px_20px_rgba(16,185,129,0.15)]",
      pin: "bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.5)]",
      led: "bg-emerald-500",
      badgeText: "text-emerald-700",
      badgeBorder: "border-emerald-300",
      wire: "bg-emerald-400",
      svgStroke: "stroke-emerald-500",
      svgFill: "fill-emerald-500",
      svgGlow: "drop-shadow-[0_0_4px_rgba(16,185,129,0.6)]",
    },
    skills: [
      { name: "Power BI & DAX", icon: BarChart }, 
      { name: "Data Visualization", icon: LineChart }, 
      { name: "Data Telemetry", icon: Activity }, 
      { name: "Dashboard Design", icon: LayoutDashboard }, 
      { name: "Predictive Analytics", icon: TrendingUp }
    ],
  },
  {
    id: "card-purple",
    title: "Cloud_&_Architecture",
    icon: Code2,
    theme: {
      color: "purple",
      text: "text-purple-600",
      border: "border-purple-400",
      shadow: "shadow-[0_4px_20px_rgba(168,85,247,0.15)]",
      pin: "bg-purple-400 shadow-[0_0_5px_rgba(168,85,247,0.5)]",
      led: "bg-purple-500",
      badgeText: "text-purple-700",
      badgeBorder: "border-purple-300",
      wire: "bg-purple-400",
      svgStroke: "stroke-purple-500",
      svgFill: "fill-purple-500",
      svgGlow: "drop-shadow-[0_0_4px_rgba(168,85,247,0.6)]",
    },
    skills: [
      { name: "AI Prototyping", icon: Sparkles }, 
      { name: "System Architecture", icon: Layers }, 
      { name: "Cloud (Firebase)", icon: Cloud }, 
      { name: "API Design", icon: Braces }, 
      { name: "IoT Dashboards", icon: Monitor }
    ],
  },
  {
    id: "card-rose",
    title: "Strategic_Leadership",
    icon: Lightbulb,
    theme: {
      color: "rose",
      text: "text-rose-600",
      border: "border-rose-400",
      shadow: "shadow-[0_4px_20px_rgba(244,63,94,0.15)]",
      pin: "bg-rose-400 shadow-[0_0_5px_rgba(244,63,94,0.5)]",
      led: "bg-rose-500",
      badgeText: "text-rose-700",
      badgeBorder: "border-rose-300",
      wire: "bg-rose-400",
      svgStroke: "stroke-rose-500",
      svgFill: "fill-rose-500",
      svgGlow: "drop-shadow-[0_0_4px_rgba(244,63,94,0.6)]",
    },
    skills: [
      { name: "Problem Solving", icon: Puzzle }, 
      { name: "Cross-Functional", icon: Users }, 
      { name: "Project Leadership", icon: Flag }, 
      { name: "Public Speaking", icon: Mic }, 
      { name: "Strategy", icon: Target }
    ],
  },
];

export function SkillsSection() {
  const [activeCards, setActiveCards] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const revealedCards = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastWidth = window.innerWidth;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        const mobile = currentWidth < 768;
        setIsMobile(mobile);
        if (!mobile) {
          setActiveCards([]); 
          revealedCards.current.clear();
        }
      }
    };

    const initialMobile = window.innerWidth < 768;
    setIsMobile(initialMobile);

    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.innerWidth >= 768) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id && !revealedCards.current.has(id)) {
              revealedCards.current.add(id);
              setActiveCards((prev) => {
                if (!prev.includes(id)) return [...prev, id];
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.95 } 
    );

    document.querySelectorAll(".subsystem-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const latestActiveId = activeCards.length > 0 ? activeCards[activeCards.length - 1] : null;
  const activeSystem = subsystems.find(s => s.id === latestActiveId);
  const activeColor = activeSystem?.theme.color;

  const getHubBorder = () => {
    if (activeColor === 'amber') return "border-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.15)]";
    if (activeColor === 'cyan') return "border-cyan-400 shadow-[0_4px_15px_rgba(34,211,238,0.15)]";
    if (activeColor === 'emerald') return "border-emerald-400 shadow-[0_4px_15px_rgba(16,185,129,0.15)]";
    if (activeColor === 'purple') return "border-purple-400 shadow-[0_4px_15px_rgba(168,85,247,0.15)]";
    if (activeColor === 'rose') return "border-rose-400 shadow-[0_4px_15px_rgba(244,63,94,0.15)]";
    return "border-zinc-300 shadow-sm"; 
  };

  const getTrunkColor = () => {
    if (activeColor === 'amber') return "bg-amber-400";
    if (activeColor === 'cyan') return "bg-cyan-400";
    if (activeColor === 'emerald') return "bg-emerald-400";
    if (activeColor === 'purple') return "bg-purple-400";
    if (activeColor === 'rose') return "bg-rose-400";
    return "bg-zinc-300"; 
  };

  return (
    <section id="skills" className="w-full flex flex-col justify-center relative py-12 sm:py-20 px-4 sm:px-8 overflow-hidden bg-transparent">
      <div className="w-full max-w-4xl mx-auto flex items-center gap-3 mb-6 border-b border-zinc-200 pb-3">
        <Code2 className="w-6 h-6 text-cyan-600" />
        <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [CORE_SKILLS_MATRIX]
        </h2>
      </div>

      <div className="relative mt-2 mb-6 w-full max-w-4xl mx-auto">
        
        {/* --- MAIN VCC BUS --- */}
        <div className="flex justify-center relative z-20 mb-8 pointer-events-none">
          <div className={`relative px-5 py-2.5 bg-white border-2 rounded-sm transition-all duration-75 flex items-center gap-3 ${getHubBorder()}`}>
            <Zap className={`w-5 h-5 transition-colors duration-75 ${activeSystem ? `text-${activeColor}-500 animate-pulse` : 'text-zinc-400'}`} />
            <span className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors duration-75 ${activeSystem ? `text-${activeColor}-600` : 'text-zinc-500'}`}>
              MAIN_VCC_BUS
            </span>
          </div>
        </div>

        {/* --- TRUNK WIRES --- */}
        <div className={`hidden md:block absolute top-[42px] bottom-6 left-1/2 w-[3px] -translate-x-[1.5px] rounded-full z-0 pointer-events-none transition-colors duration-75 ${getTrunkColor()}`}></div>
        <div className={`md:hidden absolute top-[42px] bottom-6 left-8 w-[3px] -translate-x-[1.5px] rounded-b-full z-0 pointer-events-none transition-colors duration-75 ${getTrunkColor()}`}></div>
        <div className={`md:hidden absolute top-[42px] left-8 right-1/2 h-[3px] -translate-y-[1.5px] rounded-l-full z-0 pointer-events-none transition-colors duration-75 ${getTrunkColor()}`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pl-16 md:pl-0 relative z-10">
          {subsystems.map((system, idx) => {
            const isLeftCol = idx % 2 === 0;
            const isActive = activeCards.includes(system.id);

            return (
              <div 
                key={idx} 
                data-id={system.id}
                onMouseEnter={() => !isMobile && setActiveCards([system.id])}
                onMouseLeave={() => !isMobile && setActiveCards([])}
                onClick={() => {
                  if (isMobile) {
                    setActiveCards((prev) => 
                      prev.includes(system.id) 
                        ? prev.filter((id) => id !== system.id)
                        : [...prev, system.id]
                    );
                  }
                }}
                className={`relative cursor-pointer subsystem-card ${system.id} select-none md:active:scale-100 active:scale-[0.98] transition-transform duration-75`}
              >
                
                {/* --- DESKTOP DIODES LEFT --- */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-6 pointer-events-none ${isLeftCol ? '-right-10' : 'hidden'}`}>
                  <svg width="40" height="24" viewBox="0 0 40 24" className={`overflow-visible w-full h-full transition-all duration-75 ${isActive ? system.theme.svgGlow : ''}`}>
                    <line x1="0" y1="12" x2="12" y2="12" className={`stroke-2 transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-300'}`} />
                    <line x1="28" y1="12" x2="40" y2="12" className={`stroke-2 transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-300'}`} />
                    <g style={{ transformOrigin: "20px 12px" }} className={`transition-all duration-300 ease-out ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                      <path d="M 15 6 L 25 12 L 15 18 Z" className={`transition-colors duration-75 ${isActive ? system.theme.svgFill : 'fill-zinc-400'}`} />
                      <line x1="25" y1="4" x2="25" y2="20" className={`stroke-[2px] transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-400'}`} />
                    </g>
                  </svg>
                </div>

                {/* --- DESKTOP DIODES RIGHT --- */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-6 pointer-events-none ${!isLeftCol ? '-left-10' : 'hidden'}`}>
                  <svg width="40" height="24" viewBox="0 0 40 24" className={`overflow-visible w-full h-full transition-all duration-75 ${isActive ? system.theme.svgGlow : ''}`}>
                    <line x1="0" y1="12" x2="12" y2="12" className={`stroke-2 transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-300'}`} />
                    <line x1="28" y1="12" x2="40" y2="12" className={`stroke-2 transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-300'}`} />
                    <g style={{ transformOrigin: "20px 12px" }} className={`transition-all duration-300 ease-out ${isActive ? 'rotate-0' : 'rotate-180'}`}>
                      <path d="M 15 6 L 25 12 L 15 18 Z" className={`transition-colors duration-75 ${isActive ? system.theme.svgFill : 'fill-zinc-400'}`} />
                      <line x1="25" y1="4" x2="25" y2="20" className={`stroke-[2px] transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-400'}`} />
                    </g>
                  </svg>
                </div>

                {/* --- MOBILE DIODES --- */}
                <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-8 w-8 h-6 pointer-events-none">
                  <svg width="32" height="24" viewBox="0 0 32 24" className={`overflow-visible w-full h-full transition-all duration-75 ${isActive ? system.theme.svgGlow : ''}`}>
                    <line x1="0" y1="12" x2="8" y2="12" className={`stroke-2 transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-300'}`} />
                    <line x1="24" y1="12" x2="32" y2="12" className={`stroke-2 transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-300'}`} />
                    <g style={{ transformOrigin: "16px 12px" }} className={`transition-all duration-300 ease-out ${isActive ? 'rotate-0' : 'rotate-180'}`}>
                      <path d="M 11 6 L 21 12 L 11 18 Z" className={`transition-colors duration-75 ${isActive ? system.theme.svgFill : 'fill-zinc-400'}`} />
                      <line x1="21" y1="4" x2="21" y2="20" className={`stroke-[2px] transition-colors duration-75 ${isActive ? system.theme.svgStroke : 'stroke-zinc-400'}`} />
                    </g>
                  </svg>
                </div>

                {/* --- GROUND WIRES --- */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-0 pointer-events-none">
                  <div className={`w-[2px] h-3 transition-colors duration-75 ${isActive ? system.theme.wire : 'bg-zinc-300'}`} />
                  <div className={`w-4 h-[2px] mb-[2px] transition-colors duration-75 ${isActive ? system.theme.wire : 'bg-zinc-400'}`} />
                  <div className={`w-2.5 h-[2px] mb-[2px] transition-colors duration-75 ${isActive ? system.theme.wire : 'bg-zinc-400'}`} />
                  <div className={`w-1 h-[2px] transition-colors duration-75 ${isActive ? system.theme.wire : 'bg-zinc-400'}`} />
                </div>

                {/* --- IC PINS --- */}
                <div className="absolute -left-[5px] top-5 bottom-5 flex flex-col justify-between py-1.5 z-0 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((pin) => (
                    <div key={`l-${pin}`} className={`w-[5px] h-2 rounded-l-sm transition-all duration-75 ${isActive ? system.theme.pin : 'bg-zinc-300'}`} />
                  ))}
                </div>
                <div className="absolute -right-[5px] top-5 bottom-5 flex flex-col justify-between py-1.5 z-0 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((pin) => (
                    <div key={`r-${pin}`} className={`w-[5px] h-2 rounded-r-sm transition-all duration-75 ${isActive ? system.theme.pin : 'bg-zinc-300'}`} />
                  ))}
                </div>

                {/* --- MAIN CARD --- */}
                <Card className={`relative z-10 bg-white border-2 h-full transition-all duration-75 ${isActive ? `${system.theme.border} ${system.theme.shadow}` : 'border-zinc-200 shadow-sm'}`}>
                  
                  {/* Card LEDs */}
                  <div className="absolute top-3 right-3 flex gap-1.5 pointer-events-none">
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-75 ${isActive ? `${system.theme.led} animate-ping` : 'bg-zinc-200'}`} style={{ animationDuration: '1s' }} />
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-75 ${isActive ? `${system.theme.led} animate-ping` : 'bg-zinc-200'}`} style={{ animationDuration: '1s', animationDelay: '0.3s' }} />
                  </div>

                  <CardHeader className="pb-2 pt-4 px-4 sm:px-5">
                    <CardTitle className={`text-base sm:text-lg font-mono flex items-center gap-2 transition-colors duration-75 ${isActive ? system.theme.text : 'text-zinc-400'}`}>
                      <system.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="tracking-tight">{system.title}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-4 sm:px-5 pb-5">
                    <div className="flex flex-wrap gap-2 pt-1 pointer-events-none">
                      {system.skills.map((skill, skillIdx) => {
                        const SkillIcon = skill.icon;
                        return (
                          <Badge 
                            key={skillIdx} 
                            variant="secondary" 
                            className={`flex items-center gap-1.5 bg-zinc-50 border font-mono px-2 py-1 text-[10px] sm:text-xs transition-colors duration-75 ${isActive ? `${system.theme.badgeBorder} ${system.theme.badgeText}` : 'border-zinc-200 text-zinc-600'}`}
                          >
                            {/* THE ALWAYS-LIGHTED ICON */}
                            <SkillIcon className={`w-3 h-3 ${system.theme.text} ${system.theme.svgGlow}`} />
                            {skill.name}
                          </Badge>
                        );
                      })}
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