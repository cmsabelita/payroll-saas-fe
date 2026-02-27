import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { StepperConnectorProps } from "./StepperConnector.types";

const stepperConnectorVariants = cva(
  "inline-block h-0.5 w-6 shrink-0 self-center transition-colors",
  {
    variants: {
      done: {
        true: "bg-primary",
        false: "bg-border",
      },
    },
    defaultVariants: {
      done: false,
    },
  }
);

export { stepperConnectorVariants };

export function StepperConnector({
  done = false,
  className,
  ...rest
}: StepperConnectorProps) {
  return (
    <span
      className={cn(stepperConnectorVariants({ done }), className)}
      aria-hidden
      {...rest}
    />
  );
}
