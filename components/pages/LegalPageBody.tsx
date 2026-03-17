import type { LegalPagePayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";

interface LegalPageBodyProps {
  data: LegalPagePayload;
}

export function LegalPageBody({ data }: LegalPageBodyProps) {
  return (
    <section className="cv-section">
      <AnimateIn variant="slideUp" as="div">
        <Card className="cv-text-muted p-4 text-sm md:p-6">
        <p className="text-[0.78rem] uppercase tracking-[0.16em] cv-text-muted">
          Updated: {data.updatedAt}
        </p>
        <div className="mt-5 space-y-7">
          {data.sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h2 className="cv-text text-sm font-semibold">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p} className="cv-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        </Card>
      </AnimateIn>
    </section>
  );
}

