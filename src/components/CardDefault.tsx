'use client'
import { Heart, ShoppingCart, Star, Store } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export interface IProduct {
    id: string,
    image: string,
    title: string,
    price: number,
    count: number
}

export interface IProps {
    id: string,
    image: string,
    title: string,
    price: number,
    lessprice: string,
    review: string,
    sold: string,
    sale?: string
    addToCart: (product: IProduct) => void,
    toWhishList: (product: IProduct) => void,
    isAddToWish: boolean
}

function CardDefault({ id, image, title, price, lessprice, review, sold, sale, addToCart, toWhishList, isAddToWish }: IProps) {

    const productInfo = { id, image, title, price, count: 1 }
    const isAddToWishTheme = isAddToWish ? 'bg-green-bg text-white' : 'bg-green-light text-green-bg'

    return (
        <div className='flex flex-col border border-gray-300 p-2 rounded-2xl space-y-3 hover:border-green-bg cursor-pointer transition-all'>
            <div className={`flex items-center ${sale ? 'justify-between' : 'justify-end'}`}>
                {sale && <div className={`${sale == 'New' ? 'bg-amber-500 text-white py-2 px-4 rounded-full sticker-round' : ''}${sale.includes('%') ? 'text-white p-2 px-4 rounded-full bg-red-500 sticker-round' : ''}`}>{sale}</div>}
                <button onClick={() => toWhishList(productInfo)} className={`flex gap-x-2 py-3 px-3 rounded-full cursor-pointer hover:bg-green-bg hover:text-white transition-all ${isAddToWishTheme}`}><Heart /></button>
            </div>
            <div className="flex flex-col items-center justify-center h-[200px] w-full">
                <Image src={image} width={170} height={170} alt='' />
            </div>
            <div className="flex gap-x-3">
                <div className="text-gray-300 line-through">{lessprice}</div>
                <div className="">${price}</div>
                <div className="">/Qty</div>
            </div>
            <div className="text-gray-300 flex items-center gap-x-2"><Store color='#26a35f' size={16} />By Lucky Supermarket</div>
            <Link href={`/shop/${id}`} className='font-fugaz-one min-h-[50px]'>{title}</Link>
            <div className="flex items-center gap-x-2"><Star color='#F1B20A' />{review}</div>
            <div className="font-fugaz-one text-gray-400 text-sm">Sold {sold}</div>
            <button onClick={() => addToCart(productInfo)} className='flex justify-center gap-x-2 bg-green-light text-green-bg w-full rounded-xl cursor-pointer hover:bg-green-bg hover:text-white transition-all p-3 mt-auto'><ShoppingCart />Add to cart</button>
        </div>
    )
}

export default CardDefault