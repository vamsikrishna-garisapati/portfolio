import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--background),transparent_18%)] pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex w-full min-w-0 max-w-[1200px] items-center justify-between gap-3 px-6 py-3 md:px-10 md:py-4"
      >
        <Link
          href="/"
          className="font-serif-display text-2xl tracking-tight focus-ring -my-1 inline-flex min-h-11 min-w-11 items-center"
        >
          VK
        </Link>
        <div className="hidden max-w-[min(100%,52rem)] flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-muted sm:text-[11px] md:flex md:tracking-[0.18em] lg:max-w-none lg:gap-6 lg:text-xs xl:gap-8 xl:text-sm xl:tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="micro-link focus-ring">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="focus-ring inline-flex min-h-10 items-center rounded-md border border-subtle px-4 py-2 text-xs font-semibold text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04]"
            >
              Resume
            </a>
            <a
              href={mailto}
              className="focus-ring inline-flex min-h-10 items-center rounded-md bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
            >
              Email
            </a>
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
