import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardPasswordSection from './CardPasswordSection';

const meta: Meta<typeof CardPasswordSection> = {
  title: 'Components/CardPasswordSection',
  component: CardPasswordSection,
};

export default meta;
type Story = StoryObj<typeof CardPasswordSection>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return <CardPasswordSection value={value} setValue={setValue} />;
  },
};

