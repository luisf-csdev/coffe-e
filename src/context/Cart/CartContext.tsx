import { ReactNode, createContext, useContext, useReducer } from 'react'
import {
  CartCoffee,
  CartState,
  cartInitialState,
  cartReducer,
} from '../../reducers/cart'
import {
  removeCartItemAction,
  upsertCartItemAction,
} from '../../reducers/cart/actions'

interface CartContextType extends CartState {
  upsertCartItem: (item: CartCoffee) => void
  removeCartItem: (item: CartCoffee) => void
}

const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartInitialState,
    (initialState) => {
      return initialState
    },
  )

  function upsertCartItem(item: CartCoffee) {
    dispatch(upsertCartItemAction(item))
  }

  function removeCartItem(item: CartCoffee) {
    dispatch(removeCartItemAction(item))
  }

  const { products } = cartState

  return (
    <CartContext.Provider value={{ products, upsertCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
