import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Vamsi Krishna Garisapati",
  description: "Contact Vamsi Krishna Garisapati for full-time roles or freelance projects. Best channel: email.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[900px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 md:px-10"
      >
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
