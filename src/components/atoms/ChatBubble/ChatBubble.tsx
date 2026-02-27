import { cva } from "class-variance-authority";
import { cn } from "@/utils";
import type { ChatBubbleProps } from "./ChatBubble.types";

const chatBubbleVariants = cva(
  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm break-words",
  {
    variants: {
      sender: {
        user: "ml-auto rounded-br-md bg-primary text-primary-foreground",
        other: "mr-auto rounded-bl-md bg-muted text-foreground",
      },
      variant: {
        default: "",
        primary: "",
      },
    },
    compoundVariants: [
      { sender: "user", variant: "primary", className: "bg-primary text-primary-foreground" },
      { sender: "other", variant: "primary", className: "bg-muted text-foreground" },
    ],
    defaultVariants: {
      sender: "user",
      variant: "default",
    },
  }
);

export { chatBubbleVariants };

export function ChatBubble({
  sender = "user",
  variant = "default",
  className,
  children,
  ...rest
}: ChatBubbleProps) {
  return (
    <div
      className={cn(chatBubbleVariants({ sender, variant }), className)}
      {...rest}
    >
      {children}
    </div>
  );
}
