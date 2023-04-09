import React from 'react'
import { Box, Typography } from '@mui/material'

export const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '199px', border: '1px solid #707070', width: '80%', minHeight: '50%', p: 8, boxSizing: 'border-box' }}>
            <Typography fontSize={80} align='center'>Hello Dear User [Name]</Typography>
        </Box>
    )
}
