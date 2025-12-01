import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "neutral",
  },
};
