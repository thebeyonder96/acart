import  { useEffect, useState } from 'react'
import { Product } from '../configs/types';
import Title from './Title';
import ProductItem from './ProductItem';
import { products } from '../assets/assets';

const BestSeller = () => {
    const [bestSeller,setBestSeller] = useState<Product[]>([])
    useEffect(()=>{
        const bestSellers = products?.filter(product=> product.bestseller = true).slice(0,5)
        if(bestSellers){
            setBestSeller(bestSellers)
        }
    },[])
  return (
    <div className='my-10'>
        <div className='text-3xl text-center py-8'>
            <Title text1='Best' text2='Sellers'/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>The most loved and sought-after pieces of the season.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map(product=>(
                <ProductItem id={product._id} image={product.image} name={product.name} price={product.price} key={product._id} />
            ))}
            </div>
    </div>
  )
}

export default BestSeller
