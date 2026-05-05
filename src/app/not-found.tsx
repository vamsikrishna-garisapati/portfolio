import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:color-mix(in_oklab,var(--foreground),transparent_88%)] selection:text-[var(--foreground)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full min-w-0 max-w-[900px] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-16 md:px-10"
      >
        <p className="font-mono-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">404 — Not found</p>
        <h1 className="font-serif-display mt-4 text-display-sm leading-[0.95] tracking-[-0.03em] text-fg">Off the path</h1>
        <p className="mt-4 max-w-[70ch] text-[16px] leading-relaxed text-muted">
          This URL doesn&apos;t exist. Head to projects for proof, or return home.
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
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-[color:var(--border-subtle)] bg-transparent px-6 py-3 text-sm font-semibold text-fg transition hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_94%)] dark:hover:bg-[color:color-mix(in_oklab,var(--foreground),transparent_92%)]"
          >
            Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
