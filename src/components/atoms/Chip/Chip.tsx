import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { ChipProps } from "./Chip.types";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        success: "bg-success text-success-foreground hover:bg-success/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { chipVariants };

export function Chip({
  variant = "default",
  onRemove,
  className,
  children,
  ...rest
}: ChipProps) {
  const styles = cn(chipVariants({ variant }), className);

  if (onRemove != null) {
    return (
      <div className={cn("inline-flex items-center", styles)}>
        <button
          type="button"
          className="flex-1 min-w-0 text-left px-0 py-0 bg-transparent border-0 rounded-full cursor-inherit focus:outline-none focus:ring-0"
          {...rest}
        >
          {children}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
          className="ml-0.5 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring shrink-0"
          aria-label="Remove"
        >
          ×
        </button>
      </div>
    );
  }

  return (
    <button type="button" className={styles} {...rest}>
      {children}
    </button>
  );
}
