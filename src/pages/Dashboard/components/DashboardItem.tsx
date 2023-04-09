import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Power } from '@icons'

export const DashboardItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <Grid item xs={12} appView={4} lg={3} xl={2} >
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#E8E8E8", alignItems: 'center', p: 0.5, borderRadius: 1, cursor: 'pointer' }}>

                <Box sx={{ p: 2 }}>
                    <Power />
                </Box>

                <Box sx={{ width: '100%', p: 1, boxSizing: 'border-box', background: '#fff', borderRadius: 1, mt: 2 }}>
                    <Typography fontSize={20} gutterBottom>{title}</Typography>
                    <Typography fontSize={12} color={'grey'}>{description}</Typography>
                </Box>
                
            </Box>
        </Grid>
    )
}
