import type { IndustriesPayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { Card } from "@/components/ui/Card";

interface IndustriesSectionProps {
  data: IndustriesPayload;
}

export function IndustriesSection({ data }: IndustriesSectionProps) {
  return (
    <section className="cv-section">
      <AnimateIn variant="slideLeft">
        <div className="cv-section-header">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] cv-text-muted">
            {data.eyebrow}
          </p>
          <h2 className="cv-section-title cv-text">{data.title}</h2>
          <p className="cv-section-description cv-text-muted">{data.description}</p>
        </div>
      </AnimateIn>
      <div className="cv-grid cv-grid-2">
        <StaggerChildren variant="slideUp" staggerStep={1} as="div">
          {data.items.map((industry) => (
            <Card key={industry.name} as="article" className="p-4">
            <h3 className="cv-text text-sm font-semibold">
              {industry.name}
            </h3>
            <p className="cv-text-muted mt-2 text-[0.8rem] leading-relaxed">
              {industry.detail}
            </p>
          </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
