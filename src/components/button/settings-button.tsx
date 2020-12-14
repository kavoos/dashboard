import React, { FC } from 'react'

import SettingIcon from '@images/cog.svg'

interface Props {
  className?: string
}

export const SettingsButton: FC<Props> = (props: Props) => {
  const {className } = props 
  return (
  <SettingIcon className={className} />
)}