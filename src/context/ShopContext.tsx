import { createContext, useEffect, useState } from "react";
import { products } from '../assets/assets';
import { Cart, ShopContextProviderProps, ShopContextType } from "../configs/types";
import { toast } from "react-toastify";

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider = (props:ShopContextProviderProps) => {
    const currency = '$';
    const delivery_fee = 50;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cart,setCart] = useState<Cart>({})

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

    const updateCartQuantity = async (itemId:string,size:string,quantity:number)=>{
        let tempCart = structuredClone(cart);
        tempCart[itemId][size] = quantity
        setCart(tempCart)
    }

    const getCartAmount = ()=>{
        // debugger
        let totalAmount = 0;
        console.log(cart)
        for(const items in cart){
            const productInfo = products.find(product=> product._id === items)
            for(const item in cart[items]){
                try {
                    if(cart[items][item] > 0){
                        totalAmount += (productInfo?.price ?? 1) * cart[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount
    }

    useEffect(()=>{
        // console.log(cart)
        getCartAmount()
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
        getCartCount,
        updateCartQuantity,
        getCartAmount
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;