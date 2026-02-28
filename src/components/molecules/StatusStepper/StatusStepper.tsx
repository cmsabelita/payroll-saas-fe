import { Box, StepperConnector, StepperDot } from "@/components/atoms";
import { cn } from "@/utils";
import type { StatusStepperProps } from "./StatusStepper.types";

export function StatusStepper({ steps, className }: StatusStepperProps) {
  return (
    <Box
      className={cn("flex items-start", className)}
      role="progressbar"
      aria-valuenow={steps.findIndex((s) => s.state === "active") + 1}
      aria-valuemin={1}
      aria-valuemax={steps.length}
    >
      {steps.map((step, i) => (
        <Box key={step.key} className="flex items-start">
          <StepperDot
            state={step.state ?? "pending"}
            step={i + 1}
            label={step.label}
          />
          {i < steps.length - 1 && (
            <StepperConnector done={step.state === "done"} />
          )}
        </Box>
      ))}
    </Box>
  );
}
