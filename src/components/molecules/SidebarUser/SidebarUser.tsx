import { Box, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { SidebarUserProps } from "./SidebarUser.types";

export function SidebarUser({
  avatar,
  name,
  role,
  action,
  className,
}: SidebarUserProps) {
  return (
    <Box
      className={cn(
        "flex items-center gap-3 rounded-md p-2 min-w-0",
        className
      )}
    >
      <Box className="shrink-0">{avatar}</Box>
      <Box className="min-w-0 flex-1">
        <Text variant="label" as="p" className="truncate">
          {name}
        </Text>
        {role != null && (
          <Text variant="caption" as="p" className="truncate">
            {role}
          </Text>
        )}
      </Box>
      {action != null && <Box className="shrink-0">{action}</Box>}
    </Box>
  );
}
