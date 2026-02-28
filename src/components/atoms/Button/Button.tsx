import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/utils";
import type { ButtonProps } from "./Button.types";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
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
        sm: "h-8 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export { buttonVariants };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...rest },
    ref
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
