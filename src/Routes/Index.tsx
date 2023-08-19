import { createBrowserRouter } from 'react-router-dom';
import HomePageView from '../views/HomePageView';
import type { RouteObject } from 'react-router';
import DataGridView from '../views/DataGridView';
import App from '../App';
import PrivateRoute from './PrivateRoute';
const routes:RouteObject[] = [
    {
      path: '/',
      element: <App />,
      children: [
            {
                path: '/',
                element: <HomePageView />
            },
            {
              path:'/datagrid',
              element:<PrivateRoute><DataGridView/></PrivateRoute>
            }
        ]
    }
  ]

const router = createBrowserRouter(routes);

export default router;
