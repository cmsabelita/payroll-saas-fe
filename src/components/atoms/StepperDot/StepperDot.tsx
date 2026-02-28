import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import { FaIcon } from "../FaIcon";
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
            <FaIcon icon={faCheck} size="sm" />
          </span>
        ) : (
          step ?? ""
        )}
      </span>
      {label ? (
        <span className="text-xs text-muted-foreground text-center max-w-[4rem]">
          {label}
        </span>
      ) : null}
    </span>
  );
}
