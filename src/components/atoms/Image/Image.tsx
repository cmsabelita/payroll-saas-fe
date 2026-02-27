"use client";

import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { ImageProps } from "./Image.types";

const imageVariants = cva("object-cover", {
  variants: {
    variant: {
      rounded: "rounded-lg",
      circle: "rounded-full",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "rounded",
  },
});

export { imageVariants };

export function Image({
  variant = "rounded",
  fallback,
  className,
  alt = "",
  onError,
  ...rest
}: ImageProps) {
  const [error, setError] = useState(false);

  if (error && fallback != null) {
    return (
      <span className={cn("inline-flex items-center justify-center", className)}>
        {fallback}
      </span>
    );
  }

  if (error && fallback == null) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center bg-muted text-muted-foreground text-sm",
          variant === "circle" && "rounded-full",
          variant === "rounded" && "rounded-lg",
          className
        )}
      >
        —
      </span>
    );
  }

  return (
    <img
      alt={alt}
      className={cn(imageVariants({ variant }), className)}
      onError={(e) => {
        setError(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
}
