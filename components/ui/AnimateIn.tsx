"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
} from "react";
import {
  ANIMATION_VARIANTS,
  DEFAULT_ROOT_MARGIN,
  DEFAULT_THRESHOLD,
  type AnimationVariant,
} from "@/lib/animation";

export interface AnimateInProps {
  children: ReactNode;
  /** Animation style */
  variant?: AnimationVariant;
  /** Delay step 0–6; maps to design-system delay classes */
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Root element: div, section, article, etc. */
  as?: ElementType;
  /** Extra class names */
  className?: string;
  /** When to run: 'viewport' (default) or 'mount' (run once on client mount, e.g. header) */
  trigger?: "viewport" | "mount";
  /** Only animate once when entering viewport (default true); ignored when trigger="mount" */
  once?: boolean;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
  /** IntersectionObserver threshold */
  threshold?: number;
}

export function AnimateIn({
  children,
  variant = "slideUp",
  delay = 0,
  as: Component = "div",
  className = "",
  trigger = "viewport",
  once = true,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = DEFAULT_THRESHOLD,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger === "mount") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (once && el) observer.unobserve(el);
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, once, rootMargin, threshold]);

  const variantClass = ANIMATION_VARIANTS[variant];
  const delayClasses = [
    "",
    "cv-animate-delay-1",
    "cv-animate-delay-2",
    "cv-animate-delay-3",
    "cv-animate-delay-4",
    "cv-animate-delay-5",
    "cv-animate-delay-6",
  ];
  const delayClass = delayClasses[delay] ?? "";

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass} ${delayClass} ${visible ? "cv-animate-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
