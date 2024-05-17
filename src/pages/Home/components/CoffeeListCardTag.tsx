interface CoffeeListCardTagProps {
  text: string
}

export function CoffeeListCardTag({ text }: CoffeeListCardTagProps) {
  return (
    <div
      className="flex rounded-full bg-yellow-300
    px-2 py-1"
    >
      <span className="text-tag uppercase text-yellow-700">{text}</span>
    </div>
  )
}
