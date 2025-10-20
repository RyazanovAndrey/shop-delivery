'use client'
import recommendedList from '../data.json'
import CardDefault from './CardDefault'
import { useWishList } from '@/store/useWishList'
import { useCartList } from '@/store/useCart'

function Recommend() {

  const wishList = useWishList((state) => state.wishlist)
  const toWhishList = useWishList((state) => state.addToWishList)
  const toCartList = useCartList((state) => state.addToCartList)

  return (
    <div className='py-20'>
      <div className="font-fugaz-one text-3xl">Recommmended for you</div>
      <div className="grid grid-cols-1 md:grid-cols-5 mt-5 gap-5">
        {recommendedList.recommended.map(item => (
          <CardDefault key={item.id} {...item} addToCart={toCartList} toWhishList={toWhishList} isAddToWish={wishList.some(wish => wish.id == item.id)} />
        ))}
      </div>
    </div>
  )
}

export default Recommend