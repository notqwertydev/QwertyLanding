import React from 'react';
import Image from 'next/image';
const Projects = () => {
    return (
        <section className="lg:p-8" id='projects'>
            <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36">

                <div className="mb-12">
                    <span className="text-blue-400">Projects</span>
                    <h2 className="text-3xl tracking-tighter mt-6 font-light lg:text-4xl text-white">
                        Intermediated<span className="text-zinc-400"> Projects</span> and <span className="text-zinc-400">Startups </span>
                        {/* <span className="md:block text-zinc-400">for complex data</span> */}
                    </h2>

                </div>

                <div className="grid grid-cols-2 gap-px rounded-3xl overflow-hidden sm:mx-0 cursor-pointer">
                    {/* Logo 1 */}

                    <a href="https://fungibleflex.com" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full ">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/fungible.png"
                                alt="Transistor"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    {/* Logo 2 */}
                    <a href="https://Tokenomeme.wtf" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/tokeno.png"
                                alt="Reform"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    {/* Logo 3 */}
                    <a href="https://vinai.wine/" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/vinai.png"
                                alt="Laravel"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    {/* Logo 4 */}
                    <a href="#" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/pet.png"
                                alt="Laravel"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    <a href="https://es.worldaware.es/" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full ">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/worldaware.png"
                                alt="Transistor"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    {/* Logo 2 */}

                    <a href="https://www.thetwom.com" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/twom.png"
                                alt="Reform"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    {/* Logo 3 */}
                    <a href="https://www.arthera.net" target="_blank">
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/arthera.png"
                                alt="Laravel"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>

                    {/* Logo 4 */}
                    <a href="https://www.lobster-protocol.com/" target="_blank" >
                        <div className="p-6 sm:p-10 items-center flex bg-ebony h-full">
                            <Image
                                className="max-h-8 w-full object-contain grayscale invert"
                                src="/lobster.png"
                                alt="Laravel"
                                width="158"
                                height="48"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Projects;