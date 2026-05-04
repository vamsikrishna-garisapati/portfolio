"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { ThemeToggleSlot } from "./ThemeToggleSlot";
import { siteConfig } from "@/lib/data";
import { pageNavLinks, sectionAnchorLinks } from "./nav-config";
import { useActiveSection } from "./useActiveSection";

function sectionIdFromHref(href: string) {
  if (href.startsWith("/#")) return href.slice(2);
  return null;
}

export function Header() {
  const active = useActiveSection();
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <header
      style={{ viewTransitionName: "site-header" } as CSSProperties}
      className="sticky top-0 z-40 border-b border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--background),transparent_8%)] pt-[env(safe-area-inset-top)]"
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex w-full min-w-0 max-w-[1200px] items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-3 md:px-10 md:py-4"
      >
        <Link
          href="/"
          className="font-serif-display text-2xl italic leading-none tracking-tight text-fg focus-ring -my-1 inline-flex min-h-11 min-w-11 items-center"
        >
          VK
        </Link>
        <div className="hidden max-w-[min(100%,56rem)] flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] sm:text-[11px] md:flex md:tracking-[0.18em] lg:max-w-none lg:gap-4 lg:text-xs xl:gap-5">
          {sectionAnchorLinks.map((link) => {
            const id = sectionIdFromHref(link.href);
            const isActive = id !== null && active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring micro-link transition-colors ${isActive ? "text-fg" : "text-muted"}`}
              >
                {link.label}
              </Link>
            );
          })}
          {pageNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring micro-link text-muted transition-colors hover:text-fg">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="focus-ring inline-flex min-h-10 items-center rounded-md border border-[color:var(--border-subtle)] px-4 py-2 text-xs font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
            >
              Resume
            </a>
            <a
              href={mailto}
              className="focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Hire me
            </a>
          </div>
          <ThemeToggleSlot />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
