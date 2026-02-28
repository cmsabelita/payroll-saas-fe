import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "@/components/molecules";
import { FormSection } from "./FormSection";

const meta: Meta<typeof FormSection> = {
  title: "Molecules/FormSection",
  component: FormSection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: false, table: { type: { summary: "ReactNode" } } },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof FormSection>;

export const Default: Story = {
  args: {
    title: "Company details",
    children: (
      <>
        <FormField label="Company name" placeholder="Acme Inc" />
        <FormField label="Tax ID" placeholder="12-3456789" />
        <FormField label="Email" placeholder="billing@acme.com" type="email" />
      </>
    ),
  },
};
