import { faGear } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon, IconButton } from "@/components/atoms";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    "aria-label": "Action",
    children: <FaIcon icon={faGear} size="md" />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton size="sm" aria-label="Small">
        <FaIcon icon={faGear} size="sm" />
      </IconButton>
      <IconButton size="md" aria-label="Medium">
        <FaIcon icon={faGear} size="md" />
      </IconButton>
      <IconButton size="lg" aria-label="Large">
        <FaIcon icon={faGear} size="lg" />
      </IconButton>
    </div>
  ),
};
