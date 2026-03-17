import { readFile } from "fs/promises";
import path from "path";
import type { SiteContent } from "@/types/site";

const DATA_DIR = path.join(process.cwd(), "data");

async function readJson<T>(filename: string): Promise<T> {
  const filePath = path.join(DATA_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

/**
 * Loads full site content from JSON files.
 * Used by GET /api/site and by server-rendered pages.
 * When you add a backend, replace this with a fetch to your API or keep it as fallback.
 */
export async function getSiteContent(): Promise<SiteContent> {
  const [
    nav,
    hero,
    services,
    industries,
    stats,
    contact,
    footer,
    aboutPage,
    servicesPage,
    solutionsPage,
    industriesPage,
    careersPage,
    contactPage,
    privacyPage,
    termsPage,
  ] = await Promise.all([
    readJson<SiteContent["nav"]>("nav.json"),
    readJson<SiteContent["hero"]>("hero.json"),
    readJson<SiteContent["services"]>("services.json"),
    readJson<SiteContent["industries"]>("industries.json"),
    readJson<SiteContent["stats"]>("stats.json"),
    readJson<SiteContent["contact"]>("contact.json"),
    readJson<SiteContent["footer"]>("footer.json"),
    readJson<SiteContent["pages"]["about"]>(path.join("pages", "about.json")),
    readJson<SiteContent["pages"]["services"]>(path.join("pages", "services.json")),
    readJson<SiteContent["pages"]["solutions"]>(path.join("pages", "solutions.json")),
    readJson<SiteContent["pages"]["industries"]>(path.join("pages", "industries.json")),
    readJson<SiteContent["pages"]["careers"]>(path.join("pages", "careers.json")),
    readJson<SiteContent["pages"]["contact"]>(path.join("pages", "contact.json")),
    readJson<SiteContent["pages"]["privacy"]>(path.join("pages", "privacy.json")),
    readJson<SiteContent["pages"]["terms"]>(path.join("pages", "terms.json")),
  ]);

  const pages: SiteContent["pages"] = {
    about: aboutPage,
    services: servicesPage,
    solutions: solutionsPage,
    industries: industriesPage,
    careers: careersPage,
    contact: contactPage,
    privacy: privacyPage,
    terms: termsPage,
  };

  return {
    nav,
    hero,
    services,
    industries,
    stats,
    contact,
    footer,
    pages,
  };
}
