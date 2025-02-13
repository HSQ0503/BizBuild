import clsx from 'clsx'
import React from 'react'

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={clsx('text-black text-3xl', className)}
      style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800 }}
      {...props}
    >
      BizBuild
    </span>
  )
}
