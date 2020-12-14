import React, { FC } from 'react'

import ChevronDoubleRightIcon from '@images/chevron-double-right.svg'
import { Button } from './Button'

interface Props {
  expanded: boolean
  onClick(): void
}

export const ExpandButton: FC<Props> = (props: Props) => {
  const { expanded, onClick } = props
  return (
    <Button
      className="w-4 h-4 absolute bottom-6 left-6 fill-current text-white focus:outline-none"
      onClick={onClick}
      icon={
        <ChevronDoubleRightIcon
          className={`w-4 h-4 transform duration-500 ease-in-out ${expanded ? 'rotate-180' : 'rotate-0 '}`}
        />
      }
    />
  )
}