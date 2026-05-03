"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/data";
import { revealTransition, revealUp } from "@/lib/motion";

export function ContactSection() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-space-md md:py-16">
      <motion.h2
        {...revealUp}
        transition={revealTransition}
        className="font-serif-display text-display-lg tracking-tight text-fg"
        id="contact-heading"
      >
        Contact
      </motion.h2>
      <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">
        {siteConfig.openTo} Best channel: email with role/project + stack.
      </p>

      <div className="mt-10 grid min-w-0 gap-10 border-t border-subtle pt-8 md:mt-12 md:grid-cols-2 md:gap-12 md:pt-10">
        <div className="min-w-0 space-y-4">
          <a
            href={mailto}
            className="focus-ring inline-block max-w-full break-words text-lg font-semibold text-fg underline decoration-black/20 underline-offset-[5px] transition hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
          >
            {siteConfig.email}
          </a>
          <p className="text-sm text-muted">{siteConfig.locationLine}</p>
        </div>
        <div className="min-w-0 space-y-3 break-words text-[15px] text-muted">
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring block py-0.5"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring block py-0.5"
          >
            GitHub
          </a>
          <a
            href={siteConfig.resumePath}
            download={siteConfig.resumeFileName}
            className="micro-link focus-ring block py-0.5"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
