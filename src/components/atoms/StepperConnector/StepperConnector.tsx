import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { StepperConnectorProps } from "./StepperConnector.types";

const stepperConnectorVariants = cva(
  "block h-0.5 min-w-0 self-center transition-colors mx-0 px-0",
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
