import { Box, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { ProfileHeaderProps } from "./ProfileHeader.types";

export function ProfileHeader({
  avatar,
  name,
  badges,
  subtitle,
  metaRow,
  actions,
  className,
}: ProfileHeaderProps) {
  return (
    <Box
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between",
        className
      )}
    >
      <Box className="flex min-w-0 flex-1 gap-3">
        <Box className="shrink-0">{avatar}</Box>
        <Box className="min-w-0 flex-1">
          <Text variant="heading" as="h1">
            {name}
          </Text>
          {badges != null && (
            <Box className="mt-1 flex flex-wrap gap-1.5">{badges}</Box>
          )}
          {subtitle != null && (
            <Text variant="caption" as="p" className="mt-0.5">
              {subtitle}
            </Text>
          )}
          {metaRow != null && (
            <Box className="mt-1 flex items-center gap-1.5 text-muted-foreground">
              {metaRow}
            </Box>
          )}
        </Box>
      </Box>
      {actions != null && (
        <Box className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </Box>
      )}
    </Box>
  );
}
