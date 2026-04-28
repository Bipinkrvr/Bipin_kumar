"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link"; 

function LogicGateCard({ 
  title, 
  subtitle,
  description, 
  tags,
  link,
  isActive,     
  onToggle      
}: { 
  title: string, 
  subtitle: string,
  description: string, 
  tags: string[],
  link?: string,
  isActive: boolean,
  onToggle: (state: boolean) => void
}) {
  const [isHovered, setIsHovered] = useState(false);
  const touchState = useRef({ startY: 0, isScrolling: false });


  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchState.current.startY = e.touches[0].clientY;
    touchState.current.isScrolling = false;
  };


  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentY = e.touches[0].clientY;
    if (Math.abs(currentY - touchState.current.startY) > 10) {
      touchState.current.isScrolling = true;
      if (!isActive) {
        onToggle(true);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    
    // Ignore the browser's ghost click if we just finished scrolling
    if (touchState.current.isScrolling) {
      touchState.current.isScrolling = false; 
      return;
    }
    
    // Toggle the card on/off
    onToggle(!isActive);
  };


  const currentlyActive = isHovered || isActive;

  return (
    <div 
      className="relative w-full flex flex-col cursor-pointer sm:cursor-default"
      onMouseEnter={() => setIsHovered(true)}   
      onMouseLeave={() => setIsHovered(false)}  
      onTouchStart={handleTouchStart}           
      onTouchMove={handleTouchMove}             
      onClick={handleClick}                     
    >
      <Card className={`bg-white border-2 transition-all duration-500 rounded-xl overflow-visible flex flex-col h-full ${currentlyActive ? 'border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.15)]' : 'border-zinc-200 shadow-sm'}`}>
        
        {/* Logic Gate SVG */}
        <div className="absolute top-0 right-4 sm:right-6 -translate-y-1/2 bg-white px-2 z-10 flex items-center scale-[0.75] sm:scale-100 origin-center transition-transform">
          <svg width="60" height="30" viewBox="0 0 75 40" className="overflow-visible">
            <text x="-5" y="15" className={`text-[10px] font-mono transition-all duration-500 ${currentlyActive ? 'opacity-0 fill-cyan-500' : 'opacity-100 fill-zinc-400'}`}>0</text>
            <text x="-5" y="15" className={`text-[10px] font-mono transition-all duration-500 fill-cyan-500 ${currentlyActive ? 'opacity-100' : 'opacity-0'}`}>1</text>
            <text x="-5" y="31" className={`text-[10px] font-mono transition-all duration-500 ${currentlyActive ? 'opacity-0 fill-cyan-500' : 'opacity-100 fill-zinc-400'}`}>0</text>
            <text x="-5" y="31" className={`text-[10px] font-mono transition-all duration-500 fill-cyan-500 ${currentlyActive ? 'opacity-100' : 'opacity-0'}`}>1</text>
            
            <line x1="5" y1="12" x2="20" y2="12" className={`stroke-2 transition-colors duration-500 ${currentlyActive ? 'stroke-cyan-400' : 'stroke-zinc-300'}`} />
            <line x1="5" y1="28" x2="20" y2="28" className={`stroke-2 transition-colors duration-500 ${currentlyActive ? 'stroke-cyan-400' : 'stroke-zinc-300'}`} />
            
            <path d="M 20 4 L 30 4 Q 48 4 48 20 Q 48 36 30 36 L 20 36 Z" className={`stroke-2 transition-all duration-500 ${currentlyActive ? 'stroke-emerald-500 fill-emerald-100' : 'stroke-zinc-400 fill-zinc-50'}`} />
            
            <line x1="48" y1="20" x2="65" y2="20" className={`stroke-2 transition-colors duration-500 ${currentlyActive ? 'stroke-emerald-400' : 'stroke-zinc-300'}`} />
            
            <text x="70" y="23" className={`text-[12px] font-mono font-bold transition-colors duration-500 ${currentlyActive ? 'fill-emerald-500' : 'fill-zinc-400'}`}>Q</text>
          </svg>
        </div>

        <CardHeader className="pt-6 sm:pt-8 pb-2 px-5 sm:px-6 shrink-0">
          <div className="font-mono text-[9px] sm:text-[10px] text-emerald-600 tracking-widest mb-1">{subtitle}</div>
          <CardTitle className={`text-base sm:text-lg font-mono transition-colors duration-300 uppercase leading-tight ${currentlyActive ? 'text-emerald-600' : 'text-zinc-800'}`}>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex flex-col flex-grow gap-3 pb-5 px-5 sm:px-6">
          <p className="text-sm text-zinc-700 font-sans leading-relaxed flex-grow">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-auto pt-3 border-t border-zinc-100 shrink-0">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className={`bg-zinc-50 border font-mono text-[9px] sm:text-[10px] px-1.5 py-0 transition-colors ${currentlyActive ? 'border-emerald-300 text-emerald-700' : 'border-zinc-200 text-zinc-600'}`}>
                  {tag}
                </Badge>
              ))}
            </div>

            {link && (
              <Link 
                href={link} 
                target="_blank" 
                onClick={(e) => e.stopPropagation()} 
                className={`flex items-center gap-1 font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded transition-colors shrink-0 ${currentlyActive ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700'}`}
              >
                VERIFY <ExternalLink className="w-3 h-3" />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AchievementsSection() {
  // THE BRAIN: Keeps track of WHICH card is currently active (only 1 at a time)
  const [activeCardTitle, setActiveCardTitle] = useState<string | null>(null);

  const credentials = [
    {
      title: "Bronze Winner 🏆",
      subtitle: "// LETSUPGRADE AMBASSADOR",
      description: "Recognized nationally for outstanding performance, community management, and leadership within the student tech community.",
      tags: ["Leadership", "Community Building", "Public Speaking"],
      link: "https://www.linkedin.com/posts/bipinkrvr_letsupgrade-studentambassador-achievement-activity-7376912541240807424-O2dQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8" 
    },
    {
      title: "PLC Programming & Ladder Logic",
      subtitle: "// LEARNVERN CERTIFICATION",
      description: "Mastered industrial automation control systems, focusing on real-world PLC programming and logic execution for heavy machinery.",
      tags: ["Automation", "PLC", "Ladder Logic"],
      link: "https://assets.learnvern.com/certificates/images/certificate-7630754.jpg" 
    },
    {
      title: "GenAI Data Analytics Simulation",
      subtitle: "// TATA (FORAGE)",
      description: "Completed an applied job simulation utilizing Generative AI tools to clean, interpret, and visualize complex industrial datasets.",
      tags: ["Generative AI", "Data Analytics", "Power BI"],
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_69001354e45cf4b071f7bcf9_1761827122840_completion_certificate.pdf" 
    },
    {
      title: "AutoCAD Electrical Essentials",
      subtitle: "// LINKEDIN LEARNING",
      description: "Developed professional proficiency in drafting industrial electrical schematics, load calculations, and control panel layouts.",
      tags: ["AutoCAD", "Electrical Design", "Drafting"],
      link: "https://www.linkedin.com/learning/certificates/0635bee80913bc41fc03412db04ae738cf095f26c197835cb4f32e158c99158b?trk=share_certificate" 
    },
    {
      title: "Applied Deep Learning & AI",
      subtitle: "// ADVANCED CERTIFICATIONS",
      description: "Synthesized multiple advanced courses covering Python prototyping, neural networks, and deploying machine learning models.",
      tags: ["Python", "Deep Learning", "Neural Networks"],
      link: "https://www.linkedin.com/in/bipinkrvr/details/certifications/" 
    },
    {
      title: "Career Edge - Young Professional",
      subtitle: "// TCS iON",
      description: "Completed comprehensive training in corporate workflows, strategic business communication, and cross-functional team dynamics.",
      tags: ["Corporate Strategy", "Communication", "Management"],
      link: "https://www.linkedin.com/posts/bipinkrvr_tcsion-careeredge-youngprofessional-activity-7361058106602049537-K3KW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9nUx8B9pSDoZpCQMBGvSV3MRFOu7UMIT8" 
    }
  ];

  return (
    <section 
      id="achievements" 
      className="relative w-full flex flex-col justify-center px-4 sm:px-8 py-12 sm:py-20 bg-transparent overflow-visible"
      onClick={() => setActiveCardTitle(null)} 
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        
        <div className="flex items-center gap-3 mb-8 border-b border-zinc-200 pb-4 shrink-0 w-full">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-800 tracking-wider">
            [CREDENTIALS_&_HIGHLIGHTS]
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-y-8 w-full">
          {credentials.map((item) => (
            <LogicGateCard 
              key={item.title} 
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              tags={item.tags}
              link={item.link}
              isActive={activeCardTitle === item.title} 
              onToggle={(state) => {
                if (state) setActiveCardTitle(item.title); // Turn ON
                else setActiveCardTitle(null);             // Turn OFF
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}