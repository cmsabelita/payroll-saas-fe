import { Badge, Box, Divider, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollStatusRowProps } from "./PayrollStatusRow.types";

const PAYROLL_STATUS_VARIANT: Record<
  string,
  "success" | "warning" | "secondary" | "destructive"
> = {
  Draft: "warning",
  Pending: "warning",
  Approved: "success",
  Paid: "success",
  Completed: "success",
  Rejected: "destructive",
};

function getStatusVariant(status: string): "success" | "warning" | "secondary" | "destructive" {
  return PAYROLL_STATUS_VARIANT[status] ?? "secondary";
}

export function PayrollStatusRow({
  title,
  subtitle,
  status,
  showDivider = false,
  className,
}: PayrollStatusRowProps) {
  return (
    <Box className={cn("flex flex-col", className)}>
      <Box className="flex items-start justify-between gap-2">
        <Box className="min-w-0 flex-1">
          <Text variant="label" as="p">
            {title}
          </Text>
          {subtitle != null && (
            <Text variant="caption" as="p">
              {subtitle}
            </Text>
          )}
        </Box>
        <Box className="shrink-0">
          {typeof status === "string" ? (
            <Badge variant={getStatusVariant(status)}>{status}</Badge>
          ) : (
            status
          )}
        </Box>
      </Box>
      {showDivider && <Divider orientation="horizontal" className="mt-2" />}
    </Box>
  );
}
