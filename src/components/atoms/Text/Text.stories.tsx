import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["body", "caption", "label", "heading"],
    },
    as: {
      control: "select",
      options: ["span", "p", "label", "h1", "h2", "h3"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    children: "Body text with default styling.",
    variant: "body",
  },
};

export const Caption: Story = {
  args: {
    children: "Caption or secondary text",
    variant: "caption",
  },
};

export const Label: Story = {
  args: {
    children: "Label",
    variant: "label",
  },
};

export const Heading: Story = {
  args: {
    children: "Heading text",
    variant: "heading",
  },
};

export const AsHeading: Story = {
  args: {
    children: "Rendered as h1",
    variant: "heading",
    as: "h1",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text variant="heading" as="h2">
        Heading variant
      </Text>
      <Text variant="body">Body variant — default paragraph style.</Text>
      <Text variant="label">Label variant</Text>
      <Text variant="caption">Caption variant — smaller, muted.</Text>
    </div>
  ),
};
