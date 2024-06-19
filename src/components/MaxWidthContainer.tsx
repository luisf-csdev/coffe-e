import { HTMLAttributes, ReactNode } from 'react'

interface MaxWidthContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function MaxWidthContainer({
  children,
  ...props
}: MaxWidthContainerProps) {
  return (
    <div className="mx-auto max-w-[1168px] px-6" {...props}>
      {children}
    </div>
  )
}
