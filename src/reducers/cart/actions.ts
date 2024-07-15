import { CartCoffee, CartPaymentMethod } from '.'

export type CartActionType =
  | 'UPSERT_ITEM'
  | 'REMOVE_ITEM'
  | 'SELECT_PAYMENT_METHOD'

export interface CartAction {
  type: CartActionType
  payload?: {
    item?: CartCoffee
    payment?: CartPaymentMethod
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

export function selectCartPaymentMethodAction(
  payment: CartPaymentMethod,
): CartAction {
  return {
    type: 'SELECT_PAYMENT_METHOD',
    payload: {
      payment,
    },
  }
}
