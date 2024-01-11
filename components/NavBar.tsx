"use client";
import Image from 'next/image';
// components/NavBar.js
import { Share_Tech } from 'next/font/google'

import { useState } from 'react';

const lol = Share_Tech({ weight: '400', subsets: ['latin'] })

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

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

                                    src="/wave.PNG"
                                    alt=""
                                    width={35}
                                    height={35}

                                />
                                <span className={lol.className} >
                                    StartUppers</span>
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
                            <ul className="space-y-2 list-none text-sm text-white md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3 lg:gap-6">
                                <li>
                                    <a href="#ecosystem" className="hover:text-accent-400">
                                        EcoSystem
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="hover:text-accent-400">
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a href="#segments" className="hover:text-accent-400">
                                        Segments
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://calendly.com/brandaob/42"
                                        className="text-sm py-2 w-auto px-4 border h-8 focus:ring-2 rounded-full border-transparent bg-white/5 hover:bg-transparent text-white duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-white/10"
                                    >
                                        Get Started
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        // <section className="fixed z-50 w-full overflow-hidden relatve backdrop-blur-2xl">
        // <div className="relative w-full mx-auto max-w-7xl ">
        //     <div className="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-12 lg:px-32">
        //         <div className="flex flex-row items-center justify-between text-white lg:justify-start">
        //             <a href="/" className="inline-flex items-center gap-3">
        //                 <span>
        //                     <svg width="30" height="32" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                         {/* Path data */}
        //                     </svg>
        //                 </span>
        //                 <span className="font-bold text-xl uppercase"> &nbsp;Vanta</span>
        //             </a>
        //             <button
        //                 onClick={() => setIsOpen(!isOpen)}
        //                 className="inline-flex items-center justify-center p-2 text-white hover:text-indigo-400 focus:outline-none focus:text-white md:hidden"
        //             >
        //                 <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
        //                     <path className="{'hidden': open, 'inline-flex': !open }" className="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path className="{'hidden': !open, 'inline-flex': open }" className="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        //                 </svg>
        //             </button>
        //         </div>
        //         <nav className={`flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row ${isOpen ? 'flex' : 'hidden'}`}>
        //             <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white lg:ml-auto" href="/">
        //                 Overview
        //             </a>
        //             <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white" href="/system/styleguide">
        //                 Styleguide
        //             </a>
        //             <a
        //                 href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/f0a11cac-e5c4-4cee-9a11-631749fd6647"
        //                 className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-8 ring-1 ring-inset ring-white/10"
        //             >
        //                 Buy Vanta
        //             </a>
        //         </nav>
        //     </div>
        // </div >
        // </section >
    );
};

export default NavBar;
