import { getSiteContent } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/pages/PageHeader";
import { StandardPageBody } from "@/components/pages/StandardPageBody";

export default async function SolutionsPage() {
  const content = await getSiteContent();
  const page = content.pages.solutions;

  return (
    <SiteShell nav={content.nav} footer={content.footer}>
      <PageHeader data={page} />
      <StandardPageBody data={page} />
    </SiteShell>
  );
}

