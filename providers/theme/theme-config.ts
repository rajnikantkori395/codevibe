export type BrandPalette = {
  primary: string;
  primarySoft: string;
  primaryStrong: string;
  accent: string;
  accentSoft: string;
  background: string;
  surface: string;
  surfaceMuted: string;
  text: string;
  textMuted: string;
  border: string;
  /** Background radial glow (top-left) – e.g. "rgba(99,102,241,0.22)" */
  bgGlowPrimary: string;
  /** Background radial glow (bottom-right) – e.g. "rgba(34,211,238,0.16)" */
  bgGlowAccent: string;
};

/**
 * Dark theme – single source of truth for Codevibe brand colors.
 */
export const darkThemePalette: BrandPalette = {
  primary: "#6366F1", // indigo-500
  primarySoft: "rgba(99, 102, 241, 0.12)",
  primaryStrong: "#4F46E5", // indigo-600
  accent: "#22D3EE", // cyan-400
  accentSoft: "rgba(34, 211, 238, 0.14)",
  background: "#020617", // slate-950
  surface: "#020617",
  surfaceMuted: "#020617",
  text: "#E5E7EB", // gray-200
  textMuted: "#9CA3AF", // gray-400
  border: "rgba(148, 163, 184, 0.35)",
  bgGlowPrimary: "rgba(99, 102, 241, 0.22)",
  bgGlowAccent: "rgba(34, 211, 238, 0.16)",
};

/**
 * Light theme – same brand, light surfaces.
 */
export const lightThemePalette: BrandPalette = {
  primary: "#4F46E5", // indigo-600 for contrast on light
  primarySoft: "rgba(79, 70, 229, 0.12)",
  primaryStrong: "#4338CA", // indigo-700
  accent: "#0891B2", // cyan-600
  accentSoft: "rgba(8, 145, 178, 0.14)",
  background: "#F8FAFC", // slate-50
  surface: "#FFFFFF",
  surfaceMuted: "#F1F5F9", // slate-100
  text: "#0F172A", // slate-900
  textMuted: "#64748B", // slate-500
  border: "rgba(148, 163, 184, 0.4)",
  bgGlowPrimary: "rgba(99, 102, 241, 0.08)",
  bgGlowAccent: "rgba(8, 145, 178, 0.06)",
};

/**
 * Teal theme – palette: #00897b, #00564d, #061E29, #363636, #969696
 */
export const tealThemePalette: BrandPalette = {
  primary: "#00897b", // (0, 137, 123)
  primarySoft: "rgba(0, 137, 123, 0.14)",
  primaryStrong: "#00564d", // (0, 86, 77)
  accent: "#00897b",
  accentSoft: "rgba(0, 137, 123, 0.14)",
  background: "#061E29", // dark teal
  surface: "#061E29",
  surfaceMuted: "#0c2835", // slightly lighter dark teal
  text: "#e5e5e5",
  textMuted: "#969696", // (150, 150, 150)
  border: "rgba(150, 150, 150, 0.35)",
  bgGlowPrimary: "rgba(0, 137, 123, 0.2)",
  bgGlowAccent: "rgba(0, 86, 77, 0.15)",
};

/** @deprecated Use darkThemePalette */
export const codevibePalette = darkThemePalette;

export const paletteToCssVariables = (palette: BrandPalette): Record<string, string> => ({
  "--cv-primary": palette.primary,
  "--cv-primary-soft": palette.primarySoft,
  "--cv-primary-strong": palette.primaryStrong,
  "--cv-accent": palette.accent,
  "--cv-accent-soft": palette.accentSoft,
  "--cv-background": palette.background,
  "--cv-surface": palette.surface,
  "--cv-surface-muted": palette.surfaceMuted,
  "--cv-text": palette.text,
  "--cv-text-muted": palette.textMuted,
  "--cv-border": palette.border,
  "--cv-bg-glow-primary": palette.bgGlowPrimary,
  "--cv-bg-glow-accent": palette.bgGlowAccent,
});

