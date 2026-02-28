"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/utils";
import type { FaIconProps } from "./FaIcon.types";

const sizeClasses: Record<NonNullable<FaIconProps["size"]>, string> = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export function FaIcon({
  icon,
  size = "md",
  className,
  "aria-hidden": ariaHidden = true,
}: FaIconProps) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={cn(sizeClasses[size], className)}
      aria-hidden={ariaHidden}
    />
  );
}
