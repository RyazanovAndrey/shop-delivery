import React from 'react'
import Image from 'next/image'
import { bannerList } from '@/data'
import ButtonRight from './ButtonRight'
import { ChevronRight } from 'lucide-react'

function Banners() {
    return (
        <div className='grid grid-cols-4 gap-x-5'>
            {bannerList.map((item, i) => (
                <div key={i} className="relative">
                    <Image src={item.image} alt='' />
                    <div className="absolute bottom-3 left-3">
                        <div className="font-fugaz-one w-[150px] mb-2">{item.heading}</div>
                        <ButtonRight variant='fill' icon={<ChevronRight />} >Shop now</ButtonRight>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Banners