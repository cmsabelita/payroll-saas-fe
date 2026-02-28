import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppLogoIcon, Box, Button, Text } from "@/components/atoms";
import { VerifyEmailScreen } from "./VerifyEmailScreen";

const meta: Meta<typeof VerifyEmailScreen> = {
  title: "Organisms/VerifyEmailScreen",
  component: VerifyEmailScreen,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false },
    email: { control: "text" },
    onResend: { action: "resend" },
    expiresIn: { control: "text" },
    secondaryActions: { control: false },
    backToSignInHref: { control: "text" },
    isResending: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof VerifyEmailScreen>;

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
    email: "mark@acme.com",
    onResend: () => {},
    expiresIn: "Link expires in 23:47",
    secondaryActions: (
      <>
        <Button variant="outline" className="flex-1 justify-center py-2.5 text-sm">
          Open Gmail
        </Button>
        <Button variant="outline" className="flex-1 justify-center py-2.5 text-sm">
          Open Outlook
        </Button>
      </>
    ),
  },
};

export const Minimal: Story = {
  args: {
    logo: defaultLogo,
    email: "user@example.com",
    onResend: () => {},
    backToSignInHref: "#",
  },
};
