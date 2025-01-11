import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

type Product = {
    id: string;
    image: string[];
    name: string;
    price: number;
};

const ProductItem = ({ id, image, name, price }:Product) => {
    const {currency} = useContext(ShopContext) ?? {}
    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img className="hover:scale-105 transition-all duration-700 ease-in-out" src={image[0]} alt="" />
                <p className="pt-3 pb-1 text-sm text-gray-700">{name}</p>
                <p className="text-sm font-medium text-black">{currency}{price}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
