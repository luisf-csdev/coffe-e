import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { CartPaymentMethod } from '../../../reducers/cart'

export type CheckoutOrderButtonIconVariant = CartPaymentMethod

interface CheckoutOrderButtonIconProps {
  variant: CheckoutOrderButtonIconVariant
}

export function CheckoutOrderButtonIcon({
  variant,
}: CheckoutOrderButtonIconProps) {
  return (
    <>
      {variant === 'credit' && (
        <CreditCard className="size-4 text-purple-500" />
      )}
      {variant === 'debit' && <Bank className="size-4 text-purple-500" />}
      {variant === 'money' && <Money className="size-4 text-purple-500" />}
    </>
  )
}
