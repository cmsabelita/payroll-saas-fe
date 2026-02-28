"use client";

import { Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormSectionProps } from "./FormSection.types";

export function FormSection({
  title,
  children,
  className,
}: FormSectionProps) {
  return (
    <Surface className={cn("rounded-xl p-6", className)}>
      <Text as="h2" variant="label" className="mb-5 text-sm font-semibold text-foreground">
        {title}
      </Text>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </Surface>
  );
}
