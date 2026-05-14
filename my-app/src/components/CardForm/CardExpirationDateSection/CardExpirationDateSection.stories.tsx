import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardExpirationDateSection from './CardExpirationDateSection';

const meta: Meta<typeof CardExpirationDateSection> = {
  title: 'Components/CardExpirationDateSection',
  component: CardExpirationDateSection,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDateSection>;

export const Second: Story = {
  // render 함수를 통해 스토리북 안에서 상태(state)를 직접 관리합니다.
  render: () => {
    const [value, setValue] = useState({ month: '', year: '' });

    return <CardExpirationDateSection value={value} updateValue={setValue} />;
  },
};
