import type { FieldValues } from "react-hook-form";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormRadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FormRadioGroupProps<
  TFieldValues extends FieldValues = FieldValues,
> extends ControlledFieldProps<TFieldValues> {
  label: string;
  required?: boolean;
  options: FormRadioOption[];
  hint?: string;
  disabled?: boolean;
  orientation?: "row" | "column";
  id?: string;
  className?: string;
}
