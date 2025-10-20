'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import arrivalsList from '../data.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardDefault from './CardDefault';
import { useWishList } from '@/store/useWishList';
import { useCartList } from '@/store/useCart';

export default function NewArrivals() {

    const wishList = useWishList((state) => state.wishlist)
    const toWhishList = useWishList((state) => state.addToWishList)
    const toCartList = useCartList((state) => state.addToCartList)

    return (
        <div className="mt-20">
            <div className="font-fugaz-one text-3xl mb-10">New arrivals</div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.5}
                    loop
                    grabCursor
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {arrivalsList.recommended.map(item => (
                        <SwiperSlide key={item.id}>
                            <CardDefault {...item} addToCart={toCartList} toWhishList={toWhishList} isAddToWish={wishList.some(wish => wish.id == item.id)} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div >

    );
};