'use client'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import ImageSlider1 from '../../public/hero-img1.png';
import ImageSlider2 from '../../public/hero-img2.png';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import ButtonBuy from './ButtonBuy';

export default function HomeSlider() {

    return (
        <div className="relative">
            <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    loop={true} >
                <SwiperSlide>
                    <div className="h-[400px] grid grid-cols-1 flex-col md:grid-cols-2 items-center gap-x-20 p-10 md:p-20 bg-[#D5EBC1] rounded-2xl" style={{ backgroundImage: 'url("/hero-bg.png")' }}>
                        <div className=" space-y-5">
                            <div className="font-fugaz-one text-2xl md:text-5xl anim-slider-top-1">Daily Grocery Order and Get Express Delivery</div>
                            <p className='text-sm md:text-2xl anim-slider-top-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perspiciatis, veritatis earum voluptas repellendus dolorum tempore eaque ullam ut atque!</p>
                            <ButtonBuy variant='fill' icon={<ShoppingCart />}>Show more</ButtonBuy>
                        </div>
                        <div className="">
                            <Image src={ImageSlider1} alt='' className='anim-slider-scale' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[400px] flex items-center gap-x-20 p-20 bg-[#D5EBC1] rounded-2xl" style={{ backgroundImage: 'url("/hero-bg.png")' }}>
                        <div className="w-1/2 space-y-5">
                            <div className="font-fugaz-one text-5xl anim-slider-top-1">Daily Grocery Order and Get Express Delivery</div>
                            <p className='anim-slider-top-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perspiciatis, veritatis earum voluptas repellendus dolorum tempore eaque ullam ut atque!</p>
                            <ButtonBuy variant='fill' icon={<ShoppingCart />}>Show more</ButtonBuy>
                        </div>
                        <div className="w-1/2">
                            <Image src={ImageSlider2} alt='' className='anim-slider-scale' />
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
            <div className="prev-btn"><ChevronLeft /></div>
            <div className="next-btn"><ChevronRight /></div>
        </div>
    );
};