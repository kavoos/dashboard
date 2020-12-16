import React, { FC } from 'react'

import EuroIcon from '@images/currency-euro.svg'
import { Button } from './button-container'

import '@styles/components/button.css'

interface Props {
  expanded: boolean,
  onClick(): void
}

export const FinancePageButton: FC<Props> = (props: Props) => {
  const { expanded, onClick } = props
  return (
      <Button
        className="button mt-2"
        expanded={expanded}
        onClick={onClick}
        title="Finance"
        icon={
          <EuroIcon
            className="button-icon"
          />
        }
      />
  )
}