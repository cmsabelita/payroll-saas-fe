"use client";

import { useId, useMemo } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import type { FieldPath } from "react-hook-form";
import { Button, Checkbox, Link, Text } from "@/components/atoms";
import { FormInput } from "@/components/molecules";
import { cn } from "@/utils";
import type { SignupFormProps, SignupFormValues } from "./SignupForm.types";

function passwordStrength(password: string): { level: 0 | 1 | 2 | 3 | 4; label: string } {
  const len = password.length;
  if (len === 0) return { level: 0, label: "" };
  if (len < 4) return { level: 1, label: "Weak" };
  if (len < 6) return { level: 2, label: "Fair" };
  if (len < 10) return { level: 3, label: "Good" };
  return { level: 4, label: "Strong" };
}

export function SignupForm({
  heading = "Create your account",
  subheading = "Start your 14-day free trial. No credit card required.",
  onSubmit,
  signInHref = "#",
  socialButtons,
  termsHref = "#",
  privacyHref = "#",
  isLoading = false,
  error,
  className,
}: SignupFormProps) {
  const termsId = useId();
  const { control, handleSubmit } = useForm<SignupFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = useWatch({ control, name: "password" as FieldPath<SignupFormValues>, defaultValue: "" });
  const agreeToTerms = useWatch({ control, name: "agreeToTerms" as FieldPath<SignupFormValues>, defaultValue: false });
  const strength = useMemo(() => passwordStrength(String(password ?? "")), [password]);

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="mb-6">
        <Text as="h1" variant="heading" className="mb-1 text-[22px] font-bold text-foreground">
          {heading}
        </Text>
        <Text variant="body" as="p" className="text-sm text-muted-foreground">
          {subheading}
        </Text>
      </div>

      <form
        onSubmit={handleSubmit((values) =>
          onSubmit({
            fullName: values.fullName,
            email: values.email,
            password: values.password,
            agreeToTerms: values.agreeToTerms,
          })
        )}
        className="space-y-4"
      >
        <FormInput<SignupFormValues>
          control={control}
          name="fullName"
          rules={{ required: "Full name is required" }}
          label="Full Name"
          required
          placeholder="Maria Santos"
        />
        <FormInput<SignupFormValues>
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          label="Email Address"
          type="email"
          required
          placeholder="maria@acme.com.ph"
        />
        <FormInput<SignupFormValues>
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          label="Password"
          type="password"
          required
          placeholder="Min. 8 characters"
          showPasswordStrength
          passwordStrengthLevel={strength.level}
          passwordStrengthLabel={strength.label}
        />
        <FormInput<SignupFormValues>
          control={control}
          name="confirmPassword"
          rules={{
            required: "Please confirm your password",
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          }}
          label="Confirm Password"
          type="password"
          required
          placeholder="Repeat password"
        />

        <Controller
          control={control}
          name={"agreeToTerms" as FieldPath<SignupFormValues>}
          rules={{
            required: "You must agree to the terms",
            validate: (v) => v === true || "You must agree to the terms",
          }}
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex items-start gap-3">
                <Checkbox
                  id={termsId}
                  checked={Boolean(field.value)}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  className="mt-0.5 shrink-0"
                  aria-describedby={`${termsId}-text`}
                  aria-invalid={fieldState.error ? true : undefined}
                />
                <label
                  id={`${termsId}-text`}
                  htmlFor={termsId}
                  className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link href={termsHref} className="font-medium text-primary">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={privacyHref} className="font-medium text-primary">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {fieldState.error && (
                <Text variant="caption" className="text-destructive" role="alert">
                  {fieldState.error.message}
                </Text>
              )}
            </div>
          )}
        />

        {error && (
          <Text variant="caption" className="text-destructive" role="alert">
            {error}
          </Text>
        )}

        <Button
          type="submit"
          className="mt-1 w-full"
          disabled={isLoading || !agreeToTerms}
        >
          {isLoading ? "Creating account…" : "Create Account"}
        </Button>
      </form>

      {socialButtons != null && (
        <>
          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {socialButtons}
        </>
      )}

      <div className="mt-6 text-center">
        <Text variant="body" as="span" className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={signInHref} className="font-semibold text-primary">
            Sign in
          </Link>
        </Text>
      </div>
    </div>
  );
}
