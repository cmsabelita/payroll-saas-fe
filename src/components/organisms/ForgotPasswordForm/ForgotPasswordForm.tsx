"use client";

import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Box, Button, FaIcon, Link, Text } from "@/components/atoms";
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
        <FaIcon icon={faEnvelope} size="lg" className="text-primary" />
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
      <FaIcon icon={faArrowLeft} size="sm" />
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
