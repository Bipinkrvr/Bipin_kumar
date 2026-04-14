"use client";

import { FolderGit2, Github, Linkedin, ExternalLink, Terminal, Cpu, Zap, Server, Database } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const projects = [
    {
      id: "MOD_01",
      title: "VyaparLens",
      subtitle: "STARTUP INITIATIVE",
      description: "A Flutter-based startup application utilizing on-device AI to assist local merchants. Architected with Server-Driven UI (JSON) to enable dynamic template updates without app store deployments.",
      tags: ["Flutter", "Dart", "On-Device AI", "JSON UI"],
      icon: Terminal,
      color: "cyan",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_02",
      title: "Thermal QC System",
      subtitle: "HARDWARE AUTOMATION",
      description: "Automated thermal testing hardware for DC motors. Integrates ESP32 and DHT11 sensors to monitor real-time temperatures and implement predictive defect identification.",
      tags: ["ESP32", "C++", "DHT11", "Predictive Maint."],
      icon: Cpu,
      color: "amber",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_03",
      title: "Smart Water Tank IoT",
      subtitle: "CLOSED-LOOP TELEMETRY",
      description: "Full-stack closed-loop control system. Employs ultrasonic sensors for depth tracking, BLE for provisioning, and Firebase cloud functions to sync state to a mobile dashboard.",
      tags: ["ESP32", "Firebase", "BLE", "React Native"],
      icon: Zap,
      color: "blue",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_04",
      title: "Glynac WMS Analytics",
      subtitle: "FRONT-END ARCHITECTURE",
      description: "Client-side dashboard implementation for a Wealth Management System. Utilized Next.js 15 and Recharts to map complex, high-frequency financial data into readable compliance visualizers.",
      tags: ["Next.js 15", "React 19", "Recharts", "Tailwind"],
      icon: Server,
      color: "emerald",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_05",
      title: "IoT Phone Sensor Hub",
      subtitle: "HARDWARE UPCYCLING",
      description: "Upcycled a deprecated Android device using Termux and a virtual Ubuntu environment. Configured as a local server to stream internal sensor data to a Plotly.js web UI.",
      tags: ["Termux", "Ubuntu", "Plotly.js", "Node.js"],
      icon: Database,
      color: "emerald",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-20 relative py-12">
      
      {/* Section Header with LinkedIn and GitHub Links */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-zinc-800 pb-4 gap-4 max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <FolderGit2 className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-mono font-bold text-zinc-100 tracking-wider">
            [CIRCUIT_ARRAY_DEPLOYMENTS]
          </h2>
        </div>
        
        {/* Main External Links */}
        <div className="flex items-center gap-4 font-mono text-sm">
          <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:text-cyan-400 text-zinc-400 rounded transition-all group">
            <Github className="w-4 h-4 group-hover:animate-pulse" />
            <span>GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 text-zinc-400 rounded transition-all group">
            <Linkedin className="w-4 h-4 group-hover:animate-pulse" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Rack Top Plate */}
        <div className="w-full bg-zinc-900 border-x-4 border-t-4 border-zinc-700 rounded-t-lg p-4 mb-1 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Server className="w-5 h-5 text-zinc-400" />
             <div>
               <h2 className="text-lg sm:text-xl font-mono font-black text-zinc-100 tracking-widest">ACTIVE_NODE_CLUSTER</h2>
               <p className="text-[10px] sm:text-xs font-mono text-zinc-500">RACK_MOUNTED_PROJECTS // U-SPACE: 5U</p>
             </div>
          </div>
          {/* Main Power Indicator */}
          <div className="flex flex-col items-center">
             <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,1)] animate-pulse"></div>
             <span className="text-[8px] font-mono text-zinc-400 mt-1">MAIN_LINK</span>
          </div>
        </div>

        {/* The Server Rack */}
        <div className="flex flex-col gap-1.5 bg-zinc-950 border-x-[12px] border-zinc-800 p-2 shadow-[inset_0_0_50px_rgba(0,0,0,1)] rounded-b-md">
          
          {projects.map((mod) => {
            const Icon = mod.icon;
            
            // Dynamic Color Mapping
            const colorMap = {
              emerald: { text: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500", shadow: "shadow-[0_0_10px_rgba(16,185,129,0.8)]", hover: "group-hover:text-emerald-400" },
              cyan: { text: "text-cyan-400", border: "border-cyan-500/50", bg: "bg-cyan-500", shadow: "shadow-[0_0_10px_rgba(34,211,238,0.8)]", hover: "group-hover:text-cyan-400" },
              amber: { text: "text-amber-400", border: "border-amber-500/50", bg: "bg-amber-400", shadow: "shadow-[0_0_10px_rgba(251,191,36,0.8)]", hover: "group-hover:text-amber-400" },
              blue: { text: "text-blue-400", border: "border-blue-500/50", bg: "bg-blue-500", shadow: "shadow-[0_0_10px_rgba(59,130,246,0.8)]", hover: "group-hover:text-blue-400" }
            };
            const theme = colorMap[mod.color as keyof typeof colorMap];

            return (
              <div 
                key={mod.id}
                className="group relative w-full bg-[#111111] border-y border-zinc-700/50 flex flex-col md:flex-row items-stretch overflow-hidden hover:bg-[#151515] transition-colors duration-300"
              >
                {/* Left Hardware Handle & Vents */}
                <div className="flex items-center gap-2 bg-zinc-900 border-r border-zinc-800 px-2 py-3 shrink-0">
                  <div className="w-4 h-full min-h-[100px] bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-800 rounded-sm border border-zinc-500/30 flex items-center justify-center shadow-md">
                     <div className="w-1.5 h-[80%] bg-zinc-950 rounded-full shadow-inner"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 px-1 opacity-50">
                     {[...Array(12)].map((_, i) => (
                       <div key={i} className="w-1.5 h-1.5 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
                     ))}
                  </div>
                </div>

                {/* Module Digital Display */}
                <div className="flex-grow p-4 sm:p-5 flex flex-col justify-center relative">
                  {/* Circuit Overlay */}
                  <div className="absolute top-0 right-0 w-32 h-full opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-30">
                     <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${theme.text}`} fill="none" strokeWidth="1">
                        <path d="M100 20 L80 20 L70 30 L0 30 M100 50 L60 50 L50 60 L0 60 M100 80 L90 80 L80 70 L0 70" />
                        <circle cx="80" cy="20" r="2" fill="currentColor" />
                        <circle cx="60" cy="50" r="2" fill="currentColor" />
                        <circle cx="90" cy="80" r="2" fill="currentColor" />
                     </svg>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-10">
                    <div className="flex gap-4 flex-grow">
                      {/* Icon Block */}
                      <div className={`w-12 h-12 shrink-0 bg-[#050505] border ${theme.border} rounded flex items-center justify-center shadow-inner mt-1`}>
                         <Icon className={`w-6 h-6 ${theme.text}`} />
                      </div>
                      
                      {/* Text & Tags Block */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${theme.border} ${theme.text} bg-zinc-950`}>
                            {mod.id}
                          </span>
                          <span className="font-mono text-[10px] text-zinc-500 tracking-widest">{mod.subtitle}</span>
                        </div>
                        <h3 className="font-mono text-base sm:text-lg font-bold text-zinc-100 uppercase tracking-wide">
                          {mod.title}
                        </h3>
                        <p className="mt-2 mb-4 font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                          {mod.description}
                        </p>
                        
                        {/* Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {mod.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 text-zinc-400 font-mono text-[10px] transition-colors">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-4 pt-3 border-t border-zinc-800/50">
                          <Link href={mod.github} target="_blank" className={`flex items-center gap-2 text-zinc-500 transition-colors text-[11px] sm:text-xs font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                            <Github className="w-3.5 h-3.5" /> Source_Code
                          </Link>
                          <Link href={mod.live} target="_blank" className={`flex items-center gap-2 text-zinc-500 transition-colors text-[11px] sm:text-xs font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                            <ExternalLink className="w-3.5 h-3.5" /> Live_Node
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Edge: Gold Connector Pins */}
                <div className="hidden md:flex flex-col justify-between items-end w-4 py-2 pr-1 border-l border-zinc-800/50 bg-[#0a0a0a]">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className="w-2.5 h-[3px] bg-gradient-to-r from-[#b8860b] to-[#ffd700] rounded-l-sm shadow-[0_0_2px_rgba(218,165,32,0.5)]"></div>
                   ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Rack Bottom Plate */}
        <div className="w-full h-6 bg-zinc-800 border-x-4 border-b-4 border-zinc-700 rounded-b-lg flex justify-center items-center shadow-md z-0 mt-1">
            <span className="font-mono text-[8px] text-zinc-500 tracking-[0.3em]">END_OF_RACK // MOUNT_SECURE</span>
        </div>

      </div>
    </section>
  );
}