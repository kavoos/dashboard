import React, { FC, useState } from 'react'
import { ExpandButton } from '../button/expand-button'

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out shadow h-screen bg-blue-gray-900 ${isOpen ? 'w-80' : 'w-18 '}`}
    >
      <button
        className={`w-4 h-4 absolute bottom-6 left-6 fill-current text-white focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
        >
        <ExpandButton className={`w-4 h-4 transform duration-1000 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0 '}`} />
      </button>
    </div>
  )
}