import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {
    children: React.ReactNode
}

function RootLayout({ children }: Props) {
    return (
        <div className='bg-black h-screen'>
            {children}
            <Outlet /></div>
    )
}

export default RootLayout