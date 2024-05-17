import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { Cart } from '../pages/Cart'
import { NotFound } from '../pages/NotFound'

export const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/cart',
        Component: Cart,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]
