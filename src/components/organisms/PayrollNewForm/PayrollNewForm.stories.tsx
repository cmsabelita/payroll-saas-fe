import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PayrollNewForm } from "./PayrollNewForm";

const meta: Meta<typeof PayrollNewForm> = {
  title: "Organisms/PayrollNewForm",
  component: PayrollNewForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PayrollNewForm>;

export const Default: Story = {
  args: {
    lastPeriodLabel: "Feb 2026 · 1st Half",
    lastPeriodDetail: "Feb 1–15, 2026 · Paid · Net ₱1,826,730",
    onSubmit: () => {},
    onCancel: () => {},
  },
};
