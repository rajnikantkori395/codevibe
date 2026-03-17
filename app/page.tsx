import { getSiteContent } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <SiteShell nav={content.nav} footer={content.footer}>
      <HomeHero hero={content.hero} />
      <ServicesSection data={content.services} />
      <IndustriesSection data={content.industries} />
      <StatsSection data={content.stats} />
      <ContactSection data={content.contact} />
    </SiteShell>
  );
}
