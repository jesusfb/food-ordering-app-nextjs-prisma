'use client';
import React, {useState} from 'react';
import Hamburger  from 'hamburger-react';

const Navbar = () => {

    const navMenu = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" }
    ]

    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <div className="hidden md:block w-[80%] mx-auto shadow py-6 px-10 z-50">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Logo</h1>
                    <ul className="flex space-x-12">
                        {navMenu.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.href}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav className="relative">
                <div className="md:hidden flex justify-between w-full shadow py-2 px-2 z-50">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <h1 className="text-2xl font-bold">Logo</h1>
                        </div>
                            <div className="z-50">
                                <Hamburger toggled={isOpened} toggle={setIsOpened}/>
                            </div>
                        </div>
                </div>
                <div className={`absolute w-full bg-white shadow py-2 px-2 z-40 ${isOpened ? 'translate-y-0' : '-translate-y-[50vh]'} duration-300`}>
                    <div className="flex flex-col space-y-4 items-center justify-center">
                        {navMenu.map((menu, index) => (
                            <div key={index} className="w-full text-center">
                                <p className="text-xl py-6 w-full hover:bg-gray-800 hover:text-white cursor-pointer duration-300">{menu.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;