import React, { FC, useState } from 'react'
import { ExpandButton } from '../button/expand-button'
import { SettingsButton } from '../button/settings-button'

import UserCircleIcon from '@images/user-circle.svg'

export const Sidebar: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out shadow h-screen bg-blue-gray-900 ${expanded ? 'w-80' : 'w-18 '}`}
    >
      <div className="absolute top-4 left-1.5 text-white">
        <UserCircleIcon className="w-14 h-14" />
      </div>
      <SettingsButton
        onClick={() => setExpanded(!expanded)}
      />
      <ExpandButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
    </div>
  )
}