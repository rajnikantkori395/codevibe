import type { StatsPayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";

interface StatsSectionProps {
  data: StatsPayload;
}

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <section className="cv-section">
      <AnimateIn variant="scaleIn" as="div">
        <Card hoverBorder={false} className="grid gap-6 px-6 py-5 md:grid-cols-[1.3fr_minmax(0,2fr)] md:px-8 md:py-6">
          <div className="space-y-3">
          <p className="cv-text-muted text-[0.75rem] font-semibold uppercase tracking-[0.22em]">
            {data.eyebrow}
          </p>
          <h2 className="cv-text text-[1.4rem] font-semibold md:text-[1.6rem]">
            {data.title}
          </h2>
          <p className="cv-text-muted max-w-md text-[0.8rem] leading-relaxed">
            {data.description}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
          {data.items.map((stat) => (
            <div
              key={stat.label}
              className="cv-bg-elevated cv-border-default rounded-xl border px-3 py-2.5"
            >
              <dt className="cv-text-muted text-[0.7rem] uppercase tracking-[0.16em]">
                {stat.label}
              </dt>
              <dd className="cv-text mt-1 text-base font-semibold">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        </Card>
      </AnimateIn>
    </section>
  );
}
