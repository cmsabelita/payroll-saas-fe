import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppLogoIcon, Box, Text } from "@/components/atoms";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

const meta: Meta<typeof ForgotPasswordForm> = {
  title: "Organisms/ForgotPasswordForm",
  component: ForgotPasswordForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false },
    onSubmit: { action: "submit" },
    backToSignInHref: { control: "text" },
    backToSignInLabel: { control: "text" },
    isLoading: { control: "boolean" },
    error: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ForgotPasswordForm>;

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
    backToSignInHref: "#",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "No account found with this email address.",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
