import { Button, Icon } from "@/components/atoms";
import { cn } from "@/utils";
import type { FilterChipProps } from "./FilterChip.types";

const FilterSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ChevronSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export function FilterChip({
  label,
  icon,
  onClick,
  showChevron = true,
  className,
}: FilterChipProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn("gap-1.5", className)}
    >
      {icon != null ? (
        <span className="[&_svg]:size-4">{icon}</span>
      ) : (
        <Icon size="sm">
          <FilterSvg />
        </Icon>
      )}
      <span>{label}</span>
      {showChevron && (
        <Icon size="xs">
          <ChevronSvg />
        </Icon>
      )}
    </Button>
  );
}
