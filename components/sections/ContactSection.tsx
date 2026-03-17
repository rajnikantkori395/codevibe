import type { ContactPayload } from "@/types/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface ContactSectionProps {
  data: ContactPayload;
}

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section className="cv-section">
      <AnimateIn variant="slideUp" as="div">
        <Card className="grid gap-6 px-6 py-6 md:grid-cols-[1.2fr_minmax(0,1.3fr)] md:px-8 md:py-7">
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
          <ul className="cv-text-muted mt-3 space-y-1.5 text-[0.8rem]">
            {data.bulletPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
        <form className="space-y-3 text-[0.8rem]">
          <div className="grid gap-3 md:grid-cols-2">
            {data.formFields.filter((f) => f.type !== "textarea").map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label
                  htmlFor={field.id}
                  className="cv-text text-[0.75rem] font-medium"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  className="cv-input w-full rounded-lg px-3 py-2 text-[0.8rem] transition"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          {data.formFields
            .filter((f) => f.type === "textarea")
            .map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label
                  htmlFor={field.id}
                  className="cv-text text-[0.75rem] font-medium"
                >
                  {field.label}
                </label>
                <textarea
                  id={field.id}
                  name={field.name}
                  rows={field.rows ?? 4}
                  className="cv-input w-full resize-none rounded-lg px-3 py-2 text-[0.8rem] transition"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <Button type="submit" variant="primary" size="md">
              {data.submitLabel}
            </Button>
            <p className="cv-text-muted max-w-xs text-[0.7rem]">
              {data.consentText}
            </p>
          </div>
        </form>
        </Card>
      </AnimateIn>
    </section>
  );
}
