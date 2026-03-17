import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold cv-transition focus:outline-none focus:ring-2 focus:ring-offset-2 cv-ring-offset focus:ring-offset-[var(--cv-background)] focus:ring-[var(--cv-primary)]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--cv-primary)] text-white hover:bg-[var(--cv-primary-strong)]",
  secondary:
    "cv-btn-secondary border border-slate-700/80 bg-slate-900/60 text-slate-200 hover:border-slate-600 hover:bg-slate-800/60",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-xs uppercase tracking-[0.18em]",
  md: "px-5 py-2.5 text-sm",
};

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  /** Only when href is set */
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
