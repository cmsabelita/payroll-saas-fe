import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { CheckboxProps } from "./Checkbox.types";

const checkboxVariants = cva(
  "size-4 rounded border border-border bg-input text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:border-primary checked:text-primary-foreground [&:indeterminate]:bg-primary [&:indeterminate]:border-primary [&:indeterminate]:text-primary-foreground",
  {
    variants: {},
    defaultVariants: {},
  }
);

export { checkboxVariants };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className, ...rest }, ref) {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(checkboxVariants(), "cursor-pointer", className)}
        {...rest}
      />
    );
  }
);
