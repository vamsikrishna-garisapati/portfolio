"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#repertoire", label: "Repertoire" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
        className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="relative flex h-[14px] w-5 flex-col justify-between">
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-full origin-center bg-stone-300"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-px w-full bg-stone-300"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-full origin-center bg-stone-300"
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-50 max-h-[min(70dvh,28rem)] overflow-y-auto overscroll-contain border-b border-white/10 bg-black/95 backdrop-blur-md"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex w-full max-w-[1400px] flex-col px-6 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring micro-link border-b border-white/5 py-4 text-sm uppercase tracking-[0.22em] text-stone-300 last:border-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
