import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon } from "@/components/atoms";
import { SocialLoginButtons } from "./SocialLoginButtons";

const meta: Meta<typeof SocialLoginButtons> = {
  title: "Molecules/SocialLoginButtons",
  component: SocialLoginButtons,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SocialLoginButtons>;

export const Default: Story = {
  args: {
    buttons: [
      { label: "Sign in with Google", icon: <FaIcon icon={faGoogle} size="md" className="size-5" />, onClick: () => {} },
      { label: "Sign in with Apple", icon: <FaIcon icon={faApple} size="md" className="size-5 text-foreground" />, onClick: () => {} },
    ],
  },
};

export const Single: Story = {
  args: {
    buttons: [
      { label: "Sign in with Google", icon: <FaIcon icon={faGoogle} size="md" className="size-5" />, onClick: () => {} },
    ],
  },
};
