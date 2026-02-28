import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InviteMemberForm } from "./InviteMemberForm";

const meta: Meta<typeof InviteMemberForm> = {
  title: "Organisms/InviteMemberForm",
  component: InviteMemberForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    roles: { control: false },
    defaultRoleId: { control: "text" },
    onSubmit: { action: "submit" },
    cancelHref: { control: "text" },
    isLoading: { control: "boolean" },
    error: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof InviteMemberForm>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
    cancelHref: "#",
  },
};

export const WithDefaultRole: Story = {
  args: {
    ...Default.args,
    defaultRoleId: "hr",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "This email is already invited.",
  },
};
