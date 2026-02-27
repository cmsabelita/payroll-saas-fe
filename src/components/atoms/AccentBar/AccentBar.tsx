import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { AccentBarProps } from "./AccentBar.types";

const accentBarVariants = cva("h-1 w-full shrink-0", {
  variants: {
    gradient: {
      true: "bg-gradient-to-r from-primary to-accent",
      false: "bg-primary",
    },
  },
  defaultVariants: {
    gradient: true,
  },
});

export { accentBarVariants };

export function AccentBar({
  gradient = true,
  className,
  ...rest
}: AccentBarProps) {
  return (
    <div
      className={cn(accentBarVariants({ gradient }), className)}
      role="presentation"
      {...rest}
    />
  );
}
