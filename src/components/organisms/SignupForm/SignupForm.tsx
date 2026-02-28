"use client";

import { useState, useMemo } from "react";
import { Button, Checkbox, Link, Text } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { cn } from "@/utils";
import type { SignupFormProps } from "./SignupForm.types";

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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const strength = useMemo(() => passwordStrength(password), [password]);
  const confirmError =
    confirm.length > 0 && password !== confirm ? "Passwords do not match" : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm || !agreeToTerms) return;
    onSubmit({ fullName, email, password, agreeToTerms });
  };

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

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Full Name"
          required
          placeholder="Maria Santos"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FormField
          label="Email Address"
          type="email"
          required
          placeholder="maria@acme.com.ph"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password"
          type="password"
          required
          placeholder="Min. 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordStrength
          passwordStrengthLevel={strength.level}
          passwordStrengthLabel={strength.label}
        />
        <FormField
          label="Confirm Password"
          type="password"
          required
          placeholder="Repeat password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={confirmError}
        />

        <div className="flex items-start gap-3 pt-1">
          <Checkbox
            id="signup-terms"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mt-0.5 shrink-0"
            aria-describedby="signup-terms-text"
          />
          <label
            id="signup-terms-text"
            htmlFor="signup-terms"
            className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
          >
            I agree to the{" "}
            <Link href={termsHref} className="font-medium text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href={privacyHref} className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        {error && (
          <Text variant="caption" className="text-destructive" role="alert">
            {error}
          </Text>
        )}

        <Button type="submit" className="mt-1 w-full" disabled={isLoading || !agreeToTerms}>
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
              <Text as="span" variant="caption" className="bg-background px-3 text-muted-foreground">
                or sign up with
              </Text>
            </div>
          </div>
          <div className="flex gap-3">{socialButtons}</div>
        </>
      )}

      <div className="mt-6 text-center">
        <Text variant="body" as="span" className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={signInHref} className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </Text>
      </div>
    </div>
  );
}
