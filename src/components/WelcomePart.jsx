import React from 'react';
import Image from "next/image";
import Link from "next/link";
const WelcomePart = () => {
    return (
        <div className="absolute z-0">
            <Image src="/pancakes.jpg" width={1920} height={1080} alt="hero" className="fixed top-0 h-[500px] md:h-[700px] z-0 w-full object-cover"/>
            <div className="bg-black bg-opacity-60 h-[500px] md:h-[700px] w-full fixed top-0 z-10"></div>
            <div className="flex flex-col items-center justify-center h-[500px] md:h-[700px] w-full fixed top-0 z-20">
                <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to our store</h1>
                <p className="text-white text-lg md:text-3xl">Get the best pancakes in town</p>
                <button className="bg-white text-black text-xl font-bold px-4 py-2 mt-6 uppercase hover:bg-gray-200 duration-300">Order Now</button>
            </div>
        </div>
);
};

export default WelcomePart;