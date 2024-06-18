import {
  CheckoutOrderButtonIcon,
  CheckoutOrderButtonIconVariant,
} from './CheckoutOrderButtonIcon'

interface CheckoutOrderCardProps {
  text: string
  variant: CheckoutOrderButtonIconVariant
}

export function CheckoutOrderButton({ text, variant }: CheckoutOrderCardProps) {
  return (
    <button
      type="button"
      className="flex max-w-[180px] flex-1 items-center gap-3 rounded-md bg-base-button p-4"
    >
      <CheckoutOrderButtonIcon variant={variant} />
      <span className="whitespace-nowrap text-buttonM uppercase leading-normal text-base-text">
        {text}
      </span>
    </button>
  )
}
