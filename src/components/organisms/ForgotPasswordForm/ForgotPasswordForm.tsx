"use client";

import { useState } from "react";
import { Box, Button, Icon, Link, Text } from "@/components/atoms";
import { AuthCardShell } from "@/components/molecules/AuthCardShell";
import { FormField } from "@/components/molecules";
import type { ForgotPasswordFormProps } from "./ForgotPasswordForm.types";

export function ForgotPasswordForm({
  logo,
  onSubmit,
  backToSignInHref = "#",
  backToSignInLabel = "Back to Sign In",
  isLoading = false,
  error,
  className,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  const headingBlock = (
    <>
      <Box className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
        <Icon size="lg" className="text-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
        </Icon>
      </Box>
      <Text as="h2" variant="heading" className="mb-2 text-2xl font-bold">
        Forgot your password?
      </Text>
      <Text variant="body" as="p" className="max-w-xs text-sm text-muted-foreground">
        Enter your registered email and we&apos;ll send you a reset link.
      </Text>
    </>
  );

  const footer = (
    <Link
      href={backToSignInHref}
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
    >
      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      {backToSignInLabel}
    </Link>
  );

  return (
    <AuthCardShell
      logo={logo}
      showAccentBar
      headingBlock={headingBlock}
      centered
      footer={footer}
      className={className}
    >
      <form className="w-full space-y-5" onSubmit={handleSubmit}>
        <FormField
          label="Email Address"
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending…" : "Send Reset Link"}
        </Button>
      </form>
    </AuthCardShell>
  );
}
