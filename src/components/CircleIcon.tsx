import { tv } from 'tailwind-variants'
import { CircleIconVector, CircleIconVectorVariants } from './CircleIconVector'

const circle = tv({
  base: 'flex items-center justify-center rounded-full p-2',
  variants: {
    variant: {
      'dark-yellow': 'bg-yellow-700',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      brown: 'bg-base-text',
    },
  },
})

type CircleIconVariants = keyof typeof circle.variants.variant | undefined

interface CircleIconProps {
  variant: CircleIconVectorVariants
}

function getCircleVariant(
  variant: CircleIconVectorVariants,
): CircleIconVariants {
  switch (variant) {
    case 'box':
      return 'brown'
    case 'cart':
    case 'money':
      return 'dark-yellow'
    case 'clock':
      return 'yellow'
    case 'coffee':
    case 'location':
      return 'purple'

    default:
      return undefined
  }
}

export function CircleIcon({ variant }: CircleIconProps) {
  const circleVariant = getCircleVariant(variant)

  return (
    <div className={circle({ variant: circleVariant })}>
      <CircleIconVector variant={variant} />
    </div>
  )
}
