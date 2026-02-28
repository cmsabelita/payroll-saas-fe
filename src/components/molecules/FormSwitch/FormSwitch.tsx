"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { Label, Switch, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormSwitchProps } from "./FormSwitch.types";

export function FormSwitch<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  hint,
  disabled,
  "aria-label": ariaLabel,
  id: idProp,
  className,
}: FormSwitchProps<TFieldValues>) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  return (
    <Controller
      control={control}
      name={name as FieldPath<TFieldValues>}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={cn("flex flex-col gap-1.5", className)}>
          <div className="flex items-center gap-2">
            <Switch
              id={id}
              checked={Boolean(field.value)}
              onCheckedChange={field.onChange}
              onBlur={field.onBlur}
              disabled={disabled}
              aria-label={ariaLabel ?? label}
              aria-invalid={fieldState.error ? true : undefined}
              aria-describedby={
                [fieldState.error && `${id}-error`, hint && `${id}-hint`]
                  .filter(Boolean)
                  .join(" ") || undefined
              }
            />
            <Label htmlFor={id} className="cursor-pointer font-normal">
              {label}
            </Label>
          </div>
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
