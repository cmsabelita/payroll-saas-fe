import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalAttendanceStrip } from "./PortalAttendanceStrip";

const meta: Meta<typeof PortalAttendanceStrip> = {
  title: "Organisms/PortalAttendanceStrip",
  component: PortalAttendanceStrip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalAttendanceStrip>;

const defaultDays = [
  { dayLabel: "Mon", timeIn: "8:01", status: "on-time" as const },
  { dayLabel: "Tue", timeIn: "8:04", status: "on-time" as const },
  { dayLabel: "Wed", timeIn: "8:23", status: "late" as const },
  { dayLabel: "Thu", timeIn: "7:58", status: "on-time" as const },
  { dayLabel: "Fri", status: "pending" as const },
];

export const Default: Story = {
  args: {
    weekLabel: "Feb 24–28, 2026",
    days: defaultDays,
    todayLabel: "Today — February 27 (Thursday)",
    todayDetail: "Time-in: 7:58 AM · Working",
    onTimeOut: () => {},
    viewAllHref: "#",
  },
};
