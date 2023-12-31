import { Link } from "@inertiajs/react";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky shadow-lg top-0 z-50 bg-white dark:bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src="https://i.ibb.co/7VFnXgM/Berkah-Pangan-2.png" className="h-12 mr-3" alt="Berkah Pangan Logo" />
                </a>
                <button
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link
                                href={route('homepage')}
                                className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0"
                                aria-current="page"
                                as="button"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('tentangkami-latarbelakang')}
                                className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0"
                                as="button"
                            >
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('donasi')}
                                className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0"
                                as="button"
                            >
                                Donasi
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('penerima')}
                                className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0"
                                as="button"
                            >
                                Usul Penerima
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('relawan')}
                                className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0"
                                as="button"
                            >
                                Relawan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('kontakkami')}
                                className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0"
                                as="button"
                            >
                                Kontak Kami
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
