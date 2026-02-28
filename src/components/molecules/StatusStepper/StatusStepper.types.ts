export type StatusStepperStepState = "active" | "done" | "pending";

export interface StatusStepperStep {
  key: string;
  label: string;
  state?: StatusStepperStepState;
}

export interface StatusStepperProps {
  steps: StatusStepperStep[];
  className?: string;
}
