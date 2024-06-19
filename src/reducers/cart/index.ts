import { WritableDraft, produce } from 'immer'
import { Coffee } from '../../types/coffee'
import { CartAction } from './actions'

export interface CartCoffee extends Coffee {
  quantity: number
}

interface CartAddress {
  zip: string
  street: string
  streetNumber: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

type CartPaymentMethod = 'credit' | 'debit' | 'money'

export interface CartState {
  products: CartCoffee[]
  address?: CartAddress
  paymentMethod?: CartPaymentMethod
}

export const cartInitialState: CartState = {
  products: [],
}

function findExistingItemOnCart(
  action: CartAction,
  products: WritableDraft<CartCoffee[]>,
) {
  const item = action.payload!.item
  const existingItem = products.find((product) => product.title === item.title)
  return { existingItem, item }
}

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'UPSERT_ITEM':
      return produce(state, (draft) => {
        const { existingItem, item } = findExistingItemOnCart(
          action,
          draft.products,
        )

        if (!existingItem) {
          draft.products.push(item)
          return
        }

        existingItem.quantity = item.quantity
      })

    case 'REMOVE_ITEM':
      return produce(state, (draft) => {
        const item = action.payload!.item

        draft.products = draft.products.filter((product) => {
          return product.title !== item.title
        })
      })

    default:
      return state
  }
}
