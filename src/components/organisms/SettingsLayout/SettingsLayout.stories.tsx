import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField, FormSection } from "@/components/molecules";
import { NavItem } from "@/components/molecules/NavItem";
import { SettingsLayout } from "./SettingsLayout";

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const meta: Meta<typeof SettingsLayout> = {
  title: "Organisms/SettingsLayout",
  component: SettingsLayout,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    nav: { control: false },
    children: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SettingsLayout>;

const navItems = (
  <nav className="flex flex-col gap-0.5">
    <NavItem label="Company" href="#" icon={<SettingsIcon />} active />
    <NavItem label="Payroll" href="#" icon={<SettingsIcon />} />
    <NavItem label="Holidays" href="#" icon={<SettingsIcon />} />
  </nav>
);

export const Default: Story = {
  args: {
    nav: navItems,
    children: (
      <>
        <FormSection title="Company details">
          <FormField label="Company name" placeholder="Acme Inc" />
          <FormField label="Tax ID" placeholder="12-3456789" />
        </FormSection>
        <FormSection title="Billing">
          <FormField label="Email" type="email" placeholder="billing@acme.com" />
        </FormSection>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};
