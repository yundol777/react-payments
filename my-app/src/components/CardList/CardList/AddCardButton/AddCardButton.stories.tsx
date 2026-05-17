import type { Meta, StoryObj } from '@storybook/react-vite';
import AddCardButton from './AddCardButton';

const meta: Meta<typeof AddCardButton> = {
  title: 'Components/CardAddButton',
  component: AddCardButton,
};

export default meta;
type Story = StoryObj<typeof AddCardButton>;

export const Default: Story = {};
