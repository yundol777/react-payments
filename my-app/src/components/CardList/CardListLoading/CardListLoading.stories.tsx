import type { Meta, StoryObj } from '@storybook/react-vite';
import CardListLoading from './CardListLoading';

const meta: Meta<typeof CardListLoading> = {
  title: 'Components/CardListLoading',
  component: CardListLoading,
};

export default meta;
type Story = StoryObj<typeof CardListLoading>;

export const Default: Story = {};
