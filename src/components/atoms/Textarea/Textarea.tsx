import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { TextareaProps } from "./Textarea.types";

const textareaVariants = cva(
  "w-full rounded-md border bg-input text-input-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 py-3 px-3 text-sm min-h-[80px]",
  {
    variants: {
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
      error: {
        true: "border-destructive focus-visible:ring-destructive",
        false: "border-border",
      },
    },
    defaultVariants: {
      resize: "vertical",
      error: false,
    },
  }
);

export { textareaVariants };

export function Textarea({
  error = false,
  resize = "vertical",
  minRows,
  maxRows,
  rows = 3,
  className,
  style,
  ...rest
}: TextareaProps) {
  const resolvedRows =
    minRows !== undefined && maxRows !== undefined
      ? Math.min(Math.max(rows, minRows), maxRows)
      : minRows !== undefined
        ? Math.max(rows, minRows)
        : maxRows !== undefined
          ? Math.min(rows, maxRows)
          : rows;

  return (
    <textarea
      className={cn(textareaVariants({ resize, error }), className)}
      rows={resolvedRows}
      style={style}
      {...rest}
    />
  );
}
