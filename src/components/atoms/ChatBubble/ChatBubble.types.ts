import type { HTMLAttributes } from "react";

export type ChatBubbleSender = "user" | "other";

export type ChatBubbleVariant = "default" | "primary";

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  sender?: ChatBubbleSender;
  variant?: ChatBubbleVariant;
  children: React.ReactNode;
}
