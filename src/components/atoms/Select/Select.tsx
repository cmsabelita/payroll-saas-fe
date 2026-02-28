import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/utils";
import { FaIcon } from "../FaIcon";
import type { SelectProps } from "./Select.types";

const selectVariants = cva(
  "w-full rounded-md border border-border bg-input text-input-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export { selectVariants };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = "md", options, placeholder, className, ...rest },
  ref
) {
  return (
    <div className="relative inline-block w-full">
      <select
        ref={ref}
        className={cn(selectVariants({ size }), "pr-10", className)}
        {...rest}
      >
        {placeholder != null && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            disabled={opt.disabled}
          >
            {opt.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <FaIcon icon={faChevronDown} size="sm" aria-hidden />
      </span>
    </div>
  );
});
