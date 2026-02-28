import { cn } from "@/utils";
import type { MarketingTestimonialsProps } from "./MarketingTestimonials.types";

export function MarketingTestimonials({
  heading = "What our customers say",
  items,
  className,
}: MarketingTestimonialsProps) {
  return (
    <section className={cn("bg-muted py-20", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-black text-foreground">
          {heading}
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="mb-4 text-sm italic text-muted-foreground">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-primary-foreground",
                    item.avatarBg ?? "bg-primary"
                  )}
                >
                  {item.avatarInitials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
