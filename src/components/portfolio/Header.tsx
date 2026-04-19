import { HyderabadClock } from "./HyderabadClock";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#repertoire", label: "Repertoire" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex w-full min-w-0 max-w-[1400px] items-center justify-between gap-3 px-6 py-3 md:px-10 md:py-4"
      >
        <a
          href="#hero"
          className="font-serif-display text-2xl tracking-tight focus-ring -my-1 inline-flex min-h-11 min-w-11 items-center"
        >
          V-K
        </a>
        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.22em] text-stone-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="micro-link focus-ring">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden text-right md:block">
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone-500">Hyderabad, IN</p>
            <HyderabadClock />
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
