import type { FieldValues } from "react-hook-form";
import type { DateInputProps } from "@/components/atoms/DateInput/DateInput.types";
import type { ControlledFieldProps } from "../controlled-field.types";

export interface FormDateInputProps<
  TFieldValues extends FieldValues = FieldValues,
> extends Omit<DateInputProps, "value" | "onChange" | "onBlur" | "name">,
    ControlledFieldProps<TFieldValues> {
  label: string;
  required?: boolean;
  hint?: string;
  id?: string;
  className?: string;
}
