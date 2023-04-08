import React from 'react'

import { Box, Typography, LinearProgress } from '@mui/material'

const DetailItem = ({ percent, name, id }: { percent: number, name: string, id: number | string }) =>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiLinearProgress-bar': { backgroundColor: '#F0A500', height: '8px', borderRadius: 1 },
        '& .MuiLinearProgress-root': { backgroundColor: '#A5A6A7', height: '8px', borderRadius: 1 },
        my: 0.5
    }}>
        <Typography fontSize={40} color={'#1A1C20'} sx={{ flex: 1 }}>{name}</Typography>
        <Box flex={1}>
            <LinearProgress value={percent} variant='determinate' />
        </Box>
    </Box>

const tempItems = [
    { id: 1, name: 'Citrus', percent: 20 },
    { id: 1, name: 'Aromatic', percent: 15 },
    { id: 1, name: 'Warm Spicy', percent: 10 },
    { id: 1, name: 'Fruity', percent: 5 },
    { id: 1, name: 'Floral', percent: 10 },
]

export const Details = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', my: 2, p: 4, boxSizing: 'border-box' }}>
            <Typography fontSize={60} gutterBottom>Details:</Typography>
            {tempItems.map(item => <DetailItem {...item} />)}
        </Box>
    )
}
