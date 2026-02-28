import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, IconButton } from "@/components/atoms";
import { SidebarUser } from "./SidebarUser";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
  </svg>
);

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
        <MenuIcon />
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
