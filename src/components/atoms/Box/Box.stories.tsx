import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Atoms/Box",
  component: Box,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Box (View) content",
    className: "p-4 border border-border rounded-md",
  },
};
