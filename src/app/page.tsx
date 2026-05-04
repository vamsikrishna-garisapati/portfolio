import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsBentoSection } from "@/components/sections/ProjectsBentoSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { ResumeSection } from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/10 selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1200px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-0 md:px-10"
      >
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsBentoSection limit={2} />
        <ExperienceSection />
        <AboutTeaserSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
