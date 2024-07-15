import { ReactNode, createContext, useContext, useReducer } from 'react'
import {
  CartCoffee,
  CartPaymentMethod,
  CartState,
  cartInitialState,
  cartReducer,
} from '../../reducers/cart'
import {
  removeCartItemAction,
  selectCartPaymentMethodAction,
  upsertCartItemAction,
} from '../../reducers/cart/actions'

interface CartContextType extends CartState {
  upsertCartItem: (item: CartCoffee) => void
  removeCartItem: (item: CartCoffee) => void
  selectCartPaymentMethod: (payment: CartPaymentMethod) => void
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

  function selectCartPaymentMethod(payment: CartPaymentMethod) {
    dispatch(selectCartPaymentMethodAction(payment))
  }

  const { products, paymentMethod } = cartState

  return (
    <CartContext.Provider
      value={{
        products,
        paymentMethod,
        upsertCartItem,
        removeCartItem,
        selectCartPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
