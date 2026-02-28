import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon } from "@/components/atoms";
import { NavItem } from "./NavItem";

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
    icon: <FaIcon icon={faGaugeHigh} size="sm" />,
    label: "Dashboard",
    href: "#",
  },
};

export const AsButton: Story = {
  args: {
    icon: <FaIcon icon={faGaugeHigh} size="sm" />,
    label: "Settings",
    onClick: () => {},
  },
};

export const Active: Story = {
  args: {
    icon: <FaIcon icon={faGaugeHigh} size="sm" />,
    label: "Dashboard",
    href: "#",
    active: true,
  },
};

export const WithBadge: Story = {
  args: {
    icon: <FaIcon icon={faGaugeHigh} size="sm" />,
    label: "Approvals",
    href: "#",
    badge: "3",
  },
};
