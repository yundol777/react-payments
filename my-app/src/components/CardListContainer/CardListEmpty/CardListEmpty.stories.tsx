import type { Meta, StoryObj } from '@storybook/react-vite';
import CardListEmpty from './CardListEmpty';

const meta: Meta<typeof CardListEmpty> = {
  title: 'Components/CardListContainer/CardListEmpty',
  component: CardListEmpty,
};

export default meta;
type Story = StoryObj<typeof CardListEmpty>;

export const Default: Story = {};
