"use client";

import { motion } from "motion/react";
import { revealTransition, revealUp } from "./motion";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-space-md md:py-16">
      <motion.h2
        {...revealUp}
        transition={revealTransition}
        className="font-serif-display text-display-lg tracking-tight"
        id="contact-heading"
      >
        Let&apos;s build something.
      </motion.h2>
      <div className="mt-8 grid min-w-0 gap-6 border-t border-white/10 pt-6 md:mt-10 md:grid-cols-2 md:gap-8 md:pt-8">
        <div className="min-w-0 space-y-3">
          <a
            href="mailto:vamsikrishna.garisapati@gmail.com"
            className="focus-ring inline-block max-w-full break-words text-xl text-stone-100 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
          >
            vamsikrishna.garisapati@gmail.com
          </a>
          <p className="text-stone-400">Hyderabad, India</p>
          <a
            href="tel:+917288871441"
            className="focus-ring block text-stone-400 transition-colors hover:text-stone-200"
          >
            +91 72888-71441
          </a>
        </div>
        <div className="min-w-0 space-y-2 break-words text-stone-300">
          <a
            href="https://github.com/vamsikrishna-garisapati"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring block"
          >
            GitHub - github.com/vamsikrishna-garisapati
          </a>
          <a
            href="https://www.linkedin.com/in/vamsikrishna-garisapati"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring block"
          >
            LinkedIn - linkedin.com/in/vamsikrishna-garisapati
          </a>
          <a
            href="https://x.com/vamsi_krishna15"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring block"
          >
            X - @vamsi_krishna15
          </a>
        </div>
      </div>
    </section>
  );
}
