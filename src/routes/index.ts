import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { Checkout } from '../pages/Checkout'
import { NotFound } from '../pages/NotFound'
import { Success } from '../pages/Success'

export const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/checkout',
        Component: Checkout,
      },
      {
        path: '/success',
        Component: Success,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]
