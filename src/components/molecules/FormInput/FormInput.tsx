"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { Input, Label, PasswordStrength, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormInputProps } from "./FormInput.types";

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  required,
  hint,
  showPasswordStrength = false,
  passwordStrengthLevel = 0,
  passwordStrengthLabel,
  size = "md",
  id: idProp,
  className,
  ...inputProps
}: FormInputProps<TFieldValues>) {
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
          <Input
            id={id}
            size={size}
            error={Boolean(fieldState.error)}
            aria-invalid={fieldState.error ? true : undefined}
            aria-describedby={
              [fieldState.error && `${id}-error`, hint && `${id}-hint`]
                .filter(Boolean)
                .join(" ") || undefined
            }
            {...field}
            {...inputProps}
          />
          {showPasswordStrength && inputProps.type === "password" && (
            <PasswordStrength
              level={passwordStrengthLevel}
              label={passwordStrengthLabel}
            />
          )}
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
