import { faGear } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon } from "@/components/atoms";
import { FormField, FormSection } from "@/components/molecules";
import { NavItem } from "@/components/molecules/NavItem";
import { SettingsLayout } from "./SettingsLayout";

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
    <NavItem label="Company" href="#" icon={<FaIcon icon={faGear} size="sm" />} active />
    <NavItem label="Payroll" href="#" icon={<FaIcon icon={faGear} size="sm" />} />
    <NavItem label="Holidays" href="#" icon={<FaIcon icon={faGear} size="sm" />} />
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
