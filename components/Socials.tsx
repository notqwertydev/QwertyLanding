// components/Socials.js

import Image from 'next/image';
import React from 'react';

const Socials = () => {
    return (
        <section className="lg:p-8">
            <div className="md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl px-8 py-12 mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-8 items-center justify-center">
                    <div className="text-center lg:text-left">
                        <span className="text-[#89d6fb]">Socials</span>
                        <h2 className="text-3xl mt-6 tracking-tighter font-light text-white">
                            Connect with <span className="text-zinc-300">me!</span>
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-4 gap-0.5 md:grid-cols-4 lg:mt-0 lg:grid-cols-4">
                        {/* Logo 1 */}
                        <a href="https://twitter.com/brandaob42" target="_blank">
                            <div className="col-span-1 flex justify-center py-4 px-4">
                                <Image src="/x.svg" alt="" width={50} height={50} />
                            </div>
                        </a>

                        <a href="https://t.me/brandaobruno42" target="_blank">
                            <div className="col-span-1 flex justify-center py-4 px-4">
                                <Image src="/telegram.svg" alt=""
                                    width={50} height={50} />
                            </div></a>

                        {/* Logo 2 */}
                        <a href="https://www.instagram.com/brandaob42/" target="_blank">
                            <div className="col-span-1 flex justify-center py-4 px-4">
                                <Image src="/instagram.svg" alt=""
                                    width={50} height={50} />
                            </div></a>

                        {/* Logo 3 */}
                        <a href="https://linkedin.com/in/brandaobruno42" target="_blank">
                            <div className="col-span-1 flex justify-center py-4 px-4">
                                <Image src="/linkedin.svg" alt="" width={50} height={50} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Socials;
