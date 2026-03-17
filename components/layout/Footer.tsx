import Link from "next/link";
import type { FooterPayload } from "@/types/site";

interface FooterProps {
  footer: FooterPayload;
}

const year = new Date().getFullYear();

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="cv-footer-bar border-t border-slate-800/70 bg-slate-950/80">
      <div className="cv-container flex flex-col gap-6 py-6 text-xs cv-text-muted md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="cv-footer-copy font-medium cv-text">
            © {year} {footer.companyName}.
          </p>
          <p className="max-w-xl text-[0.7rem] cv-text-muted">{footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cv-footer-link hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
