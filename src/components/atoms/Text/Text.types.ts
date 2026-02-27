import type { HTMLAttributes } from "react";

export type TextVariant = "body" | "caption" | "label" | "heading";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariant;
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3";
  children: React.ReactNode;
}
