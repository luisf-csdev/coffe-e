import { ReactNode } from 'react'
import {
  CheckoutOrderCardIcon,
  CheckoutOrderCardIconVariant,
} from './CheckoutOrderCardIcon'

interface CheckoutOrderCardProps {
  title: string
  subtitle: string
  variant: CheckoutOrderCardIconVariant
  children: ReactNode
}

export function CheckoutOrderCard({
  title,
  subtitle,
  variant,
  children,
}: CheckoutOrderCardProps) {
  return (
    <div className="rounded-md bg-base-card p-10">
      <div className="mb-8 flex justify-start gap-2">
        <CheckoutOrderCardIcon variant={variant} />
        <div>
          <h3 className="text-textM font-normal text-base-subtitle">{title}</h3>
          <p className="text-textS text-base-text">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  )
}
