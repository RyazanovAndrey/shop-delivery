'use client'
import CardDefault from '@/components/CardDefault';
import recommendedList from '../data.json'
import { useWishList } from '@/store/useWishList';
import { useCartList } from '@/store/useCart';
import { useState } from 'react';

function ShopList() {

    const wishList = useWishList((state) => state.wishlist)
    const toWhishList = useWishList((state) => state.addToWishList)
    const toCartList = useCartList((state) => state.addToCartList)

    const [percentFilter, setPercentFilter] = useState('All')

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPercentFilter(event.target.value)
    }

    const filterProduct = recommendedList.recommended.filter(item => {
        return percentFilter == 'All' || item.sale == percentFilter
    })

    return (
        <div className="mt-10 grid grid-cols-[400px_1fr] gap-5">
            <div className="sticky top-45 border border-gray-200 p-5 rounded-2xl h-[200px]">
                <div className="font-fugaz-one">Filter products</div>
                <div className="flex gap-x-2">
                    <input type="radio" value={'All'} id='radio-1' name='radio' onChange={handleFilter} />
                    <label htmlFor="radio-1" className='cursor-pointer'>All</label>
                </div>
                <div className="flex gap-x-2">
                    <input type="radio" value={'35%'} id='radio-2' name='radio' onChange={handleFilter} />
                    <label htmlFor="radio-2" className='cursor-pointer'>35% off</label>
                </div>
                <div className="flex gap-x-2">
                    <input type="radio" value={'50%'} id='radio-3' name='radio' onChange={handleFilter} />
                    <label htmlFor="radio-3" className='cursor-pointer'>50% off</label>
                </div>
                <div className="flex gap-x-2">
                    <input type="radio" value={'New'} id='check-4' name='radio' onChange={handleFilter} />
                    <label htmlFor="check-4" className='cursor-pointer'>New</label>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {filterProduct.slice(0, 9).map(item => (
                    <CardDefault key={item.id} {...item} addToCart={toCartList} toWhishList={toWhishList} isAddToWish={wishList.some(wish => wish.id == item.id)} />
                ))}
            </div>
        </div>
    )
}

export default ShopList