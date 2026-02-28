import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InfoRow } from "./InfoRow";

const meta: Meta<typeof InfoRow> = {
  title: "Molecules/InfoRow",
  component: InfoRow,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InfoRow>;

export const Default: Story = {
  args: {
    label: "Department",
    value: "Engineering",
  },
};

export const WithLongValue: Story = {
  args: {
    label: "Email",
    value: "jane.doe@company.com",
  },
};

export const NumericValue: Story = {
  args: {
    label: "Employee ID",
    value: 10042,
  },
};
