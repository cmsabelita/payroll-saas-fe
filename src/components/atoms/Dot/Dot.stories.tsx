import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dot } from "./Dot";

const meta: Meta<typeof Dot> = {
  title: "Atoms/Dot",
  component: Dot,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "muted"],
    },
    size: { control: "select", options: ["xs", "sm"] },
  },
};

export default meta;

type Story = StoryObj<typeof Dot>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Dot variant="default" />
      <Dot variant="success" />
      <Dot variant="warning" />
      <Dot variant="destructive" />
      <Dot variant="muted" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Dot size="xs" variant="destructive" />
      <Dot size="sm" variant="destructive" />
    </div>
  ),
};

export const NotificationStyle: Story = {
  render: () => (
    <div className="relative inline-flex">
      <span className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground">
        Bell
      </span>
      <Dot
        size="xs"
        variant="destructive"
        className="absolute -right-0.5 -top-0.5"
      />
    </div>
  ),
};
