import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

import GsapHomePage from '@pages/gsap';
import GsapFromPage from '@pages/gsap/from';
import GsapFromToPage from '@pages/gsap/fromto';
import GsapScrollTriggerPage from '@pages/gsap/scrollTrigger';
import GsapStaggerPage from '@pages/gsap/stagger';
import GsapTextPage from '@pages/gsap/text';
import GsapTimelinePage from '@pages/gsap/timeline';
import GsapToPage from '@pages/gsap/to';
import HomePage from '@pages/home';

import AppLayout from '@widgets/layout';

const routerArray: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'gsap',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <GsapHomePage />,
          },
          {
            path: 'to',
            element: <GsapToPage />,
          },
          {
            path: 'from',
            element: <GsapFromPage />,
          },
          {
            path: 'fromto',
            element: <GsapFromToPage />,
          },
          {
            path: 'timeline',
            element: <GsapTimelinePage />,
          },
          {
            path: 'stagger',
            element: <GsapStaggerPage />,
          },
          {
            path: 'scrolltrigger',
            element: <GsapScrollTriggerPage />,
          },
          {
            path: 'text',
            element: <GsapTextPage />,
          },
        ],
      },
    ],
  },
];

const RouterProvider = () => {
  return <ReactRouterProvider router={createBrowserRouter(routerArray)} />;
};

export default RouterProvider;
