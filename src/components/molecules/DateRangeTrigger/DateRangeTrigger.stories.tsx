import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DateRangeTrigger } from "./DateRangeTrigger";

const meta: Meta<typeof DateRangeTrigger> = {
  title: "Molecules/DateRangeTrigger",
  component: DateRangeTrigger,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DateRangeTrigger>;

export const Default: Story = {
  args: {
    label: "Jan 1 – Jan 31, 2025",
    onClick: () => {},
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Last 7 days",
    onClick: () => {},
  },
};
