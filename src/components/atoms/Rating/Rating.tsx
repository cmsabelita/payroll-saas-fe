import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { RatingProps } from "./Rating.types";

const starSizeVariants = cva("", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export { starSizeVariants };

function Star({
  filled,
  half,
  size,
  className,
}: {
  filled: boolean;
  half?: boolean;
  size: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass = starSizeVariants({ size });
  return (
    <span
      className={cn("inline-block text-warning", sizeClass, className)}
      aria-hidden
    >
      {half ? (
        <span className="relative inline-block">
          <span className="text-muted">★</span>
          <span
            className="absolute left-0 top-0 overflow-hidden text-warning"
            style={{ width: "50%" }}
          >
            ★
          </span>
        </span>
      ) : (
        <span className={filled ? "text-warning" : "text-muted"}>★</span>
      )}
    </span>
  );
}

export function Rating({
  value,
  max = 5,
  size = "md",
  className,
  ...rest
}: RatingProps) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    if (value >= i) {
      stars.push(<Star key={i} filled size={size} />);
    } else if (value >= i - 0.5) {
      stars.push(<Star key={i} filled half size={size} />);
    } else {
      stars.push(<Star key={i} filled={false} size={size} />);
    }
  }

  return (
    <span
      role="img"
      aria-label={`Rating: ${value} out of ${max}`}
      className={cn("inline-flex items-center gap-0.5", className)}
      {...rest}
    >
      {stars}
    </span>
  );
}
