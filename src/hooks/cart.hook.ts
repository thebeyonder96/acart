import { useAtom } from "jotai";
import { cartAtom } from "../store/cart.atom";
import toast from "react-hot-toast";

export const useCartActions = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (itemId: string, size: string) => {
    if (!size) return toast.error("Select product size");

    const newCart = structuredClone(cart);
    if (newCart[itemId]) {
      if (newCart[itemId][size]) {
        newCart[itemId][size] += 1;
      } else {
        newCart[itemId][size] = 1;
      }
    } else {
      newCart[itemId] = { [size]: 1 };
    }

    setCart(newCart);
    toast.success('Added to cart')
  };

  const updateCartQuantity = (itemId: string, size: string, quantity: number) => {
    const newCart = structuredClone(cart);
    if (newCart[itemId]) {
      newCart[itemId][size] = quantity;
      setCart(newCart);
    }
  };

  return { addToCart, updateCartQuantity };
};
