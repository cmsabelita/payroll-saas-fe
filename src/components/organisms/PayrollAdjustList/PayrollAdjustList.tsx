"use client";

import { Badge, Button, FaIcon, IconButton, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { PayrollAdjustListProps } from "./PayrollAdjustList.types";

function formatAmount(amount: number): string {
  const formatted = `₱ ${Math.abs(amount).toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
  return amount >= 0 ? `+${formatted}` : `–${formatted}`;
}

export function PayrollAdjustList({
  items,
  netEffect,
  onAddAdjustment,
  onEdit,
  onRemove,
  className,
}: PayrollAdjustListProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <Text variant="body" as="h2" className="font-semibold text-foreground">
          Existing Adjustments{" "}
          <Text variant="body" as="span" className="font-normal text-muted-foreground">
            ({items.length})
          </Text>
        </Text>
        <div className="flex items-center gap-2">
          <Text variant="caption" as="span" className="text-muted-foreground">
            Net effect:{" "}
            <Text variant="caption" as="span" className={netEffect >= 0 ? "font-medium text-primary" : "font-medium text-destructive"}>
              {formatAmount(netEffect)}
            </Text>
          </Text>
          {onAddAdjustment != null && (
            <Button variant="primary" size="sm" onClick={onAddAdjustment}>
              <FaIcon icon={faPlus} size="sm" aria-hidden />
              Add Adjustment
            </Button>
          )}
        </div>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Employee
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Type
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Description
            </th>
            <th className="px-4 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Amount
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Added By
            </th>
            <th className="px-4 py-2.5 w-24" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {items.map((row) => (
            <tr key={row.id} className="hover:bg-muted/30">
              <td className="px-4 py-3">
                <Text variant="body" as="p" className="font-medium text-foreground">
                  {row.employeeName}
                </Text>
                <Text variant="caption" as="p" className="text-muted-foreground">
                  {row.employeeId}
                </Text>
              </td>
              <td className="px-4 py-3">
                <Badge variant={row.type === "earnings" ? "success" : "destructive"}>
                  {row.type === "earnings" ? "Earnings" : "Deduction"}
                </Badge>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.description}</td>
              <td className="px-4 py-3 text-right font-medium">
                <span className={row.amount >= 0 ? "text-primary" : "text-destructive"}>
                  {formatAmount(row.amount)}
                </span>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.addedBy}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {onEdit != null && (
                    <IconButton
                      variant="ghost"
                      size="sm"
                      aria-label="Edit"
                      onClick={() => onEdit(row.id)}
                    >
                      <FaIcon icon={faPen} size="sm" />
                    </IconButton>
                  )}
                  {onRemove != null && (
                    <IconButton
                      variant="ghost"
                      size="sm"
                      aria-label="Remove"
                      className="text-destructive hover:text-destructive"
                      onClick={() => onRemove(row.id)}
                    >
                      <FaIcon icon={faTrash} size="sm" />
                    </IconButton>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
