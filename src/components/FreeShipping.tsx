import { Truck } from 'lucide-react'
import React from 'react'

function FreeShipping() {

    const shippingList = [
        { icon: <Truck color='white' />, title: 'Free Shipping' },
        { icon: <Truck color='white' />, title: '100% Satisfaction' },
        { icon: <Truck color='white' />, title: 'Secure Payments' },
        { icon: <Truck color='white' />, title: '24/7 Support' },
    ]

    return (
        <div className='grid grid-cols-4 gap-x-5 my-20'>
            {shippingList.map((item, i) => (
                <div key={i} className="bg-green-light rounded-2xl flex items-center p-3 gap-x-5">
                    <div className=" bg-green-bg w-[80px] h-[50px] rounded-full flex items-center justify-center">
                        {item.icon}
                    </div>
                    <div className="">
                        <div className="text-xl font-fugaz-one">{item.title}</div>
                        <p className='text-gray-500 text-[14px] mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, fuga!</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FreeShipping