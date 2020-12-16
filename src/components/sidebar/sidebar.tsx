import React, { FC, useState } from 'react'
import { Avatar } from '../avatar/avatar'
import { ExpandButton } from '../button/expand-button'
import { SettingsButton } from '../button/settings-button'
import { Spacer } from '../spacer/spacer'

import '@styles/components/sidebar.css'

export const Sidebar: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`sidebar ${expanded ? 'w-64' : 'w-18 '}`}
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