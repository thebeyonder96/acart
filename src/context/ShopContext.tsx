import { createContext, useEffect, useState } from "react";
import { products } from '../assets/assets';
import { ShopContextProviderProps, ShopContextType } from "../configs/types";
import { toast } from "react-toastify";

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider = (props:ShopContextProviderProps) => {
    const currency = '$';
    const delivery_fee = 100;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cart,setCart] = useState<any>({})

    const addToCart = async (itemId:string,size:string)=>{
        if(!size) return toast.error('Select product size')
        let cartData = structuredClone(cart)
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCart(cartData)
    }

    const getCartCount = ()=>{
        let count = 0
        for(const item in cart){
            for(const val in cart[item]){
                try {
                    if(cart[item][val] > 0){
                        count += cart[item][val]
                    }
                } catch (error) {
                    
                }
            }
        }
        return count
    }

    useEffect(()=>{
        
    },[cart])
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cart,
        addToCart,
        getCartCount
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;