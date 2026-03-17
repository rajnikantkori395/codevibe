"use client";

import { useTheme } from "@/providers/theme/ThemeProvider";
import type { ThemeMode } from "@/providers/theme/ThemeProvider";

const size = 20;

const labels: Record<ThemeMode, string> = {
  dark: "Switch to light theme",
  light: "Switch to teal theme",
  teal: "Switch to dark theme",
};

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={labels[mode]}
      className="cv-theme-toggle"
    >
      {mode === "dark" && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
      {mode === "light" && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      {mode === "teal" && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
        </svg>
      )}
    </button>
  );
}
