import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CvcSection from './CvcSection';

const meta: Meta<typeof CvcSection> = {
  title: 'Components/CvcSection',
  component: CvcSection,
};

export default meta;
type Story = StoryObj<typeof CvcSection>;

export const Second: Story = {
  // render 함수를 통해 스토리북 안에서 상태(state)를 직접 관리합니다.
  render: () => {
    const [value, setValue] = useState('');

    return <CvcSection value={value} updateValue={setValue} />;
  },
};
