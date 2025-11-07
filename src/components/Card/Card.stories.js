import { Card } from './Card';

export default {
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

export const Default = {
  args: {
    title: 'Default Card',
    content: 'This is a default card styled with Tailwind CSS.',
    variant: 'default',
  },
};

export const Primary = {
  args: {
    title: 'Primary Card',
    content: 'This is a primary card with blue styling.',
    variant: 'primary',
  },
};

export const Success = {
  args: {
    title: 'Success Card',
    content: 'This is a success card with green styling.',
    variant: 'success',
  },
};
