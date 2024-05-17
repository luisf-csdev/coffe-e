import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  MapPin,
  CurrencyDollar,
} from '@phosphor-icons/react'

export type CircleIconVectorVariants =
  | 'cart'
  | 'box'
  | 'clock'
  | 'coffee'
  | 'location'
  | 'money'

interface CircleIconVectorProps {
  variant: CircleIconVectorVariants
}

export function CircleIconVector({ variant }: CircleIconVectorProps) {
  return (
    <>
      {variant === 'cart' && (
        <ShoppingCart weight="fill" className="size-4 text-white" />
      )}
      {variant === 'box' && (
        <Package weight="fill" className="size-4 text-white" />
      )}
      {variant === 'clock' && (
        <Timer weight="fill" className="size-4 text-white" />
      )}
      {variant === 'coffee' && (
        <Coffee weight="fill" className="size-4 text-white" />
      )}
      {variant === 'location' && (
        <MapPin weight="fill" className="size-4 text-white" />
      )}
      {variant === 'money' && <CurrencyDollar className="size-4 text-white" />}
    </>
  )
}
