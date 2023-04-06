import React from 'react'
import bg from '@assets/bg.svg'
import { Box } from '@mui/material'
import { Footer } from './components'
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ backgroundImage: `url(${bg})`, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            You are in Layout
            {children}
            <Footer />
        </Box>
    )
}
