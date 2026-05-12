import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { SelectedCardIssuer } from '../../../constants/cardIssuer';
import CardIssuerSection from './CardIssuerSection';

const meta: Meta<typeof CardIssuerSection> = {
  title: 'Components/CardIssuerSection',
  component: CardIssuerSection,
};

export default meta;
type Story = StoryObj<typeof CardIssuerSection>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<SelectedCardIssuer>('');

    return <CardIssuerSection value={value} updateValue={setValue} />;
  },
};
