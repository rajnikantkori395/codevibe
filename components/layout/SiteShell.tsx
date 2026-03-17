import type { ReactNode } from "react";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import type { NavPayload, FooterPayload } from "@/types/site";

interface SiteShellProps {
  children: ReactNode;
  nav: NavPayload;
  footer: FooterPayload;
}

export function SiteShell({ children, nav, footer }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <MainNav nav={nav} />
      <main className="flex-1">
        <div className="cv-container py-8 md:py-10">{children}</div>
      </main>
      <Footer footer={footer} />
    </div>
  );
}
