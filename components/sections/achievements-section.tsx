"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

// Reusable Logic Gate Card Component (Optimized for Achievements)
function LogicGateCard({ 
  title, 
  subtitle,
  description, 
  tags 
}: { 
  title: string, 
  subtitle: string,
  description: string, 
  tags: string[]
}) {
  return (
    <div className="relative group mt-6 h-full">
      <Card className="bg-zinc-900/40 border-2 border-zinc-800 group-hover:border-emerald-500/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-500 rounded-xl overflow-visible flex flex-col h-full">
        
        {/* THE AND GATE SCHEMATIC - Top Right */}
        <div className="absolute -top-5 right-6 bg-zinc-950 px-2 z-10 flex items-center">
          <svg width="75" height="40" viewBox="0 0 75 40" className="overflow-visible">
            {/* Input States (0 changes to 1 on hover) */}
            <text x="-5" y="15" className="text-[10px] font-mono fill-zinc-600 group-hover:fill-cyan-400 transition-colors duration-500 opacity-100 group-hover:opacity-0 absolute">0</text>
            <text x="-5" y="15" className="text-[10px] font-mono fill-cyan-400 transition-colors duration-500 opacity-0 group-hover:opacity-100 absolute">1</text>
            
            <text x="-5" y="31" className="text-[10px] font-mono fill-zinc-600 group-hover:fill-cyan-400 transition-colors duration-500 opacity-100 group-hover:opacity-0 absolute">0</text>
            <text x="-5" y="31" className="text-[10px] font-mono fill-cyan-400 transition-colors duration-500 opacity-0 group-hover:opacity-100 absolute">1</text>

            {/* Input Wires */}
            <line x1="5" y1="12" x2="20" y2="12" className="stroke-zinc-700 group-hover:stroke-cyan-400 stroke-2 transition-colors duration-500" />
            <line x1="5" y1="28" x2="20" y2="28" className="stroke-zinc-700 group-hover:stroke-cyan-400 stroke-2 transition-colors duration-500" />

            {/* AND Gate Body */}
            <path 
              d="M 20 4 L 30 4 Q 48 4 48 20 Q 48 36 30 36 L 20 36 Z" 
              className="stroke-zinc-600 fill-zinc-900 group-hover:stroke-emerald-400 group-hover:fill-emerald-400/10 stroke-2 transition-all duration-500" 
            />

            {/* Output Wire & Q State */}
            <line x1="48" y1="20" x2="65" y2="20" className="stroke-zinc-700 group-hover:stroke-emerald-400 stroke-2 transition-colors duration-500" />
            <text x="70" y="23" className="text-[12px] font-mono font-bold fill-zinc-600 group-hover:fill-emerald-400 transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">Q</text>
          </svg>
        </div>

        {/* Card Content */}
        <CardHeader className="pt-8 flex-none pb-2">
          <div className="font-mono text-[10px] text-emerald-500 tracking-widest mb-2">{subtitle}</div>
          <CardTitle className="text-xl font-mono text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300 uppercase">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex flex-col flex-grow justify-between gap-6 pb-6">
          <p className="text-sm font-mono text-zinc-400 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-950 border border-zinc-800 group-hover:border-emerald-500/30 text-zinc-300 font-mono text-[10px] transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AchievementsSection() {
  const achievements = [
    {
      title: "Front-End Architecture",
      subtitle: "// GLYNAC WMS INTERNSHIP",
      description: "Successfully integrated high-performance React 19 & Next.js 15 dashboards. Calibrated analytics telemetry using Recharts for wealth management operations.",
      tags: ["React 19", "Next.js 15", "Recharts"]
    },
    {
      title: "Startup Initiative",
      subtitle: "// VYAPARLENS FOUNDER",
      description: "Engineered a Flutter-based mobile application utilizing a custom Server-Driven UI (JSON) architecture. Implemented on-device AI for dynamic promotional rendering.",
      tags: ["Flutter", "Server-Driven UI", "AI"]
    },
    {
      title: "Hardware Upcycling",
      subtitle: "// IOT SENSOR HUB",
      description: "Repurposed abandoned mobile hardware via Termux and virtual Ubuntu environments to stream real-time sensor telemetry to a custom Plotly.js dashboard.",
      tags: ["Termux", "Ubuntu", "Plotly.js"]
    },
    {
      title: "Core Engineering",
      subtitle: "// BIT SINDRI ACADEMICS",
      description: "Mastered advanced electrical paradigms including Power Electronics, Synchronous Machines, and ZPF methods. Bridging physical high-voltage logic with software.",
      tags: ["Power Electronics", "ZPF Methods", "AC/DC Logic"]
    }
  ];

  return (
    <section id="achievements" className="relative py-24 bg-zinc-950 overflow-hidden px-4">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 border-b border-zinc-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <h2 className="text-2xl font-mono font-bold text-zinc-100 tracking-wider">
            [CAPABILITY_LOG]
          </h2>
        </div>

        {/* Logic Gate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <LogicGateCard 
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}