import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../configs/types";
import { assets, products } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { useCartActions } from "../hooks/cart.hook";
import { useAtom } from "jotai";
import { currencyAtom } from "../store/cart.atom";

const Product = () => {
  const { productID } = useParams();
  const [productData, setProductData] = useState<Product | null>(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const {addToCart} = useCartActions()
  const [currency] = useAtom(currencyAtom)

  const fetchProduct = async () => {
    products &&
      products.map((item) => {
        if (item._id === productID) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
  };

  useEffect(() => {
    fetchProduct();
  }, [productID, products]);

  return (
    productData && (
      <div className="border-t-2 pt-10 rounded">
        <div className="flex gap-12 flex-col sm:flex-row">
          {/* -------------- Images */}
          <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
              {productData.image.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={i}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer"
                  alt=""
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>
          {/*------------------  Product info */}
          <div className="flex-1">
            <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} className="w-5" alt="" />
              <img src={assets.star_icon} className="w-5" alt="" />
              <img src={assets.star_icon} className="w-5" alt="" />
              <img src={assets.star_icon} className="w-5" alt="" />
              <img src={assets.star_dull_icon} className="w-5" alt="" />
              <p className="pl-2">(1100)</p>
            </div>
            <p className="text-3xl font-medium mt-5">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col my-8 gap-4">
              <p>Select size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, i) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border px-4 py-2 bg-gray-100 rounded ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=> addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded">
              Add to cart
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* ----------------- Description */}
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm rounded">Description</b>
            <p className="border px-5 py-3 text-sm rounded">Reviews (12)</p>
          </div>
          <div className="flex flex-col border gap-4 px-6 py-6 text-sm text-gray-600 rounded">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sed? Reiciendis quaerat magnam inventore officiis fugiat reprehenderit maxime aperiam enim nulla a esse, voluptatem veritatis eveniet error sunt quam ex libero totam dolor quos soluta aliquam assumenda? Tempora delectus natus eum, dolorem, saepe perferendis eius et at dolore, eveniet maxime!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sed? Reiciendis quaerat magnam inventore officiis fugiat reprehenderit maxime aperiam enim nulla a esse, voluptatem veritatis eveniet error sunt quam ex libero totam dolor quos soluta aliquam assumenda? Tempora delectus natus eum, dolorem, saepe perferendis eius et at dolore, eveniet maxime!</p>
          </div>
        </div>
        {/* ------------------ Related products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    )
  );
};

export default Product;
