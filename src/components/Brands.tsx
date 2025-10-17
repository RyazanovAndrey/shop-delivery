'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';

function Brands() {

    const brandsList = [
        '/brand-img1.png',
        '/brand-img2.png',
        '/brand-img3.png',
        '/brand-img4.png',
        '/brand-img5.png',
        '/brand-img6.png',
        '/brand-img7.png',
        '/brand-img8.png',
    ]

    return (
        <div className="mt-30 bg-green-light rounded-2xl p-5">
            <div className="text-4xl font-fugaz-one text-center mb-10">Shop by Brands</div>
            <Swiper
                spaceBetween={20}
                slidesPerView={7}
                loop
                grabCursor
            >
                {brandsList.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Image src={item} width={300} height={300} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands