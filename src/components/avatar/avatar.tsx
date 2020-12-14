import React, { FC } from 'react'
import UserCircleIcon from '@images/user-circle.svg'

interface Props {
  expanded?: boolean
}

export const Avatar: FC<Props> = (props: Props) => {
  const { expanded } = props
  return (
    <div className={`text-white`}>
      <UserCircleIcon className={`transition-all duration-500 ease-in-out ${expanded ? 'w-24 h-24' : 'w-14 h-14'}`} />
    </div>
  )
}