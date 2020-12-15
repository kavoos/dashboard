import React, { FC } from 'react'
import UserCircleIcon from '@images/user-circle.svg'

interface Props {
  expanded?: boolean
}

export const Avatar: FC<Props> = (props: Props) => {
  const { expanded } = props
  return (
    <div className={`flex flex-row text-white`}>
      <UserCircleIcon className={`transition-all duration-500 ease-in-out my-auto ${expanded ? 'w-24 h-24' : 'w-14 h-14'}`} />
      <div className={`flex flex-col pl-2 my-6 overflow-hidden transition-all duration-500 ease-in-out  ${expanded ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-1 items-center font-medium text-lg">Kavoos</div>
        <div className="flex flex-1 items-center font-medium text-lg">Boloorchi</div>
      </div>
    </div>
  )
}