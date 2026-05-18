import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Project Inquiry — Vamsi Krishna Garisapati",
  description: "Collect project inquiry details and route them to automation.",
};

export default function LeadPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[960px] px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 md:px-10"
      >
        <section aria-labelledby="lead-form-heading" className="scroll-mt-24 pb-space-md pt-3 md:pb-16 md:pt-6">
          <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Project Inquiry</p>
          <h1 id="lead-form-heading" className="font-serif-display mt-4 text-display-lg tracking-tight text-fg">
            Tell Us About Your Project
          </h1>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">
            Share your requirements, timeline, and budget range. We typically respond within 24 hours.
          </p>
          <LeadCaptureForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
