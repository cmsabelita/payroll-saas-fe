import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/atoms";
import { PendingApprovalRow } from "./PendingApprovalRow";

const meta: Meta<typeof PendingApprovalRow> = {
  title: "Molecules/PendingApprovalRow",
  component: PendingApprovalRow,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PendingApprovalRow>;

const avatar = <Avatar fallback="JD" />;

export const Default: Story = {
  args: {
    avatar,
    primaryText: "Jane Doe",
    secondaryText: "Leave request · Jan 15",
    badge: "Pending",
  },
};

export const Clickable: Story = {
  args: {
    avatar,
    primaryText: "Bob Smith",
    secondaryText: "OT request · Jan 14",
    badge: "Pending",
    onClick: () => {},
  },
};

export const NoBadge: Story = {
  args: {
    avatar,
    primaryText: "Alice Wong",
    secondaryText: "Attendance correction",
  },
};
