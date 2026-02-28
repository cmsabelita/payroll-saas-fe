import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { SortIndicatorProps } from "./SortIndicator.types";

const sortIndicatorVariants = cva("inline-flex shrink-0 text-muted-foreground", {
  variants: {
    state: {
      asc: "",
      desc: "",
      none: "",
    },
  },
  defaultVariants: {
    state: "none",
  },
});

/** Chevron up: asc */
const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

/** Chevron down: desc */
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export function SortIndicator({
  state = "none",
  className,
  ...rest
}: SortIndicatorProps) {
  return (
    <span
      role="img"
      aria-label={
        state === "asc" ? "Sorted ascending" : state === "desc" ? "Sorted descending" : "Sort"
      }
      className={cn(sortIndicatorVariants({ state }), className)}
      {...rest}
    >
      {state === "asc" && <ChevronUp />}
      {state === "desc" && <ChevronDown />}
      {state === "none" && (
        <span className="inline-flex flex-col -space-y-1.5">
          <ChevronUp />
          <ChevronDown />
        </span>
      )}
    </span>
  );
}
