import { tv } from 'tailwind-variants'
import { useCartContext } from '../../../context/Cart/CartContext'
import {
  CheckoutOrderButtonIcon,
  CheckoutOrderButtonIconVariant,
} from './CheckoutOrderButtonIcon'

interface CheckoutOrderCardProps {
  text: string
  variant: CheckoutOrderButtonIconVariant
}

const paymentButton = tv({
  slots: {
    container:
      'group flex max-w-[180px] flex-1 items-center gap-3 rounded-md border border-transparent bg-base-button p-4 transition-colors',
    label:
      'whitespace-nowrap text-xs font-normal uppercase leading-normal text-base-text transition-colors',
  },

  variants: {
    state: {
      default: {
        container: 'hover:bg-base-hover',
        label: 'group-hover:text-base-subtitle',
      },
      selected: {
        container: 'border-purple-500 bg-purple-300',
      },
    },
  },

  defaultVariants: {
    state: 'default',
  },
})

export function CheckoutOrderButton({ text, variant }: CheckoutOrderCardProps) {
  const { paymentMethod, selectCartPaymentMethod } = useCartContext()

  const state = paymentMethod === variant ? 'selected' : 'default'
  const { container, label } = paymentButton({ state })

  function handleSelectCartPaymentMethod() {
    selectCartPaymentMethod(variant)
  }

  return (
    <button
      type="button"
      onClick={handleSelectCartPaymentMethod}
      className={container()}
    >
      <CheckoutOrderButtonIcon variant={variant} />
      <span className={label()}>{text}</span>
    </button>
  )
}
