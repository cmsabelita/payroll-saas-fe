"use client";

import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import NextLink from "next/link";
import type { ComplianceCategoryGridProps } from "./ComplianceCategoryGrid.types";

export function ComplianceCategoryGrid({
  items,
  className,
}: ComplianceCategoryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      role="list"
    >
      {items.map((item) => (
        <NextLink
          key={item.href}
          href={item.href}
          className="group block rounded-xl border border-border bg-card p-4 transition hover:border-primary/30 hover:shadow-sm"
        >
          <Text variant="body" as="p" className="font-semibold text-foreground group-hover:text-primary">
            {item.title}
          </Text>
          <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
            {item.description}
          </Text>
        </NextLink>
      ))}
    </div>
  );
}
