import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppLogoIcon, Box, Text } from "@/components/atoms";
import { ResetPasswordForm } from "./ResetPasswordForm";

const meta: Meta<typeof ResetPasswordForm> = {
  title: "Organisms/ResetPasswordForm",
  component: ResetPasswordForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false },
    onSubmit: { action: "submit" },
    signInHref: { control: "text" },
    requirements: { control: false },
    isLoading: { control: "boolean" },
    error: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ResetPasswordForm>;

const defaultLogo = (
  <Box className="flex items-center gap-2">
    <Box className="flex size-7 items-center justify-center rounded-lg bg-primary">
      <AppLogoIcon size="sm" className="text-primary-foreground" />
    </Box>
    <Text variant="label" as="span" className="text-lg font-semibold tracking-tight">
      Payro
    </Text>
  </Box>
);

export const Default: Story = {
  args: {
    logo: defaultLogo,
    onSubmit: () => {},
    requirements: [
      { label: "At least 8 characters", met: true },
      { label: "One uppercase letter", met: true },
      { label: "One number", met: false },
      { label: "One special character", met: false },
    ],
  },
};

export const AllRequirementsMet: Story = {
  args: {
    ...Default.args,
    requirements: [
      { label: "At least 8 characters", met: true },
      { label: "One uppercase letter", met: true },
      { label: "One number", met: true },
      { label: "One special character", met: true },
    ],
  },
};
