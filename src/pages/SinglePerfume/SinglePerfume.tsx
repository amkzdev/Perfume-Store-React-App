import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, Slide, Button, FormControlLabel, Checkbox } from '@mui/material'
import { Fall, Spring, Summer, Winter } from '@icons'
import { Details } from './components/Details'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Slider } from './components/Slider'


export const SinglePerfume = () => {

    const [mode, setMode] = useState<'overview' | 'buy'>('overview')

    const { id } = useParams()

    const Desciption = () => <Typography fontSize={40}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aldfsdfdsfsdfsfsss
    </Typography>

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: '100px', justifyContent: 'space-between', background: 'rgba(255,255,255,0.7)', boxSizing: 'border-box', height: '100vh', overflow: 'hidden' }}>

            <Slider />

            <Typography fontSize={120}>Desire Blue</Typography>

            <Typography fontSize={40} gutterBottom>Home Sport</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', px: 6, py: 2, alignItems: 'center', justifyContent: 'space-between' }}>


                <Slide direction="left" in={mode == 'overview'} mountOnEnter unmountOnExit>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', my: 1 }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', my: 0.5 }}>
                                <Spring mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                                <Summer mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                                <Fall mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                                <Winter mode='active' style={{ margin: '20px', transform: 'scale(1.25)' }} />
                            </Box>



                            <Box sx={{ display: 'flex', alignItems: 'center', boxSizing: 'border-box', backgroundColor: '#1A1C20', borderRadius: '45px', px: 1 }} onClick={() => setMode('buy')}>
                                <Typography lineHeight={'unset'} color={'white'} fontSize={140}>{(120).toLocaleString()}</Typography>
                                <Typography color={'#F0A500'} fontSize={100}>$</Typography>
                                <Typography color={'GrayText'} fontSize={60}>/mm</Typography>
                                <TrendingFlatIcon sx={{ color: '#F0A500', fontSize: '7.5rem' }} />

                            </Box>
                        </Box>


                        <Desciption />

                        <Details />
                    </Box>
                </Slide>
                <Slide direction="left" in={mode == 'buy'} mountOnEnter unmountOnExit>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                        <Typography fontSize={60}>Bottle Size: </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', my: 0.5 }}>

                            {
                                [50, 100, 150].map(item => <FormControlLabel control={<Checkbox size='medium' sx={{ transform: 'scale(2)', mr: 2 }} />} label={<Typography fontSize={40}>{item}  MML</Typography>} />)
                            }
                        </Box>
                        <Button onClick={() => setMode('overview')}>Back</Button>
                        <Desciption />
                    </Box>
                </Slide>
            </Box >

        </Box >

    )
}
