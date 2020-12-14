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
        className="w-14 h-10 fill-current text-white focus:outline-none"
        onClick={onClick}
        icon={
          <SettingIcon
            className="w-4 h-4 m-auto"
          />
        }
      />
  )
}