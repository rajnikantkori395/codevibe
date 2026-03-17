"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import type { NavPayload } from "@/types/site";
import { Button } from "../ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface MainNavProps {
  nav: NavPayload;
}

export function MainNav({ nav }: MainNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const activeIndex = nav.links.findIndex((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  useLayoutEffect(() => {
    const navEl = navRef.current;
    const activeEl = activeIndex >= 0 ? linkRefs.current[activeIndex] : null;
    if (!navEl || !activeEl) {
      queueMicrotask(() =>
        setIndicator((p) => (p.width ? { left: 0, width: 0 } : p))
      );
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left + navEl.scrollLeft,
      width: linkRect.width,
    });
  }, [pathname, activeIndex, nav.links.length]);

  useLayoutEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    const ro = new ResizeObserver(() => {
      const activeEl = activeIndex >= 0 ? linkRefs.current[activeIndex] : null;
      if (!activeEl) return;
      const navRect = navEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - navRect.left + navEl.scrollLeft,
        width: linkRect.width,
      });
    });
    ro.observe(navEl);
    return () => ro.disconnect();
  }, [activeIndex]);

  return (
    <header className="cv-header-bar sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="cv-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="cv-logo-mark">
            <span className="text-sm font-semibold text-white">
              {nav.brand.logoLabel}
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="cv-nav-brand-name text-sm font-semibold tracking-wide text-slate-50">
              {nav.brand.name}
            </span>
            <span className="cv-nav-brand-tagline text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
              {nav.brand.tagline}
            </span>
          </div>
        </Link>
        <nav
          ref={navRef}
          className="relative hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex"
        >
          {nav.links.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                href={link.href}
                className={`cv-nav-link relative px-1 py-1 transition-colors duration-200 ${
                  isActive
                    ? "cv-nav-link-active text-slate-50"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {indicator.width > 0 && (
            <span
              className="cv-nav-highlighter"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
              aria-hidden
            />
          )}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button href={nav.cta.href} variant="primary" size="sm">
            {nav.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
