"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { SwitchProps } from "./Switch.types";

const trackVariants = cva(
  "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 [&:focus-visible]:outline-none",
  {
    variants: {
      checked: {
        true: "bg-primary justify-end border-2 border-primary",
        false:
          "justify-start border-2 border-border bg-muted hover:bg-muted/80",
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
);

const thumbVariants = cva(
  "pointer-events-none block size-5 rounded-full bg-primary-foreground shadow-md transition-transform duration-200 ease-in-out",
  {
    variants: {},
    defaultVariants: {},
  }
);

export { trackVariants as switchVariants, thumbVariants };

export function Switch({
  checked = false,
  onCheckedChange,
  className,
  "aria-label": ariaLabel,
  disabled,
  ...rest
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      className={cn(trackVariants({ checked }), className)}
      onClick={() => onCheckedChange?.(!checked)}
      {...rest}
    >
      <span className={thumbVariants()} />
    </button>
  );
}
