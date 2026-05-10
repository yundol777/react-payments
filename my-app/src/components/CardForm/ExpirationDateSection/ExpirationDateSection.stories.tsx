import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import ExpirationDateSection from './ExpirationDateSection';

const meta: Meta<typeof ExpirationDateSection> = {
  title: 'Components/ExpirationDateSection',
  component: ExpirationDateSection,
};

export default meta;
type Story = StoryObj<typeof ExpirationDateSection>;

export const Second: Story = {
  // render 함수를 통해 스토리북 안에서 상태(state)를 직접 관리합니다.
  render: () => {
    const [value, setValue] = useState({ month: '', year: '' });

    return <ExpirationDateSection value={value} updateValue={setValue} />;
  },
};
