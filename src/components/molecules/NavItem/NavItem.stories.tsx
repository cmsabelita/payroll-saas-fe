import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavItem } from "./NavItem";

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const meta: Meta<typeof NavItem> = {
  title: "Molecules/NavItem",
  component: NavItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const AsLink: Story = {
  args: {
    icon: <DashboardIcon />,
    label: "Dashboard",
    href: "#",
  },
};

export const AsButton: Story = {
  args: {
    icon: <DashboardIcon />,
    label: "Settings",
    onClick: () => {},
  },
};

export const Active: Story = {
  args: {
    icon: <DashboardIcon />,
    label: "Dashboard",
    href: "#",
    active: true,
  },
};

export const WithBadge: Story = {
  args: {
    icon: <DashboardIcon />,
    label: "Approvals",
    href: "#",
    badge: "3",
  },
};
