import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon } from "@/components/atoms";
import { PortalRequestsList } from "./PortalRequestsList";

const meta: Meta<typeof PortalRequestsList> = {
  title: "Organisms/PortalRequestsList",
  component: PortalRequestsList,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalRequestsList>;

const defaultItems = [
  {
    title: "Vacation Leave",
    status: "Pending",
    statusVariant: "warning" as const,
    detail: "Feb 10–14, 2026",
    icon: <FaIcon icon={faCalendarDays} size="sm" />,
  },
  {
    title: "OT Request",
    status: "Approved",
    statusVariant: "success" as const,
    detail: "Feb 20, 2026 · 2 hrs",
    icon: <FaIcon icon={faCalendarDays} size="sm" />,
  },
];

export const Default: Story = {
  args: {
    actions: [
      { label: "Apply Leave", variant: "primary", onClick: () => {} },
      { label: "File OT", variant: "secondary", onClick: () => {} },
    ],
    items: defaultItems,
    viewAllHref: "#",
  },
};
