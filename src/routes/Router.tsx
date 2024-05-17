import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '.'

const router = createBrowserRouter(routes)

export function Router() {
  return <RouterProvider router={router} />
}
