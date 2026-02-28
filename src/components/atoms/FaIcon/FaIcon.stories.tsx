import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon } from "./FaIcon";

const meta: Meta<typeof FaIcon> = {
  title: "Atoms/FaIcon",
  component: FaIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FaIcon>;

export const Default: Story = {
  args: { icon: faEnvelope },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <FaIcon icon={faEnvelope} size="xs" />
      <FaIcon icon={faEnvelope} size="sm" />
      <FaIcon icon={faEnvelope} size="md" />
      <FaIcon icon={faEnvelope} size="lg" />
    </div>
  ),
};

export const WithClassName: Story = {
  args: {
    icon: faEnvelope,
    size: "lg",
    className: "text-primary",
  },
};
