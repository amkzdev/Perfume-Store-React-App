import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import photo from '@assets/samplePerfume.png'
import { Fall, Spring, Summer, Winter } from '@icons'

export const PerfumeListItem = ({ price = 120, name = 'Allure', seasons, image = photo }: { price?: number, name?: string, seasons?: Array<string>, image?: string }) => {
    return (
        <Grid item display={'flex'} xs={6} >

            <Box sx={{ display: 'flex', width: 'fit-content', flexDirection: 'column', background: '#1A1C20', ' img': { width: '410px', height: "100%" }, borderRadius: '45px', alignItems: 'center', boxSizing: 'border-box', overflow: 'hidden' }}>

                <img src={image} />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,m:1 }}>

                    <Typography color={'white'} fontSize={120}>{name}</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', my: 0.5 }}>
                        <Spring mode='active' style={{ margin: '4px' }} />
                        <Summer mode='active' style={{ margin: '4px' }} />
                        <Fall mode='active' style={{ margin: '4px' }} />
                        <Winter mode='active' style={{ margin: '4px' }} />
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'baseline', boxSizing: 'border-box' }}>
                        <Typography color={'white'} fontSize={140}>{price.toLocaleString()}</Typography>
                        <Typography color={'#F0A500'} fontSize={100}>$</Typography>
                        <Typography color={'GrayText'} fontSize={60}>/mm</Typography>
                    </Box>
                </Box>



            </Box>
        </Grid>
    )
}
