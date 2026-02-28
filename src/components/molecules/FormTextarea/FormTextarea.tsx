"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { Label, Text, Textarea } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormTextareaProps } from "./FormTextarea.types";

export function FormTextarea<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  required,
  hint,
  id: idProp,
  className,
  ...textareaProps
}: FormTextareaProps<TFieldValues>) {
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
          <Textarea
            id={id}
            error={Boolean(fieldState.error)}
            aria-invalid={fieldState.error ? true : undefined}
            aria-describedby={
              [fieldState.error && `${id}-error`, hint && `${id}-hint`]
                .filter(Boolean)
                .join(" ") || undefined
            }
            {...field}
            {...textareaProps}
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
