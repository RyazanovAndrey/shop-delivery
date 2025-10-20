'use client'

import { RiArrowDownSLine } from '@remixicon/react'
import { Heart, Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

type TLinks = {
    href: string,
    title: string,
    drop?: { href: string, title: string }[]
}

type TProps = {
    totalWish: number,
    cartTotal: number
}

function NavMenu({ totalWish, cartTotal } : TProps) {

    const navMenu: TLinks[] = [
        { href: '/', title: 'Home' },
        {
            href: '', title: 'Shop', drop: [
                { href: '/shop', title: 'Shop' },
                { href: '/shop-details', title: 'Shop Details' },
            ]
        },
        {
            href: '', title: 'Pages', drop: [
                { href: '/account/cart', title: 'Cart' },
                { href: '/account/wishlist', title: 'Wishlist' },
                { href: '/account/checkout', title: 'Checkout' },
                { href: '/account', title: 'Account' },
            ]
        },
        {
            href: '', title: 'Blog', drop: [
                { href: '/blog', title: 'Blog' },
                { href: '/blog-details', title: 'Blog Details' },
            ]
        },
        { href: '/contacts', title: 'Contacts' },
    ]

    return (
        <div className='flex gap-x-10 items-center'>
            <button className="md:hidden"><Menu /></button>
            <div className="flex md:hidden items-center gap-x-2">
                        <Link href={'/account/wishlist'} className='relative size-10 flex items-center justify-center'>
                            <Heart />
                            <div className="absolute top-0 right-0 size-4 text-[10px] bg-green-bg flex items-center justify-center text-white rounded-full">{totalWish}</div>
                        </Link>
                        <div className="flex items-center relative size-10 justify-center">
                            <Link href={'/account/cart'} className='size-8 flex items-center justify-center'><ShoppingCart /></Link>
                            <div className="absolute top-0 right-0 size-4 text-[10px] bg-green-bg flex items-center justify-center text-white rounded-full">{cartTotal}</div>
                        </div>
                    </div>
            <div className="hidden md:flex gap-x-10 items-center">
                {navMenu.map((link, i) => (
                    link.drop ? (
                        <div key={i} className='relative cursor-pointer group py-2'>
                            <span className='flex items-center gap-x-1'>{link.title}<RiArrowDownSLine className='relative top-0.5 group-hover:rotate-180 transition-all' size={16} color='grey' /></span>
                            <div className="absolute top-full left-0 w-[150px] shadow-lg bg-white rounded-b-md overflow-hidden hidden group-hover:block">
                                {link.drop.map((item, i) => {
                                    return <Link key={i} href={item.href} className='block p-2 hover:bg-green-light hover:text-green-bg'>{item.title}</Link>
                                })}
                            </div>
                        </div>
                    ) : <Link key={i} className='py-2' href={link.href}>{link.title}</Link>
                ))}
            </div>

        </div>
    )
}

export default NavMenu