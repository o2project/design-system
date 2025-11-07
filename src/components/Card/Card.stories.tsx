import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is a default card styled with Tailwind CSS.',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    title: 'Primary Card',
    content: 'This is a primary card with blue styling.',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    title: 'Success Card',
    content: 'This is a success card with beige styling.',
    variant: 'success',
  },
};
