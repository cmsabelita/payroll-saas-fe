"use client";

import { Surface, Text } from "@/components/atoms";
import { AlertBanner } from "@/components/molecules";
import { cn } from "@/utils";
import type { AlertsDeadlinesProps } from "./AlertsDeadlines.types";

export function AlertsDeadlines({ items, className }: AlertsDeadlinesProps) {
  return (
    <Surface
      elevation="none"
      className={cn("rounded-xl border border-border p-5", className)}
      role="region"
      aria-label="Alerts & Deadlines"
    >
      <Text variant="label" as="h3" className="mb-4 font-semibold">
        Alerts & Deadlines
      </Text>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i}>
            <AlertBanner
              variant={item.variant}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </li>
        ))}
      </ul>
    </Surface>
  );
}
