"use client";

import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { AvatarProps } from "./Avatar.types";

const avatarVariants = cva(
  "inline-flex items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground font-medium shrink-0",
  {
    variants: {
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-sm",
        md: "size-10 text-base",
        lg: "size-12 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export { avatarVariants };

export function Avatar({
  size = "md",
  src,
  alt = "",
  fallback,
  className,
  ...rest
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImg = src && !imgError;

  return (
    <span
      className={cn(avatarVariants({ size }), className)}
      {...rest}
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element -- Avatar uses img for dynamic/remote URLs and fallback; next/image requires dimensions.
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        fallback ?? "?"
      )}
    </span>
  );
}
