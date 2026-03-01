"use client";

import { Button, FaIcon, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { OrganizationPositionsSectionProps } from "./OrganizationPositionsSection.types";

export function OrganizationPositionsSection({
  rows,
  onAdd,
  onView,
  className,
}: OrganizationPositionsSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex justify-end">
        {onAdd && (
          <Button onClick={onAdd} className="gap-2">
            <FaIcon icon={faPlus} size="sm" aria-hidden />
            Add Position
          </Button>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Title</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Department</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Head count</th>
                {onView && <th className="w-24 px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <Text variant="body" as="span" className="font-medium text-foreground">{r.title}</Text>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{r.department}</td>
                  <td className="px-4 py-3 text-center text-sm text-foreground">{r.headCount}</td>
                  {onView && (
                    <td className="px-4 py-3 text-right">
                      <button type="button" className="text-sm font-medium text-primary hover:underline" onClick={() => onView(r.id)}>View</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
