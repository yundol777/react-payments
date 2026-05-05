import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import AddCardPage from './pages/AddCardPage/AddCardPage.tsx';
import SuccessPage from './pages/SuccessPage/SuccessPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<AddCardPage />} />
      <Route path="success" element={<SuccessPage />} />
    </Route>,
  ),
  {
    basename: '/react-payments/',
  },
);

const root = document.getElementById('root');

createRoot(root!).render(<RouterProvider router={router} />);
