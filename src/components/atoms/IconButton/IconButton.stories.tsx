import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, IconButton } from "@/components/atoms";

const SampleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

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
    children: (
      <Icon size="md">
        <SampleIcon />
      </Icon>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton size="sm" aria-label="Small">
        <Icon size="sm">
          <SampleIcon />
        </Icon>
      </IconButton>
      <IconButton size="md" aria-label="Medium">
        <Icon size="md">
          <SampleIcon />
        </Icon>
      </IconButton>
      <IconButton size="lg" aria-label="Large">
        <Icon size="lg">
          <SampleIcon />
        </Icon>
      </IconButton>
    </div>
  ),
};
