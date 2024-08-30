'use client'

import React, {useState} from 'react';
import Hamburger  from 'hamburger-react';
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

const Navbar = () => {

    const navMenu = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Menu", href: "/menu" },
        { name: "Contact", href: "/contact" }
    ]

    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <>
            <div className="fixed w-full z-20">
                <div className="relative hidden md:block w-[80%] mx-auto drop-shadow-2xl py-6 px-10 bg-white">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold">Logo</h1>
                        <div className="flex space-x-12">
                            {navMenu.map((menu, index) => (
                                <Link href={menu.href} key={index}>
                                    <p>{menu.name}</p>
                                </Link>
                            ))}
                            <CartIcon />
                            <Link href={"/login"}>
                                <p>Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="relative z-10">
                <div className="md:hidden flex justify-between w-full shadow py-2 px-2">
                    <div className="flex justify-between items-center w-full">
                        <div className="z-50">
                            <h1 className="text-2xl text-black font-bold">Logo</h1>
                        </div>
                            <div className="z-20 text-black">
                                <Hamburger size={26} toggled={isOpened} toggle={setIsOpened}/>
                            </div>
                        </div>
                </div>
                <div className={`absolute md:hidden  w-full bg-white shadow py-2 px-2 ${isOpened ? 'translate-y-0 opacity-100' : '-translate-y-[80vh] opacity-0'} duration-300`}>
                    <div className="flex flex-col space-y-4 items-center justify-center z-10">
                        {navMenu.map((menu, index) => (
                            <Link href={menu.href} key={index}  className="w-full text-center" onClick={() => setIsOpened(false)}>
                                <p className="text-xl py-6 w-full hover:bg-gray-800 hover:text-white cursor-pointer duration-300">{menu.name}</p>
                            </Link>
                        ))}
                        <CartIcon className={'text-xl py-6 w-full hover:bg-gray-800 hover:text-white cursor-pointer duration-300'} onClick={() => setIsOpened(false)}/>
                        <Link href={"/login"} className="w-full text-center" onClick={() => setIsOpened(false)}>
                            <p className="text-xl py-6 w-full hover:bg-gray-800 hover:text-white cursor-pointer duration-300">Login</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;