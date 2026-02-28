"use client";

import { useId } from "react";
import { Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { Label, Radio, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormRadioGroupProps } from "./FormRadioGroup.types";

export function FormRadioGroup<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  label,
  required,
  options,
  hint,
  disabled,
  orientation = "column",
  id: idProp,
  className,
}: FormRadioGroupProps<TFieldValues>) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const groupId = `${id}-group`;

  return (
    <Controller
      control={control}
      name={name as FieldPath<TFieldValues>}
      rules={rules}
      render={({ field, fieldState }) => (
        <div
          className={cn("flex flex-col gap-1.5", className)}
          role="radiogroup"
          aria-labelledby={groupId}
          aria-invalid={fieldState.error ? true : undefined}
          aria-describedby={
            [fieldState.error && `${id}-error`, hint && `${id}-hint`]
              .filter(Boolean)
              .join(" ") || undefined
          }
        >
          <Label id={groupId} required={required} className="block">
            {label}
          </Label>
          <div
            className={cn(
              "flex gap-4",
              orientation === "column" && "flex-col",
              orientation === "row" && "flex-row flex-wrap"
            )}
          >
            {options.map((opt, index) => {
              const optId = `${id}-${opt.value}`;
              const isChecked =
                field.value === opt.value ||
                (typeof field.value === "string" && field.value === opt.value);
              return (
                <div key={opt.value} className="flex items-center gap-2">
                  <Radio
                    id={optId}
                    name={field.name}
                    value={opt.value}
                    checked={isChecked}
                    onChange={() => field.onChange(opt.value)}
                    onBlur={field.onBlur}
                    ref={index === 0 ? field.ref : undefined}
                    disabled={disabled ?? opt.disabled}
                  />
                  <Label htmlFor={optId} className="cursor-pointer font-normal">
                    {opt.label}
                  </Label>
                </div>
              );
            })}
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
