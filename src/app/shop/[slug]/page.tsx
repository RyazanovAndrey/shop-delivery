'use client'
import { useParams } from "next/navigation";
import recommendedList from '../../../data.json';
import { BadgeDollarSign, Heart, PackageOpen, ShieldAlert, ShoppingBag, ShoppingCart, Undo2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type IProps = {
    id: string,
    image: string | undefined
    title: string,
    price: number,
    lessprice: string,
    review: string,
    sold: string,
    sale?: string
} | undefined

// export function generateStaticParams() {
//     return recommendedList.recommended.map(item => ({
//         id: item.id
//     }))
// }

export default function Page() {

    const { slug } = useParams<{ slug: string }>()
    const [count, setCount] = useState(1)

    const findProduct: IProps = recommendedList.recommended.find(item => item.id == slug)

    const countPlus = () => {
        setCount(count + 1)
    }

    const countMinus = () => {
        setCount(count == 1 ? 1 : count - 1)
    }

    return (
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-x-5">
                <div className="border border-gray-200 w-h-80 h-80 overflow-hidden flex flex-col items-center">
                    <Image alt="" width={300} height={300} src={findProduct?.image ?? ''} />
                </div>
                <div className="space-y-5">
                    <div className="font-fugaz-one text-2xl">{findProduct?.title}</div>
                    <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem inventore nisi odio beatae. In odit hic autem similique praesentium rem.</p>
                    <div className="font-fugaz-one text-2xl flex gap-x-10">
                        <p>${findProduct?.price}</p>
                        <p className="text-gray-500 line-through">{findProduct?.lessprice}</p>
                    </div>
                    <div className="">
                        <p>Quntity:</p>
                        <div className="flex gap-x-2">
                            <div className="flex items-center gap-x-2">
                                <button onClick={countMinus} className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center cursor-pointer">-</button>
                                <span>{count}</span>
                                <button onClick={countPlus} className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center cursor-pointer">+</button>
                            </div>
                            <button onClick={() => { }} className='flex justify-center gap-x-2 bg-green-light text-green-bg w-full rounded-xl cursor-pointer hover:bg-green-bg hover:text-white transition-all p-3 mt-auto'><ShoppingCart />Add to cart</button>
                            <button onClick={() => { }} className='flex justify-center gap-x-2 bg-green-light text-green-bg w-full rounded-xl cursor-pointer hover:bg-green-bg hover:text-white transition-all p-3 mt-auto'><Heart />Add to whishlist</button>
                        </div>
                    </div>
                </div>
                <div className="bg-green-light p-5 space-y-3">
                    <div className="flex gap-x-3 border-b-1 border-gray-300 pb-5">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <Undo2 />
                        </div>
                        <div className="">
                            <div className="font-fugaz-one">Free 30-days returns</div>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-3 border-b-1 border-gray-300 pb-5">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <ShoppingBag />
                        </div>
                        <div className="">
                            <div className="font-fugaz-one">Pickup available at shop location</div>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-3 border-b-1 border-gray-300 pb-5">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <BadgeDollarSign />
                        </div>
                        <div className="">
                            <div className="font-fugaz-one">Payment</div>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-3 border-b-1 border-gray-300 pb-5">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <ShieldAlert />
                        </div>
                        <div className="">
                            <div className="font-fugaz-one">Warrently</div>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <PackageOpen />
                        </div>
                        <div className="">
                            <div className="font-fugaz-one">Packaging</div>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 mt-5 p-5">
                <div className="font-fugaz-one text-2xl mb-2">Product description</div>
                <p className="text-gray-500 leading-[1.8]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint nemo, minus dolore nulla ut a harum alias! Error, neque repellendus animi asperiores culpa incidunt nesciunt sapiente enim libero voluptas.</p>
                <p className="text-gray-500 leading-[1.8]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint nemo, minus dolore nulla ut a harum alias! Error, neque repellendus animi asperiores culpa incidunt nesciunt sapiente enim libero voluptas.</p>
            </div>
        </div>
    );
}