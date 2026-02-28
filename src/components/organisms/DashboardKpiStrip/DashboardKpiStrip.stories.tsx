import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DashboardKpiStrip } from "./DashboardKpiStrip";

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const meta: Meta<typeof DashboardKpiStrip> = {
  title: "Organisms/DashboardKpiStrip",
  component: DashboardKpiStrip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: false,
      description: "KPI items (value, label, optional icon/badge)",
      table: { type: { summary: "DashboardKpiStripItem[]" } },
    },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof DashboardKpiStrip>;

export const Default: Story = {
  args: {
    items: [
      { value: "156", label: "Total employees" },
      { value: "12", label: "Pending approvals", badge: "+3" },
      { value: "98%", label: "On-time payroll", icon: <UsersIcon /> },
    ],
  },
};

export const FourCards: Story = {
  args: {
    items: [
      { value: "156", label: "Total employees" },
      { value: "12", label: "Pending approvals", badge: "+3" },
      { value: "98%", label: "On-time payroll" },
      { value: "£42k", label: "This month payroll" },
    ],
  },
};
