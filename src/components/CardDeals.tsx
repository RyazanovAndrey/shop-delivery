'use client'
import { ShoppingCart, Star, Store } from 'lucide-react'
import Image from 'next/image'
import { useCartList } from '@/store/useCart'

export interface IProps {
    id: string,
    image: string,
    title: string,
    price: number,
    lessprice: string,
    review: string,
    sold: string,
}

function Card({ id, image, title, price, lessprice, review, sold }: IProps) {

    const productInfo = { id, image, title, price, count: 1 }
    const addToCart = useCartList((state) => state.addToCartList)

    return (
        <div className='border border-gray-300 p-2 rounded-2xl space-y-3 hover:border-green-bg cursor-pointer transition-all'>
            <div className="flex justify-end">
                <button onClick={() => addToCart(productInfo)} className='flex gap-x-2 bg-green-light text-green-bg py-3 px-6 rounded-full cursor-pointer hover:bg-green-bg hover:text-white transition-all'><ShoppingCart />Add</button>
            </div>
            <div className="flex flex-col items-center justify-center h-[200px] w-full">
                <Image src={image} width={170} height={170} alt='' />
            </div>
            <div className="flex gap-x-3">
                <div className="text-gray-300 line-through">{lessprice}</div>
                <div className="">${price}</div>
                <div className="">/Qty</div>
            </div>
            <div className="flex items-center gap-x-2"><Star color='#F1B20A' />{review}</div>
            <div className="font-fugaz-one">{title}</div>
            <div className="text-gray-300 flex items-center gap-x-2"><Store color='#26a35f' size={16} />By Lucky Supermarket</div>
            <div className="font-fugaz-one text-gray-400 text-sm">Sold {sold}</div>
        </div>
    )
}

export default Card