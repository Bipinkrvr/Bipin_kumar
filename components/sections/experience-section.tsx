import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Terminal } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="internships" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-10 border-b border-zinc-800 pb-4">
        <Briefcase className="w-6 h-6 text-cyan-400" />
        <h2 className="text-2xl font-mono font-bold text-zinc-100 tracking-wider">
          [FIELD_DEPLOYMENTS]
        </h2>
      </div>

      <div className="grid gap-8">
        {/* The 'group' class triggers the hover state for the whole card.
          The border acts as the main wire, turning Cyan on hover.
        */}
        <div className="relative group mt-4">
          <Card className="bg-zinc-900/40 border-2 border-zinc-800 group-hover:border-cyan-500/70 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500 rounded-xl overflow-visible">
            
            {/* 1. POWER SOURCE (BATTERY) - Top Left Edge */}
            <div className="absolute -top-3 left-6 bg-zinc-950 px-2 text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500 z-10 flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold">VCC</span>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="stroke-current stroke-2">
                <rect x="2" y="2" width="18" height="8" rx="1" />
                <path d="M20 4V8" />
                <path d="M6 6H10" />
                <path d="M8 4V8" />
              </svg>
            </div>

            {/* 2. THE SWITCH (RELAY) - Top Right Edge */}
            <div className="absolute -top-3 right-8 bg-zinc-950 px-2 flex items-center z-10">
              <svg width="40" height="12" viewBox="0 0 40 12" className="overflow-visible">
                {/* Left Terminal */}
                <circle cx="8" cy="6" r="2" className="fill-zinc-500 group-hover:fill-cyan-400 transition-colors duration-500" />
                <line x1="0" y1="6" x2="6" y2="6" className="stroke-zinc-800 group-hover:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                
                {/* Right Terminal */}
                <circle cx="32" cy="6" r="2" className="fill-zinc-500 group-hover:fill-cyan-400 transition-colors duration-500" />
                <line x1="34" y1="6" x2="40" y2="6" className="stroke-zinc-800 group-hover:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                
                {/* Switch Arm (Rotates down on hover to close circuit) */}
                <line 
                  x1="8" y1="6" x2="30" y2="6" 
                  className="stroke-zinc-500 group-hover:stroke-cyan-400 stroke-2 origin-[8px_6px] -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out" 
                />
              </svg>
            </div>

            {/* 3. THE BULB (LOAD) - Bottom Right Edge */}
            <div className="absolute -bottom-4 right-12 bg-zinc-950 px-3 flex items-center justify-center z-10">
              <svg width="30" height="30" viewBox="0 0 30 30" className="overflow-visible">
                {/* Wire connections masking the border */}
                <line x1="0" y1="15" x2="5" y2="15" className="stroke-zinc-800 group-hover:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                <line x1="25" y1="15" x2="30" y2="15" className="stroke-zinc-800 group-hover:stroke-cyan-500 stroke-2 transition-colors duration-500" />
                
                {/* Bulb Glass */}
                <circle 
                  cx="15" cy="15" r="9" 
                  className="stroke-zinc-700 fill-zinc-900 group-hover:stroke-amber-400 group-hover:fill-amber-400/20 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] stroke-2 transition-all duration-500" 
                />
                
                {/* Internal Filament */}
                <path 
                  d="M 11 11 L 19 19 M 11 19 L 19 11" 
                  className="stroke-zinc-600 group-hover:stroke-amber-300 stroke-[1.5] transition-colors duration-500" 
                />
              </svg>
            </div>

            {/* 4. GROUND (GND) - Bottom Left Edge */}
            <div className="absolute -bottom-[2px] left-8 bg-zinc-950 px-2 flex flex-col items-center z-10 translate-y-1/2">
              <div className="h-3 w-[2px] bg-zinc-800 group-hover:bg-cyan-500 transition-colors duration-500" />
              <div className="w-5 h-[2px] bg-zinc-600 group-hover:bg-cyan-400 transition-colors duration-500 mb-[2px]" />
              <div className="w-3 h-[2px] bg-zinc-600 group-hover:bg-cyan-400 transition-colors duration-500 mb-[2px]" />
              <div className="w-1 h-[2px] bg-zinc-600 group-hover:bg-cyan-400 transition-colors duration-500" />
            </div>

            {/* Content of the Card */}
            <CardHeader className="pt-8">
              <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                <div>
                  <CardTitle className="text-xl font-mono text-zinc-100 flex items-center gap-2">
                    <span className="text-cyan-500/0 group-hover:text-cyan-400 transition-colors duration-300">⚡</span>
                    Front-End Developer Intern
                  </CardTitle>
                  <p className="text-zinc-400 font-mono text-sm mt-1">TechCorp Global // Remote</p>
                </div>
                <Badge variant="outline" className="bg-zinc-950 border-zinc-700 text-cyan-400 font-mono">
                  [TIMESTAMPS: OCT_2025 - PRESENT]
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pb-8">
              <ul className="space-y-3 font-mono text-sm text-zinc-300">
                <li className="flex gap-3">
                  <Terminal className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                  <span>Architected scalable client-side logic utilizing Next.js 15 and React 19, reducing render times by 24%.</span>
                </li>
                <li className="flex gap-3">
                  <Terminal className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                  <span>Implemented dynamic dashboards using Recharts for high-frequency data visualization.</span>
                </li>
                <li className="flex gap-3">
                  <Terminal className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                  <span>Collaborated with cross-functional nodes (HR & Project Leads) via Microsoft Teams protocols.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}