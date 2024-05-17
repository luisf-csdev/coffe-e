import { Minus, Plus } from '@phosphor-icons/react'

const className = 'size-3.5 text-purple-500 hover:text-purple-700'

export function NumberInput() {
  return (
    <div className="flex items-center justify-center gap-1 rounded-md bg-base-button p-2">
      <button type="button">
        <Minus className={className} weight="bold" />
      </button>

      <span className="px-1.5 text-textM font-normal text-base-title">1</span>

      <button type="button">
        <Plus className={className} weight="bold" />
      </button>
    </div>
  )
}
