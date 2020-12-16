import React, { FC } from 'react'

import SettingIcon from '@images/cog.svg'
import { Button } from './button'

import '@styles/components/button.css'

interface Props {
  onClick(): void
}

export const SettingsButton: FC<Props> = (props: Props) => {
  const { onClick } = props
  return (
      <Button
        className="button"
        onClick={onClick}
        icon={
          <SettingIcon
            className="button-icon"
          />
        }
      />
  )
}