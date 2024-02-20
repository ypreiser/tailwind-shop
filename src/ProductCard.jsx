import React from 'react'

export default function ProductCard({product}) {
    return (
        <div className="flex-grow flex-shrink w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 ">
    <div className="bg-slate-100 shadow-slate-600 shadow-lg rounded-lg p-4 hover:border-blue-500 border border-transparent h-full hover:bg-slate-200 cursor-pointer transition-colors duration-300">
                <div className="text-center">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="mx-auto h-32 rounded"
                    />
                    <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-lg font-bold mt-2">${product.price}</p>
                </div>
            </div>
        </div>
    );
}