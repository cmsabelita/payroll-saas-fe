"use client";

import { Button, buttonVariants, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PortalGreetingProps } from "./PortalGreeting.types";

export function PortalGreeting({
  dateLabel,
  title,
  subtitle,
  quickActions = [],
  className,
}: PortalGreetingProps) {
  return (
    <div
      className={cn("flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", className)}
      role="region"
      aria-label="Greeting"
    >
      <div>
        <Text variant="caption" as="p" className="mb-0.5 text-muted-foreground">
          {dateLabel}
        </Text>
        <Text variant="heading" as="h1" className="text-xl font-bold">
          {title}
        </Text>
        {subtitle != null && (
          <Text variant="body" as="p" className="mt-0.5 text-sm text-muted-foreground">
            {subtitle}
          </Text>
        )}
      </div>
      {quickActions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {quickActions.map((action, i) => {
            const variant = action.variant === "primary" ? "primary" : "outline";
            if (action.href != null) {
              return (
                <a
                  key={i}
                  href={action.href}
                  className={cn(buttonVariants({ variant, size: "sm" }))}
                >
                  {action.label}
                </a>
              );
            }
            return (
              <Button
                key={i}
                variant={variant}
                size="sm"
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
