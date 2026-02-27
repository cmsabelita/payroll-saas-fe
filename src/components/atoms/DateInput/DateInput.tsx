import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { DateInputProps } from "./DateInput.types";

const dateInputVariants = cva(
  "w-full rounded-md border bg-input text-input-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 h-10 px-3 text-sm [color-scheme:inherit]",
  {
    variants: {
      error: {
        true: "border-destructive focus-visible:ring-destructive",
        false: "border-border",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export { dateInputVariants };

export function DateInput({
  value,
  onChange,
  min,
  max,
  error = false,
  className,
  id,
  "aria-describedby": ariaDescribedby,
  ...rest
}: DateInputProps) {
  return (
    <input
      type="date"
      id={id}
      value={value ?? ""}
      onChange={(e) => onChange?.(e.target.value)}
      min={min}
      max={max}
      className={cn(dateInputVariants({ error }), className)}
      aria-invalid={error}
      aria-describedby={ariaDescribedby}
      {...rest}
    />
  );
}
