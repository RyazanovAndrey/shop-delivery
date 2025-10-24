'use client'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { Heart, MapPin, Phone, Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import ProductList from '../data.json'
import Image from 'next/image'
import { useWishList } from '@/store/useWishList'
import { useCartList } from '@/store/useCart'

function Header() {

    const [search, setsearch] = useState('')

    const totalWish = useWishList((state) => state.wishlist)
    const totalHeart = totalWish.length
    const cart = useCartList((state) => state.cart)

    const cartTotal = cart.reduce((total, item) => total + item.count, 0)

    const findProduct = ProductList.deals.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <header className='sticky top-0 z-50'>

            <div className="bg-green-bg w-full">
                <div className="container mx-auto px-3 py-2 flex justify-between items-center">
                    <div className="flex text-sm items-center">
                        <Link href={'/'} className='text-white hover:underline border-r-1 border-white pr-5'>About</Link>
                        <Link href={'/'} className='text-white hover:underline border-r-1 border-white pl-5 pr-5'>Free Delivery</Link>
                        <Link href={'/'} className='text-white hover:underline pl-5'>Returns Policy</Link>
                    </div>
                    <div className="flex text-sm items-center">
                        <Link href={'/'} className='text-white hover:underline border-r-1 border-white pr-5'>Help Center</Link>
                        <Link href={'/account'} className='text-white hover:underline pl-5'>My Account</Link>
                    </div>
                </div>
            </div>

            <div className="py-5 bg-green-light">
                <div className="container mx-auto px-3 flex justify-between items-center gap-2">
                    <Link href={'/'} className='font-fugaz-one text-3xl'>Shop<span className='text-green-bg'>Delivery</span></Link>
                    <div className="flex gap-x-3">
                        <div className=" relative border rounded-md border-gray-300 flex items-center justify-between bg-white md:min-w-[500px]">
                            <input value={search} onChange={e => setsearch(e.target.value)} type="text" placeholder='search propduct or brand' className='pl-3 outline-0 w-full' />
                            <button className='size-10 bg-green-bg flex items-center justify-center cursor-pointer'><Search color='white' /></button>
                            {search && (
                                <div className='absolute left-0 top-[105%] bg-white rounded-md max-h-[100px] overflow-auto  min-w-[500px] shadow-xl'>
                                    {findProduct.map(item => (
                                        <div key={item.id} className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
                                            <Image src={item.image} width={40} height={40} alt='' />
                                            <Link href={`/product/${item.id}`}>{item.title}</Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className='hidden border-gray-200 border px-4 rounded-md cursor-pointer text-green-bg md:flex items-center gap-x-3 bg-white'><MapPin />New York</button>
                    </div>
                    <div className="hidden md:flex items-center gap-x-2">
                        <Link href={'/account/wishlist'} className='relative size-10 flex items-center justify-center'>
                            <Heart />
                            <div className="absolute top-0 right-0 size-4 text-[10px] bg-green-bg flex items-center justify-center text-white rounded-full">{totalHeart}</div>
                        </Link>
                        <div className="flex items-center relative size-10 justify-center">
                            <Link href={'/account/cart'} className='size-8 flex items-center justify-center'><ShoppingCart /></Link>
                            <div className="absolute top-0 right-0 size-4 text-[10px] bg-green-bg flex items-center justify-center text-white rounded-full">{cartTotal}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 bg-white">
                <div className="container mx-auto px-3 flex items-center justify-between">
                    <NavMenu totalWish={totalHeart} cartTotal={cartTotal} />
                    <div className="flex items-center gap-x-2 bg-green-bg text-white py-2 px-4 cursor-pointer"><Phone size={18} />01-234-256-600</div>
                </div>
            </div>

        </header>
    )
}

export default Header