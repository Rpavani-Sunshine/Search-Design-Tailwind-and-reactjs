import React, { useState } from 'react';
import PayPalLogo from '../Assets/PayPal-Logo.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="shadow-md">
            <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-0">
                <div className="flex items-center">
                    <img src={PayPalLogo} alt='PayPal Logo' width={30} />
                    <button
                        className="block lg:hidden ml-5 text-dark focus:outline-none"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className="lg:hidden ml-5">
                        {isMenuOpen && (
                            <div className="absolute right-60 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <ul className="py-2 px-4">
                                    <li>
                                        <NavLink to="#" className="text-gray-700 hover:text-gray-900 block py-2">Personal</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="text-gray-700 hover:text-gray-900 block py-2">Business</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="text-gray-700 hover:text-gray-900 block py-2">Developer</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/help" className="text-gray-700 hover:text-gray-900 block py-2">Help</NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-6 lg:ml-5">
                    <NavLink to="#" className="text-sky-700 hover:text-gray-300">Personal</NavLink>
                    <NavLink to="#" className="text-sky-700 hover:text-gray-300">Business</NavLink>
                    <NavLink to="#" className="text-sky-700 hover:text-gray-300">Developer</NavLink>
                    <NavLink to="/help" className="text-sky-700 hover:text-gray-300">Help</NavLink>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-white bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded-full">Login</button>
                    <button className="text-white bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded-full">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
