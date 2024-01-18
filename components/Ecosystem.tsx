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
                                    <p className="text-base font-medium leading-6 text-white">Professionals</p>
                                </dt>

                            </div>

                            {/* Feature 2 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    <p className="text-base font-medium leading-6 text-white">Small Cap / Retail Investors</p>
                                </dt>

                            </div>

                            {/* Feature 3 */}
                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    <p className="text-base font-medium leading-6 text-white">Crypto / NFTs</p>
                                </dt>

                            </div>

                            <div>
                                <dt className="inline-flex items-center gap-3">
                                    
                                    <p className="text-base font-medium leading-6 text-white">Startup equity (or rights) </p>
                                </dt>

                            </div>

                        </dl>
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