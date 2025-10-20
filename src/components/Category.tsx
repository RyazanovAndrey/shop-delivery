'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { categoryList } from '@/data';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

function CategorySLider() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            autoplay={{delay: 1500}}
            modules={[Autoplay]}
            speed={800}
            loop
            breakpoints={{
               640: {
                slidesPerView: 4
               },
               768: {
                slidesPerView: 5
               },
               995: {
                slidesPerView: 8
               }
            }}
            className='my-10'
        >
            {categoryList.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="bg-green-light size-30 rounded-full overflow-hidden flex items-center justify-center p-5">
                            <Image src={item.image} alt='' width={100} height={100} className='hover:scale-120 transition-all' />
                        </div>
                        <div>
                            <div className="font-fugaz-one">{item.title}</div>
                            <div className="text-gray-500 text-sm">{item.products}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CategorySLider