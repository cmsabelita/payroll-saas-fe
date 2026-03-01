"use client";

import { Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { ReportGovernmentSectionProps } from "./ReportGovernmentSection.types";

export function ReportGovernmentSection({
  yearOptions,
  selectedYear,
  onYearChange,
  items,
  onExport,
  onGenerate,
  className,
}: ReportGovernmentSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <select
          className="w-28 rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
        >
          {yearOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="border-b border-border px-5 py-3.5">
          <Text variant="body" as="h2" className="font-semibold text-foreground">Government Reports — {selectedYear}</Text>
        </div>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 hover:bg-muted/30"
            >
              <div>
                <Text variant="body" as="p" className="font-medium text-foreground">{item.name}</Text>
                <Text variant="caption" as="p" className="text-muted-foreground">{item.description}</Text>
                {item.period != null && (
                  <Text variant="caption" as="p" className="mt-1 text-muted-foreground">Period: {item.period}</Text>
                )}
              </div>
              <div className="flex items-center gap-2">
                {onGenerate && (
                  <Button variant="secondary" size="md" onClick={() => onGenerate(item.id)}>
                    Generate
                  </Button>
                )}
                {onExport && (
                  <Button variant="outline" size="md" onClick={() => onExport(item.id)}>
                    Export
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
