interface CartButtonCounterProps {
  count: number
}

export function CartButtonCounter({ count }: CartButtonCounterProps) {
  return (
    <div className="absolute right-0 top-0 flex size-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full  bg-yellow-700 ">
      <span className="text-textXS leading-normal text-white">{count}</span>
    </div>
  )
}
