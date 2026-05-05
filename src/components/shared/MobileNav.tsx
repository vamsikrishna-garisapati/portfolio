"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/lib/data";
import { pageNavLinks, sectionAnchorLinks } from "./nav-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center text-fg"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-50 max-h-[min(70dvh,28rem)] overflow-y-auto overscroll-contain border-b border-[color:var(--border-subtle)] bg-[var(--background)]"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex w-full max-w-[1200px] flex-col px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-6"
            >
              {sectionAnchorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring border-b border-[color:var(--border-subtle)] py-4 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  {link.label}
                </Link>
              ))}
              {pageNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring border-b border-[color:var(--border-subtle)] py-4 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFileName}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-[color:var(--border-subtle)] py-4 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-fg"
              >
                Resume (PDF)
              </a>
              <a
                href={mailto}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-[color:var(--border-subtle)] py-4 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-fg"
              >
                Email
              </a>
              <div className="flex items-center justify-between border-b border-[color:var(--border-subtle)] py-4">
                <span className="font-mono-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Theme</span>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
