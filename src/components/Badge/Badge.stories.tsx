import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';

const meta = {
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: 'Badge',
    variant: 'neutral',
  }
};

export const Positive: Story = {
  args: {
    children: 'Badge',
    variant: 'positive',
  }
};

export const Negative: Story = {
  args: {
    children: 'Badge',
    variant: 'negative',
  }
};