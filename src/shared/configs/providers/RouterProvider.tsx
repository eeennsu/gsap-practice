import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

import GsapToPage from '@pages/gsap/to';
import HomePage from '@pages/home';

import AppLayout from '@widgets/layout';

const routerArray: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/gsapto',
        element: <GsapToPage />,
      },
    ],
  },
];

const RouterProvider = () => {
  return <ReactRouterProvider router={createBrowserRouter(routerArray)} />;
};

export default RouterProvider;
