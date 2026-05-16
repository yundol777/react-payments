import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter, Route, Routes } from 'react-router';
import SuccessPage from './SuccessPage';

const meta: Meta<typeof SuccessPage> = {
  title: 'Pages/SuccessPage',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SuccessPage>;

export const Default: Story = {
  render: () => (
    <MemoryRouter
      initialEntries={[
        {
          pathname: '/success',
          state: {
            firstNumber: '1234',
            issuer: '신한카드',
          },
        },
      ]}
    >
      <Routes>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </MemoryRouter>
  ),
};
