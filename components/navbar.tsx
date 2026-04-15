"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu, Download } from "lucide-react";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Ensure the menu is closed by default and locked to boolean
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open so the background doesn't scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); 
    
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const navOffset = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "INIT", href: "#hero" },
    { name: "EXP_LOG", href: "#experience" }, 
    { name: "DEPLOYMENTS", href: "#projects" },
    { name: "SUBSYSTEMS", href: "#skills" },   
    { name: "TRAINING", href: "#education" }, 
    { name: "CAPABILITIES", href: "#achievements" },
    { name: "UPLINK_COMM", href: "#contact" }, 
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 border-b ${
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md border-zinc-200 shadow-sm py-2 sm:py-3"
            : "bg-white/90 backdrop-blur-sm border-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between relative">
            
            {/* Logo */}
            <Link href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="flex items-center gap-2 group shrink-0 relative z-[10000]">
              <div className="relative flex items-center justify-center w-8 h-8 bg-zinc-100 border border-zinc-300 rounded-sm shadow-inner">
                <Cpu className="w-4 h-4 text-zinc-500" />
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] sm:text-xs font-black text-zinc-800 tracking-widest">SYS_MASTER</span>
                <span className="font-mono text-[6px] sm:text-[8px] text-zinc-500 tracking-[0.2em]">NODE: BIPIN_K</span>
              </div>
            </Link>

            {/* Right Side Controls */}
            <div className="flex items-center gap-1.5 sm:gap-4 relative z-[10000]">
              
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-1 bg-white/80 p-1 rounded-sm border border-zinc-200 backdrop-blur-sm shadow-sm">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)} 
                    className="px-2.5 py-1.5 font-mono text-[10px] xl:text-xs text-zinc-600 font-bold tracking-wider rounded hover:bg-zinc-100 hover:text-cyan-600 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* ALWAYS VISIBLE Resume Button */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="flex items-center gap-1.5 px-2.5 py-2 sm:px-4 sm:py-2 font-mono text-[9px] sm:text-xs text-red-600 font-bold tracking-wider rounded border border-red-200 bg-red-50 hover:bg-red-100 transition-all duration-200 shadow-sm shrink-0"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">DOWNLOAD_</span>RESUME
              </a>

              {/* Mobile Menu Toggle Button - FIXED FOR TOUCH */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden w-10 h-10 flex items-center justify-center bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800 shadow-sm active:bg-zinc-200"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY - FIXED FOR REAL DEVICES */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed top-0 left-0 w-screen h-[100dvh] bg-zinc-50 z-[9998] pt-[90px] pb-10 px-4 overflow-y-auto block"
          style={{ overscrollBehavior: 'contain' }}
        >
          <div className="flex flex-col gap-3 h-full">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e as any, link.href)}
                className="flex items-center gap-3 px-4 py-4 w-full text-left bg-white border border-zinc-200 rounded-sm font-mono text-sm text-zinc-700 font-bold tracking-wider active:bg-zinc-100 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(34,211,238,0.5)]"></div>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}