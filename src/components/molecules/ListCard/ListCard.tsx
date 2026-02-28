import { Badge, Box, Button, Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { ListCardProps } from "./ListCard.types";

export function ListCard({
  title,
  badge,
  children,
  viewAllLabel,
  onClickViewAll,
  className,
}: ListCardProps) {
  return (
    <Surface
      elevation="none"
      className={cn("flex flex-col overflow-hidden", className)}
    >
      <Box className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <Text variant="label" as="h3">
          {title}
        </Text>
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
      <Box className="min-h-0 flex-1">{children}</Box>
      {viewAllLabel != null && (
        <Box className="border-t border-border p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClickViewAll}
            className="w-full"
          >
            {viewAllLabel}
          </Button>
        </Box>
      )}
    </Surface>
  );
}
