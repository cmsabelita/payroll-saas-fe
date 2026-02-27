import type { InputHTMLAttributes } from "react";

export interface DateInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange"
  > {
  value?: string;
  onChange?: (value: string) => void;
  /** Min date (YYYY-MM-DD) */
  min?: string;
  /** Max date (YYYY-MM-DD) */
  max?: string;
  error?: boolean;
}
