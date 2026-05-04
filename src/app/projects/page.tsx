import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";

export const metadata: Metadata = {
  title: "Projects — Vamsi Krishna Garisapati",
  description: "Projects shipped by Vamsi Krishna Garisapati: live URLs, STAR write-ups, and measurable outcomes.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[1200px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-0 md:px-10"
      >
        <SelectedWorkSection
          title="Projects"
          description="Live URLs first. STAR write-ups and measurable outcomes included."
        />
      </main>
      <Footer />
    </div>
  );
}
