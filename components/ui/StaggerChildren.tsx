"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { AnimateIn, type AnimateInProps } from "./AnimateIn";
import type { AnimationVariant } from "@/lib/animation";

export interface StaggerChildrenProps {
  children: ReactNode;
  /** Wrapper element for each child */
  as?: AnimateInProps["as"];
  /** Animation variant applied to each child */
  variant?: AnimationVariant;
  /** Delay between each child in steps (0–6). Child i gets delay step Math.min(i, maxDelay). */
  staggerStep?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Extra class on the wrapper of each child */
  className?: string;
  /** IntersectionObserver: animate only when in view */
  once?: boolean;
}

/**
 * Wraps each child in AnimateIn with an increasing delay (stagger).
 * Use for lists, grids, or any group of elements that should animate in sequence.
 */
export function StaggerChildren({
  children,
  as = "div",
  variant = "slideUp",
  staggerStep = 1,
  className = "",
  once = true,
}: StaggerChildrenProps) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <>
      {items.map((child, index) => {
        const delay = Math.min(index * staggerStep, 6) as 0 | 1 | 2 | 3 | 4 | 5 | 6;
        return (
          <AnimateIn
            key={index}
            as={as}
            variant={variant}
            delay={delay}
            className={className}
            once={once}
          >
            {child}
          </AnimateIn>
        );
      })}
    </>
  );
}
