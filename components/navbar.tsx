"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for the glassy background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INIT", href: "#hero" },
    { name: "EXP_LOG", href: "#experience" }, // Make sure your ExperienceSection has id="experience"
    { name: "DEPLOYMENTS", href: "#projects" },
    { name: "SUBSYSTEMS", href: "#skills" },   // Make sure your SkillsSection has id="skills"
    { name: "TRAINING", href: "#education" },  // Make sure your EducationSection has id="education"
    { name: "CAPABILITIES", href: "#achievements" },
    { name: "UPLINK", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / System ID */}
          <Link href="#hero" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-sm shadow-inner group-hover:border-cyan-500 transition-colors">
              <Cpu className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              {/* Online Indicator */}
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-black text-zinc-100 tracking-widest group-hover:text-cyan-400 transition-colors">
                SYS_MASTER
              </span>
              <span className="font-mono text-[8px] text-zinc-500 tracking-[0.2em]">
                NODE: BIPIN_K
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-sm border border-zinc-800/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 font-mono text-[10px] sm:text-xs text-zinc-400 font-bold tracking-wider rounded hover:bg-zinc-800 hover:text-cyan-400 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-zinc-900 border border-zinc-800 rounded-sm text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 border-t border-zinc-800/50" : "max-h-0 border-t-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-sm font-mono text-xs text-zinc-300 font-bold tracking-wider hover:bg-zinc-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all active:scale-[0.98]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}