import React, { useState } from 'react'
import { Box, Button, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '199px', border: '1px solid #707070', width: '80%', height: '50%', p: 8, boxSizing: 'border-box' }}>

            <Typography fontSize={80} gutterBottom>Login Page</Typography>

            <FormControl sx={{ m: 7, width: '50%', transform: 'scale(2)' }} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password" >Account</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-username"
                    label="Account"
                />
            </FormControl>

            <FormControl sx={{ m: 7, width: '50%', transform: 'scale(2)' }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <Button sx={{ background: '#F0A500', color: '#000', width: 'fit-content', borderRadius: 48, px: 4 }} variant='contained'>
                <Typography fontSize={80} color={'white'}>Login</Typography>
            </Button>
        </Box>
    )
}
