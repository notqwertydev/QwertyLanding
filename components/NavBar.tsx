"use client";
import Image from 'next/image';
// components/NavBar.js
import { Share_Tech } from 'next/font/google'

import { useState } from 'react';

const lol = Share_Tech({ weight: '400', subsets: ['latin'] })

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick = (e) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = e.currentTarget.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
};

    return (
        <div className="fixed top-4 inset-x-0 z-50">
            <div className="lg:max-w-2xl mx-auto px-8">
                <div className="w-full mx-auto">
                    
                    <div
                        className="relative flex flex-col w-full p-3 mx-auto bg-black/70 ring-1 ring-inset ring-white/10 shadow-thick backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row"
                    >
                        <div className="flex flex-row items-center align-center justify-between md:justify-start">
                            <a
                                href="/"

                                className="text-white hover:text-white/50 gap-4 items-center tracking-tighter uppercase inline-flex font-medium ml-2 text-lg"
                            >
                                <Image

                                    src="/logoTransparent.png"
                                    alt=""
                                    width={35}
                                    height={35}
                                    style={{ filter: 'brightness(0) invert(1)' }}

                                />
                            </a>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-accent-300 focus:outline-none focus:text-white md:hidden"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={isOpen ? 'hidden' : 'inline-flex'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                    <path
                                        className={isOpen ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>

                            </button>
                        </div>
                        <nav
                            className={`${isOpen ? 'flex' : 'hidden'
                                } md:flex md:items-end justify-center md:flex-row`}
                        >
                            <ul className="space-y-8 list-none text-sm text-white md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3 lg:gap-6">
                                <li>
                                    <a href="#services" className="hover:text-accent-400" onClick={handleNavLinkClick}>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#team" className="hover:text-accent-400" onClick={handleNavLinkClick}>
                                        Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#contact" className="hover:text-accent-400" onClick={handleNavLinkClick}>
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;
