import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardCvcSection from './CardCvcSection';

const meta: Meta<typeof CardCvcSection> = {
  title: 'Components/CvcSection',
  component: CardCvcSection,
};

export default meta;
type Story = StoryObj<typeof CardCvcSection>;

export const Second: Story = {
  // render 함수를 통해 스토리북 안에서 상태(state)를 직접 관리합니다.
  render: () => {
    const [value, setValue] = useState('');

    return <CardCvcSection value={value} updateValue={setValue} />;
  },
};
