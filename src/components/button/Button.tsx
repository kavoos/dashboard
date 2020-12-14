import React, { FC, ReactNode, useState } from 'react'

interface Props {
  className?: string,
  icon?: ReactNode,
  text?: string,
  onClick(): void
}

export const Button: FC<Props> = (props: Props) => {
  const { className, icon, onClick } = props

  return (
    <button
      className={className}
      onClick={onClick}
      >
        {icon}
    </button>
  )
}