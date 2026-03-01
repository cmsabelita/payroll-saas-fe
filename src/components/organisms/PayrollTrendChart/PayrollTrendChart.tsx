"use client";

import { Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollTrendChartProps } from "./PayrollTrendChart.types";

const BAR_AREA_HEIGHT = 110;

export function PayrollTrendChart({
  title = "Payroll Trend",
  subtitle = "Gross payroll · last 6 months",
  months,
  className,
}: PayrollTrendChartProps) {
  return (
    <Surface
      elevation="none"
      className={cn("flex h-full min-h-0 flex-col rounded-xl border border-border p-5", className)}
      role="region"
      aria-label={title}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <Text variant="label" as="h3" className="font-semibold">
            {title}
          </Text>
          <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
            {subtitle}
          </Text>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-2.5 rounded-sm bg-primary" aria-hidden />
            Gross
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-2.5 rounded-sm bg-info" aria-hidden />
            Net
          </span>
        </div>
      </div>
      <div
        className="flex items-end gap-4"
        style={{ height: 130 }}
      >
        {months.map((month, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-center gap-1.5"
          >
            {month.current && month.currentLabel != null && (
              <Text variant="caption" as="span" className="mb-1 font-semibold text-primary">
                {month.currentLabel}
              </Text>
            )}
            <div
              className="flex w-full items-end gap-0.5"
              style={{ height: BAR_AREA_HEIGHT }}
            >
              <div
                className={cn(
                  "flex-1 rounded-t transition-opacity",
                  month.current
                    ? "bg-primary ring-2 ring-primary/40 ring-offset-2 ring-offset-background"
                    : "bg-primary"
                )}
                style={{ height: `${Math.min(100, month.grossPct)}%` }}
                aria-hidden
              />
              <div
                className="flex-1 rounded-t bg-info transition-opacity"
                style={{ height: `${Math.min(100, month.netPct)}%` }}
                aria-hidden
              />
            </div>
            <Text
              variant="caption"
              as="span"
              className={cn(
                "text-muted-foreground",
                month.current && "font-semibold text-primary"
              )}
            >
              {month.label}
            </Text>
          </div>
        ))}
      </div>
    </Surface>
  );
}
