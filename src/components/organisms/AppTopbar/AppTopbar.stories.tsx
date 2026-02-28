import { faBell } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Button, FaIcon, IconButton } from "@/components/atoms";
import { DateRangeTrigger } from "@/components/molecules/DateRangeTrigger";
import { AppTopbar } from "./AppTopbar";

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
          <FaIcon icon={faBell} size="sm" />
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
          <FaIcon icon={faBell} size="sm" />
        </IconButton>
        <Avatar size="sm" fallback="JD" />
      </>
    ),
  },
};
