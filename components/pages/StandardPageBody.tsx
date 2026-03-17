import type { StandardPagePayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerChildren } from "@/components/ui/StaggerChildren";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface StandardPageBodyProps {
  data: StandardPagePayload;
}

export function StandardPageBody({ data }: StandardPageBodyProps) {
  return (
    <section className="cv-section">
      {data.bullets?.length ? (
        <AnimateIn variant="slideUp">
          <ul className="cv-text-muted space-y-2 text-sm">
            {data.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </AnimateIn>
      ) : null}

      {data.cards?.length ? (
        <div className="cv-grid cv-grid-3 mt-8">
          <StaggerChildren variant="slideUp" staggerStep={1} as="div">
            {data.cards.map((card) => (
              <Card key={card.title} as="article" className="p-4">
              <h2 className="cv-text text-sm font-semibold">
                {card.title}
              </h2>
              <p className="cv-text-muted mt-2 text-[0.82rem] leading-relaxed">
                {card.description}
              </p>
              {card.bullets?.length ? (
                <ul className="cv-text-muted mt-3 space-y-1.5 text-[0.78rem]">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
            ))}
          </StaggerChildren>
        </div>
      ) : null}

      {data.cta ? (
        <AnimateIn variant="fadeIn" delay={1}>
          <div className="mt-10">
            <Button href={data.cta.href} variant="primary" size="md">
              {data.cta.label} <span aria-hidden>↗</span>
            </Button>
          </div>
        </AnimateIn>
      ) : null}
    </section>
  );
}

