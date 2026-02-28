import { cn } from "@/utils";
import type { MarketingCtaBannerProps } from "./MarketingCtaBanner.types";

export function MarketingCtaBanner({
  heading = "Ready to simplify your payroll?",
  subtext = "Join 500+ Philippine businesses using Payro. No credit card required.",
  ctaLabel = "Start Free — No credit card →",
  ctaHref = "/signup",
  className,
}: MarketingCtaBannerProps) {
  return (
    <section
      className={cn("px-6 py-20", className)}
      style={{ background: "var(--color-primary)" }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 text-3xl font-black text-primary-foreground">{heading}</h2>
        <p className="mb-8 text-primary-foreground/80">{subtext}</p>
        <a
          href={ctaHref}
          className="inline-block rounded-xl bg-primary-foreground px-8 py-3.5 text-base font-bold text-primary transition hover:bg-primary-foreground/90"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
