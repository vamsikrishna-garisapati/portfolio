"use client";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle").then((mod) => mod.ThemeToggle), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="h-11 w-11 rounded-md border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)]"
    />
  ),
});

export function ThemeToggleSlot() {
  return <ThemeToggle />;
}
