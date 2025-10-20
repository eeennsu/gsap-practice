import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

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
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/gsap-to',
        element: <GsapToPage />,
      },
      {
        path: '/gsap-from',
        element: <GsapFromPage />,
      },
      {
        path: '/gsap-fromto',
        element: <GsapFromToPage />,
      },
      {
        path: '/gsap-timeline',
        element: <GsapTimelinePage />,
      },
      {
        path: '/gsap-stagger',
        element: <GsapStaggerPage />,
      },
      {
        path: '/gsap-scrolltrigger',
        element: <GsapScrollTriggerPage />,
      },
      {
        path: '/gsap-text',
        element: <GsapTextPage />,
      },
    ],
  },
];

const RouterProvider = () => {
  return <ReactRouterProvider router={createBrowserRouter(routerArray)} />;
};

export default RouterProvider;
