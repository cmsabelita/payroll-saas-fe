import type { FieldValues } from "react-hook-form";
import type { TextareaProps } from "@/components/atoms";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormTextareaProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<TextareaProps, "value" | "onChange" | "onBlur" | "name">,
    ControlledFieldProps<TFieldValues> {
  label: string;
  required?: boolean;
  hint?: string;
  id?: string;
  className?: string;
}
