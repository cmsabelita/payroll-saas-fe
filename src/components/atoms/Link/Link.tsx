import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { LinkProps } from "./Link.types";

const linkVariants = cva(
  "underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
  {
    variants: {
      variant: {
        default:
          "text-foreground hover:text-foreground/80 active:text-foreground/70",
        muted:
          "text-muted-foreground hover:text-foreground active:text-foreground/80",
        primary:
          "text-primary hover:text-primary/90 active:text-primary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { linkVariants };

export function Link({
  variant = "default",
  className,
  children,
  ...rest
}: LinkProps) {
  return (
    <a
      className={cn(linkVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </a>
  );
}
