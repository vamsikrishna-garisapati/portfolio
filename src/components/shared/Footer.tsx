"use client";

import { Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/icons/BrandIcons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

  return (
    <footer className="border-t border-[color:var(--border-subtle)] py-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono-ui text-[11px] tracking-wide">
          © {year} {siteConfig.name}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono-ui text-[11px] uppercase tracking-[0.14em]">
          <a href={mailto} className="micro-link focus-ring inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 shrink-0 opacity-80" strokeWidth={1.5} aria-hidden />
            Email
          </a>
          <a href={siteConfig.resumePath} download={siteConfig.resumeFileName} className="micro-link focus-ring">
            Resume
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring inline-flex items-center gap-1.5"
          >
            <IconLinkedin className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            LinkedIn
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="micro-link focus-ring inline-flex items-center gap-1.5"
          >
            <IconGithub className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
