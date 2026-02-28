import { cn } from "@/utils";
import type { MarketingFeatureGridProps } from "./MarketingFeatureGrid.types";

export function MarketingFeatureGrid({
  heading,
  subtext,
  items,
  className,
}: MarketingFeatureGridProps) {
  return (
    <section
      id="features"
      className={cn("mx-auto max-w-6xl px-6 pb-20", className)}
    >
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-black text-foreground">{heading}</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">{subtext}</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border p-6 transition hover:border-primary/50 hover:shadow-sm"
          >
            <div
              className={cn(
                "mb-4 flex h-10 w-10 items-center justify-center rounded-lg",
                item.iconBg
              )}
            >
              <span className={item.iconColor}>{item.icon}</span>
            </div>
            <h3 className="mb-1 text-sm font-bold text-foreground">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
