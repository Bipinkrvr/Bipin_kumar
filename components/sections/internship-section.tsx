"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Activity, Cpu, Network } from "lucide-react";

// Update your internship data here
const internshipData = [
  {
    id: "SYS_02",
    role: "Front-End Developer Intern",
    company: "Sylvan",
    timeline: "OCT_2025 - FEB_2026",
    tech: ["React", "UI/UX", "Deployment"],
    details: [
      "Collaborated via MS Teams for deployment.",
      "Developed highly responsive UI pages.",
      "Implemented standardized UI designs."
    ],
    theme: "cyan"
  },
  {
    id: "SYS_01",
    role: "Software Engineering Intern",
    company: "Glynac Analytics",
    timeline: "JUN_2025 - AUG_2025",
    tech: ["Next.js 15", "Recharts", "Tailwind"],
    details: [
      "Reduced dashboard latency by 20%.",
      "Integrated Recharts for telemetry.",
      "Engineered wealth management components."
    ],
    theme: "emerald"
  }
];

function ControlLoopInternship({ data }: { data: typeof internshipData[0] }) {
  const [isActive, setIsActive] = useState(false);
  
  // Theme Variables
  const isCyan = data.theme === "cyan";
  const activeColor = isCyan ? 'cyan' : 'emerald';
  const wireBg = isActive ? (isCyan ? 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]' : 'bg-emerald-500 shadow-[0_0_8px_#10b981]') : 'bg-zinc-300';
  const nodeBorder = isActive ? (isCyan ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]') : 'border-zinc-300';
  const textActive = isActive ? (isCyan ? 'text-cyan-600' : 'text-emerald-600') : 'text-zinc-400';
  const textNormal = isActive ? 'text-zinc-800' : 'text-zinc-400';
  const takeoffBg = isActive ? (isCyan ? 'bg-cyan-500' : 'bg-emerald-500') : 'bg-zinc-400';
  
  // Arrow Colors (Using CSS borders)
  const arrowRight = isActive ? (isCyan ? 'border-l-cyan-500' : 'border-l-emerald-500') : 'border-l-zinc-400';
  const arrowLeft = isActive ? (isCyan ? 'border-r-cyan-500' : 'border-r-emerald-500') : 'border-r-zinc-400';
  const arrowDown = isActive ? (isCyan ? 'border-t-cyan-500' : 'border-t-emerald-500') : 'border-t-zinc-400';
  const arrowUp = isActive ? (isCyan ? 'border-b-cyan-500' : 'border-b-emerald-500') : 'border-b-zinc-400';

  return (
    <div 
      className="relative w-full py-8 group"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      {/* ========================================================= */}
      {/* DESKTOP CIRCUIT LAYOUT (Perfect Percentage Math) */}
      {/* ========================================================= */}
      <div className="hidden lg:block relative w-full h-[400px] max-w-5xl mx-auto"> 
        
        {/* --- WIRES LAYER --- */}
        {/* Forward Path Wire */}
        <div className={`absolute top-[25%] left-0 w-full h-[2px] -translate-y-1/2 transition-all duration-500 ${wireBg}`}></div>
        {/* Left Drop (Summing) */}
        <div className={`absolute top-[25%] left-[15%] w-[2px] h-[50%] -translate-x-1/2 transition-all duration-500 ${wireBg}`}></div>
        {/* Right Drop (Takeoff) */}
        <div className={`absolute top-[25%] left-[85%] w-[2px] h-[50%] -translate-x-1/2 transition-all duration-500 ${wireBg}`}></div>
        {/* Return Wire */}
        <div className={`absolute top-[75%] left-[15%] w-[70%] h-[2px] -translate-y-1/2 transition-all duration-500 ${wireBg}`}></div>

        {/* --- SIGNAL ARROWS --- */}
        {/* Arrow approaching G(s) */}
        <div className={`absolute top-[25%] left-[25%] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-colors duration-500 ${arrowRight}`}></div>
        {/* Arrow leaving G(s) */}
        <div className={`absolute top-[25%] left-[75%] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-colors duration-500 ${arrowRight}`}></div>
        {/* Arrow Output C(s) */}
        <div className={`absolute top-[25%] right-0 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-colors duration-500 ${arrowRight}`}></div>
        {/* Arrow going down Takeoff */}
        <div className={`absolute top-[50%] left-[85%] -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] transition-colors duration-500 ${arrowDown}`}></div>
        {/* Arrow going left on Return */}
        <div className={`absolute top-[75%] left-[50%] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-r-[8px] transition-colors duration-500 ${arrowLeft}`}></div>
        {/* Arrow going up to Summing */}
        <div className={`absolute top-[50%] left-[15%] -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-b-[8px] transition-colors duration-500 ${arrowUp}`}></div>

        {/* --- NODES LAYER --- */}
        
        {/* R(s) Input */}
        <div className={`absolute top-[25%] left-[2%] -translate-y-[24px] text-[10px] font-mono font-bold transition-colors ${textNormal}`}>
          R(s) In
        </div>

        {/* Summing Junction @ 15% */}
        <div className={`absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] bg-white flex items-center justify-center transition-all duration-300 z-10 ${nodeBorder}`}>
          <span className={`text-xl font-light ${textNormal}`}>∑</span>
          <span className={`absolute -bottom-4 text-[12px] font-mono font-bold ${textNormal}`}>-</span>
          <span className={`absolute -left-4 text-[12px] font-mono font-bold ${textNormal}`}>+</span>
        </div>

        {/* E(s) Error Signal */}
        <div className={`absolute top-[25%] left-[22%] -translate-y-[24px] text-[10px] font-mono font-bold tracking-widest transition-colors ${textActive}`}>
          E(s) ERROR
        </div>

        {/* Main Plant G(s) @ 50% */}
        <div className={`absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[42%] bg-white border-[3px] rounded-md p-6 transition-all duration-300 z-10 ${nodeBorder} ${isActive ? '-translate-y-[calc(50%+4px)]' : ''}`}>
          <div className="flex justify-between items-start border-b border-zinc-100 pb-3 mb-3">
            <div>
              <span className={`text-[10px] font-mono font-bold mb-1 block transition-colors ${textActive}`}>G(s) FORWARD GAIN</span>
              <h3 className={`text-xl font-mono font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`}>
                {data.role}
              </h3>
              <p className="text-zinc-500 font-mono text-sm mt-1 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> {data.company}
              </p>
            </div>
            <Badge variant="outline" className={`font-mono transition-colors ${isActive ? `border-${activeColor}-300 bg-${activeColor}-50 text-${activeColor}-700` : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>
              {data.timeline}
            </Badge>
          </div>
          
          <div className="flex gap-2 flex-wrap pt-1">
            {data.tech.map((t: string) => (
              <Badge key={t} variant="secondary" className={`font-mono text-[10px] transition-colors ${isActive ? `bg-${activeColor}-50 text-${activeColor}-700` : 'bg-zinc-100 text-zinc-500'}`}>
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Takeoff Dot @ 85% */}
        <div className={`absolute top-[25%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full transition-colors duration-500 z-10 ${takeoffBg}`}></div>

        {/* C(s) Output */}
        <div className={`absolute top-[25%] right-[2%] -translate-y-[24px] text-[10px] font-mono font-bold transition-colors ${textNormal}`}>
          C(s) Out
        </div>

        {/* B(s) Feedback Signal */}
        <div className={`absolute top-[50%] left-[15%] -translate-x-[36px] text-[10px] font-mono font-bold tracking-widest transition-colors ${textActive}`}>
          B(s)
        </div>

        {/* Feedback Blocks H(s) - Centered horizontally */}
        <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] flex flex-row-reverse justify-between items-center z-10">
          {data.details.map((detail, index) => (
            <div key={index} className={`w-[30%] bg-white border-2 p-4 text-center transition-all duration-300 flex flex-col items-center justify-center min-h-[90px] ${isActive ? `${nodeBorder} -translate-y-1` : 'border-zinc-200'}`}>
              <span className={`text-[9px] font-mono font-bold mb-2 tracking-widest transition-colors ${textActive}`}>H_{index + 1}(s) SENSOR</span>
              <p className="font-mono text-[11px] leading-snug text-zinc-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE LAYOUT (Stacked Blocks) */}
      {/* ========================================================= */}
      <div className="lg:hidden flex flex-col gap-6 mt-4">
         <div className={`bg-white border-2 rounded-sm p-5 transition-all duration-300 ${isActive ? nodeBorder : 'border-zinc-200'}`}>
            <span className={`text-[10px] font-mono font-bold mb-1 block ${textActive}`}>G(s) FORWARD GAIN</span>
            <h3 className="text-lg font-mono font-bold text-zinc-900">{data.role}</h3>
            <p className="text-zinc-500 font-mono text-sm mb-3">{data.company}</p>
            <Badge variant="outline" className="font-mono bg-zinc-50 mb-4">{data.timeline}</Badge>
            
            <div className="flex gap-1.5 flex-wrap">
               {data.tech.map((t: string) => (
                  <Badge key={t} variant="secondary" className="font-mono text-[9px] bg-zinc-100 text-zinc-600">{t}</Badge>
               ))}
            </div>
         </div>
         
         <div className="flex flex-col gap-4 pl-6 relative border-l-[3px] border-zinc-200 ml-4 mb-4">
            {data.details.map((detail, index) => (
               <div key={index} className={`bg-white border-2 p-4 text-[12px] leading-snug font-mono text-zinc-600 relative transition-colors duration-300 ${isActive ? nodeBorder : 'border-zinc-200'}`}>
                  <span className={`absolute -left-[40px] top-1/2 -translate-y-1/2 text-[10px] font-bold bg-white px-1 transition-colors ${textActive}`}>H_{index+1}</span>
                  {detail}
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}

export function InternshipSection() {
  return (
    <section id="internships" className="w-full flex flex-col justify-center relative py-12 sm:py-20 px-4 sm:px-8 bg-transparent">
      <div className="flex items-center gap-3 mb-4 sm:mb-12 border-b border-zinc-200 pb-4 max-w-6xl mx-auto w-full">
        <Network className="w-6 h-6 text-cyan-600" />
        <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
          [CONTROL_SYSTEMS_LOG]
        </h2>
      </div>

      <div className="flex flex-col w-full">
        {internshipData.map((data) => (
          <ControlLoopInternship key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}