import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export const Login = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: 199, border: '1px solid #707070' }}>


            <Button sx={{ background: '#F0A500', color: '#000', width: 'fit-content', borderRadius: 48, px: 4 }} variant='contained'>
                <Typography fontSize={80} color={'white'}>Login</Typography>
            </Button>
        </Box>
    )
}
