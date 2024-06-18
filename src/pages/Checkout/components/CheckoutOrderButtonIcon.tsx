import { Bank, CreditCard, Money } from '@phosphor-icons/react'

export type CheckoutOrderButtonIconVariant = 'credit' | 'debit' | 'money'

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
