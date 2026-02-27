import { cn } from "@/utils";
import type { LabelProps } from "./Label.types";

export function Label({
  required,
  className,
  children,
  ...rest
}: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium text-foreground leading-none peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {children}
      {required && <span className="text-destructive ml-0.5" aria-hidden>*</span>}
    </label>
  );
}
