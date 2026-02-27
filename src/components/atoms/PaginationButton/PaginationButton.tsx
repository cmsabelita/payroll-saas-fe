import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { PaginationButtonProps } from "./PaginationButton.types";

const paginationButtonVariants = cva(
  "inline-flex min-w-9 items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        page: "hover:bg-muted hover:text-foreground",
        prev: "hover:bg-muted hover:text-foreground",
        next: "hover:bg-muted hover:text-foreground",
        ellipsis: "cursor-default pointer-events-none text-muted-foreground",
      },
      active: {
        true: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        false: "bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export { paginationButtonVariants };

export function PaginationButton({
  variant,
  page,
  active = false,
  children,
  className,
  ...rest
}: PaginationButtonProps) {
  const content =
    variant === "prev" ? (
      <ChevronLeft />
    ) : variant === "next" ? (
      <ChevronRight />
    ) : variant === "ellipsis" ? (
      "…"
    ) : children !== undefined ? (
      children
    ) : (
      page
    );

  return (
    <button
      type="button"
      className={cn(
        paginationButtonVariants({
          variant,
          active: variant === "page" && active,
        }),
        className
      )}
      aria-label={
        variant === "prev"
          ? "Previous page"
          : variant === "next"
            ? "Next page"
            : variant === "page" && page !== undefined
              ? `Page ${page}`
              : undefined
      }
      aria-current={variant === "page" && active ? "page" : undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
