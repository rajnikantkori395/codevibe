import { getSiteContent } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/pages/PageHeader";
import { LegalPageBody } from "@/components/pages/LegalPageBody";

export default async function PrivacyPage() {
  const content = await getSiteContent();
  const page = content.pages.privacy;

  return (
    <SiteShell nav={content.nav} footer={content.footer}>
      <PageHeader data={page} />
      <LegalPageBody data={page} />
    </SiteShell>
  );
}

