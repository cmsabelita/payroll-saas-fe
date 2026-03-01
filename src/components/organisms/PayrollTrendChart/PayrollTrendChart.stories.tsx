import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PayrollTrendChart } from "./PayrollTrendChart";

const meta: Meta<typeof PayrollTrendChart> = {
  title: "Organisms/PayrollTrendChart",
  component: PayrollTrendChart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PayrollTrendChart>;

const months = [
  { label: "Sep", grossPct: 72, netPct: 58 },
  { label: "Oct", grossPct: 85, netPct: 70 },
  { label: "Nov", grossPct: 78, netPct: 64 },
  { label: "Dec", grossPct: 92, netPct: 76 },
  { label: "Jan", grossPct: 88, netPct: 72 },
  { label: "Feb", grossPct: 95, netPct: 80, current: true, currentLabel: "₱4.28M" },
];

export const Default: Story = {
  args: { months },
};
