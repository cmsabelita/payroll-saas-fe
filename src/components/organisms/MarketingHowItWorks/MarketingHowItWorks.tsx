import { cn } from "@/utils";
import type { MarketingHowItWorksProps } from "./MarketingHowItWorks.types";

export function MarketingHowItWorks({
  heading,
  subtext,
  steps,
  className,
}: MarketingHowItWorksProps) {
  return (
    <section className={cn("bg-muted py-20", className)}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-3 text-3xl font-black text-foreground">{heading}</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">{subtext}</p>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-black text-primary-foreground">
                {step.step}
              </div>
              <h3 className="mb-2 text-sm font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
