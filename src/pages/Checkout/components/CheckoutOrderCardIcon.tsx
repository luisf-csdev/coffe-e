import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'

export type CheckoutOrderCardIconVariant = 'delivery' | 'payment'

interface CheckoutOrderCardIconProps {
  variant: CheckoutOrderCardIconVariant
}

export function CheckoutOrderCardIcon({ variant }: CheckoutOrderCardIconProps) {
  return (
    <>
      {variant === 'delivery' && (
        <MapPinLine className="size-[22px] text-yellow-700" />
      )}
      {variant === 'payment' && (
        <CurrencyDollar className="size-[22px] text-purple-500" />
      )}
    </>
  )
}
