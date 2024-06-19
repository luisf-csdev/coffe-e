import { InputHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

const inputVariant = tv({
  base: 'flex flex-1 cursor-text items-center gap-1 rounded border border-base-button bg-base-input text-textS transition-colors focus-within:border-yellow-700',
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
        className="w-full bg-transparent p-3 text-base-text outline-none placeholder:text-base-label"
        {...props}
      />
      {optional && (
        <em className="select-none p-3 pl-0 text-textXS font-normal text-base-label">
          Opcional
        </em>
      )}
    </label>
  )
}
