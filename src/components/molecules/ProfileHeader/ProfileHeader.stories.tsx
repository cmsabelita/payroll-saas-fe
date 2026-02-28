import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Badge, Button } from "@/components/atoms";
import { ProfileHeader } from "./ProfileHeader";

const meta: Meta<typeof ProfileHeader> = {
  title: "Molecules/ProfileHeader",
  component: ProfileHeader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProfileHeader>;

export const Default: Story = {
  args: {
    avatar: <Avatar fallback="JD" />,
    name: "Jane Doe",
    subtitle: "Engineering · Full-time",
  },
};

export const WithBadges: Story = {
  args: {
    avatar: <Avatar fallback="JD" />,
    name: "Jane Doe",
    badges: (
      <>
        <Badge variant="secondary">Admin</Badge>
        <Badge variant="outline">Active</Badge>
      </>
    ),
    subtitle: "Engineering · Full-time",
  },
};

export const WithActions: Story = {
  args: {
    avatar: <Avatar fallback="JD" />,
    name: "Jane Doe",
    subtitle: "jane.doe@company.com",
    actions: (
      <>
        <Button variant="outline" size="sm">
          Edit profile
        </Button>
      </>
    ),
  },
};
