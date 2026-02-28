import { Badge, Box, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PendingApprovalRowProps } from "./PendingApprovalRow.types";

export function PendingApprovalRow({
  avatar,
  primaryText,
  secondaryText,
  badge,
  onClick,
  className,
}: PendingApprovalRowProps) {
  const content = (
    <>
      <Box className="shrink-0">{avatar}</Box>
      <Box className="min-w-0 flex-1">
        <Text variant="label" as="p" className="truncate">
          {primaryText}
        </Text>
        {secondaryText != null && (
          <Text variant="caption" as="p" className="truncate">
            {secondaryText}
          </Text>
        )}
      </Box>
      {badge != null && (
        <Box className="shrink-0">
          {typeof badge === "string" || typeof badge === "number" ? (
            <Badge variant="secondary">{badge}</Badge>
          ) : (
            badge
          )}
        </Box>
      )}
    </>
  );

  const sharedClass = cn(
    "flex items-center gap-3 w-full rounded-md p-2 text-left transition-colors",
    onClick && "cursor-pointer hover:bg-muted/50"
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(sharedClass, className)}
      >
        {content}
      </button>
    );
  }

  return (
    <Box className={cn(sharedClass, className)}>
      {content}
    </Box>
  );
}
