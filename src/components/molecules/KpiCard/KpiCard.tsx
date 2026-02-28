import { Badge, Box, Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { KpiCardProps } from "./KpiCard.types";

export function KpiCard({
  icon,
  badge,
  value,
  label,
  className,
}: KpiCardProps) {
  return (
    <Surface
      elevation="none"
      className={cn("flex flex-col gap-1 p-4", className)}
    >
      <Box className="flex items-center justify-between gap-2">
        {icon && (
          <Box className="flex shrink-0 items-center justify-center text-muted-foreground">
            {icon}
          </Box>
        )}
        {badge != null && (
          <Box className="shrink-0">
            {typeof badge === "string" || typeof badge === "number" ? (
              <Badge variant="secondary">{badge}</Badge>
            ) : (
              badge
            )}
          </Box>
        )}
      </Box>
      <Text variant="heading" as="p">
        {value}
      </Text>
      <Text variant="caption">{label}</Text>
    </Surface>
  );
}
