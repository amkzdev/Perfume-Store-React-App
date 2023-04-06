import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import photo from '@assets/samplePerfume.png'
import { Fall, Spring, Summer, Winter } from '@icons'

export const PerfumeListItem = ({ price = 120, name = 'Allure', seasons, image = photo }: { price?: number, name?: string, seasons?: Array<string>, image?: string }) => {
    return (
        <Grid item display={'flex'}>

            <Box sx={{ display: 'flex', width: 'fit-content', flexDirection: 'column', background: '#1A1C20', ' img': { width: '490px', height: "490px" }, borderRadius: '45px' ,alignItems:'center',boxSizing:'border-box'}}>

                <img src={image} />

                <Typography color={'white'} fontSize={120}>{name}</Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', width:'fit-content' ,my:0.5}}>
                    <Spring mode='active' style={{margin:'4px'}} />
                    <Summer mode='active' style={{margin:'4px'}} />
                    <Fall mode='active'  style={{margin:'4px'}}/>
                    <Winter mode='active' style={{margin:'4px'}} />
                </Box>


                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography color={'white'} fontSize={140}>{price.toLocaleString()}</Typography>
                    <Typography color={'#F0A500'} fontSize={100}>$</Typography>
                    <Typography color={'GrayText'} fontSize={60}>/mm</Typography>
                </Box>



            </Box>
        </Grid>
    )
}
