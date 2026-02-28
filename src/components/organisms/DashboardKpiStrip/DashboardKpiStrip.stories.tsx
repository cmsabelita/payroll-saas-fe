import { faUsers } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon } from "@/components/atoms";
import { DashboardKpiStrip } from "./DashboardKpiStrip";

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
      { value: "98%", label: "On-time payroll", icon: <FaIcon icon={faUsers} size="sm" /> },
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
