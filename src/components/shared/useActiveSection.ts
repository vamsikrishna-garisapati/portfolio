"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTION_IDS = ["work", "capabilities", "stack", "experience", "education", "contact"] as const;

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const first = intersecting[0];
        if (first?.target.id) setActiveSectionId(first.target.id);
      },
      { rootMargin: "-38% 0px -48% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return pathname === "/" ? activeSectionId : null;
}
