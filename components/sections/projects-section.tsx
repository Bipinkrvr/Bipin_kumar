"use client";

import { FolderGit2, Github, Linkedin, ExternalLink, Terminal, Cpu, Zap, Server, Database, Maximize } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const projects = [
    {
      id: "MOD_01",
      title: "VyaparLens",
      subtitle: "STARTUP INITIATIVE",
      description: "Flutter-based startup application with on-device AI for merchants. Uses Server-Driven UI (JSON) for dynamic updates.",
      tags: ["Flutter", "On-Device AI", "JSON UI"],
      icon: Terminal,
      color: "cyan",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_02",
      title: "Thermal QC System",
      subtitle: "HARDWARE AUTOMATION",
      description: "Automated thermal testing hardware for DC motors. Integrates ESP32 and DHT11 sensors for predictive maintenance.",
      tags: ["ESP32", "DHT11", "Predictive Maint."],
      icon: Cpu,
      color: "amber",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_03",
      title: "Smart Water IoT",
      subtitle: "CLOSED-LOOP TELEMETRY",
      description: "Full-stack control system using ultrasonic sensors, BLE for provisioning, and Firebase to sync state to a dashboard.",
      tags: ["ESP32", "Firebase", "React Native"],
      icon: Zap,
      color: "blue",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_04",
      title: "Glynac Analytics",
      subtitle: "FRONT-END ARCHITECTURE",
      description: "Client-side dashboard for a Wealth Management System using Next.js 15 and Recharts for complex financial data.",
      tags: ["Next.js", "Recharts", "Tailwind"],
      icon: Server,
      color: "emerald",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    },
    {
      id: "MOD_05",
      title: "Sensor Hub",
      subtitle: "HARDWARE UPCYCLING",
      description: "Upcycled an Android device using Termux to stream internal sensor data to a local Plotly.js web UI.",
      tags: ["Termux", "Plotly.js", "Node.js"],
      icon: Database,
      color: "emerald",
      github: "https://github.com/yourusername",
      live: "https://yourlink.com"
    }
  ];

  return (
    <section id="projects" className="w-full h-[100dvh] min-h-[600px] snap-center flex flex-col justify-center relative pt-16 pb-4">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 border-b border-zinc-300 pb-2 gap-4 w-full shrink-0">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-cyan-600" />
          <h2 className="text-xl font-mono font-bold text-zinc-800 tracking-wider">
            [CIRCUIT_ARRAY_DEPLOYMENTS]
          </h2>
        </div>
        
        <div className="flex items-center gap-3 font-mono text-xs">
          <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-zinc-300 hover:border-cyan-500 hover:text-cyan-600 text-zinc-600 rounded-sm transition-all shadow-sm group">
            <Github className="w-3.5 h-3.5 group-hover:animate-pulse" />
            <span>GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-zinc-300 hover:border-emerald-500 hover:text-emerald-600 text-zinc-600 rounded-sm transition-all shadow-sm group">
            <Linkedin className="w-3.5 h-3.5 group-hover:animate-pulse" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>

      <div className="w-full flex-grow flex flex-col relative z-10 min-h-0">
        {/* Rack Top Plate */}
        <div className="w-full bg-zinc-100 border-x-4 border-t-4 border-zinc-300 rounded-t-lg p-2 mb-1 shadow-sm flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
             <Server className="w-4 h-4 text-zinc-500" />
             <div>
               <h2 className="text-sm sm:text-base font-mono font-black text-zinc-800 tracking-widest">ACTIVE_NODE_CLUSTER</h2>
               <p className="text-[8px] sm:text-[9px] font-mono text-zinc-500">RACK_MOUNTED_PROJECTS // DUAL_MODE_ARRAY</p>
             </div>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></div>
             <span className="text-[6px] font-mono text-zinc-500 mt-0.5">MAIN_LINK</span>
          </div>
        </div>

        {/* The Server Rack */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 bg-zinc-200 border-x-[8px] border-zinc-300 p-2 shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] overflow-y-auto custom-scrollbar">
          
          {projects.map((mod) => {
            const Icon = mod.icon;
            const colorMap = {
              emerald: { text: "text-emerald-600", border: "border-emerald-300", hover: "group-hover:text-emerald-600", bg: "hover:bg-emerald-50" },
              cyan: { text: "text-cyan-600", border: "border-cyan-300", hover: "group-hover:text-cyan-600", bg: "hover:bg-cyan-50" },
              amber: { text: "text-amber-600", border: "border-amber-300", hover: "group-hover:text-amber-600", bg: "hover:bg-amber-50" },
              blue: { text: "text-blue-600", border: "border-blue-300", hover: "group-hover:text-blue-600", bg: "hover:bg-blue-50" }
            };
            const theme = colorMap[mod.color as keyof typeof colorMap];

            return (
              <div 
                key={mod.id}
                className="group relative w-full bg-white border border-zinc-200 flex flex-col md:flex-row items-stretch overflow-hidden hover:bg-zinc-50 transition-colors duration-300 shadow-sm shrink-0"
              >
                {/* Left Hardware Handle */}
                <div className="hidden sm:flex items-center gap-1 bg-zinc-100 border-r border-zinc-200 px-1.5 py-2 shrink-0">
                  <div className="w-2.5 h-full min-h-[50px] bg-gradient-to-b from-zinc-50 via-white to-zinc-200 rounded-sm border border-zinc-300 flex items-center justify-center shadow-sm">
                     <div className="w-0.5 h-[80%] bg-zinc-300 rounded-full shadow-inner"></div>
                  </div>
                </div>

                {/* Module Digital Display */}
                <div className="flex-grow p-2.5 flex flex-col justify-center relative">
                  <div className="flex gap-2.5">
                    <div className={`w-8 h-8 shrink-0 bg-zinc-50 border ${theme.border} rounded flex items-center justify-center shadow-inner mt-0.5`}>
                       <Icon className={`w-4 h-4 ${theme.text}`} />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-1.5 mb-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className={`font-mono text-[8px] font-bold px-1 py-0.5 rounded border ${theme.border} ${theme.text} bg-white`}>
                            {mod.id}
                          </span>
                          <span className="font-mono text-[8px] text-zinc-500 tracking-widest">{mod.subtitle}</span>
                        </div>
                        
                        {/* ROUTES TO NEW AUTOCAD PAGE */}
                        <Link 
                          href={`/project/${mod.id}`}
                          className={`flex items-center gap-1 font-mono text-[9px] font-bold tracking-wider px-2 py-0.5 border rounded-sm transition-all shadow-sm ${theme.border} ${theme.text} ${theme.bg}`}
                        >
                          <Maximize className="w-2.5 h-2.5" /> [VIEW_SCHEMATIC]
                        </Link>
                      </div>

                      <h3 className="font-mono text-xs sm:text-sm font-bold text-zinc-800 uppercase tracking-tight">
                        {mod.title}
                      </h3>
                      <p className="mt-0.5 mb-1.5 font-mono text-[9px] sm:text-[10px] text-zinc-600 leading-snug line-clamp-2">
                        {mod.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-1.5">
                        {mod.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-zinc-100 border border-zinc-200 text-zinc-600 font-mono text-[8px] px-1 py-0 hover:border-zinc-300 transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-1.5 border-t border-zinc-100">
                        <Link href={mod.github} target="_blank" className={`flex items-center gap-1 text-zinc-400 transition-colors text-[9px] font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                          <Github className="w-2.5 h-2.5" /> Source
                        </Link>
                        <Link href={mod.live} target="_blank" className={`flex items-center gap-1 text-zinc-400 transition-colors text-[9px] font-mono uppercase font-bold tracking-wider ${theme.hover}`}>
                          <ExternalLink className="w-2.5 h-2.5" /> Live
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="w-full h-4 bg-zinc-200 border-x-4 border-b-4 border-zinc-300 rounded-b-lg flex justify-center items-center shadow-sm z-0 shrink-0 mt-1">
            <span className="font-mono text-[6px] text-zinc-500 tracking-[0.3em]">END_OF_RACK // SECURED</span>
        </div>
      </div>
    </section>
  );
}