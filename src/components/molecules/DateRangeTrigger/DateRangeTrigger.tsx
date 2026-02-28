import { Button, Icon } from "@/components/atoms";
import { cn } from "@/utils";
import type { DateRangeTriggerProps } from "./DateRangeTrigger.types";

const CalendarSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
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

export function DateRangeTrigger({
  label,
  icon,
  onClick,
  className,
}: DateRangeTriggerProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="md"
      onClick={onClick}
      className={cn("gap-2", className)}
    >
      {icon != null ? (
        <span className="[&_svg]:size-4">{icon}</span>
      ) : (
        <Icon size="sm">
          <CalendarSvg />
        </Icon>
      )}
      <span>{label}</span>
      <Icon size="xs">
        <ChevronSvg />
      </Icon>
    </Button>
  );
}
