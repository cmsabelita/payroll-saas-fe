import { KpiCard } from "@/components/molecules/KpiCard";
import { cn } from "@/utils";
import type { PortalStatsStripProps } from "./PortalStatsStrip.types";

export function PortalStatsStrip({
  items,
  className,
}: PortalStatsStripProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      role="region"
      aria-label="Stats"
    >
      {items.map((item, index) => (
        <KpiCard
          key={index}
          value={item.value}
          label={item.label}
          icon={item.icon}
          badge={item.badge}
        />
      ))}
    </div>
  );
}
