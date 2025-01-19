import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { InputEvent, Product, SelectEvent } from "../configs/types";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext) ?? {};
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState<Product[] | null>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType,setSortType] = useState('relevant')

  const toggleCategory = (e: InputEvent) => {
    const VALUE = e.target.value;
    if (category.includes(VALUE)) {
      setCategory((prev) => prev.filter((item) => item !== VALUE));
    } else {
      setCategory((prev) => [...prev, VALUE]);
    }
  };

  const toggleSubCategory = (e: InputEvent) => {
    const VALUE = e.target.value;
    if (subCategory.includes(VALUE)) {
      setSubCategory((prev) => prev.filter((item) => item !== VALUE));
    } else {
      setSubCategory((prev) => [...prev, VALUE]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products?.slice() ?? [];
    if(showSearch && search){
      productsCopy = productsCopy?.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy?.filter((item) => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item=> subCategory.includes(item.subCategory))
    }
    setFilteredProduct(productsCopy);
  };

  const sortProduct = ()=>{
    let filteredProducts = filteredProduct?.slice() ?? [];
    if(filteredProduct && filteredProduct.length > 0){
      switch (sortType) {
        case "high-low":
          filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "low-high":
          filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
      setFilteredProduct(filteredProducts)
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category,subCategory,search,showSearch]);

  useEffect(()=>{
    sortProduct()
  },[sortType])
  
  useEffect(() => {
    setFilteredProduct(products ?? []);
  }, []);
    return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-all duration-300 ease-in-out ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 transition-all duration-500 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-xs font-semibold mb-3">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-normal text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
                name=""
                id=""
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
                name=""
                id=""
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
                name=""
                id=""
              />{" "}
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-6 transition-all duration-500 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-xs font-semibold mb-3">Type</p>
          <div className="flex flex-col gap-2 text-sm font-normal text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
                name=""
                id=""
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
                name=""
                id=""
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
                name=""
                id=""
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collections" />
          <select
          onChange={(e:SelectEvent)=> setSortType(e.target.value)}
            className="border border-gray-300 px-2 text-xs outline-none rounded"
            name="Sort"
            id=""
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="high-low">Sort by: High-To-Low</option>
            <option value="low-high">Sort by: Low-To-High</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProduct?.map(({ _id, image, name, price }, i) => (
            <ProductItem
              id={_id}
              image={image}
              name={name}
              price={price}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
