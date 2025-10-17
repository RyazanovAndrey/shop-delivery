'use client'
import { useCartList } from '@/store/useCart'
import { useWishList } from '@/store/useWishList'
import Image from 'next/image'

interface IProduct {
    id: string,
    image: string,
    title: string,
    price: number,
    count: number
}

function WhishList() {

    const wishList = useWishList((state) => state.wishlist)
    const toWhishList = useWishList((state) => state.addToWishList)
    const addToCart = useCartList((state) => state.addToCartList)

    const addToCartList = ({ count, id, image, price, title }: IProduct) => {
        toWhishList({ count, id, image, price, title })
        addToCart({ count, id, image, price, title })
    }

    return (
        <div>
            <table className="w-full border border-gray-200">
                <thead className='bg-green-light'>
                    <tr className='text-center'>
                        <th className='p-3'>Product</th>
                        <th>Price</th>
                        <th>Add to cart</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {wishList.length == 0 ? <tr className=''><td className='p-3'>No products added...</td></tr> : ''}
                    {wishList.map(({ count, id, image, price, title }: IProduct) => (
                        <tr key={id} className=''>
                            <td className='p-3'>
                                <div className="flex items-center gap-x-10">
                                    <Image src={image} width={60} height={60} alt='' />
                                    <div className="font-fugaz-one text-2xl">{title}</div>
                                </div>
                            </td>
                            <td className='p-3'>{price}</td>
                            <td className='text-center p-3'>
                                <button onClick={() => addToCartList({ count, id, image, price, title })} className='cursor-pointer text-green-bg underline'>Add to cart</button>
                            </td>
                            <td className='text-center p-3'><button onClick={() => toWhishList({ count, id, image, price, title })} className='text-red-500 underline cursor-pointer'>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WhishList