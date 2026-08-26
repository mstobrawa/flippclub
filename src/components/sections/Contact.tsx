import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Contact placeholder. Deliberately static (mailto/tel links only) — no
 * form submission or backend wiring yet.
 */
export function Contact() {
  return (
    <Section id="contact" tone="default">
      <div className="flex flex-col items-start gap-6 rounded-lg border border-border bg-surface p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          eyebrow="Get in touch"
          title="Questions, bookings or events?"
          description="Reach out and we'll get back to you. A proper contact form is planned for a later iteration."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="mailto:hello@flippclub.example" variant="primary">
            Email us
          </Button>
          <Button href="tel:+48123456789" variant="secondary">
            Call us
          </Button>
        </div>
      </div>
    </Section>
  );
}
