import { getSiteContent } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/pages/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default async function ServicesPage() {
  const content = await getSiteContent();

  return (
    <SiteShell nav={content.nav} footer={content.footer}>
      <PageHeader data={content.pages.services} />
      <ServicesSection data={content.services} />
    </SiteShell>
  );
}

