import React, { FC } from 'react'

import ChevronDoubleRightIcon from '@images/chevron-double-right.svg'

interface Props {
  className?: string
}

export const ExpandButton: FC<Props> = (props: Props) => {
  const {className } = props 
  return (
  <ChevronDoubleRightIcon className={className} />
)}