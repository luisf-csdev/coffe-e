import { CartContextProvider } from './context/Cart/CartContext'
import { Router } from './routes/Router'

export function App() {
  return (
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  )
}
