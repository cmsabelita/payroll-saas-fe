"use client";

import { Badge, Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PayrollPayslipsListProps } from "./PayrollPayslipsList.types";

export function PayrollPayslipsList({
  items,
  totalCount,
  sentCount,
  onDownload,
  className,
}: PayrollPayslipsListProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <Text variant="body" as="h2" className="font-semibold text-foreground">
          Employees{" "}
          <Text variant="body" as="span" className="font-normal text-muted-foreground">
            ({totalCount})
          </Text>
        </Text>
        <Text variant="caption" as="span" className="text-muted-foreground">
          {sentCount} of {totalCount} sent
        </Text>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Employee
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Email
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </th>
            <th className="px-4 py-2.5" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-muted/30">
              <td className="px-4 py-3">
                <Text variant="body" as="p" className="font-medium text-foreground">
                  {item.name}
                </Text>
                <Text variant="caption" as="p" className="text-muted-foreground">
                  {item.employeeId}
                </Text>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{item.email}</td>
              <td className="px-4 py-3">
                <Badge variant={item.sent ? "success" : "secondary"}>
                  {item.sent ? "Sent" : "Pending"}
                </Badge>
              </td>
              <td className="px-4 py-3">
                {onDownload != null && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onDownload(item.id)}
                  >
                    Download PDF
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
