import type { HeroPayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface HomeHeroProps {
  hero: HeroPayload;
}

export function HomeHero({ hero }: HomeHeroProps) {
  const { dashboard } = hero;
  const firstRow = dashboard.rows[0];
  const metricRows = dashboard.rows.slice(1);

  return (
    <section className="cv-section">
      <Card hoverBorder={false} className="relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,#22d3ee,transparent_60%)] blur-2xl" />
          <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,#6366f1,transparent_60%)] blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <AnimateIn variant="slideUp" delay={0} className="max-w-xl space-y-5">
            <div className="cv-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_0_4px_rgba(34,211,238,0.4)]" />
              <span>{hero.pillLabel}</span>
            </div>
            <h1 className="cv-gradient-text text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[2.65rem]">
              {hero.headline}
            </h1>
            <p className="cv-text-muted max-w-xl text-sm leading-relaxed md:text-[0.95rem]">
              {hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href={hero.primaryCta.href} variant="primary" size="md">
                {hero.primaryCta.label}
                <span aria-hidden>↗</span>
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="sm">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <div className="cv-text-muted flex flex-wrap items-center gap-5 pt-2 text-[0.65rem] md:text-[0.7rem]">
              {hero.badges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="scaleIn" delay={1} className="relative mt-4 w-full max-w-sm md:mt-0 md:max-w-md">
            <Card className="relative overflow-hidden p-4">
              <div className="cv-text-muted mb-3 flex items-center justify-between text-[0.7rem]">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {dashboard.title}
                </span>
                {dashboard.subtitle ? (
                  <span>{dashboard.subtitle}</span>
                ) : null}
              </div>
              <div className="space-y-3 text-xs">
                {firstRow && (
                  <div className="cv-bg-elevated cv-border-default flex items-center justify-between rounded-xl border px-3 py-2">
                    <div className="space-y-0.5">
                      <p className="cv-text-muted text-[0.7rem] uppercase tracking-[0.14em]">
                        {firstRow.label}
                      </p>
                      <p className="cv-text text-sm font-medium">
                        {firstRow.value}
                      </p>
                    </div>
                    {firstRow.status && (
                      <div className="flex items-center gap-1">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[0.65rem] text-emerald-300">
                          ●
                        </span>
                        <span className="text-[0.65rem] text-emerald-300">
                          {firstRow.status}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2">
                  {metricRows.slice(0, 2).map((row) => (
                    <div
                      key={row.label}
                      className="cv-bg-elevated cv-border-default rounded-xl border px-3 py-2"
                    >
                      <p className="cv-text-muted text-[0.65rem] uppercase tracking-[0.14em]">
                        {row.label}
                      </p>
                      <p className="cv-text text-lg font-semibold">
                        {row.value}
                      </p>
                      {row.sublabel && (
                        <p className="cv-text-muted text-[0.65rem]">
                          {row.sublabel}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {dashboard.engagements && (
                  <div className="cv-bg-elevated cv-border-default rounded-xl border px-3 py-2">
                    <p className="cv-text-muted text-[0.65rem] uppercase tracking-[0.14em]">
                      Engagements
                    </p>
                    <div className="cv-text-muted mt-1 flex items-center justify-between text-[0.7rem]">
                      <span>{dashboard.engagements.text}</span>
                      <span className="cv-bg-elevated cv-text rounded-full px-2 py-0.5 text-[0.6rem]">
                        {dashboard.engagements.badge}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </AnimateIn>
        </div>
      </Card>
    </section>
  );
}
