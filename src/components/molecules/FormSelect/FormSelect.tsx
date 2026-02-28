"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { Label, Select, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormSelectProps } from "./FormSelect.types";

export function FormSelect<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  required,
  hint,
  options,
  placeholder,
  size,
  disabled,
  id: idProp,
  className,
}: FormSelectProps<TFieldValues>) {
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
          <Select
            id={id}
            options={options}
            placeholder={placeholder}
            size={size}
            disabled={disabled}
            aria-invalid={fieldState.error ? true : undefined}
            aria-describedby={
              [fieldState.error && `${id}-error`, hint && `${id}-hint`]
                .filter(Boolean)
                .join(" ") || undefined
            }
            {...field}
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
