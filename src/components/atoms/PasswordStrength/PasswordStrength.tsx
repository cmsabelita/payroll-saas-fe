import { cn } from "@/utils";
import type { PasswordStrengthProps } from "./PasswordStrength.types";

const SEGMENT_COUNT = 4;

export function PasswordStrength({
  level = 0,
  label,
  className,
  ...rest
}: PasswordStrengthProps) {
  return (
    <div
      className={cn("flex flex-col gap-1.5", className)}
      role="meter"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={SEGMENT_COUNT}
      aria-label={label ?? "Password strength"}
      {...rest}
    >
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: SEGMENT_COUNT }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              i < level
                ? "bg-primary"
                : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
      {label && (
        <span className="text-xs text-muted-foreground">{label}</span>
      )}
    </div>
  );
}
