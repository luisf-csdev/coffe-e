import { CartCoffee } from '.'

export type CartActionType = 'UPSERT_ITEM' | 'REMOVE_ITEM'

export interface CartAction {
  type: CartActionType
  payload?: {
    item: CartCoffee
  }
}

export function upsertCartItemAction(item: CartCoffee): CartAction {
  return {
    type: 'UPSERT_ITEM',
    payload: {
      item,
    },
  }
}

export function removeCartItemAction(item: CartCoffee): CartAction {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      item,
    },
  }
}
