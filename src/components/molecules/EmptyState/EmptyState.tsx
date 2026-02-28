import { Box, Icon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({
  icon,
  heading,
  description,
  className,
}: EmptyStateProps) {
  return (
    <Box
      className={cn(
        "flex flex-col items-center justify-center gap-3 text-center",
        className
      )}
    >
      <Box
        className="flex size-12 items-center justify-center rounded-full bg-muted"
        aria-hidden
      >
        <Icon size="lg">{icon}</Icon>
      </Box>
      <Text as="h2" variant="heading">
        {heading}
      </Text>
      {description && (
        <Text variant="caption" as="p">
          {description}
        </Text>
      )}
    </Box>
  );
}
