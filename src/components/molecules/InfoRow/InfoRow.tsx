import { Label, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { InfoRowProps } from "./InfoRow.types";

export function InfoRow({
  label,
  value,
  labelClassName,
  className,
}: InfoRowProps) {
  return (
    <div
      className={cn("flex gap-2 items-baseline", className)}
      role="listitem"
    >
      <Label
        className={cn("shrink-0 text-muted-foreground font-normal", labelClassName)}
      >
        {label}
      </Label>
      {typeof value === "string" || typeof value === "number" ? (
        <Text variant="body" as="span" className="min-w-0">
          {value}
        </Text>
      ) : (
        value
      )}
    </div>
  );
}
