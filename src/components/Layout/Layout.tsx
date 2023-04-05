import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            You are in Layout
            {children}
        </div>
    )
}
