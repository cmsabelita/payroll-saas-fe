import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/atoms";
import NextLink from "next/link";
import { EmployeeEditHeader } from "./EmployeeEditHeader";

const meta: Meta<typeof EmployeeEditHeader> = {
  title: "Organisms/EmployeeEditHeader",
  component: EmployeeEditHeader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditHeader>;

export const Default: Story = {
  args: {
    displayName: "Ana Reyes",
    subtitle: "EMP-00042 · HR Manager",
    avatar: <Avatar size="lg" fallback="AR" />,
    onChangePhoto: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditHeader {...args} />
    </div>
  ),
};

export const WithBackLink: Story = {
  args: {
    displayName: "Ana Reyes",
    subtitle: "EMP-00042 · HR Manager",
    avatar: <Avatar size="lg" fallback="AR" />,
    onChangePhoto: () => {},
    backLink: (
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <NextLink href="/employees" className="hover:text-foreground">
          Employees
        </NextLink>
        <span aria-hidden>›</span>
        <span className="text-foreground font-medium">Ana Reyes · Edit</span>
      </nav>
    ),
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditHeader {...args} />
    </div>
  ),
};

export const NoSubtitle: Story = {
  args: {
    displayName: "Juan dela Cruz",
    avatar: <Avatar size="lg" fallback="JC" />,
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditHeader {...args} />
    </div>
  ),
};
