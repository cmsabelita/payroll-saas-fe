"use client";

import { Box, Icon, Link, Text } from "@/components/atoms";
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
        <Icon size="lg" className="text-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </Icon>
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
        className="mb-6 text-sm font-semibold text-primary hover:underline disabled:opacity-50"
      >
        {isResending ? "Sending…" : "Resend verification email"}
      </button>
      {expiresIn != null && (
        <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
          <svg className="size-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {expiresIn}
        </div>
      )}
      <Link
        href={backToSignInHref}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
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
