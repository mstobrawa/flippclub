import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Plan = {
  name: string;
  price: string;
  unit: string;
  featured?: boolean;
};

const plans: Plan[] = [
  { name: "1 game", price: "5", unit: "PLN" },
  { name: "5 games", price: "20", unit: "PLN" },
  { name: "10 games", price: "35", unit: "PLN", featured: true },
  { name: "All day", price: "50", unit: "PLN" },
];

/**
 * Placeholder pricing cards. Numbers are illustrative — replace once final
 * pricing is confirmed.
 */
export function Pricing() {
  return (
    <Section id="pricing" tone="surface">
      <SectionHeading
        eyebrow="Play"
        title="Pricing"
        description="Simple, pay-as-you-play pricing. Final rates to be confirmed."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col items-center gap-2 rounded-lg border p-6 text-center ${
              plan.featured
                ? "border-primary bg-primary/10"
                : "border-border bg-background"
            }`}
          >
            {plan.featured ? (
              <span className="rounded-pill bg-primary px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink">
                Popular
              </span>
            ) : null}
            <span className="mt-2 font-display text-3xl font-bold tracking-tight">
              {plan.price}
              <span className="text-base font-medium text-muted"> {plan.unit}</span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {plan.name}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">Prices are placeholders and may change.</p>
    </Section>
  );
}
