import { forwardRef } from "react";
import { cn } from "@/utils";
import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio({ className, ...rest }, ref) {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(
          "size-4 rounded-full border border-border bg-input text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer checked:border-primary",
          className
        )}
        {...rest}
      />
    );
  }
);
