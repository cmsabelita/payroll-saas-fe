import type { FieldValues } from "react-hook-form";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ControlledFieldProps<TFieldValues> {
  label: string;
  hint?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}
