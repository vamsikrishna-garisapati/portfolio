"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-subtle bg-[color:color-mix(in_oklab,var(--background-elevated),transparent_35%)] text-fg transition hover:bg-black/5 dark:hover:bg-white/[0.04]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span suppressHydrationWarning>
        {isDark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
      </span>
    </button>
  );
}
