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
