"use client";

import { KpiCard } from "@/components/molecules/KpiCard";
import { cn } from "@/utils";
import type { DashboardKpiStripProps } from "./DashboardKpiStrip.types";

export function DashboardKpiStrip({
  items,
  className,
}: DashboardKpiStripProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
      role="region"
      aria-label="Key metrics"
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
