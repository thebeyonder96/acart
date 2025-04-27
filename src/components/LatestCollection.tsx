import { useEffect, useState } from 'react';
import Title from './Title';
import { Product } from '../configs/types';
import ProductItem from './ProductItem';
import { products } from '../assets/assets';

const LatestCollection = () => {
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (products && products?.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, []);
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='Latest' text2='Collection' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Explore our latest collection, where fresh trends meet timeless style.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.map(product=>(
                <ProductItem id={product._id} image={product.image} name={product.name} price={product.price} key={product._id} />
            ))}
            </div>
        </div>
    );
};

export default LatestCollection;
