import { ReactNode } from "react";

export interface ShopContextType {
    products: Product[];
    currency: string;
    delivery_fee: number;
}

export interface ShopContextProviderProps {
    children: ReactNode;
}
export type Product = {
    _id :string
    name: string
    description:string
    price:number
    image:string[]
    category:string
    subCategory:string
    sizes:string[]
    date:number
    bestseller:boolean
}
