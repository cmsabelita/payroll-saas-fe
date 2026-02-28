import type { FieldValues } from "react-hook-form";
import type { SelectOption } from "@/components/atoms";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormSelectProps<TFieldValues extends FieldValues = FieldValues>
  extends ControlledFieldProps<TFieldValues> {
  label: string;
  required?: boolean;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  id?: string;
  className?: string;
}
