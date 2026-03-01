import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalLeaveBalances } from "./PortalLeaveBalances";

const meta: Meta<typeof PortalLeaveBalances> = {
  title: "Organisms/PortalLeaveBalances",
  component: PortalLeaveBalances,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalLeaveBalances>;

export const Default: Story = {
  args: {
    items: [
      { name: "Vacation Leave", used: 8.5, total: 15, variant: "primary" },
      { name: "Sick Leave", used: 12, total: 15, variant: "info" },
      { name: "Emergency Leave", used: 3, total: 3, variant: "secondary" },
      { name: "Birthday Leave", used: 0, total: 1 },
    ],
    applyLeaveHref: "/portal/requests/leave/new",
  },
};

export const WithoutApplyButton: Story = {
  args: {
    items: [
      { name: "Vacation Leave", used: 5, total: 15 },
      { name: "Sick Leave", used: 10, total: 15, variant: "info" },
    ],
  },
};
