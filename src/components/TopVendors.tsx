import React from 'react'
import vendorsList from '../data.json'
import Image from 'next/image'

function TopVendors() {
    return (
        <div className='my-20'>
            <div className="font-fugaz-one text-3xl mb-20">Weekly Top Vendors</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-15">
                {vendorsList.vendors.map(item => (
                    <div key={item.id} className={`relative top-0 rounded-2xl p-5 flex flex-col items-center gap-y-5 cursor-pointer hover:-top-1 transition-all`} style={{ backgroundColor: `${item.color}` }}>
                        <div className={`size-30 -mt-15 rounded-full flex items-center justify-center`} style={{ backgroundColor: `${item.color}` }}>
                            <Image alt='' src={item.vendorMain} width={80} height={80} />
                        </div>
                        <div className="text-xl font-bold">{item.title}</div>
                        <div className="bg-green-bg text-white py-2 px-6 inline-block rounded-md">{item.off}</div>
                        <div className="flex gap-x-5">
                            {item.vendors.map((item, i) => {
                                return <Image key={i} src={item} alt='' width={50} height={50} className='bg-white rounded-full p-2' />
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopVendors