import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatCard } from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Molecules/StatCard",
  component: StatCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    label: "Total payroll",
    value: "₱1.2M",
  },
};

export const WithSublabel: Story = {
  args: {
    label: "This month",
    value: "₱450,000",
    sublabel: "vs ₱420,000 last month",
  },
};
