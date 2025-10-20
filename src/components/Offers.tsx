import Image from 'next/image'
import Deal1 from '../../public/offer-img1.png'
import Deal2 from '../../public/offer-img2.png'
import { ChevronRight } from 'lucide-react'

function Offers() {

    const offersList = [
        {
            image: Deal1,
            title: "$5 off your first order",
            description: "Delivery by 6:15am",
        },
        {
            image: Deal2,
            title: "$5 off your first order",
            description: "Delivery by 6:15am",
        },
    ]

    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            {offersList.map((item, i) => (
                <div key={i} className="flex flex-wrap items-center gap-x-5 bg-green-bg rounded-2xl p-5 offers-bg">
                    <Image src={item.image} alt='' />
                    <div className="space-y-6">
                        <div className="font-fugaz-one text-white text-3xl">{item.title}</div>
                        <button className='relative flex items-center gap-x-3 bg-black text-white py-3 px-6 rounded-full cursor-pointer hover:bg-white hover:text-green-bg transition-all z-40'>Shop now<ChevronRight /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Offers