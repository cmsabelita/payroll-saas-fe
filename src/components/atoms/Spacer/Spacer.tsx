import { cn } from "@/utils";
import type { SpacerProps } from "./Spacer.types";

const sizeMap: Record<
  NonNullable<SpacerProps["direction"]>,
  Record<NonNullable<SpacerProps["size"]>, string>
> = {
  horizontal: {
    1: "w-1",
    2: "w-2",
    3: "w-3",
    4: "w-4",
    5: "w-5",
    6: "w-6",
    8: "w-8",
  },
  vertical: {
    1: "h-1",
    2: "h-2",
    3: "h-3",
    4: "h-4",
    5: "h-5",
    6: "h-6",
    8: "h-8",
  },
};

export function Spacer({
  direction = "vertical",
  size = 4,
  className,
  ...rest
}: SpacerProps) {
  const sizeClass =
    direction === "horizontal"
      ? sizeMap.horizontal[size]
      : sizeMap.vertical[size];
  return (
    <div
      aria-hidden
      className={cn("shrink-0", sizeClass, className)}
      {...rest}
    />
  );
}
