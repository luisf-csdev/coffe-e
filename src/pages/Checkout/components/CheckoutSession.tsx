import { HTMLAttributes, ReactNode } from 'react'

interface CheckoutSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: ReactNode
}

export function CheckoutSection({
  title,
  children,
  ...props
}: CheckoutSectionProps) {
  return (
    <section {...props}>
      <h2 className="mb-[15px] font-baloo text-titleXS text-base-subtitle">
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  )
}
