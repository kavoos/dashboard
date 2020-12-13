import React, { Suspense, lazy } from 'react'

const LazyStrawberryIcon = lazy(() => import('./strawberry'))
export const App = (): React.ReactElement => (
    <div>
        <div>It works</div>
        <h1 className="text-red-500">Hello TailWindCSS</h1>
        <Suspense fallback={'loading...'}>
            <LazyStrawberryIcon />
        </Suspense>
    </div>
)