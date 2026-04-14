import { NavBar } from "@/components/navbar"; // ADDED IMPORT
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/subsystems-section"; 
import { EducationSection } from "@/components/sections/education-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] text-zinc-300 font-sans selection:bg-cyan-500/30">
      
      {/* INJECTED NAVBAR HERE */}
      <NavBar /> 

      {/* Added pt-16 to the wrapper to account for the fixed navbar height */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 py-12 pt-16">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </main>
  );
}