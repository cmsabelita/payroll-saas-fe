import type { HTMLAttributes } from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  src?: string | null;
  alt?: string;
  /** Fallback when no image: initials or placeholder text */
  fallback?: React.ReactNode;
}
