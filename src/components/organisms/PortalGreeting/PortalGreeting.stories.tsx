import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalGreeting } from "./PortalGreeting";

const meta: Meta<typeof PortalGreeting> = {
  title: "Organisms/PortalGreeting",
  component: PortalGreeting,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalGreeting>;

export const Default: Story = {
  args: {
    dateLabel: "Thursday, February 27, 2026",
    title: "Good morning, Juan 👋",
    subtitle: "Here's what's happening with your account today.",
    quickActions: [
      { label: "Log Attendance", variant: "primary", onClick: () => {} },
      { label: "Apply Leave", variant: "secondary", onClick: () => {} },
      { label: "File OT", variant: "secondary", onClick: () => {} },
    ],
  },
};

export const NoActions: Story = {
  args: {
    dateLabel: "Friday, February 28, 2026",
    title: "Good afternoon, Maria",
    subtitle: "Welcome back.",
  },
};
