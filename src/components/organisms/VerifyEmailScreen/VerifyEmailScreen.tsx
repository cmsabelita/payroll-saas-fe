"use client";

import { faArrowLeft, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, FaIcon, Link, Text } from "@/components/atoms";
import { AuthCardShell } from "@/components/molecules/AuthCardShell";
import type { VerifyEmailScreenProps } from "./VerifyEmailScreen.types";

export function VerifyEmailScreen({
  logo,
  email,
  onResend,
  expiresIn,
  secondaryActions,
  backToSignInHref = "#",
  isResending = false,
  className,
}: VerifyEmailScreenProps) {
  const headingBlock = (
    <>
      <Box className="mb-6 flex size-20 items-center justify-center rounded-full border-2.5 border-primary/35 bg-primary/10">
        <FaIcon icon={faEnvelope} size="lg" className="text-primary" />
      </Box>
      <Text as="h2" variant="heading" className="mb-2 text-2xl font-bold">
        Check your email
      </Text>
      <Text variant="body" as="p" className="mb-1 max-w-xs text-sm text-muted-foreground">
        We sent a verification link to
      </Text>
      <Text variant="body" as="p" className="mb-5 text-sm font-semibold text-foreground">
        {email}
      </Text>
      <Text variant="body" as="p" className="mb-6 max-w-xs text-sm text-muted-foreground">
        Click the link in that email to activate your account. It may take a minute to arrive.
      </Text>
    </>
  );

  const footer = (
    <>
      {secondaryActions != null && (
        <div className="mb-6 flex w-full gap-3">{secondaryActions}</div>
      )}
      <div className="mb-5 w-full border-t border-border" />
      <Text variant="body" as="p" className="mb-1 text-center text-sm text-muted-foreground">
        Didn&apos;t receive it? Check your spam folder or
      </Text>
      <button
        type="button"
        onClick={onResend}
        disabled={isResending}
        className="mb-6 text-sm font-semibold text-primary disabled:opacity-50"
      >
        {isResending ? "Sending…" : "Resend verification email"}
      </button>
      {expiresIn != null && (
        <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
          <FaIcon icon={faClock} size="sm" className="text-muted-foreground" />
          {expiresIn}
        </div>
      )}
      <Link
        href={backToSignInHref}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <FaIcon icon={faArrowLeft} size="sm" />
        Back to Sign In
      </Link>
    </>
  );

  return (
    <AuthCardShell
      logo={logo}
      showAccentBar
      headingBlock={headingBlock}
      centered
      footer={footer}
      className={className}
    />
  );
}
