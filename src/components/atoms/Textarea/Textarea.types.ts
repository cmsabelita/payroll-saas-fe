import type { TextareaHTMLAttributes } from "react";

export type TextareaResize = "none" | "vertical" | "horizontal" | "both";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> {
  error?: boolean;
  resize?: TextareaResize;
  minRows?: number;
  maxRows?: number;
  rows?: number;
}
