"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "motion/react";
import { Mail, Download, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

const STORAGE_KEY = "portfolio-floating-cta-dismissed";

export function FloatingCTA() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setDismissed(true);
      }
    });
  }, []);

  useEffect(() => {
    if (pathname !== "/" || dismissed) return;

    const update = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;
      const pastHero = hero.getBoundingClientRect().bottom < 64;
      const cr = contact.getBoundingClientRect();
      const contactCovers = cr.top < window.innerHeight * 0.75 && cr.bottom > 120;
      setVisible(pastHero && !contactCovers);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname, dismissed]);

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  const pill = (
    <div className="flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] px-3 py-2 shadow-sm">
      <a
        href={mailto}
        className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-fg"
      >
        <Mail className="h-4 w-4 shrink-0" aria-hidden />
        Hire me
      </a>
      <span className="h-4 w-px bg-[color:var(--border-subtle)]" aria-hidden />
      <a
        href={siteConfig.resumePath}
        download={siteConfig.resumeFileName}
        className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-fg"
      >
        <Download className="h-4 w-4 shrink-0" aria-hidden />
        Resume
      </a>
    </div>
  );

  if (pathname !== "/") return null;
  if (dismissed) return null;

  if (reduce) {
    return (
      <div
        className="fixed bottom-4 right-4 z-50 hidden md:block"
        role="region"
        aria-label="Quick actions"
      >
        {pill}
      </div>
    );
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 hidden max-w-[calc(100vw-2rem)] flex-col items-end gap-1 md:flex"
      role="region"
      aria-label="Quick actions"
    >
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem(STORAGE_KEY, "1");
          setDismissed(true);
        }}
        className="focus-ring rounded-full p-1.5 text-muted transition hover:text-fg"
        aria-label="Dismiss quick actions"
      >
        <X className="h-4 w-4" />
      </button>
      {pill}
    </div>
  );
}
