import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { SidebarUser } from "./SidebarUser";

const meta: Meta<typeof SidebarUser> = {
  title: "Molecules/SidebarUser",
  component: SidebarUser,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SidebarUser>;

export const Default: Story = {
  args: {
    avatar: <Avatar fallback="JD" />,
    name: "Jane Doe",
    role: "Admin",
  },
};

export const WithAction: Story = {
  args: {
    avatar: <Avatar fallback="JD" />,
    name: "Jane Doe",
    role: "Admin",
    action: (
      <IconButton variant="ghost" size="sm" aria-label="Open menu">
        <FaIcon icon={faEllipsisVertical} size="sm" />
      </IconButton>
    ),
  },
};

export const NoRole: Story = {
  args: {
    avatar: <Avatar fallback="BS" />,
    name: "Bob Smith",
  },
};
