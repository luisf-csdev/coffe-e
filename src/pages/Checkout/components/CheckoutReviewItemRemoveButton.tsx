import { Trash } from '@phosphor-icons/react'
import { HTMLAttributes } from 'react'

interface CheckoutReviewItemRemoveButtonProps
  extends HTMLAttributes<HTMLButtonElement> {}

export function CheckoutReviewItemRemoveButton(
  props: CheckoutReviewItemRemoveButtonProps,
) {
  return (
    <button
      {...props}
      type="button"
      className="group flex items-center justify-center gap-1 rounded-md bg-base-button p-2 transition-colors hover:bg-base-hover"
    >
      <Trash className="size-4 text-purple-500 transition-colors group-hover:text-purple-700" />
      <span className="text-textXS font-normal uppercase leading-normal text-base-text transition-colors group-hover:text-base-subtitle">
        Remover
      </span>
    </button>
  )
}
