import type { ImgHTMLAttributes } from "react";

export type ImageVariant = "rounded" | "circle" | "square";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: ImageVariant;
  /** Fallback when image fails to load */
  fallback?: React.ReactNode;
}
