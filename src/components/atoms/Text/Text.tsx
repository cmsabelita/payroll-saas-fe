import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { TextProps } from "./Text.types";

const textVariants = cva("m-0 text-foreground", {
  variants: {
    variant: {
      body: "text-base leading-normal",
      caption: "text-sm leading-snug text-muted-foreground",
      label: "text-sm font-medium",
      heading: "text-xl font-semibold leading-tight",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export { textVariants };

export function Text({
  variant = "body",
  as: Component = "span",
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
