"use client";

import { Badge, Box, Button, Link, Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PortalRequestsListProps } from "./PortalRequestsList.types";

export function PortalRequestsList({
  title = "My Requests",
  actions = [],
  items,
  viewAllHref,
  className,
}: PortalRequestsListProps) {
  return (
    <Surface
      elevation="none"
      className={cn("rounded-xl border border-border p-5", className)}
      role="region"
      aria-label="Pending requests"
    >
      <div className="mb-4 flex items-center justify-between">
        <Text variant="label" as="h3" className="font-semibold">
          {title}
        </Text>
        {actions.length > 0 && (
          <div className="flex gap-1.5">
            {actions.map((action, i) =>
              action.href != null ? (
                <a
                  key={i}
                  href={action.href}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-xs font-medium",
                    action.variant === "primary"
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-border bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {action.label}
                </a>
              ) : (
                <Button
                  key={i}
                  variant={action.variant === "primary" ? "primary" : "outline"}
                  size="sm"
                  className="rounded-lg px-2.5 py-1 text-xs"
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              )
            )}
          </div>
        )}
      </div>

      <div className="space-y-2.5">
        {items.map((item, i) => {
          const content = (
            <>
              {item.icon != null && (
                <Box className="mt-0.5 shrink-0 [&_svg]:size-4 text-primary">
                  {item.icon}
                </Box>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <Text variant="caption" as="p" className="font-semibold text-foreground">
                    {item.title}
                  </Text>
                  <Badge variant={item.statusVariant ?? "secondary"}>{item.status}</Badge>
                </div>
                {item.detail != null && (
                  <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                    {item.detail}
                  </Text>
                )}
              </div>
            </>
          );
          const wrapperClass = "flex items-start gap-3 rounded-xl border border-border p-3";
          if (item.href != null) {
            return (
              <Link key={i} href={item.href} className={cn(wrapperClass, "block hover:bg-muted/30")}>
                {content}
              </Link>
            );
          }
          return (
            <div key={i} className={wrapperClass}>
              {content}
            </div>
          );
        })}
      </div>

      {viewAllHref != null && (
        <Link
          href={viewAllHref}
          variant="muted"
          className="mt-3 block rounded-lg border border-border py-2 text-center text-xs font-medium hover:bg-muted/50"
        >
          View all requests →
        </Link>
      )}
    </Surface>
  );
}
