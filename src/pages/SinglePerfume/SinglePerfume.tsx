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

    const BuyItem = ({ value, title }: { value: string, title: string }) => <Box display={'flex'} alignItems={'center'} my={1} color={'white'} width={'100%'}>
        <Typography fontSize={80} sx={{ width: "50%" }}>{value}</Typography>
        &nbsp;
        <Typography fontSize={40} >{title}</Typography>
    </Box>

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: '80px', justifyContent: 'space-between', background: 'rgba(255,255,255,0.7)', boxSizing: 'border-box', height: '100vh', overflow: 'hidden' }}>

            <Slider />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                <Typography fontSize={120}>Desire Blue</Typography>

                <Typography fontSize={40} gutterBottom>Home Sport</Typography>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', px: 6, py: 2, alignItems: 'center', justifyContent: 'space-between', flexBasis: "55%" }}>


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
                <Slide direction="left" in={mode == 'buy'} mountOnEnter unmountOnExit >
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' , justifyContent: 'space-between' ,height:'100%'}}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', p: 3, justifyContent: 'space-between'
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography fontSize={60}>Bottle Size: </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', my: 0.5 }}>

                                    {
                                        [50, 100, 150].map(item => <FormControlLabel control={<Checkbox size='medium' sx={{ transform: 'scale(2)', mr: 2 }} />} label={<Typography fontSize={40}>{item}  MML</Typography>} />)
                                    }
                                </Box>
                            </Box>
                            <Button onClick={() => setMode('overview')}>Back</Button>
                            <Desciption />
                        </Box>

                        <Box sx={{ backgroundColor: '#1A1C20', width: '100vw', display: 'flex', boxSizing: 'border-box', p: 2, py: 6 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexBasis: '40%', justifyContent: 'center', p: 2 }}>

                                <BuyItem title='50mml' value='120' />
                                {/* <BuyItem title='Tax 1%' value='2.6' /> */}
                                <BuyItem title='Bottle v1' value='13' />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', flexBasis: '60%', justifyContent: 'center', alignItems: 'center', px: 2 }}>

                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography fontSize={120} color='white'>135.6</Typography>
                                    <Typography fontSize={120} color='#F0A500'>&nbsp;$</Typography>
                                </Box>
                                <Button sx={{ background: '#F0A500', color: '#000', width: 'fit-content', borderRadius: 40, px: 4 }} variant='contained'>
                                    <Typography fontSize={80} color={'white'}>Buy Now!</Typography>
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Slide >
            </Box >

        </Box >

    )
}
