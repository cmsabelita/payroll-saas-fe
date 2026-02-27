import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { IconButtonProps } from "./IconButton.types";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:brightness-110 active:brightness-95",
        secondary:
          "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        ghost:
          "bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-110 active:brightness-95",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export { iconButtonVariants };

export function IconButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
