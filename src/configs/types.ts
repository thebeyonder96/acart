import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export interface ShopContextType {
  products: Product[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  cart: any,
  addToCart: any
  getCartCount: any
}

export interface ShopContextProviderProps {
  children: ReactNode;
}
export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
};

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type SelectEvent = ChangeEvent<HTMLSelectElement>;
