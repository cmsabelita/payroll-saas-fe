import { Box, Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { AlertBannerProps } from "./AlertBanner.types";

const variantRootClass: Record<AlertBannerProps["variant"], string> = {
  error: "bg-destructive/10 border border-destructive/30",
  warning: "bg-warning/10 border border-warning/30",
  info: "bg-primary/10 border border-primary/30",
  success: "bg-success/10 border border-success/30",
};

export function AlertBanner({
  variant,
  title,
  description,
  icon,
  className,
}: AlertBannerProps) {
  return (
    <Surface
      elevation="none"
      className={cn(
        "flex gap-3 rounded-lg p-3",
        variantRootClass[variant],
        className
      )}
      role="alert"
    >
      {icon != null && (
        <Box
          className="flex shrink-0 items-center justify-center rounded-md bg-foreground/10 p-1.5"
          aria-hidden
        >
          {icon}
        </Box>
      )}
      <Box className="min-w-0 flex-1 space-y-0.5">
        <Text variant="label" as="p">
          {title}
        </Text>
        {description && (
          <Text variant="caption" as="p">
            {description}
          </Text>
        )}
      </Box>
    </Surface>
  );
}
