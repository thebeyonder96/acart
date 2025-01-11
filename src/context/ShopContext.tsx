import { createContext } from "react";
import { products } from '../assets/assets';
import { ShopContextProviderProps, ShopContextType } from "../configs/types";

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider = (props:ShopContextProviderProps) => {
    const currency = '$';
    const delivery_fee = 100;
    const value = {
        products,
        currency,
        delivery_fee
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;