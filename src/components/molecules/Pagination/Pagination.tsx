import { Box, PaginationButton, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PaginationProps } from "./Pagination.types";

export function Pagination({
  start,
  end,
  total,
  page,
  totalPages,
  onPrev,
  onNext,
  onPage,
  hasPrev = true,
  hasNext = true,
  className,
}: PaginationProps) {
  const pageNumbers: (number | "ellipsis")[] =
    totalPages <= 7
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : [
          1,
          page > 2 && "ellipsis",
          page > 1 && page - 1,
          page,
          page < totalPages && page + 1,
          page < totalPages - 1 && "ellipsis",
          totalPages,
        ].filter((x): x is number | "ellipsis" => x !== false && x !== undefined);

  return (
    <Box
      className={cn(
        "flex flex-wrap items-center justify-between gap-2",
        className
      )}
      role="navigation"
      aria-label="Pagination"
    >
      <Text variant="caption" as="span">
        Showing {start}–{end} of {total}
      </Text>
      <Box className="flex items-center gap-1">
        <PaginationButton
          variant="prev"
          onClick={onPrev}
          disabled={!hasPrev}
        />
        {pageNumbers.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationButton key={`ellipsis-${i}`} variant="ellipsis" />
          ) : (
            <PaginationButton
              key={p}
              variant="page"
              page={p}
              active={p === page}
              onClick={onPage != null ? () => onPage(p) : undefined}
            />
          )
        )}
        <PaginationButton
          variant="next"
          onClick={onNext}
          disabled={!hasNext}
        />
      </Box>
    </Box>
  );
}
