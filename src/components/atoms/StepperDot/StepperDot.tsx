import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { StepperDotProps } from "./StepperDot.types";

const stepperDotVariants = cva(
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
  {
    variants: {
      state: {
        active:
          "border-primary bg-primary text-primary-foreground",
        done: "border-primary bg-primary text-primary-foreground",
        pending:
          "border-border bg-background text-muted-foreground",
      },
    },
    defaultVariants: {
      state: "pending",
    },
  }
);

const CheckSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export { stepperDotVariants };

export function StepperDot({
  state = "pending",
  step,
  label,
  className,
  ...rest
}: StepperDotProps) {
  const showCheck = state === "done";
  return (
    <span className={cn("inline-flex flex-col items-center gap-1", className)} {...rest}>
      <span
        className={cn(stepperDotVariants({ state }))}
        aria-current={state === "active" ? "step" : undefined}
      >
        {showCheck ? (
          <span className="size-4">
            <CheckSvg />
          </span>
        ) : (
          step ?? ""
        )}
      </span>
      {label && (
        <span className="text-xs text-muted-foreground text-center max-w-[4rem]">
          {label}
        </span>
      )}
    </span>
  );
}
