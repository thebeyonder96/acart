import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { InputChangeEvent, type Cart } from "../configs/types";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

type CartItems = {
  id: string;
  size: string;
  quantity: number;
};

const Cart = () => {
  const { cart, currency, products, updateCartQuantity } = useContext(ShopContext) ?? {};
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const navigate = useNavigate()

  const updateCart = (e:InputChangeEvent,id:string,size:string)=>{
    const quantity = e.target.value
    if(quantity === '' || quantity === '0' ) return
    updateCartQuantity(id,size,Number(quantity))
  }

  useEffect(() => {
    const tempCart: CartItems[] = [];
    debugger
    for (const itemId in cart) {
      for (const size in cart[itemId]) {
        const quantity = cart[itemId][size];
        if (quantity > 0) {
          tempCart.push({
            id: itemId,
            size,
            quantity,
          });
        }
      }
    }
    setCartItems(tempCart);
  }, [cart]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Your" text2="Cart" />
      </div>

      <div>
        {cartItems.map((cart,i) => {
          const productData = products?.find(
            (product) => product._id === cart.id
          );

          return (
            <div key={i} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData?.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData?.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData?.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 rounded">{cart.size}</p>
                  </div>

                </div>
              </div>
              <input onChange={(e)=>updateCart(e,String(productData?._id),cart.size)} className="border border-slate-200 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded outline-slate-300" type="number" min={1} defaultValue={cart.quantity} name="" id="" />
              <img onClick={()=> updateCartQuantity(cart.id,cart.size,0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20"> 
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
              <button onClick={()=> navigate('/place-order')} className="btn-default">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
