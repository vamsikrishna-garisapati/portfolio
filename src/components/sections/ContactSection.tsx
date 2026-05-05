"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/icons/BrandIcons";
import { siteConfig } from "@/lib/data";
import { revealTransition, revealUp } from "@/lib/motion";

export function ContactSection() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-space-md md:py-16">
      <motion.div {...revealUp} transition={revealTransition}>
        <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">07 — CONTACT</p>
        <h2 id="contact-heading" className="font-serif-display mt-4 text-display-lg tracking-tight text-fg">
          Let&apos;s work.
        </h2>
        <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-muted">
          {siteConfig.openTo} Best channel: email with role, stack, and timeline.
        </p>

        <a
          href={mailto}
          className="focus-ring mt-10 inline-block max-w-full break-words font-serif-display text-2xl font-normal tracking-tight text-fg underline decoration-[color:color-mix(in_oklab,var(--foreground),transparent_78%)] underline-offset-[6px] transition hover:decoration-[color:color-mix(in_oklab,var(--foreground),transparent_45%)] md:text-3xl"
        >
          {siteConfig.email}
        </a>

        <p className="mt-6 font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          Freelance + full-time · {siteConfig.locationLine}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[color:var(--border-subtle)] pt-10 font-mono-ui text-sm">
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-muted transition hover:text-fg"
          >
            <IconLinkedin className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            LinkedIn
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-muted transition hover:text-fg"
          >
            <IconGithub className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            GitHub
          </a>
          <a href={mailto} className="focus-ring inline-flex items-center gap-2 text-muted transition hover:text-fg">
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            Email
          </a>
          <a href={siteConfig.resumePath} download={siteConfig.resumeFileName} className="focus-ring text-muted transition hover:text-fg">
            Resume (PDF)
          </a>
        </div>
      </motion.div>
    </section>
  );
}

