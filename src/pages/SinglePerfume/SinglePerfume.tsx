import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Slider, Typography } from '@mui/material'
import { Fall, Spring, Summer, Winter } from '@icons'
import { Details } from './components/Details'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export const SinglePerfume = () => {
    const { id } = useParams()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', height: '100%' }}>

            {/* <Slider/> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 6, alignItems: 'center', justifyContent: 'space-between' }}>


                <Typography fontSize={120}>Desire Blue</Typography>

                <Typography fontSize={40} gutterBottom>Home Sport</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', my: 0.5 }}>
                        <Spring mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                        <Summer mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                        <Fall mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                        <Winter mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                    </Box>



                    <Box sx={{ display: 'flex', alignItems: 'center', boxSizing: 'border-box', backgroundColor: '#1A1C20', borderRadius: '45px', px: 1 }}>
                        <Typography lineHeight={'unset'} color={'white'} fontSize={140}>{(120).toLocaleString()}</Typography>
                        <Typography color={'#F0A500'} fontSize={100}>$</Typography>
                        <Typography color={'GrayText'} fontSize={60}>/mm</Typography>
                        <TrendingFlatIcon sx={{ color: '#F0A500', fontSize: '7.5rem' }} />

                    </Box>
                </Box>

                <Typography fontSize={40}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                <Details />
            </Box>

        </Box>

    )
}
