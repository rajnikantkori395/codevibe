import type { ServicesPayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { Card } from "@/components/ui/Card";

interface ServicesSectionProps {
  data: ServicesPayload;
}

export function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section className="cv-section">
      <AnimateIn variant="slideUp">
        <div className="cv-section-header">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] cv-text-muted">
          {data.eyebrow}
        </p>
        <h2 className="cv-section-title cv-text">{data.title}</h2>
        <p className="cv-section-description cv-text-muted">{data.description}</p>
        </div>
      </AnimateIn>
      <div className="cv-grid cv-grid-3">
        <StaggerChildren variant="slideUp" staggerStep={1} as="div">
          {data.items.map((service) => (
            <Card key={service.title} as="article" className="flex flex-col gap-3 p-4">
            <h3 className="cv-text text-sm font-semibold">
              {service.title}
            </h3>
            <p className="cv-text-muted text-[0.8rem] leading-relaxed">
              {service.description}
            </p>
            <ul className="cv-text-muted mt-1 space-y-1.5 text-[0.78rem]">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
