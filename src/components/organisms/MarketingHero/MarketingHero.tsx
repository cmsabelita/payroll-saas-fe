import { cn } from "@/utils";
import type { MarketingHeroProps } from "./MarketingHero.types";

const DEFAULT_BADGE = "Philippine payroll, simplified";
const DEFAULT_SUBTEXT =
  "SSS, PhilHealth, Pag-IBIG & BIR compliance in one place. Run payroll in minutes, not days.";
const DEFAULT_TRUST_LINE = "No credit card required · Free for up to 10 employees";

const DEFAULT_HEADLINE = (
  <>
    Philippine Payroll,
    <br />
    <span className="text-primary">Done Right.</span>
  </>
);

function DefaultPreviewPlaceholder() {
  return (
    <div className="flex flex-col items-center gap-2 text-muted-foreground">
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <a
        href="/dashboard"
        className="text-sm font-medium text-primary"
      >
        View live dashboard mockup →
      </a>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

export function MarketingHero({
  badgeLabel,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  trustLine,
  preview,
  className,
}: MarketingHeroProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl px-6 pb-16 pt-20 text-center",
        className
      )}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5">
        <span className="text-xs font-semibold text-foreground">
          {badgeLabel ?? DEFAULT_BADGE}
        </span>
      </div>
      <h1 className="mb-4 text-5xl font-black leading-tight text-foreground">
        {headline ?? DEFAULT_HEADLINE}
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
        {subtext ?? DEFAULT_SUBTEXT}
      </p>
      <div className="mb-6 flex items-center justify-center gap-4">
        <a
          href={primaryCta?.href ?? "/signup"}
          className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
        >
          {primaryCta?.label ?? "Start Free — No credit card →"}
        </a>
        <a
          href={secondaryCta?.href ?? "/dashboard"}
          className="flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-base font-medium text-foreground hover:bg-muted"
        >
          {secondaryCta?.label ?? "View Demo"} <ChevronIcon />
        </a>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">
        {trustLine ?? DEFAULT_TRUST_LINE}
      </p>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
          <div className="flex items-center gap-1.5 bg-muted px-4 py-2.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              app.payro.ph/dashboard
            </span>
          </div>
          <div className="flex h-80 items-center justify-center bg-muted/50">
            {preview ?? <DefaultPreviewPlaceholder />}
          </div>
        </div>
      </section>
    </section>
  );
}
