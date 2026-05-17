import type { Meta, StoryObj } from '@storybook/react-vite';
import { cards } from '../../../mocks/mockDB';
import CardList from './CardList';

const meta: Meta<typeof CardList> = {
  title: 'Components/CardListContainer/CardList',
  component: CardList,
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {
    cardList: cards,
  },
};
