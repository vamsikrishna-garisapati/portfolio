import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/10 selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[900px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-16 md:px-10"
      >
        <h1 className="font-serif-display text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">Page not found</h1>
        <p className="mt-4 max-w-[70ch] text-[16px] leading-relaxed text-muted">
          The page doesn’t exist. Go to projects for the fastest proof.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
          >
            View projects
          </Link>
          <Link
            href="/"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-subtle bg-transparent px-6 py-3 text-sm font-semibold text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04]"
          >
            Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

