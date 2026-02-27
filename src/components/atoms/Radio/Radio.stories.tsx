import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: "option",
    value: "a",
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="choice" value="one" />
        <span className="text-sm">Option one</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="choice" value="two" defaultChecked />
        <span className="text-sm">Option two</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio name="choice" value="three" />
        <span className="text-sm">Option three</span>
      </label>
    </div>
  ),
};
