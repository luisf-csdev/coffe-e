import { CircleIcon } from '../../../components/CircleIcon'
import { CircleIconVectorVariants } from '../../../components/CircleIconVector'

interface HeroTagProps {
  text: string
  variant: CircleIconVectorVariants
}

export function HeroTag({ text, variant }: HeroTagProps) {
  return (
    <div className="flex items-center gap-3">
      <CircleIcon variant={variant} />
      <p className="text-textM font-normal text-base-text">{text}</p>
    </div>
  )
}
