"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { DateInput, Label, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormDateInputProps } from "./FormDateInput.types";

export function FormDateInput<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  required,
  hint,
  min,
  max,
  id: idProp,
  className,
  ...dateInputProps
}: FormDateInputProps<TFieldValues>) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  return (
    <Controller
      control={control}
      name={name as FieldPath<TFieldValues>}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={cn("flex flex-col gap-1.5", className)}>
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
          <DateInput
            id={id}
            value={field.value ?? ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            min={min}
            max={max}
            error={Boolean(fieldState.error)}
            aria-invalid={fieldState.error ? true : undefined}
            aria-describedby={
              [fieldState.error && `${id}-error`, hint && `${id}-hint`]
                .filter(Boolean)
                .join(" ") || undefined
            }
            {...dateInputProps}
          />
          {fieldState.error && (
            <Text
              id={`${id}-error`}
              variant="caption"
              className="text-destructive"
              role="alert"
            >
              {fieldState.error.message}
            </Text>
          )}
          {hint && !fieldState.error && (
            <Text id={`${id}-hint`} variant="caption">
              {hint}
            </Text>
          )}
        </div>
      )}
    />
  );
}
