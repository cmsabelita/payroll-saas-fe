import type { FieldValues } from "react-hook-form";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormSwitchProps<TFieldValues extends FieldValues = FieldValues>
  extends ControlledFieldProps<TFieldValues> {
  label: string;
  hint?: string;
  disabled?: boolean;
  "aria-label"?: string;
  id?: string;
  className?: string;
}
