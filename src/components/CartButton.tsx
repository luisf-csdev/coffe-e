import { ShoppingCart } from '@phosphor-icons/react'
import { tv } from 'tailwind-variants'
import { CartButtonCounter } from './CartButtonCounter'
import { HTMLAttributes } from 'react'

const cartButton = tv({
  base: 'rounded-md p-2',
  variants: {
    variant: {
      yellow: 'relative bg-yellow-300 text-yellow-700',
      purple: [
        'bg-purple-700 text-white transition-colors',
        'hover:bg-purple-500',
      ],
    },
  },
  defaultVariants: {
    variant: 'purple',
  },
})

type CartButtonVariants = keyof typeof cartButton.variants.variant

interface CartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: CartButtonVariants
  count?: number
}

export function CartButton({ variant, count, ...props }: CartButtonProps) {
  const hasCounter = variant === 'yellow' && !!count

  return (
    <button type="button" {...props} className={cartButton({ variant })}>
      <ShoppingCart weight="fill" className="size-[22px]" />
      {hasCounter && <CartButtonCounter count={count} />}
    </button>
  )
}
