import React, { FC, useState } from 'react'
import { Avatar } from '../avatar/avatar'
import { ExpandButton } from '../button/expand-button'
import { SettingsButton } from '../button/settings-button'
import { HealthPageButton } from '../button/health-page-button'
import { FinancePageButton } from '../button/finance-page-button'
import { Spacer } from '../spacer/spacer'

import '@styles/components/sidebar.css'

export const Sidebar: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`sidebar ${expanded ? 'w-64' : 'w-18 '}`}
    >
      <Avatar expanded={expanded} />
      <HealthPageButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      <FinancePageButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      <Spacer />
      <SettingsButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
      <ExpandButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
    </div>
  )
}