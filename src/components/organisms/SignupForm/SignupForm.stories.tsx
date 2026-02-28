import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/atoms";
import { SignupForm } from "./SignupForm";

const meta: Meta<typeof SignupForm> = {
  title: "Organisms/SignupForm",
  component: SignupForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    onSubmit: { action: "submit" },
    signInHref: { control: "text" },
    socialButtons: { control: false },
    termsHref: { control: "text" },
    privacyHref: { control: "text" },
    isLoading: { control: "boolean" },
    error: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
    signInHref: "#",
    socialButtons: (
      <>
        <Button variant="outline" className="flex-1 justify-center py-2.5 text-sm">
          Google
        </Button>
        <Button variant="outline" className="flex-1 justify-center py-2.5 text-sm">
          Apple
        </Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[440px]">
        <Story />
      </div>
    ),
  ],
};

export const WithoutSocial: Story = {
  args: {
    ...Default.args,
    socialButtons: undefined,
  },
  decorators: Default.decorators,
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
  decorators: Default.decorators,
};
