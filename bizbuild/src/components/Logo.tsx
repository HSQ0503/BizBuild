import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import logo from "@/images/logo/bizbuild.png"

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span className={clsx(className)} {...props}>
      <Image
        src={logo}
        alt="BizBuild Logo"
        width={180}
        height={60}
      />
    </span>
  )
}
