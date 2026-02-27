import type { InputHTMLAttributes } from "react";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  min?: number;
  max?: number;
  step?: number;
}
