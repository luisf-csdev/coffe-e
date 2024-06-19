import { Minus, Plus } from '@phosphor-icons/react'
import { ChangeEvent } from 'react'

const className =
  'size-3.5 text-purple-500 hover:text-purple-700 group-disabled:text-purple-500 transition-colors'

interface NumberInputProps {
  amount: number
  setAmount: (quantity: number) => void
}

export function NumberInput({ amount, setAmount }: NumberInputProps) {
  const MIN_AMOUNT = 1
  const MAX_AMOUNT = 9

  const isDecreaseDisabled = amount <= MIN_AMOUNT
  const isIncreaseDisabled = amount >= MAX_AMOUNT

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

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.valueAsNumber

    if (isNaN(value)) {
      return
    }

    if (value < MIN_AMOUNT) {
      setAmount(MIN_AMOUNT)
      return
    }

    if (value > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT)
      return
    }

    const roundedValue = Math.round(value)
    setAmount(roundedValue)
  }

  function formatAmount() {
    const LEADING_ZEROS_REGEX = /^0+/
    const strAmount = amount.toString().replace(LEADING_ZEROS_REGEX, '')
    return strAmount
  }

  const formattedAmount = formatAmount()

  return (
    <div className="flex items-center justify-center gap-1 rounded-md bg-base-button p-2">
      <button
        disabled={isDecreaseDisabled}
        onClick={decreaseAmount}
        type="button"
        aria-label="Decrease amount"
        className="group"
      >
        <Minus className={className} weight="bold" />
      </button>

      <input
        type="number"
        value={formattedAmount}
        onChange={handleInputChange}
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        className="w-5 select-none bg-transparent text-center text-textM font-normal text-base-title [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      <button
        disabled={isIncreaseDisabled}
        onClick={increaseAmount}
        type="button"
        aria-label="Increase amount"
        className="group"
      >
        <Plus className={className} weight="bold" />
      </button>
    </div>
  )
}
