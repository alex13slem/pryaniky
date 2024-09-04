import { createBrowserRouter } from 'react-router-dom';

import AuthPage from './auth';
import { authAction } from './auth/action';
import { authLoader } from './auth/loader';

import MainPage from './main';
import { mainLoader } from './main/loader';

import RootLayout from './root.layout';
import { rootLoader } from './root.loader';

import NotFoundPage from './404';



export const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    loader: rootLoader,
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        id: 'main',
        loader: mainLoader,
        element: <MainPage />,
      },
      {
        path: '/auth',
        id: 'auth',
        loader: authLoader,
        action: authAction,
        element: <AuthPage />,
      },
    ],
  },
]);
