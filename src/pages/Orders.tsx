import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { currency, products } =
    useContext(ShopContext) ?? {};
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="My" text2="orders" />
      </div>

      <div>
        {products?.slice(0, 4).map((product, i) => (
          <div
            className="flex flex-col md:flex-row md:items-center py-4 border-t border-b text-gray-700 md:justify-between gap-4"
            key={i}
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-1/6 sm:w-20" src={product.image[0]} alt="" />
              <div>
                <p className="text-base font-medium">{product.name}</p>
                <div className="flex items-center text-base gap-3 mt-2 text-gray-700 ">
                  <p>
                    {currency}
                    {product.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>
                  Date: <span className="text-gray-400">19, Apr 2025</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="btn-white">Track order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
