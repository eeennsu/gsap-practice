import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

import GsapFromPage from '@pages/gsap/from';
import GsapFromToPage from '@pages/gsap/fromto';
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
      {
        path: '/gsapfrom',
        element: <GsapFromPage />,
      },
      {
        path: '/gsapfromto',
        element: <GsapFromToPage />,
      },
    ],
  },
];

const RouterProvider = () => {
  return <ReactRouterProvider router={createBrowserRouter(routerArray)} />;
};

export default RouterProvider;
