import type { Meta, StoryObj } from '@storybook/react-vite';
import { cards } from '../../mocks/mockDB';
import CardList from './CardList/CardList';
import CardListEmpty from './CardListEmpty/CardListEmpty';
import CardListError from './CardListError/CardListError';
import CardListLoading from './CardListLoading/CardListLoading';
import CardListContainer from './CardListContainer';

const meta: Meta<typeof CardListContainer> = {
  title: 'Components/CardListContainer',
  component: CardListContainer,
};

export default meta;
type Story = StoryObj<typeof CardListContainer>;

export const List: Story = {
  args: {
    itemCount: cards.length,
    children: <CardList cardList={cards} onRefresh={() => {}} />,
  },
};

export const Empty: Story = {
  args: {
    itemCount: 0,
    children: <CardListEmpty />,
  },
};

export const Loading: Story = {
  args: {
    itemCount: null,
    children: <CardListLoading />,
  },
};

export const Error: Story = {
  args: {
    itemCount: null,
    children: <CardListError onRetry={() => {}} />,
  },
};
