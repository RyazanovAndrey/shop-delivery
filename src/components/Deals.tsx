'use client'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { dealsList } from '@/data';
import Image from 'next/image';
import ButtonRight from './ButtonRight';
import { ChevronRight } from 'lucide-react';
import dealsItems from '../data.json';
import Card from './CardDeals';

function Deals() {

    return (
        <div className='my-20'>
            <div className="font-fugaz-one text-3xl">Todays Best Deals</div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1.5}
                grabCursor={true}
                autoplay={{ delay: 2500 }}
                speed={500}
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    }
                }}
                className='mt-10'
            >
                {dealsList.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col rounded-2xl items-center gap-5 p-5 min-h-[200px]" style={{ backgroundImage: `url('${item.bg}')` }}>
                            <Image alt='' src={item.image} />
                            <div className="space-y-5">
                                <div className="font-fugaz-one text-2xl ">{item.title}</div>
                                <div className="text-gray-500 text-sm">{item.description}</div>
                                <ButtonRight variant='fill' icon={<ChevronRight />} >Shop now</ButtonRight>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='mt-20'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                    {dealsItems.recommended.slice(7, 12).map(item => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals
