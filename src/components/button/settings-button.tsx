import React, { FC } from 'react'

import SettingIcon from '@images/cog.svg'
import { Button } from './Button'

interface Props {
  onClick(): void
}

export const SettingsButton: FC<Props> = (props: Props) => {
  const { onClick } = props
  return (
      <Button
        className="w-4 h-4 absolute bottom-16 left-6 fill-current text-white focus:outline-none"
        onClick={onClick}
        icon={
          <SettingIcon
            className="w-4 h-4"
          />
        }
      />
  )
}