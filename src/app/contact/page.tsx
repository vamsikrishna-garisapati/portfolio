import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Vamsi Krishna Garisapati",
  description: "Contact Vamsi Krishna Garisapati for full-time roles or freelance projects. Best channel: email.",
};

export default function ContactPage() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/10 selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[900px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 md:px-10"
      >
        <header className="border-b border-subtle pb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Contact</p>
          <h1 className="mt-4 font-serif-display text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">
            Let’s talk
          </h1>
          <p className="mt-4 max-w-[70ch] text-[16px] leading-relaxed text-muted">
            Best channel: email. Include role + stack + timeline. I reply fast.
          </p>
        </header>

        <section className="py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Email</p>
              <a
                href={mailto}
                className="mt-4 inline-block break-words text-lg font-semibold text-fg underline decoration-black/20 underline-offset-[5px] transition hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
              >
                {siteConfig.email}
              </a>
              <p className="mt-3 text-sm text-muted">{siteConfig.locationLine}</p>
            </div>

            <div className="rounded-2xl border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Links</p>
              <div className="mt-4 space-y-3 text-[15px] text-muted">
                <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="micro-link focus-ring block py-0.5">
                  LinkedIn
                </a>
                <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="micro-link focus-ring block py-0.5">
                  GitHub
                </a>
                <a href={siteConfig.resumePath} download={siteConfig.resumeFileName} className="micro-link focus-ring block py-0.5">
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
