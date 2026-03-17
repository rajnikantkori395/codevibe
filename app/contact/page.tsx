import { getSiteContent } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/pages/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function ContactPage() {
  const content = await getSiteContent();

  return (
    <SiteShell nav={content.nav} footer={content.footer}>
      <PageHeader data={content.pages.contact} />
      <ContactSection data={content.contact} />
    </SiteShell>
  );
}

