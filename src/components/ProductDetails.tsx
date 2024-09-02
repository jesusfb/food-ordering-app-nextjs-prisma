'use client';

import React, {useState} from 'react';

const ProductDetails = () => {


    return (
        <div className="w-full">
            <h2 className="text-xl font-bold pb-4">30$</h2>
            <div className="flex flex-col">
                <h3 className="text-lg font-bold">Size</h3>
                <div className="flex gap-2 py-2">
                    <button className={"bg-gray-100 text-gray-900 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800 hover:text-gray-100  duration-300"}>Small</button>
                    <button className={"bg-gray-100 text-gray-900 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800 hover:text-gray-100  duration-300"}>Medium</button>
                    <button className={"bg-gray-100 text-gray-900 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800  hover:text-gray-100 duration-300"}>Large</button>
                </div>
            </div>
            <div className="flex flex-col py-2">
                <h3 className="text-lg font-bold">Extra Toppings</h3>
                <div className="flex gap-2">
                    <button className={"bg-gray-100 text-gray-900 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800 hover:text-gray-100  duration-300"}>Keptchup</button>
                    <button className={"bg-gray-100 text-gray-900 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800 hover:text-gray-100  duration-300"}>Mustard</button>
                    <button className={"bg-gray-100 text-gray-900 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800  hover:text-gray-100 duration-300"}>Mayo</button>
                </div>
            </div>
            <div className="flex gap-1 items-center py-2 justify-between">
                <h1 className="text-xl font-bold">Quantity</h1>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <span className="text-xl font-bold px-4">1</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>

            </div>
            <div className="w-full">
                <button className="w-full bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-700 duration-300">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;