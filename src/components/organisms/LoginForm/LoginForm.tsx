"use client";

import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FaIcon, FormInput, Text } from "@/components";
import type { LoginFormProps, LoginFormValues } from "./LoginForm.types";

export function LoginForm({
  onSubmit,
  socialButtons,
  isLoading = false,
  error,
  className,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className={className}>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormInput<LoginFormValues>
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          label="Email Address"
          type="email"
          required
          placeholder="Enter your email address"
          size="lg"
          leftAdornment={<FaIcon icon={faEnvelope} size="sm" />}
          className="[&_[data-input-wrapper]]:rounded-xl [&_[data-input-wrapper]]:border-2"
        />
        <FormInput<LoginFormValues>
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          label="Password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Enter your password"
          size="lg"
          leftAdornment={<FaIcon icon={faLock} size="sm" />}
          rightAdornment={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <FaIcon
                icon={showPassword ? faEyeSlash : faEye}
                size="sm"
              />
            </button>
          }
          className="[&_[data-input-wrapper]]:rounded-xl [&_[data-input-wrapper]]:border-2"
        />
        {error && (
          <Text variant="caption" className="text-destructive" role="alert">
            {error}
          </Text>
        )}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-1 w-full rounded-xl py-3 font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Signing in…" : "Sign In"}
        </Button>
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
      </form>
    </div>
  );
}
