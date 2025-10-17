
export interface IProduct {
    id: string,
    image: string,
    title: string,
    price: number,
    count: number
}

export interface IProps {
    id: string,
    image: string,
    title: string,
    price: number,
    lessprice: string,
    review: string,
    sold: string,
    sale?: string
    addToCart: (product: IProduct) => void
}

export type TCart = {
    cart: IProduct[],
    addToCart: (product: IProduct) => void
}
