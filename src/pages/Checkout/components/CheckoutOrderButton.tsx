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
      className="group flex max-w-[180px] flex-1 items-center gap-3 rounded-md border border-transparent bg-base-button p-4 transition-colors hover:bg-base-hover active:border-purple-500 active:bg-purple-300"
    >
      <CheckoutOrderButtonIcon variant={variant} />
      <span className="whitespace-nowrap text-buttonM uppercase leading-normal text-base-text transition-colors group-hover:text-base-subtitle group-active:text-base-text">
        {text}
      </span>
    </button>
  )
}
