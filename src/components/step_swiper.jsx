import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  {SwiperCore, Navigation, Pagination } from 'swiper';
import 'swiper/css';

const StepSwiper = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Array.from({ length: 18 }, (_, index) => (
                    <SwiperSlide key={index}>
                        <h2>Step {index + 1}</h2>
                        <p>Content for step {index + 1} here...</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StepSwiper;