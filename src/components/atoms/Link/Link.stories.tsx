import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "primary"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Link text",
    variant: "default",
  },
};

export const Muted: Story = {
  args: {
    href: "#",
    children: "Secondary link",
    variant: "muted",
  },
};

export const Primary: Story = {
  args: {
    href: "#",
    children: "Primary link",
    variant: "primary",
  },
};

export const External: Story = {
  args: {
    href: "https://example.com",
    children: "External link",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};
