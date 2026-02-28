import { faMagnifyingGlass, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaIcon, IconButton, Input, Label } from "@/components/atoms";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter value",
    size: "md",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Label htmlFor="input-email">Email</Label>
      <Input id="input-email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    placeholder: "Invalid value",
    error: true,
    defaultValue: "bad@",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const WithAdornments: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-1">
        <Label htmlFor="search">Search (left icon)</Label>
        <Input
          id="search"
          type="search"
          placeholder="Search..."
          leftAdornment={<FaIcon icon={faMagnifyingGlass} size="sm" />}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="password">Password (right toggle)</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          rightAdornment={
            <IconButton
              variant="ghost"
              size="sm"
              aria-label="Toggle password visibility"
            >
              <FaIcon icon={faEye} size="sm" />
            </IconButton>
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="both">Both sides</Label>
        <Input
          id="both"
          placeholder="With both adornments"
          leftAdornment={<FaIcon icon={faMagnifyingGlass} size="sm" />}
          rightAdornment={
            <IconButton variant="ghost" size="sm" aria-label="Clear">
              <FaIcon icon={faXmark} size="sm" />
            </IconButton>
          }
        />
      </div>
    </div>
  ),
};
