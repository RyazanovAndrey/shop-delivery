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
            <div className="">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    loop
                    grabCursor
                >
                    {arrivalsList.recommended.map(item => (
                        <SwiperSlide key={item.id}>
                            <CardDefault {...item} addToCart={toCartList} toWhishList={toWhishList} isAddToWish={wishList.some(wish => wish.id == item.id)} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};