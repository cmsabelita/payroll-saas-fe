import { cn } from "@/utils";
import type { DividerProps } from "./Divider.types";

export function Divider({
  orientation = "horizontal",
  label,
  className,
  ...rest
}: DividerProps) {
  if (label != null && orientation === "horizontal") {
    return (
      <div
        className={cn("flex items-center gap-3", className)}
        role="separator"
        aria-orientation="horizontal"
      >
        <hr className="flex-1 border-border" />
        <span className="text-sm text-muted-foreground">{label}</span>
        <hr className="flex-1 border-border" />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "border-border",
        orientation === "horizontal"
          ? "w-full border-t"
          : "h-full border-l border-t-0",
        className
      )}
      {...rest}
    />
  );
}
