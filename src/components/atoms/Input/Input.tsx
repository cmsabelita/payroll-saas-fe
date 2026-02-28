import { cva } from "class-variance-authority";
import { forwardRef } from "react";
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
      hasLeftAdornment: {
        true: "rounded-l-none border-0 border-l-0 pl-3 bg-transparent",
        false: "",
      },
      hasRightAdornment: {
        true: "rounded-r-none border-0 border-r-0 pr-3 bg-transparent",
        false: "",
      },
    },
    compoundVariants: [
      {
        hasLeftAdornment: true,
        hasRightAdornment: false,
        class:
          "focus-visible:ring-0 focus-visible:ring-offset-0",
      },
      {
        hasLeftAdornment: false,
        hasRightAdornment: true,
        class:
          "focus-visible:ring-0 focus-visible:ring-offset-0",
      },
      {
        hasLeftAdornment: true,
        hasRightAdornment: true,
        class:
          "focus-visible:ring-0 focus-visible:ring-offset-0",
      },
    ],
    defaultVariants: {
      size: "md",
      error: false,
      hasLeftAdornment: false,
      hasRightAdornment: false,
    },
  }
);

const wrapperVariants = cva(
  "inline-flex w-full items-center overflow-visible rounded-md border bg-input focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-11",
      },
      error: {
        true: "border-destructive focus-within:ring-destructive",
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

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = "md",
    error = false,
    leftAdornment,
    rightAdornment,
    className,
    ...rest
  },
  ref
) {
  const hasLeft = Boolean(leftAdornment);
  const hasRight = Boolean(rightAdornment);

  if (!hasLeft && !hasRight) {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, error }), className)}
        {...rest}
      />
    );
  }

  return (
    <div
      className={cn(
        wrapperVariants({ size, error }),
        rest.disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      data-input-wrapper
    >
      {leftAdornment && (
        <div className="relative z-10 flex min-w-[2.5rem] shrink-0 items-center justify-center overflow-visible pl-5 text-muted-foreground [&_button]:-my-1 [&_svg]:size-4">
          {leftAdornment}
        </div>
      )}
      <input
        ref={ref}
        className={cn(
          inputVariants({
            size,
            error,
            hasLeftAdornment: hasLeft,
            hasRightAdornment: hasRight,
          })
        )}
        {...rest}
      />
      {rightAdornment && (
        <div className="relative z-10 flex min-w-[2.5rem] shrink-0 items-center justify-center overflow-visible pr-3 text-muted-foreground [&_button]:-my-1 [&_svg]:size-4">
          {rightAdornment}
        </div>
      )}
    </div>
  );
});
