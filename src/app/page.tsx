import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StackSection } from "@/components/sections/StackSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1200px] px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-0 sm:px-6 md:px-10"
      >
        <HeroSection />
        <SelectedWorkSection limit={2} />
        <ServicesSection />
        <StackSection />
        <ExperienceSection />
        <AboutTeaserSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
