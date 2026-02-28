"use client";

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, FaIcon, Link, Text } from "@/components/atoms";
import { AuthCardShell } from "@/components/molecules/AuthCardShell";
import { FormField } from "@/components/molecules";
import { cn } from "@/utils";
import type { ResetPasswordFormProps } from "./ResetPasswordForm.types";

const defaultRequirements: ResetPasswordFormProps["requirements"] = [
  { label: "At least 8 characters", met: true },
  { label: "One uppercase letter", met: true },
  { label: "One number", met: false },
  { label: "One special character", met: false },
];

export function ResetPasswordForm({
  logo,
  onSubmit,
  signInHref = "#",
  requirements = defaultRequirements,
  isLoading = false,
  error,
  className,
}: ResetPasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirm) onSubmit(password);
  };

  const headingBlock = (
    <>
      <Text as="h2" variant="heading" className="mb-1.5 text-2xl font-bold">
        Set a new password
      </Text>
      <Text variant="body" as="p" className="text-sm text-muted-foreground">
        Must be at least 8 characters.
      </Text>
    </>
  );

  const footer = (
    <Text variant="body" as="p" className="text-center text-sm text-muted-foreground">
      Remember your password?{" "}
      <Link href={signInHref} className="font-semibold text-primary hover:underline">
        Sign in
      </Link>
    </Text>
  );

  return (
    <AuthCardShell
      logo={logo}
      showAccentBar
      headingBlock={headingBlock}
      footer={footer}
      className={className}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <FormField
          label="New Password"
          type="password"
          required
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          disabled={isLoading}
        />
        <div>
          <FormField
            label="Confirm New Password"
            type="password"
            required
            placeholder="Repeat new password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            disabled={isLoading}
          />
          {requirements != null && requirements.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {requirements.map((req, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-2 text-xs",
                    req.met ? "text-success" : "text-muted-foreground"
                  )}
                >
                  {req.met ? (
                    <FaIcon icon={faCheck} size="xs" className="shrink-0 text-success" />
                  ) : (
                    <FaIcon icon={faXmark} size="xs" className="shrink-0 text-destructive" />
                  )}
                  {req.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <Button type="submit" className="mt-2 w-full" disabled={isLoading}>
          {isLoading ? "Updating…" : "Update Password"}
        </Button>
      </form>
    </AuthCardShell>
  );
}
