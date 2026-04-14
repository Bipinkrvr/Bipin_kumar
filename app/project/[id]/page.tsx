"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  X, Database, Cpu, Smartphone, Wifi, Server, Activity, 
  ArrowRightLeft, Image as ImageIcon, Github, Linkedin, 
  DownloadCloud, ZoomIn, ZoomOut, Maximize,
  MousePointerClick, Move
} from "lucide-react";
import { projectsData } from "@/lib/projects-data"; 

export default function AutoCADProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? params.id : "MOD_01";
  
  const project = projectsData[id as keyof typeof projectsData] || projectsData["MOD_01"];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentDate, setCurrentDate] = useState("");

  // PAN & ZOOM STATE
  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // UX GUARDRAIL STATE
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    
    const date = new Date();
    setCurrentDate(`${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // PAN & ZOOM HANDLERS
  const handlePointerDown = (e: React.PointerEvent) => {
    setHasInteracted(true); 
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent) => {
    setHasInteracted(true); 
    const zoomSensitivity = 0.002;
    const delta = -e.deltaY * zoomSensitivity;
    setScale(s => Math.min(Math.max(0.2, s + delta), 4));
  };

  const zoomIn = () => { setHasInteracted(true); setScale(s => Math.min(s + 0.2, 4)); };
  const zoomOut = () => { setHasInteracted(true); setScale(s => Math.max(s - 0.2, 0.2)); };
  const resetZoom = () => { setHasInteracted(true); setScale(0.8); setPosition({ x: 0, y: 0 }); };

  return (
    <main 
      className="w-screen h-[100dvh] bg-[#0a0a0a] text-[#00ffff] overflow-hidden relative select-none flex flex-col uppercase tracking-wider"
      style={{ fontFamily: "'Courier New', Courier, monospace" }}
    >
      
      {/* 1. DYNAMIC FULL-SCREEN CROSSHAIRS */}
      <div className="fixed top-0 bottom-0 w-[1px] bg-white/30 pointer-events-none z-[80] mix-blend-difference hidden sm:block" style={{ left: `${mousePos.x}px` }} />
      <div className="fixed left-0 right-0 h-[1px] bg-white/30 pointer-events-none z-[80] mix-blend-difference hidden sm:block" style={{ top: `${mousePos.y}px` }} />

      {/* 2. TOP RIBBON / MENU BAR */}
      <div className="h-14 bg-[#1f1f1f] border-b border-[#333] z-[90] flex items-center justify-between px-4 shadow-md shrink-0 relative">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-400 font-bold hidden sm:block">AUTOCAD ENG. - [{id}_SCHEMATIC.DWG]</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-3 border-r border-[#444] pr-2 sm:pr-4 mr-1 sm:mr-2">
            <Link href={project.github} target="_blank" className="p-1.5 hover:bg-[#444] rounded text-gray-400 hover:text-white transition-colors group" title="Source Code">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link href={project.linkedin} target="_blank" className="p-1.5 hover:bg-[#444] rounded text-gray-400 hover:text-white transition-colors group" title="Network">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link href={project.driveLink} target="_blank" className="ml-2 flex items-center gap-2 bg-cyan-900/30 hover:bg-cyan-900/60 text-cyan-400 border border-cyan-500/50 px-2 sm:px-3 py-1 rounded text-[9px] sm:text-[10px] font-bold transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]">
              <DownloadCloud className="w-4 h-4" /> 
              <span className="hidden sm:block">FETCH_ARCHIVE</span>
            </Link>
          </div>

          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-[#ff5f56]/10 hover:bg-[#ff5f56]/20 text-[#ff5f56] border border-[#ff5f56]/30 px-3 py-1 rounded text-[10px] font-bold transition-colors cursor-pointer z-[100]"
          >
            <X className="w-3.5 h-3.5" /> CLOSE
          </button>
        </div>
      </div>

      {/* 3. ZOOMABLE / PANNABLE DRAFTING CANVAS */}
      <div 
        className={`flex-grow relative z-10 overflow-hidden bg-black ${isDragging ? 'cursor-grabbing' : 'cursor-grab sm:cursor-crosshair'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        
        {/* ONBOARDING OVERLAY */}
        <div 
          className={`absolute inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-700 bg-black/60 backdrop-blur-sm ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="bg-[#111] border border-cyan-500/50 p-6 rounded-lg shadow-[0_0_30px_rgba(0,255,255,0.15)] flex flex-col items-center gap-4 animate-bounce-slow">
            <div className="flex gap-6 text-cyan-400">
              <div className="flex flex-col items-center gap-2">
                <MousePointerClick className="w-8 h-8" />
                <span className="text-xs font-bold">SCROLL TO ZOOM</span>
              </div>
              <div className="w-[1px] h-12 bg-cyan-500/30"></div>
              <div className="flex flex-col items-center gap-2">
                <Move className="w-8 h-8" />
                <span className="text-xs font-bold">DRAG TO PAN</span>
              </div>
            </div>
            <div className="text-cyan-500/70 text-[10px] mt-2 border-t border-cyan-500/20 pt-2 text-center">
              INTERACTIVE BLUEPRINT MODE ACTIVATED
            </div>
          </div>
        </div>

        {/* Dynamic Background Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundSize: `${50 * scale}px ${50 * scale}px, ${10 * scale}px ${10 * scale}px`,
            backgroundImage: `
              linear-gradient(to right, #00ffff 1px, transparent 1px),
              linear-gradient(to bottom, #00ffff 1px, transparent 1px),
              linear-gradient(to right, rgba(0,255,255,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundPosition: `${position.x}px ${position.y}px`
          }}
        />

        {/* The Transformed "Paper Space" Wrapper */}
        <div 
          className="absolute top-1/2 left-1/2"
          style={{ 
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
            transformOrigin: "center center"
          }}
        >
          {/* THE MASTER DRAWING SHEET */}
          <div className="w-[1440px] h-[900px] border-[3px] border-cyan-500 bg-[#050505] relative shadow-[0_0_50px_rgba(0,255,255,0.05)] p-6">
            
            <div className="absolute inset-4 border border-cyan-500/40 pointer-events-none z-0"></div>

            <div className="relative z-10 w-full h-full flex flex-col gap-6">
              
              {/* TOP ROW */}
              <div className="flex gap-6 h-[480px]">
                <div className="flex-1 border border-cyan-500/40 bg-[#0a0a0a] relative flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,255,255,0.02)]">
                  <span className="absolute top-3 left-3 text-xs text-cyan-500/50">FIG 1: DATA_FLOW.DWG</span>
                  <div className="flex items-center gap-8 text-cyan-400 w-full justify-center opacity-70">
                    {id.includes("01") && <><Smartphone className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Database className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Server className="w-20 h-20" /></>}
                    {id.includes("02") && <><Cpu className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Activity className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Server className="w-20 h-20" /></>}
                    {id.includes("03") && <><Activity className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Cpu className="w-20 h-20" /><Wifi className="w-8 h-8 mx-2" /><Database className="w-20 h-20" /></>}
                    {id.includes("04") && <><Server className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Activity className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Smartphone className="w-20 h-20" /></>}
                    {id.includes("05") && <><Smartphone className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Server className="w-20 h-20" /><ArrowRightLeft className="w-8 h-8" /><Activity className="w-20 h-20" /></>}
                  </div>
                </div>

                <div className="w-[550px] border border-cyan-500/40 bg-[#0a0a0a] relative overflow-hidden group">
                  <span className="absolute top-3 left-3 text-xs text-cyan-400 z-20 bg-black/80 px-2 py-1 border border-cyan-500/40">
                    <ImageIcon className="w-4 h-4 inline mr-2 mb-0.5" /> REF_IMG_ATTACHMENT
                  </span>
                  <img 
                    src={project.imageRef} 
                    alt="Reference" 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen filter grayscale contrast-125 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex gap-6 flex-1">
                <div className="w-[450px] border border-cyan-500/40 bg-[#0a0a0a] p-8">
                  <h3 className="text-cyan-400 font-bold border-b border-cyan-500/40 pb-3 mb-6 text-base tracking-widest">[SYSTEM_PARAMETERS]</h3>
                  <div className="flex flex-col gap-4 text-sm text-cyan-100/70">
                    {Object.entries(project.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between border-b border-cyan-500/10 pb-2">
                        <span className="text-cyan-500/80">{key}:</span>
                        <span className="text-right font-bold text-cyan-300">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 border border-cyan-500/40 bg-[#0a0a0a] p-8 relative">
                  <h3 className="text-cyan-400 font-bold border-b border-cyan-500/40 pb-3 mb-6 text-base tracking-widest">[OPERATIONAL_ABSTRACT]</h3>
                  <p className="text-base text-cyan-100/70 leading-[2.5] max-w-3xl pr-[300px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. CLASSIC HORIZONTAL TITLE BLOCK */}
            <div className="absolute bottom-4 right-4 w-[900px] bg-[#050505] border-[3px] border-cyan-500 z-30 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
              <div className="grid grid-cols-5 grid-rows-3 text-xs">
                <div className="col-span-3 row-span-2 border-r-[3px] border-b-[3px] border-cyan-500 p-4 flex flex-col justify-center bg-[#0a0a0a]">
                  <span className="text-cyan-500/70 font-bold tracking-widest">PROJECT TITLE</span>
                  <span className="font-black text-cyan-300 text-3xl truncate mt-1">{project.title}</span>
                </div>
                <div className="col-span-2 border-b-[3px] border-cyan-500 p-4 flex flex-col justify-center bg-[#080808]">
                  <span className="text-cyan-500/70 font-bold tracking-widest">INSTITUTION / COMPANY</span>
                  <span className="font-bold text-white text-base mt-1">BIT SINDRI - ELECTRICAL DEPT.</span>
                </div>
                <div className="border-r-[3px] border-b-[3px] border-cyan-500 p-4 flex flex-col justify-center bg-[#080808]">
                  <span className="text-cyan-500/70 font-bold tracking-widest">DOC ID</span>
                  <span className="font-bold text-white text-sm mt-1">{id}</span>
                </div>
                <div className="border-b-[3px] border-cyan-500 p-4 flex flex-col justify-center bg-[#080808]">
                  <span className="text-cyan-500/70 font-bold tracking-widest">SYSTEM TYPE</span>
                  <span className="font-bold text-white text-sm truncate mt-1">{project.type}</span>
                </div>
                <div className="border-r-[3px] border-cyan-500 p-4 flex flex-col justify-center">
                  <span className="text-cyan-500/70 font-bold tracking-widest">DRAWN BY</span>
                  <span className="font-bold text-[#ffbd2e] text-sm mt-1">BIPIN K.</span>
                </div>
                <div className="border-r-[3px] border-cyan-500 p-4 flex flex-col justify-center">
                  <span className="text-cyan-500/70 font-bold tracking-widest">DATE</span>
                  <span className="font-bold text-white text-sm mt-1">{currentDate}</span>
                </div>
                <div className="border-r-[3px] border-cyan-500 p-4 flex flex-col justify-center">
                  <span className="text-cyan-500/70 font-bold tracking-widest">SCALE</span>
                  <span className="font-bold text-white text-sm mt-1">FIT TO PAGE</span>
                </div>
                <div className="border-r-[3px] border-cyan-500 p-4 flex flex-col justify-center">
                  <span className="text-cyan-500/70 font-bold tracking-widest">REV</span>
                  <span className="font-bold text-white text-sm mt-1">01A</span>
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-cyan-500/70 font-bold tracking-widest">SHEET</span>
                  <span className="font-bold text-white text-sm mt-1">1 OF 1</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. FLOATING ZOOM CONTROLS */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-[60]">
        <button onClick={zoomIn} title="Zoom In" className="p-3 sm:p-4 bg-[#111] text-cyan-400 border border-cyan-500/50 hover:bg-[#222] rounded shadow-2xl transition-all active:scale-95">
          <ZoomIn className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
        <button onClick={resetZoom} title="Zoom to Fit" className="p-3 sm:p-4 bg-[#111] text-cyan-400 border border-cyan-500/50 hover:bg-[#222] rounded shadow-2xl transition-all active:scale-95">
          <Maximize className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
        <button onClick={zoomOut} title="Zoom Out" className="p-3 sm:p-4 bg-[#111] text-cyan-400 border border-cyan-500/50 hover:bg-[#222] rounded shadow-2xl transition-all active:scale-95">
          <ZoomOut className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* 6. BOTTOM COMMAND LINE INTERFACE */}
      <div className="h-8 bg-[#dbdce0] text-black text-[10px] sm:text-xs flex items-center z-[90] shrink-0 font-bold relative">
        <div className="px-2 sm:px-3 py-1 bg-white border-r border-gray-400 flex-grow max-w-[50%] sm:max-w-[60%] flex items-center h-full shadow-inner truncate">
          <span className="mr-2 text-gray-700">COMMAND:</span>
          <span className="text-blue-600 animate-pulse">_</span>
        </div>
        
        <div className="ml-auto flex items-center gap-2 sm:gap-4 px-2 sm:px-4 text-[8px] sm:text-[10px] text-gray-600 truncate">
          <div className="flex gap-1 sm:gap-2 border-r border-gray-400 pr-2">
            <span className="w-12 sm:w-16">X: {mousePos.x.toFixed(0)}</span>
            <span className="w-12 sm:w-16">Y: {mousePos.y.toFixed(0)}</span>
            <span className="w-10 sm:w-12 border-l border-gray-400 pl-2">Z: {scale.toFixed(1)}x</span>
          </div>
          <div className="hidden sm:flex gap-2 sm:gap-3">
            <span className="bg-gray-300 px-1 rounded">MODEL</span>
            <span className="bg-blue-200 text-blue-800 px-1 rounded border border-blue-400">GRID</span>
            <span className="bg-blue-200 text-blue-800 px-1 rounded border border-blue-400">SNAP</span>
            <span className="bg-gray-300 px-1 rounded">ORTHO</span>
          </div>
        </div>
      </div>

    </main>
  );
}