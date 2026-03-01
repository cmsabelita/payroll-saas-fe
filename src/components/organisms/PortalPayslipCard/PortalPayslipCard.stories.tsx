import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalPayslipCard } from "./PortalPayslipCard";

const meta: Meta<typeof PortalPayslipCard> = {
  title: "Organisms/PortalPayslipCard",
  component: PortalPayslipCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalPayslipCard>;

const defaultBreakdown = [
  { label: "Basic Pay (16 days)", amount: "₱ 32,000.00", isDeduction: false },
  { label: "Overtime Pay (5.5 hrs)", amount: "₱ 3,200.00", isDeduction: false },
  { label: "SSS Contribution", amount: "₱ 900.00", isDeduction: true },
  { label: "PhilHealth", amount: "₱ 425.00", isDeduction: true },
  { label: "Pag-IBIG (HDMF)", amount: "₱ 100.00", isDeduction: true },
  { label: "Withholding Tax", amount: "₱ 3,260.00", isDeduction: true },
];

export const Default: Story = {
  args: {
    periodLabel: "Feb 1–15, 2026 · Semi-monthly",
    statusLabel: "Released",
    statusVariant: "success",
    grossPay: "₱ 35,200",
    deductions: "₱ 4,685",
    netPay: "₱ 30,515",
    breakdown: defaultBreakdown,
    viewAllHref: "#",
    onDownload: () => {},
  },
};

export const Pending: Story = {
  args: {
    ...Default.args,
    statusLabel: "Pending",
    statusVariant: "warning",
    viewAllHref: undefined,
    onDownload: undefined,
  },
};
