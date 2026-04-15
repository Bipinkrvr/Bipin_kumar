"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

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
  // Separate states for desktop hover and mobile tap
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // The circuit conducts if either interacted with
  const isActive = isHovered || isToggled;

  return (
    <div 
      className="relative w-full h-full min-h-0 flex flex-col cursor-pointer sm:cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsToggled(!isToggled)} // Tap to toggle on mobile
    >
      <Card className={`bg-white border-2 transition-all duration-500 rounded-xl overflow-hidden flex flex-col h-full min-h-0 ${isActive ? 'border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.15)]' : 'border-zinc-200 shadow-sm'}`}>
        
        {/* Logic Gate SVG - Reduced to scale-50 on mobile for a smaller footprint */}
        <div className="absolute -top-4 right-4 bg-white px-2 z-10 flex items-center border border-zinc-200 rounded shadow-sm py-1 scale-50 sm:scale-100 origin-top-right transition-transform">
          <svg width="60" height="30" viewBox="0 0 75 40" className="overflow-visible">
            {/* Input 0/1 Top */}
            <text x="-5" y="15" className={`text-[10px] font-mono transition-all duration-500 ${isActive ? 'opacity-0 fill-cyan-500' : 'opacity-100 fill-zinc-400'}`}>0</text>
            <text x="-5" y="15" className={`text-[10px] font-mono transition-all duration-500 fill-cyan-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>1</text>
            
            {/* Input 0/1 Bottom */}
            <text x="-5" y="31" className={`text-[10px] font-mono transition-all duration-500 ${isActive ? 'opacity-0 fill-cyan-500' : 'opacity-100 fill-zinc-400'}`}>0</text>
            <text x="-5" y="31" className={`text-[10px] font-mono transition-all duration-500 fill-cyan-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>1</text>
            
            {/* Input Wires */}
            <line x1="5" y1="12" x2="20" y2="12" className={`stroke-2 transition-colors duration-500 ${isActive ? 'stroke-cyan-400' : 'stroke-zinc-300'}`} />
            <line x1="5" y1="28" x2="20" y2="28" className={`stroke-2 transition-colors duration-500 ${isActive ? 'stroke-cyan-400' : 'stroke-zinc-300'}`} />
            
            {/* AND Gate Body */}
            <path d="M 20 4 L 30 4 Q 48 4 48 20 Q 48 36 30 36 L 20 36 Z" className={`stroke-2 transition-all duration-500 ${isActive ? 'stroke-emerald-500 fill-emerald-100' : 'stroke-zinc-400 fill-zinc-50'}`} />
            
            {/* Output Wire */}
            <line x1="48" y1="20" x2="65" y2="20" className={`stroke-2 transition-colors duration-500 ${isActive ? 'stroke-emerald-400' : 'stroke-zinc-300'}`} />
            
            {/* Output Q Text */}
            <text x="70" y="23" className={`text-[12px] font-mono font-bold transition-colors duration-500 ${isActive ? 'fill-emerald-500' : 'fill-zinc-400'}`}>Q</text>
          </svg>
        </div>

        <CardHeader className="pt-4 sm:pt-6 pb-1 px-4 sm:px-5 shrink-0">
          <div className="font-mono text-[8px] sm:text-[9px] text-emerald-600 tracking-widest mb-0.5">{subtitle}</div>
          <CardTitle className={`text-sm sm:text-lg font-mono transition-colors duration-300 uppercase leading-tight line-clamp-1 ${isActive ? 'text-emerald-600' : 'text-zinc-800'}`}>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex flex-col flex-grow min-h-0 gap-2 pb-3 px-4 sm:px-5">
          <p className="text-[10px] sm:text-xs font-mono text-zinc-600 leading-snug sm:leading-relaxed overflow-hidden text-ellipsis line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-zinc-100 shrink-0">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className={`bg-zinc-50 border font-mono text-[8px] sm:text-[9px] px-1 py-0 transition-colors ${isActive ? 'border-emerald-300 text-emerald-700' : 'border-zinc-200 text-zinc-600'}`}>
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
      description: "Successfully integrated high-performance React 19 & Next.js 15 dashboards. Calibrated analytics telemetry using Recharts.",
      tags: ["React 19", "Next.js 15", "Recharts"]
    },
    {
      title: "Startup Initiative",
      subtitle: "// VYAPARLENS FOUNDER",
      description: "Engineered a Flutter-based mobile app utilizing custom Server-Driven UI (JSON). Implemented on-device AI for dynamic rendering.",
      tags: ["Flutter", "Server-Driven UI", "AI"]
    },
    {
      title: "Hardware Upcycling",
      subtitle: "// IOT SENSOR HUB",
      description: "Repurposed abandoned mobile hardware via Termux and Ubuntu environments to stream real-time sensor telemetry to a UI.",
      tags: ["Termux", "Ubuntu", "Plotly.js"]
    },
    {
      title: "Core Engineering",
      subtitle: "// BIT SINDRI ACADEMICS",
      description: "Mastered electrical paradigms including Power Electronics, Synchronous Machines, and ZPF methods. Bridging high-voltage and software.",
      tags: ["Power Electronics", "ZPF Methods", "AC/DC Logic"]
    }
  ];

  return (
    // STRICT 100dvh SNAP - Removed top padding (pt-0)
    <section id="achievements" className="relative w-full min-h-screen flex flex-col justify-center px-4 pt-0 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col h-full min-h-0">
        
        <div className="flex items-center gap-3 mb-4 border-b border-zinc-200 pb-2 shrink-0">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
            [CAPABILITY_LOG]
          </h2>
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-5 h-full min-h-0 pb-2">
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