import { Box, StepperConnector, StepperDot } from "@/components/atoms";
import { cn } from "@/utils";
import type { StatusStepperProps, StatusStepperStep } from "./StatusStepper.types";

function getProgressValue(steps: StatusStepperStep[]): number {
  const activeIndex = steps.findIndex((s) => s.state === "active");
  if (activeIndex >= 0) return activeIndex + 1;
  const allDone = steps.length > 0 && steps.every((s) => s.state === "done");
  return allDone ? steps.length : 1;
}

export function StatusStepper({ steps, className }: StatusStepperProps) {
  const valueNow = getProgressValue(steps);

  return (
    <Box
      className={cn("flex w-full items-start", className)}
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-label="Progress through steps"
    >
      {steps.flatMap((step, i) => [
        <StepperDot
          key={step.key}
          state={step.state ?? "pending"}
          step={i + 1}
          label={step.label}
          className="shrink-0"
        />,
        ...(i < steps.length - 1
          ? [
              <StepperConnector
                key={`${step.key}-connector`}
                done={step.state === "done"}
                className="mt-4 min-w-4 flex-1 mx-0 px-0 self-start"
              />,
            ]
          : []),
      ])}
    </Box>
  );
}
