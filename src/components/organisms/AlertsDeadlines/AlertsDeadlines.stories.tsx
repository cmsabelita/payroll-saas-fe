import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertsDeadlines } from "./AlertsDeadlines";

const meta: Meta<typeof AlertsDeadlines> = {
  title: "Organisms/AlertsDeadlines",
  component: AlertsDeadlines,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AlertsDeadlines>;

const items = [
  { variant: "warning" as const, title: "SSS e-Alumni filing due Mar 15", description: "Submit for Feb 2026 payroll." },
  { variant: "info" as const, title: "BIR 1601C due Mar 10", description: "Monthly remittance." },
  { variant: "success" as const, title: "PhilHealth updated", description: "New rates applied for Feb." },
];

export const Default: Story = {
  args: { items },
};
