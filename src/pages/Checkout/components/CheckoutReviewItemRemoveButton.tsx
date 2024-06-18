import { Trash } from '@phosphor-icons/react'

export function CheckoutReviewItemRemoveButton() {
  return (
    <button
      className="flex items-center justify-center gap-1 rounded-md bg-base-button p-2"
      type="button"
    >
      <Trash className="size-4 text-purple-500" />
      <span className="text-textXS font-normal uppercase leading-normal text-base-text">
        Remover
      </span>
    </button>
  )
}
