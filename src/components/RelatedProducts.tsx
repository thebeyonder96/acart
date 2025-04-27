import { useEffect, useState } from "react";
import { Product } from "../configs/types";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { products } from "../assets/assets";

type Related = {
    category:string
    subCategory:string
}
const RelatedProducts = ({category,subCategory}:Related) => {
    const [related,setRelated] = useState<Product[]>([])

    useEffect(()=>{
        if(products && products.length > 0){
            let productCopy = products.slice()
            productCopy = productCopy.filter(item => item.category === category)
            productCopy = productCopy.filter(item => item.subCategory === subCategory)
            setRelated(productCopy.slice(0,4))
        }
    },[products])
  return products && products.length > 0 && related && (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="Products" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
            related.map(({_id,image,price,name},i)=> <ProductItem id={_id} name={name} price={price} image={image} key={i} />)
        }
      </div>
    </div>
  )
}

export default RelatedProducts
