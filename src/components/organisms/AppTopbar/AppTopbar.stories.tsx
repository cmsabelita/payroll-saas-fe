import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Button, IconButton } from "@/components/atoms";
import { DateRangeTrigger } from "@/components/molecules/DateRangeTrigger";
import { AppTopbar } from "./AppTopbar";

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const meta: Meta<typeof AppTopbar> = {
  title: "Organisms/AppTopbar",
  component: AppTopbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Page or section title",
    },
    subtitle: {
      control: "text",
      description: "Optional subtitle below the title",
    },
    primaryAction: {
      control: false,
      description: "Optional primary CTA (e.g. Button)",
      table: { type: { summary: "ReactNode" } },
    },
    dateRangeTrigger: {
      control: false,
      description: "Optional date range trigger (e.g. DateRangeTrigger)",
      table: { type: { summary: "ReactNode" } },
    },
    trailing: {
      control: false,
      description: "Optional trailing area (e.g. IconButton + Avatar)",
      table: { type: { summary: "ReactNode" } },
    },
    className: {
      control: "text",
      description: "Optional root class name",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppTopbar>;

export const Default: Story = {
  args: {
    title: "Dashboard",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Employees",
    subtitle: "Manage your team and payroll",
  },
};

export const WithPrimaryAction: Story = {
  args: {
    title: "Pay runs",
    subtitle: "February 2025",
    primaryAction: <Button size="sm">Run payroll</Button>,
  },
};

export const WithDateRangeAndTrailing: Story = {
  args: {
    title: "Dashboard",
    subtitle: "Overview",
    dateRangeTrigger: (
      <DateRangeTrigger label="Last 30 days" onClick={() => {}} />
    ),
    trailing: (
      <>
        <IconButton variant="ghost" size="sm" aria-label="Notifications">
          <BellIcon />
        </IconButton>
        <Avatar size="sm" fallback="JD" />
      </>
    ),
  },
};

export const Full: Story = {
  args: {
    title: "Approvals",
    subtitle: "3 pending requests",
    primaryAction: <Button size="sm">Approve all</Button>,
    dateRangeTrigger: (
      <DateRangeTrigger label="This week" onClick={() => {}} />
    ),
    trailing: (
      <>
        <IconButton variant="ghost" size="sm" aria-label="Notifications">
          <BellIcon />
        </IconButton>
        <Avatar size="sm" fallback="JD" />
      </>
    ),
  },
};
