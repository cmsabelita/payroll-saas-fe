import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListCard } from "./ListCard";

const meta: Meta<typeof ListCard> = {
  title: "Molecules/ListCard",
  component: ListCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ListCard>;

export const Default: Story = {
  args: {
    title: "Recent activity",
    children: (
      <ul className="divide-y divide-border px-4 py-2 text-sm">
        <li className="py-2">Item one</li>
        <li className="py-2">Item two</li>
        <li className="py-2">Item three</li>
      </ul>
    ),
  },
};

export const WithBadge: Story = {
  args: {
    title: "Pending",
    badge: "5",
    children: (
      <ul className="divide-y divide-border px-4 py-2 text-sm">
        <li className="py-2">Leave request from Jane</li>
        <li className="py-2">OT request from Bob</li>
      </ul>
    ),
  },
};

export const WithViewAll: Story = {
  args: {
    title: "Quick links",
    children: (
      <ul className="divide-y divide-border px-4 py-2 text-sm">
        <li className="py-2">Dashboard</li>
        <li className="py-2">Payroll</li>
      </ul>
    ),
    viewAllLabel: "View all",
    onClickViewAll: () => {},
  },
};
