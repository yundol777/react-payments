import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardIssuerSection from './CardIssuerSection';

const meta: Meta<typeof CardIssuerSection> = {
  title: 'Components/CardIssuerSection',
  component: CardIssuerSection,
};

export default meta;
type Story = StoryObj<typeof CardIssuerSection>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return <CardIssuerSection value={value} updateValue={setValue} />;
  },
};
