"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeIndex = nav.links.findIndex((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  // Close mobile drawer when route changes
  useEffect(() => {
    queueMicrotask(() => setIsMobileOpen(false));
  }, [pathname]);

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
    <>
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

          {/* Desktop navigation */}
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

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button href={nav.cta.href} variant="primary" size="sm">
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile actions: theme + drawer toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/70 bg-black/20 text-slate-200 cv-transition hover:bg-black/40"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-200 ${
                    isMobileOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1.5 h-px bg-current transition-opacity duration-150 ${
                    isMobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-200 ${
                    isMobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile side drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 h-full w-full bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex h-full w-72 flex-col border-l cv-border-default bg-(--cv-surface)/95 px-5 py-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex flex-col text-sm">
                <span className="font-semibold cv-text">Navigation</span>
                <span className="cv-text-muted text-[0.7rem]">
                  Quick access
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border cv-border-default bg-(--cv-background)/40 cv-text cv-transition hover:bg-(--cv-background)/70"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 text-sm font-medium">
              {nav.links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 cv-transition ${
                      isActive
                        ? "cv-bg-elevated cv-text"
                        : "cv-text-muted hover:cv-bg-elevated"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-[0.6rem]">●</span>}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4">
              <Button
                href={nav.cta.href}
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                {nav.cta.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
