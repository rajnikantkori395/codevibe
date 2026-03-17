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
});

