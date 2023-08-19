import { createBrowserRouter } from 'react-router-dom';
import HomePageView from '../views/HomePageView';
import type { RouteObject } from 'react-router';
import App from '../App';
const routes:RouteObject[] = [
    {
      path: '/',
      element: <App />,
      children: [
            {
                path: '/',
                element: <HomePageView />
            }
        ]
    }
  ]

const router = createBrowserRouter(routes);

export default router;
