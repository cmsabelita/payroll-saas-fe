import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "text", "circular"] },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "h-12 w-48",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    className: "w-64",
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    className: "size-12",
  },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div className="w-64 rounded-lg border border-border p-4 space-y-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
      <Skeleton className="h-8 w-24 mt-2" />
    </div>
  ),
};
