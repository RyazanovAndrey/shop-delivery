import Link from 'next/link'
import React from 'react'
import { footerLinks } from '@/data'
import Image from 'next/image'
import AppStore from '../../public/store-img1.png'
import GooglePlay from '../../public/store-img2.png'

function Footer() {
    return (
        <footer className='py-10'>
            <div className="container mx-auto px-3">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-x-5">
                    <div className="">
                        <Link href={'/'} className='font-fugaz-one text-3xl'>Shop<span className='text-green-bg'>Delivery</span></Link>
                        <p className='mt-2 text-gray-500 text-[16px]'>We are Grocery Shop, an innovative team of food supliers.</p>
                    </div>
                    <div className="">
                        <div className="font-fugaz-one font-bold text-2xl mb-2">Information</div>
                        <div className="space-y-2">
                            {footerLinks['Information'].map((item, i) => {
                                return <Link key={i} href={'/'} className='block'>{item}</Link>
                            })}
                        </div>
                    </div>
                    <div className="">
                        <div className="font-fugaz-one font-bold text-2xl mb-2">Support</div>
                        <div className="space-y-2">
                            {footerLinks['Support'].map((item, i) => {
                                return <Link key={i} href={'/'} className='block'>{item}</Link>
                            })}
                        </div>
                    </div>
                    <div className="">
                        <div className="font-fugaz-one font-bold text-2xl mb-2">Account</div>
                        <div className="space-y-2">
                            {footerLinks['Account'].map((item, i) => {
                                return <Link key={i} href={'/'} className='block'>{item}</Link>
                            })}
                        </div>
                    </div>
                    <div className="">
                        <div className="font-fugaz-one font-bold text-2xl mb-2">Groceries</div>
                        <div className="space-y-2">
                            {footerLinks['Groceries'].map((item, i) => {
                                return <Link key={i} href={'/'} className='block'>{item}</Link>
                            })}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-fugaz-one font-bold text-2xl mb-2">Shop on The Go</div>
                        <Image src={AppStore} alt='' />
                        <Image src={GooglePlay} alt='' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer