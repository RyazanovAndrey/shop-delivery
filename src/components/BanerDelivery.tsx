import Image from 'next/image'
import React from 'react'
import DeliveryMan from '../../public/delivery-man.png'
import DeliverDeals from '../../public/Deals-img2.png'
import ButtonRight from './ButtonRight'
import { ChevronRight } from 'lucide-react'

function BanerDelivery() {
    return (
        <div className='bg-green-bg rounded-2xl grid grid-cols-3 items-center' style={{ backgroundImage: 'url("/delivery-bg.png")' }}>
            <div className="">
                <Image src={DeliveryMan} className='relative top-10' alt='' />
            </div>
            <div className="flex flex-col items-center">
                <p className='text-white font-fugaz-one text-4xl text-center mb-10'>We Delivery on Next Day from 10:00 AM to 08:00 PM</p>
                <ButtonRight variant='white' icon={<ChevronRight />} >Shop now</ButtonRight>
            </div>
            <div className="">
                <Image src={DeliverDeals} alt='' />
            </div>
        </div>
    )
}

export default BanerDelivery