'use client'

import { RiArrowDownSLine } from '@remixicon/react'
import Link from 'next/link'

type TLinks = {
    href: string,
    title: string,
    drop?: { href: string, title: string }[]
}

function NavMenu() {

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
        <div className='flex gap-x-10'>
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
    )
}

export default NavMenu