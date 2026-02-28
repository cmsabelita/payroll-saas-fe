import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { KpiCard } from "./KpiCard";

const meta: Meta<typeof KpiCard> = {
  title: "Molecules/KpiCard",
  component: KpiCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof KpiCard>;

export const Default: Story = {
  args: {
    value: "156",
    label: "Total employees",
  },
};

export const WithBadge: Story = {
  args: {
    value: "12",
    label: "Pending approvals",
    badge: "+3",
  },
};

export const WithIcon: Story = {
  args: {
    value: "98%",
    label: "On-time payroll",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="size-5"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
      </svg>
    ),
  },
};
