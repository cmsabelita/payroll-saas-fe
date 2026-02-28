import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PayrollStatusRow } from "./PayrollStatusRow";

const meta: Meta<typeof PayrollStatusRow> = {
  title: "Molecules/PayrollStatusRow",
  component: PayrollStatusRow,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PayrollStatusRow>;

export const Default: Story = {
  args: {
    title: "January 2025",
    subtitle: "Processed on Jan 31",
    status: "Completed",
  },
};

export const Pending: Story = {
  args: {
    title: "February 2025",
    subtitle: "Draft",
    status: "Pending",
  },
};

export const WithDivider: Story = {
  args: {
    title: "January 2025",
    subtitle: "Processed on Jan 31",
    status: "Completed",
    showDivider: true,
  },
};
