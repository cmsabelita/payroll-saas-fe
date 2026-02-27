import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { IconProps } from "./Icon.types";

const iconVariants = cva("inline-flex shrink-0 select-none", {
  variants: {
    size: {
      xs: "size-3.5",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export { iconVariants };

export function Icon({
  size = "md",
  className,
  children,
  "aria-hidden": ariaHidden = true,
  ...rest
}: IconProps) {
  return (
    <span
      className={cn(iconVariants({ size }), className)}
      aria-hidden={ariaHidden}
      {...rest}
    >
      {children}
    </span>
  );
}
