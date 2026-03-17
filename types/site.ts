/**
 * Site content schema. Used by API responses and components.
 * When adding a backend, keep these types as the API contract.
 */

export interface NavLink {
  href: string;
  label: string;
}

export interface NavPayload {
  links: NavLink[];
  brand: {
    name: string;
    tagline: string;
    logoLabel: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export interface HeroMetric {
  label: string;
  value: string;
  sublabel?: string;
}

export interface HeroDashboardCard {
  title: string;
  subtitle?: string;
  rows: Array<{
    label: string;
    value: string;
    sublabel?: string;
    status?: string;
  }>;
  engagements?: {
    text: string;
    badge: string;
  };
}

export interface HeroPayload {
  pillLabel: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badges: Array<{ text: string }>;
  dashboard: HeroDashboardCard;
}

export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

export interface ServicesPayload {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface IndustryItem {
  name: string;
  detail: string;
}

export interface IndustriesPayload {
  eyebrow: string;
  title: string;
  description: string;
  items: IndustryItem[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface StatsPayload {
  eyebrow: string;
  title: string;
  description: string;
  items: StatItem[];
}

export interface ContactFormField {
  id: string;
  name: string;
  type: "text" | "email" | "textarea";
  label: string;
  placeholder?: string;
  rows?: number;
}

export interface ContactPayload {
  eyebrow: string;
  title: string;
  description: string;
  bulletPoints: string[];
  formFields: ContactFormField[];
  submitLabel: string;
  consentText: string;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterPayload {
  companyName: string;
  tagline: string;
  links: FooterLink[];
}

export interface PageHeaderPayload {
  eyebrow: string;
  title: string;
  description: string;
}

export interface CardItem {
  title: string;
  description: string;
  bullets?: string[];
}

export interface StandardPagePayload extends PageHeaderPayload {
  cards?: CardItem[];
  bullets?: string[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPagePayload extends PageHeaderPayload {
  updatedAt: string;
  sections: LegalSection[];
}

export interface PagesContent {
  about: StandardPagePayload;
  services: PageHeaderPayload;
  solutions: StandardPagePayload;
  industries: PageHeaderPayload;
  careers: StandardPagePayload;
  contact: PageHeaderPayload;
  privacy: LegalPagePayload;
  terms: LegalPagePayload;
}

export interface SiteContent {
  nav: NavPayload;
  hero: HeroPayload;
  services: ServicesPayload;
  industries: IndustriesPayload;
  stats: StatsPayload;
  contact: ContactPayload;
  footer: FooterPayload;
  pages: PagesContent;
}
