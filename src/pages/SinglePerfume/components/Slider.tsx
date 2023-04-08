import React from 'react'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import photo from '@assets/samplePerfume.png'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export const Slider = () => {
    return (
        <Box display={'block'} width={'100%'} sx={{
            px:2,
            boxSizing:'border-box',
            '& .swiper-slide': {
                height: '550px',
                maxWidth: '100%',
                '& img': {
                    objectFit: 'contain',
                    height: '100%',
                    borderRadius: 1,
                    overflow: 'hidden'
                }

            }
            ,
            '& .swiper-pagination-fraction': {
                fontSize: '2.5rem',
                fontFamily:'sans-serif',
                color:'#3E3E3E'
            }
        }}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                // pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                pagination={{
                    type: "fraction",

                }}


            >
                <SwiperSlide>
                    <img width={'100%'} src={photo} />

                </SwiperSlide>
                <SwiperSlide>  <img width={'100%'} src={photo} /></SwiperSlide>
                <SwiperSlide>  <img width={'100%'} src={'https://www.en-vols.com/wp-content/uploads/afmm/2022/10/dior-sauvage.webp'} /></SwiperSlide>
                <SwiperSlide>  <img width={'100%'} src={photo} /></SwiperSlide>

            </Swiper>
        </Box>
    )
}
