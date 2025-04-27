import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { currencyAtom } from "../store/cart.atom";

type Product = {
    id: string;
    image: string[];
    name: string;
    price: number;
};

const ProductItem = ({ id, image, name, price }:Product) => {
    const [currency] = useAtom(currencyAtom)
    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden ring-1 ring-gray-200 rounded-md">
                <img className="hover:scale-105 transition-all duration-700 ease-in-out" src={image[0]} alt="" />
                <p className="ml-2 pt-3 pb-1 text-sm text-gray-700">{name}</p>
                <p className="ml-2 mb-2 text-sm font-medium text-black">{currency}{price}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
