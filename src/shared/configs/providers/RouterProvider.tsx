import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

import GsapToPage from '@pages/gsapTo';

import AppLayout from '@widgets/layout';

const routerArray: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <GsapToPage />,
      },
    ],
  },
];

const RouterProvider = () => {
  return <ReactRouterProvider router={createBrowserRouter(routerArray)} />;
};

export default RouterProvider;
