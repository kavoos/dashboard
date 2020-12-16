import React, { FC } from 'react'
import { Sidebar } from '../sidebar/sidebar'

import '@styles/components/app.css'

export const App: FC = (): React.ReactElement => (
  <div className="app">
    <Sidebar />
  </div>
)