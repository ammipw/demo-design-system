import type { Meta, StoryObj } from '@storybook/react-vite';

import Tab from './Tab';

const meta = {
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  args: {
    children: 'Tab',
    variant: 'pill',
    selected: false,
  }
};

export const Underline: Story = {
  args: {
    children: 'Tab',
    variant: 'underline',
    selected: false,
  }
};