import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { EmployeeNewWizardFormValues } from "./EmployeeNewWizard.types";
import { EmployeeNewWizard } from "./EmployeeNewWizard";

const meta: Meta<typeof EmployeeNewWizard> = {
  title: "Organisms/EmployeeNewWizard",
  component: EmployeeNewWizard,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeNewWizard>;

export const Default: Story = {
  args: {
    onSubmit: (data: EmployeeNewWizardFormValues) => {
      void data;
    },
    onCancel: () => {},
  },
};
