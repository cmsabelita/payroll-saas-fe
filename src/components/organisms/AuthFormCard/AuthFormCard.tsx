"use client";

import { AuthCardShell } from "@/components/molecules/AuthCardShell";
import type { AuthFormCardProps } from "./AuthFormCard.types";

/** Auth form card layout. Composes AuthCardShell (molecule) for backward compatibility. */
export function AuthFormCard(props: AuthFormCardProps) {
  return <AuthCardShell {...props} />;
}
