import { InputHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

const inputVariant = tv({
  base: 'flex flex-1 items-center gap-1 rounded border border-base-button bg-base-input p-3 text-textS',
  variants: {
    inputSize: {
      sm: 'max-w-[60px]',
      md: 'max-w-[200px]',
      lg: 'max-w-full',
    },
  },
  defaultVariants: {
    inputSize: 'lg',
  },
})

type InputSize = keyof typeof inputVariant.variants.inputSize

interface CheckoutOrderCardInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize
  optional?: boolean
}

export function CheckoutOrderCardInput({
  inputSize,
  optional,
  ...props
}: CheckoutOrderCardInputProps) {
  return (
    <label className={inputVariant({ inputSize })}>
      <input
        type="text"
        className="w-full bg-transparent text-base-label"
        {...props}
      />
      {optional && (
        <em className="text-textXS font-normal text-base-label">Opcional</em>
      )}
    </label>
  )
}
