import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { FooterMarquee } from "./FooterMarquee";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProfileSection } from "./ProfileSection";
import { RepertoireSection } from "./RepertoireSection";
import { SmoothScroll } from "./SmoothScroll";
import { WorksSection } from "./WorksSection";

export function PortfolioPage() {
  return (
    <SmoothScroll>
      <div className="bg-neutral-950 text-stone-100 selection:bg-stone-200 selection:text-black">
        <Header />
        <main className="mx-auto w-full min-w-0 max-w-[1400px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-0 md:px-10">
          <HeroSection />
          <ProfileSection />
          <RepertoireSection />
          <ExperienceSection />
          <WorksSection />
          <ContactSection />
        </main>
        <FooterMarquee />
      </div>
    </SmoothScroll>
  );
}
