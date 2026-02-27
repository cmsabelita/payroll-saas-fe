import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Fallback: Story = {
  args: {
    fallback: "JD",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-2">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    alt: "Jane",
    fallback: "J",
    size: "md",
  },
};

export const ImageErrorFallback: Story = {
  args: {
    src: "https://invalid.example/avatar.png",
    alt: "User",
    fallback: "AB",
    size: "md",
  },
};
