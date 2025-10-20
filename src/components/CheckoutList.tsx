'use client'
import { useCartList } from '@/store/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function CheckoutList() {

    const cart = useCartList((state) => state.cart)
    const clearCart = useCartList((state) => state.clearCart)
    const totalCart = cart.reduce((total, item) => total + item.count * item.price, 0)

    const router = useRouter()

    const clearOrder = () => {
        clearCart()
        router.push('/')
    }

    return (
        <div className="space-y-2">
            <div className='space-y-2'>
                {cart.length > 0 ? (
                    cart.map(item => (
                        <div className="flex gap-x-2 border-b-1 border-gray-200 py-3">
                            <Image src={item.image} alt='' width={50} height={50} />
                            <div className="">
                                <div className="font-fugaz-one">{item.title}</div>
                                <div className="">${item.price}</div>
                            </div>
                        </div>
                    ))
                ) : 'No products added...'}
            </div>
            <div className="">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className='font-bold'>${totalCart}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total</span>
                    <span className='font-bold'>${totalCart}</span>
                </div>
            </div>
            <button className='w-full block text-center py-3 rounded-sm bg-green-bg text-white' onClick={clearOrder}>Place order</button>
            <Link href={'/account/cart'} className='border w-full block text-center py-3 rounded-sm'>Back to cart</Link>
        </div>
    )
}

export default CheckoutList