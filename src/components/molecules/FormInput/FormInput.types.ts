import type { FieldValues } from "react-hook-form";
import type { InputProps } from "@/components/atoms";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormInputProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<InputProps, "value" | "onChange" | "onBlur" | "name" | "size">,
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
