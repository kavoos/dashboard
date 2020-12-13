import React, { Suspense, lazy } from 'react'

export const App = (): React.ReactElement => (
    <div className="w-screen h-screen bg-gray-200">
        <div
            className="transition-all
            duration-500 
            ease-in-out 
            shadow 
            w-24 
            h-screen 
            bg-gray-500 
            hover:bg-gray-600 
            hover:w-80"
        >
        </div>
    </div>
)