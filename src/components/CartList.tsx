'use client'
import { useCartList } from '@/store/useCart'
import { IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

function CartList() {

    const cartList = useCartList((state) => state.cart)
    const cartPlus = useCartList((state) => state.countPlus)
    const cartMinus = useCartList((state) => state.countMinus)
    const cartDelete = useCartList((state) => state.cartDelete)

    const totalSum = cartList.reduce((total, item) => total + item.count * item.price, 0)

    return (
        <div className='grid grid-cols-[3fr_1fr] gap-x-5'>
            <div className="">
                <table className="w-full border border-gray-200">
                    <thead className='bg-green-light'>
                        <tr className='text-left'>
                            <th className='p-3'>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.length == 0 ? <tr className=''><td className='p-3'>No products added...</td></tr> : ''}
                        {cartList.map(({ count, id, image, price, title }: IProduct) => (
                            <tr key={id} className=''>
                                <td className='p-3'>
                                    <div className="flex items-center gap-x-10">
                                        <Image src={image} width={60} height={60} alt='' />
                                        <div className="font-fugaz-one text-2xl">{title}</div>
                                    </div>
                                </td>
                                <td className='p-3'>{price}</td>
                                <td className='text-center p-3 flex gap-x-2 items-center'><button onClick={() => cartMinus(id)} className='size-10  cursor-pointer bg-gray-200 rounded-md'>-</button>{count}<button onClick={() => cartPlus(id)} className='size-10 cursor-pointer bg-gray-200 rounded-md'>+</button></td>
                                <td className='text-center p-3'>{price * count}</td>
                                <td onClick={() => cartDelete(id)} className='text-center p-3'><button className='text-red-500 cursor-pointer'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-green-light p-5">
                <div className="">Cart Totals</div>
                <div className="flex items-center justify-between">
                    <div className="">Subtotal</div>
                    <div className="">${totalSum}</div>
                </div>
                <div className="flex items-center justify-between pb-3">
                    <div className="">Estimated Delivery</div>
                    <div className="">Free</div>
                </div>
                <div className="flex items-center justify-between font-bold border-t-1 border-gray-200 py-3">
                    <div className="">Total</div>
                    <div className="">${totalSum}</div>
                </div>
                <Link href={'/account/checkout'} className='bg-green-bg w-full block text-white py-3 cursor-pointer rounded-md text-center'>Process to checkout</Link>
            </div>
        </div>
    )
}

export default CartList