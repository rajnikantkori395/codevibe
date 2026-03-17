/**
 * Animation design system – variants and delay steps.
 * CSS lives in globals.css; this is for component props and documentation.
 */
export const ANIMATION_VARIANTS = {
  fadeIn: "cv-animate-fade-in",
  slideUp: "cv-animate-slide-up",
  slideDown: "cv-animate-slide-down",
  slideLeft: "cv-animate-slide-left",
  scaleIn: "cv-animate-scale-in",
} as const;

export type AnimationVariant = keyof typeof ANIMATION_VARIANTS;

export const ANIMATION_DELAY_CLASSES = [
  "",
  "cv-animate-delay-1",
  "cv-animate-delay-2",
  "cv-animate-delay-3",
  "cv-animate-delay-4",
  "cv-animate-delay-5",
  "cv-animate-delay-6",
] as const;

export const DEFAULT_STAGGER_MS = 80;
/** Start animation when element is ~12% into viewport from bottom (progressive reveal) */
export const DEFAULT_ROOT_MARGIN = "0px 0px -12% 0px";
export const DEFAULT_THRESHOLD = 0.05;
