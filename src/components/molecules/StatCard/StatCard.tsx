import { Surface, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { StatCardProps } from "./StatCard.types";

export function StatCard({
  label,
  value,
  sublabel,
  className,
}: StatCardProps) {
  return (
    <Surface
      elevation="none"
      className={cn("flex flex-col gap-0.5 p-4", className)}
    >
      <Text variant="caption">{label}</Text>
      <Text variant="heading" as="p">
        {value}
      </Text>
      {sublabel && (
        <Text variant="caption" as="p">
          {sublabel}
        </Text>
      )}
    </Surface>
  );
}
