"use client";

import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <footer className="border-t border-[color:var(--border-subtle)] py-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 text-[13px] text-[color:var(--foreground-muted)] md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {year} {siteConfig.name}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a href={mailto} className="micro-link focus-ring">
            Email
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring"
          >
            LinkedIn
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="micro-link focus-ring">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
