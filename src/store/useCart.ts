import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IProduct {
    id: string,
    image: string,
    title: string,
    price: number,
    count: number
}

interface StoreCart {
    cart: IProduct[],
    addToCartList: (product: IProduct) => void,
    countPlus: (id: string) => void,
    countMinus: (id: string) => void,
    cartDelete: (id: string) => void
}

export const useCartList = create<StoreCart>()(devtools(persist((set, get) => ({
    cart: [],
    addToCartList: (product: IProduct) => {

        const { cart } = get()
        const findProd = cart.find(item => item.id == product.id)

        const newCart = findProd ? cart.map(item => item.id == product.id ? {...item, count: item.count + 1} : item) : [...cart, product]

        set({ cart: newCart })
    },
    countPlus: (id: string) => {
        const { cart } = get()
        const findProd = cart.find(item => item.id == id)

        if(findProd) {
            set({ cart: cart.map(item => item.id == id ? {...item, count: item.count + 1} : item) })
        }
    },
    countMinus: (id: string) => {
        const { cart } = get()

        set({ cart: cart.map(item => item.id == id ? {...item, count: item.count == 1 ? item.count = 1 : item.count - 1} : item) })
    },
    cartDelete: (id: string) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
    }))
}), { name: 'cartlist' }), { store: 'cart' }))