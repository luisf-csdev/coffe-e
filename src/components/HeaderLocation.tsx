import { MapPin } from '@phosphor-icons/react'

export function HeaderLocation() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-1 rounded-md bg-purple-300 p-2 "
    >
      <MapPin weight="fill" className="size-[22px] text-purple-500" />
      <span className="text-textS text-purple-700">Porto Alegre, RS</span>
    </button>
  )
}
