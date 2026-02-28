import { useId } from "react";
import { Input, Label, PasswordStrength, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { FormFieldProps } from "./FormField.types";

export function FormField({
  label,
  required,
  hint,
  error,
  showPasswordStrength = false,
  passwordStrengthLevel = 0,
  passwordStrengthLabel,
  size = "md",
  id: idProp,
  className,
  ...inputProps
}: FormFieldProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        size={size}
        error={Boolean(error)}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(" ") || undefined
        }
        {...inputProps}
      />
      {showPasswordStrength && inputProps.type === "password" && (
        <PasswordStrength
          level={passwordStrengthLevel}
          label={passwordStrengthLabel}
        />
      )}
      {error && (
        <Text
          id={`${id}-error`}
          variant="caption"
          className="text-destructive"
          role="alert"
        >
          {error}
        </Text>
      )}
      {hint && !error && (
        <Text id={`${id}-hint`} variant="caption">
          {hint}
        </Text>
      )}
    </div>
  );
}
