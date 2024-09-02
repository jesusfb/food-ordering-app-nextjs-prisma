import React from 'react';
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";

const SingleProductPage = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="h-screen w-full md:h-3/5 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row shadow-md">
                <div className="relative h-full w-full" style={{flex: 1}}>
                    <Image src={"/shrimp.jpg"} alt={"Shrimp"} fill className="object-cover"/>
                    <div className="absolute top-0 bg-black bg-opacity-20 h-full w-full"></div>
                </div>
                <div className="flex flex-col justify-center w-full h-full" style={{flex: 1}}>
                    <div className="flex flex-col items-center justify-center w-full p-4">
                        <h1 className="text-2xl font-bold">Shrimp</h1>
                        <p className="text-gray-500 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.</p>
                    </div>
                    <div className="flex justify-between items-center w-full px-4">
                    <ProductDetails/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SingleProductPage;