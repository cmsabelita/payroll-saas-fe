import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmployeeEditAccessSection } from "./EmployeeEditAccessSection";

const meta: Meta<typeof EmployeeEditAccessSection> = {
  title: "Organisms/EmployeeEditAccessSection",
  component: EmployeeEditAccessSection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditAccessSection>;

export const Default: Story = {
  args: {
    defaultValues: {
      portalEnabled: true,
      loginEmail: "ana.reyes@acmecorp.com",
      adminRole: "hr_admin",
    },
    lastLogin: "Feb 28, 2026 at 9:14 AM",
    onSubmit: () => {},
    onResetPassword: () => {},
    onResendWelcomeEmail: () => {},
    onRevokeAccess: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditAccessSection {...args} />
    </div>
  ),
};

export const PortalDisabled: Story = {
  args: {
    defaultValues: {
      portalEnabled: false,
      loginEmail: "juan.delacruz@acmecorp.com",
      adminRole: "none",
    },
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditAccessSection {...args} />
    </div>
  ),
};
