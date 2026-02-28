import { Box, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { EmployeeRowCellProps } from "./EmployeeRowCell.types";

export function EmployeeRowCell({
  avatar,
  primaryLine,
  secondaryLine,
  className,
}: EmployeeRowCellProps) {
  return (
    <Box className={cn("flex items-center gap-3 min-w-0", className)}>
      <Box className="shrink-0">{avatar}</Box>
      <Box className="min-w-0 flex-1">
        <Text variant="label" as="p" className="truncate">
          {primaryLine}
        </Text>
        {secondaryLine != null && (
          <Text variant="caption" as="p" className="truncate">
            {secondaryLine}
          </Text>
        )}
      </Box>
    </Box>
  );
}
