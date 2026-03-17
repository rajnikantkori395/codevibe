import { getSiteContent } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/pages/PageHeader";
import { IndustriesSection } from "@/components/sections/IndustriesSection";

export default async function IndustriesPage() {
  const content = await getSiteContent();

  return (
    <SiteShell nav={content.nav} footer={content.footer}>
      <PageHeader data={content.pages.industries} />
      <IndustriesSection data={content.industries} />
    </SiteShell>
  );
}

