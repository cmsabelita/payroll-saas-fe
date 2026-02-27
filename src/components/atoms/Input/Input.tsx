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
      hasLeftAdornment: {
        true: "rounded-l-none border-l-0 pl-2",
        false: "",
      },
      hasRightAdornment: {
        true: "rounded-r-none border-r-0 pr-2",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
      hasLeftAdornment: false,
      hasRightAdornment: false,
    },
  }
);

const wrapperVariants = cva(
  "inline-flex w-full items-center overflow-hidden rounded-md border bg-input focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
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

export function Input({
  size = "md",
  error = false,
  leftAdornment,
  rightAdornment,
  className,
  ...rest
}: InputProps) {
  const hasLeft = Boolean(leftAdornment);
  const hasRight = Boolean(rightAdornment);

  if (!hasLeft && !hasRight) {
    return (
      <input
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
        <div className="flex shrink-0 items-center justify-center pl-3 text-muted-foreground [&_button]:-my-1 [&_svg]:size-4">
          {leftAdornment}
        </div>
      )}
      <input
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
        <div className="flex shrink-0 items-center justify-center pr-1 text-muted-foreground [&_button]:-my-1 [&_svg]:size-4">
          {rightAdornment}
        </div>
      )}
    </div>
  );
}
