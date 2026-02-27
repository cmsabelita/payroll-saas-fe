import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { InputProps } from "./Input.types";

const inputVariants = cva(
  "w-full rounded-md border bg-input text-input-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
      error: {
        true: "border-destructive focus-visible:ring-destructive",
        false: "border-border",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

export { inputVariants };

export function Input({
  size = "md",
  error = false,
  className,
  ...rest
}: InputProps) {
  return (
    <input
      className={cn(inputVariants({ size, error }), className)}
      {...rest}
    />
  );
}
