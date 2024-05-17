import { HTMLAttributes, ReactNode } from 'react'

interface MaxWidthContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function MaxWidthContainer({
  children,
  ...props
}: MaxWidthContainerProps) {
  return (
    <div className="mx-auto max-w-[1440px] px-40" {...props}>
      {children}
    </div>
  )
}
