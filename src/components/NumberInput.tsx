import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

const className = 'size-3.5 text-purple-500 hover:text-purple-700'

export function NumberInput() {
  const [amount, setAmount] = useState(1)

  const isDecreaseDisabled = amount <= 1
  const isIncreaseDisabled = amount >= 99

  function decreaseAmount() {
    if (isDecreaseDisabled) {
      return
    }
    setAmount(amount - 1)
  }

  function increaseAmount() {
    if (isIncreaseDisabled) {
      return
    }
    setAmount(amount + 1)
  }

  return (
    <div className="flex items-center justify-center gap-1 rounded-md bg-base-button p-2">
      <button
        disabled={isDecreaseDisabled}
        onClick={decreaseAmount}
        type="button"
      >
        <Minus className={className} weight="bold" />
      </button>

      <span className="select-none px-1.5 text-textM font-normal text-base-title">
        {amount}
      </span>

      <button
        disabled={isIncreaseDisabled}
        onClick={increaseAmount}
        type="button"
      >
        <Plus className={className} weight="bold" />
      </button>
    </div>
  )
}
