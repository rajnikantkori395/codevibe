import type { ReactNode, ElementType } from "react";

export interface CardProps {
  children: ReactNode;
  /** Extra class names on the inner content area */
  className?: string;
  /** Wrapper element: div, article, section */
  as?: ElementType;
  /** If false, no moving border on hover (plain cv-card style). Default true */
  hoverBorder?: boolean;
}

/**
 * Reusable card with optional moving border on hover.
 * Uses design-system border animation (conic gradient spin).
 */
export function Card({
  children,
  className = "",
  as: Component = "div",
  hoverBorder = true,
}: CardProps) {
  if (!hoverBorder) {
    return (
      <Component className={`cv-card ${className}`.trim()}>
        {children}
      </Component>
    );
  }

  return (
    <Component className="cv-card-with-border">
      <div className="cv-card-border-runner" aria-hidden />
      <div className={`cv-card-inner ${className}`.trim()}>
        {children}
      </div>
    </Component>
  );
}
