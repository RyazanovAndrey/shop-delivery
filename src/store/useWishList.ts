import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IProduct {
    id: string,
    image: string,
    title: string,
    price: number,
    count: number
}

interface StoreWish {
    wishlist: IProduct[],
    addToWishList: (product: IProduct) => void
}

export const useWishList = create<StoreWish>()(persist((set, get) => ({
    wishlist: [],
    addToWishList: (product: IProduct) => {

        const { wishlist } = get()
        const findProd = wishlist.find(item => item.id == product.id)

        const newWish = findProd ? wishlist.filter(item => item.id !== product.id) : [...wishlist, product]
        set({ wishlist: newWish })

    }
}), { name: 'wishlist' }))