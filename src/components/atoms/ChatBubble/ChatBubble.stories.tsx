import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChatBubble } from "./ChatBubble";

const meta: Meta<typeof ChatBubble> = {
  title: "Atoms/ChatBubble",
  component: ChatBubble,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    sender: { control: "select", options: ["user", "other"] },
  },
};

export default meta;

type Story = StoryObj<typeof ChatBubble>;

export const User: Story = {
  args: {
    sender: "user",
    children: "Hello, this is a message from the user.",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Other: Story = {
  args: {
    sender: "other",
    children: "Hi! This is a reply from the other side.",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Conversation: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <ChatBubble sender="other">Hey, how are you?</ChatBubble>
      <ChatBubble sender="user">I'm good, thanks!</ChatBubble>
      <ChatBubble sender="other">Want to grab coffee later?</ChatBubble>
      <ChatBubble sender="user">Sure, 3pm works.</ChatBubble>
    </div>
  ),
};
