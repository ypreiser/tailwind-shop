import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

const LazyProductCard = React.lazy(() => import('./ProductCard'));

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header className='flex justify-center'>
        <h1 className='stroke-lime-600 font-extrabold text-3xl underline'>
          My Shop
        </h1>
      </header>
      <div className="flex flex-wrap">
        <Suspense fallback={<div><img src='https://images.quik.co.il/general-assets/quik/imgs/loader/loader.gif'/></div>}>
          {products.map((product, index) => (
            <LazyProductCard key={index} product={product} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default App;
