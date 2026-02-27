import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Atoms/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0, max: 100 } },
    variant: { control: "select", options: ["default", "success", "warning", "destructive"] },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 45,
    max: 100,
    className: "w-64",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Progress value={60} variant="default" />
      <Progress value={80} variant="success" />
      <Progress value={30} variant="warning" />
      <Progress value={20} variant="destructive" />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    className: "w-64",
  },
};
