import type { PageHeaderPayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface PageHeaderProps {
  data: PageHeaderPayload;
}

export function PageHeader({ data }: PageHeaderProps) {
  return (
    <section className="cv-section">
      <AnimateIn variant="slideUp" as="div">
        <div className="cv-section-header">
        <p className="cv-text-muted text-[0.75rem] font-semibold uppercase tracking-[0.22em]">
          {data.eyebrow}
        </p>
        <h1 className="cv-gradient-text text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {data.title}
        </h1>
        <p className="cv-text-muted max-w-2xl text-sm leading-relaxed md:text-[0.95rem]">
          {data.description}
        </p>
        </div>
      </AnimateIn>
    </section>
  );
}

