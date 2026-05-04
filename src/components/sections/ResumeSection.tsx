import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ResumeSection() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="scroll-mt-24 border-b border-[color:var(--border-subtle)] py-space-md"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading id="resume-heading">Resume</SectionHeading>
          <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-muted">
            One PDF for recruiters and hiring managers. Prefer email with role, stack, and timeline — or use the contact
            page for links.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={siteConfig.resumePath}
            download={siteConfig.resumeFileName}
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
          >
            Download resume
          </a>
          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-subtle bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:-translate-y-0.5 hover:bg-black/5 dark:hover:bg-white/[0.04]"
          >
            Contact
          </Link>
        </div>
      </div>

      <ul className="mt-10 space-y-3 rounded-2xl glass-panel p-6 text-[15px] leading-relaxed text-muted transition-all duration-300 hover:shadow-lg md:mt-12 md:p-8">
        {siteConfig.resumeHighlights.map((line) => (
          <li key={line} className="flex gap-2.5">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:color-mix(in_oklab,var(--foreground),transparent_55%)]"
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
