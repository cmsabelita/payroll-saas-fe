import { cn } from "@/utils";
import type { MarketingPricingTeaserProps } from "./MarketingPricingTeaser.types";

const CTA_CLASS = {
  primary:
    "block rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground",
  outline:
    "block rounded-xl border-2 border-primary py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/10",
  ghost:
    "block rounded-xl border border-border py-2.5 text-center text-sm font-semibold text-foreground hover:bg-muted",
} as const;

export function MarketingPricingTeaser({
  heading,
  subtext,
  tiers,
  className,
}: MarketingPricingTeaserProps) {
  return (
    <section
      className={cn("mx-auto max-w-6xl px-6 py-20", className)}
    >
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-black text-foreground">{heading}</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">{subtext}</p>
      </div>
      <div className="mb-8 grid grid-cols-3 gap-5">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative rounded-2xl bg-card p-6",
              tier.highlighted
                ? "border-2 border-primary shadow-lg"
                : "border border-border"
            )}
          >
            {tier.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                {tier.badge}
              </span>
            )}
            <p className="mb-1 text-sm font-semibold text-muted-foreground">
              {tier.name}
            </p>
            <p className="mb-1 text-3xl font-black text-foreground">
              {tier.price}
              <span className="text-sm font-normal text-muted-foreground">
                {tier.period}
              </span>
            </p>
            <p className="mb-5 text-xs text-muted-foreground">
              {tier.description}
            </p>
            <ul className="mb-6 space-y-2 text-sm text-foreground">
              {tier.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <a
              href={tier.ctaHref}
              className={CTA_CLASS[tier.ctaVariant ?? "outline"]}
            >
              {tier.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
