import React from 'react'
import bg from '@assets/bg.svg'
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            You are in Layout
            {children}
        </div>
    )
}
