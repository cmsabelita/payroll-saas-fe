import type { InputHTMLAttributes } from "react";
import type { FieldValues } from "react-hook-form";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormInputProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "value" | "onChange" | "onBlur" | "name" | "size"
    >,
    ControlledFieldProps<TFieldValues> {
  label: string;
  required?: boolean;
  hint?: string;
  showPasswordStrength?: boolean;
  passwordStrengthLevel?: 0 | 1 | 2 | 3 | 4;
  passwordStrengthLabel?: string;
  size?: "sm" | "md" | "lg";
  id?: string;
  className?: string;
}
