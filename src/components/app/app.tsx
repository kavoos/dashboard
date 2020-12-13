import React, { FC } from 'react'
import { Sidebar } from '../sidebar/sidebar'

export const App: FC = (): React.ReactElement => (
  <div className="w-screen h-screen bg-gray-200">
    <Sidebar />
  </div>
)