import React, { Suspense, lazy } from 'react'

import { stylesContainer } from './app.module.less'
import { stylesHeader, stylesImage } from './app.module.scss'

const LazyStrawberryIcon = lazy(() => import('./strawberry'))
export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It works</div>
        <h1 className="text-red-500">Hello TailWindCSS</h1>
        <Suspense fallback={'loading...'}>
            <LazyStrawberryIcon className={stylesImage} />
        </Suspense>
    </div>
)