'use client';

import React, {useEffect, useState} from 'react';

const ProductDetails = () => {
    type Product = {
        id?: number;
        name?: string;
        description?: string;
        price: number;
        options?: {
                title: string;
                additionalPrice: number;
            }[],
        image?: string;
    }

    const product: Product = {
        id: 1,
        name: "Shrimp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
        price: 9.993,
        options: [
            {
                title: "Small",
                additionalPrice: 0
            },
            {
                title: "Medium",
                additionalPrice: 4
            },
            {
                title: "Large",
                additionalPrice: 6
            }
        ],
        image: "/shrimp.jpg"
    }

    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSize, setSelectedSize] = useState<string>("Small");
    const [totalPrice, setTotalPrice] = useState<number>(product.price);

    useEffect(() => {
        const selectedOption = product.options?.find(option => option.title === selectedSize);
        const additionalPrice = selectedOption ? selectedOption.additionalPrice : 0;
        setTotalPrice(quantity * (product.price + additionalPrice));
    }, [quantity, selectedSize, product.price, product.options]);

    return (
        <div className="w-full">
            <h2 className="text-xl font-bold pb-4">Price: {(product.price + product.options?.find(option => option.title === selectedSize)?.additionalPrice).toFixed(2)}</h2>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Size</h3>
                <div className="flex gap-2 py-2">
                    {product.options?.map((size, index) => (
                        <button key={index} onClick={() => setSelectedSize(size.title)} className={`bg-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800 hover:text-gray-100  duration-300 ${selectedSize === size.title ? "bg-gray-800 text-gray-100" : "text-gray-900"}`}>{size.title}</button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col py-2">
                <h3 className="text-lg font-semibold">Extra Toppings</h3>
            </div>
            <div className="flex gap-1 items-center py-2 justify-between">
                <h1 className="text-xl font-semibold">Quantity</h1>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={1.5}
                         stroke="currentColor"
                         className="size-6 cursor-pointer"
                         onClick={() => setQuantity(prevState => (prevState > 1 ? prevState - 1 : 1))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <span className="text-xl font-bold px-4 min-w-12">{quantity}</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor"
                         className="size-6 cursor-pointer"
                         onClick={() => setQuantity(prevState => (prevState < 10 ? prevState + 1 : 10))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>
            <hr className="pt-2"/>
            <p className="text-xl font-semibold pb-2 w-full">Total price: ${totalPrice.toFixed(2)}</p>
            <div className="w-full">
                <button className="w-full bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-700 duration-300">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;