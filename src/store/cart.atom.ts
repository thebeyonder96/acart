import { atom } from "jotai";
import { products } from "../assets/assets";
import { Cart } from "../configs/types";

// Basic atoms
export const searchAtom = atom('');
export const showSearchAtom = atom(false);
export const cartAtom = atom<Cart>({});

export const currencyAtom = atom('$');
export const deliveryFeeAtom = atom(50);

// Derived atom: Cart Count
export const cartCountAtom = atom((get) => {
  const cart = get(cartAtom);
  let count = 0;
  for (const item in cart) {
    for (const val in cart[item]) {
      if (cart[item][val] > 0) {
        count += cart[item][val];
      }
    }
  }
  return count;
});

// Derived atom: Cart Total Amount
export const cartAmountAtom = atom((get) => {
  const cart = get(cartAtom);
  let totalAmount = 0;
  for (const itemId in cart) {
    const productInfo = products.find(product => product._id === itemId);
    for (const size in cart[itemId]) {
      if (cart[itemId][size] > 0) {
        totalAmount += (productInfo?.price ?? 1) * cart[itemId][size];
      }
    }
  }
  return totalAmount;
});
