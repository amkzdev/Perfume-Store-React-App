import React from 'react'
import bg from '@assets/bg.svg'
import { Box } from '@mui/material'
import { Footer } from './components'
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ backgroundImage: `url(${bg})`, height: '100vh', display: 'flex', overflow: 'auto', alignItems: 'center', justifyContent: 'center', position: 'relative', ' & .MuiButton-root': { textTransform: 'unset !important' } }}>
            {children}
            <Footer />
        </Box>
    )
}
