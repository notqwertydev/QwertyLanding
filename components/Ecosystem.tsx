// components/DataVisualizationSection.js

import React from 'react';

const Ecosystem = () => {
    return (
        <section className="lg:p-8" id='ecosystem'>
            <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center">
                <div className="relative isolate lg:flex-col overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-3xl px-6 p-10 lg:flex lg:p-20">
                    <div className="max-w-xl">
                        <span className="text-blue-400">Services</span>
                        <h2 className="text-3xl tracking-tighter mt-6 font-light lg:text-4xl text-white">
                            What we do? 
                        </h2>
                    </div>

                    <div className="mt-24">
                        <span className="text-white">Development</span>
                    </div>

                    <div className="pt-12 border-t border-white/10 mt-6">
                        <dl className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:space-y-0 lg:gap-10">
                            {/* Feature 1 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    {/* <div className="flex items-center justify-center text-white">
                                       
                                    </div> */}
                                    <p className="text-base font-medium leading-6 text-white">Professionals</p>
                                </dt>

                            </div>

                            {/* Feature 2 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    {/* <div className="flex items-center justify-center text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-artboard"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                                            <line x1="3" y1="8" x2="4" y2="8"></line>
                                            <line x1="3" y1="16" x2="4" y2="16"></line>
                                            <line x1="8" y1="3" x2="8" y2="4"></line>
                                            <line x1="16" y1="3" x2="16" y2="4"></line>
                                            <line x1="20" y1="8" x2="21" y2="8"></line>
                                            <line x1="20" y1="16" x2="21" y2="16"></line>
                                            <line x1="8" y1="20" x2="8" y2="21"></line>
                                            <line x1="16" y1="20" x2="16" y2="21"></line>
                                        </svg>
                                    </div> */}
                                    <p className="text-base font-medium leading-6 text-white">Small Cap / Retail Investors</p>
                                </dt>

                            </div>

                            {/* Feature 3 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    {/* <div className="flex items-center justify-center text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-medal"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
                                            <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
                                        </svg>
                                    </div> */}
                                    <p className="text-base font-medium leading-6 text-white">Crypto / NFTs</p>
                                </dt>

                            </div>

                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    
                                    <p className="text-base font-medium leading-6 text-white">Startup equity (or rights) </p>
                                </dt>

                            </div>

                        </dl>
                        {/* <div className="flow-root w-full">
                            <div className="-ml-8 grid grid-cols-5 lg:-ml-4">
                               
                                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                                    <img src="heart.png" alt="" />
                                </div>

                            
                                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                                    <img src="heart.png" alt="" />
                                </div>

                    
                                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                                    <img src="heart.png" alt="" />
                                </div>

                  
                                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                                    <img src="/heart.png" alt="" />
                                </div>

                    
                                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                                    <img src="heart.png" alt="" />
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="mt-24">
                        <span className="text-white">Service Providers</span>
                    </div>

                    <div className="pt-12 border-t border-white/10 mt-6">
                        <dl className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:space-y-0 lg:gap-10">
                            {/* Feature 1 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    {/* <div className="flex items-center justify-center text-white">
                                       
                                    </div> */}
                                    <p className="text-base font-medium leading-6 text-white">Marketing</p>
                                </dt>

                            </div>

                            {/* Feature 2 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    {/* <div className="flex items-center justify-center text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-artboard"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                                            <line x1="3" y1="8" x2="4" y2="8"></line>
                                            <line x1="3" y1="16" x2="4" y2="16"></line>
                                            <line x1="8" y1="3" x2="8" y2="4"></line>
                                            <line x1="16" y1="3" x2="16" y2="4"></line>
                                            <line x1="20" y1="8" x2="21" y2="8"></line>
                                            <line x1="20" y1="16" x2="21" y2="16"></line>
                                            <line x1="8" y1="20" x2="8" y2="21"></line>
                                            <line x1="16" y1="20" x2="16" y2="21"></line>
                                        </svg>
                                    </div> */}
                                    <p className="text-base font-medium leading-6 text-white">Legal</p>
                                </dt>

                            </div>

                            {/* Feature 3 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    
                                    <p className="text-base font-medium leading-6 text-white">Tech / Development </p>
                                </dt>

                            </div>
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    
                                    <p className="text-base font-medium leading-6 text-white">Business Design </p>
                                </dt>

                            </div>
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    
                                    <p className="text-base font-medium leading-6 text-white">Graphic Design </p>
                                </dt>

                            </div>

                        </dl>
                      
                    </div>



                    <div className="mt-24">
                        <span className="text-white">Consultants CEO&apos;s & Founders</span>
                    </div>




                </div>
            </div>
        </section>
    )
}

export default Ecosystem