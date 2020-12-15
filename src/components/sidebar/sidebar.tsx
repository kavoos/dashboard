import React, { FC, useState } from 'react'
import { Avatar } from '../avatar/avatar'
import { ExpandButton } from '../button/expand-button'
import { SettingsButton } from '../button/settings-button'
import { Spacer } from '../spacer/spacer'

export const Sidebar: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`flex flex-col py-6  pl-1.5 transition-all duration-500 ease-in-out shadow h-screen bg-blue-gray-900 ${expanded ? 'w-64' : 'w-18 '}`}
    >
      <Avatar expanded={expanded} />
      <Spacer />
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