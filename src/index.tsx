import '@styles/styles.less'
import '@styles/styles.scss'

import React, { FC } from 'react'
import ReactDom from 'react-dom'

// import { App } from '@components/app/app'
const App: FC = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))