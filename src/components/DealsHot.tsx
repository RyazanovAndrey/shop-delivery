'use client'
import HotDeals from '../../public/hot-deals-img.png'
import Image from 'next/image'
import ButtonRight from './ButtonRight'
import { ChevronRight } from 'lucide-react'
import HotDealsList from '../data.json'
import CardDefault from './CardDefault'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { useWishList } from '@/store/useWishList'
import { useCartList } from '@/store/useCart'

function DealsHot() {

    const wishList = useWishList((state) => state.wishlist)
    const toWhishList = useWishList((state) => state.addToWishList)
    const toCartList = useCartList((state) => state.addToCartList)

    return (
        <div className="">
            <div className="font-fugaz-one text-3xl mb-8">Todays Hot Deals</div>
            <div className='flex gap-x-5'>
                <div className="flex flex-col gap-y-5 items-center bg-green-bg rounded-2xl p-5 offers-bg w-1/4">
                    <Image src={HotDeals} alt='' />
                    <div className="font-fugaz-one text-white text-3xl">Fresh Vagetables</div>
                    <p className='text-white'>Get the freshest vegetables delivered to your doorstep. Healthy,
                        organic, and full of flavor!</p>
                    <ButtonRight variant='white' icon={<ChevronRight />} >Shop now</ButtonRight>
                </div>
                <div className="w-3/4">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop
                        grabCursor
                        autoplay={{ delay: 2000 }}
                        speed={500}
                    >
                        {HotDealsList.deals.map((item, i) => (
                            <SwiperSlide key={i} className=''>
                                <CardDefault {...item} addToCart={toCartList} toWhishList={toWhishList} isAddToWish={wishList.some(wish => wish.id == item.id)} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default DealsHot