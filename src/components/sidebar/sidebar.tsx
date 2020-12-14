import React, { FC, useState } from 'react'

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out shadow h-screen bg-blue-gray-900 ${isOpen ? 'w-80' : 'w-16 '}`}
    >
      <button
        className={`w-6 absolute bottom-4 left-4 fill-current text-white focus:outline-none`}
        onClick={() => setIsOpen(!isOpen)}
        >
        <svg 
          className={`transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0 '}`}
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}