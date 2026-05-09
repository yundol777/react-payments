import type { Meta, StoryObj } from '@storybook/react-vite';
import SubmitButtonSection from './SubmitButtonSection';

const meta: Meta<typeof SubmitButtonSection> = {
  title: 'Components/SubmitButtonSection',
  component: SubmitButtonSection,
};

export default meta;
type Story = StoryObj<typeof SubmitButtonSection>;

export const Enabled: Story = {
  args: {
    cardNumber: '12312312',
    cardExpirationDate: { month: '12', year: '30' },
    cardCvc: '123',
    cardIssuer: '신한카드',
    cardPassword: '12',
  },
};

export const Disabled: Story = {
  args: {
    cardNumber: '1234123',
    cardExpirationDate: { month: '12', year: '30' },
    cardCvc: '123',
    cardIssuer: '신한카드',
    cardPassword: '12',
  },
};
