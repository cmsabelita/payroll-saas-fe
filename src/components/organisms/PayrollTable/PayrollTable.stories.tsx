import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PayrollTable } from "./PayrollTable";
import { MOCK_PAYROLL_RUNS } from "@/data/mocks/mockPayroll";

const meta: Meta<typeof PayrollTable> = {
  title: "Organisms/PayrollTable",
  component: PayrollTable,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PayrollTable>;

export const Default: Story = {
  args: {
    runs: MOCK_PAYROLL_RUNS,
    onComputeClick: () => {},
    onMarkPaidClick: () => {},
    onViewClick: () => {},
  },
};

export const WithRowClick: Story = {
  args: {
    runs: MOCK_PAYROLL_RUNS,
    onRunClick: () => {},
    onComputeClick: () => {},
    onMarkPaidClick: () => {},
    onViewClick: () => {},
  },
};
