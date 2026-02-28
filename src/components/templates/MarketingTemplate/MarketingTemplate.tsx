import { MarketingFooter, MarketingNav } from "@/components/organisms";
import { cn } from "@/utils";
import type { MarketingTemplateProps } from "./MarketingTemplate.types";

export function MarketingTemplate({
  ctaHref,
  ctaLabel,
  children,
  className,
}: MarketingTemplateProps) {
  return (
    <div
      className={cn("flex min-h-screen flex-col bg-background", className)}
    >
      <MarketingNav ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  );
}
