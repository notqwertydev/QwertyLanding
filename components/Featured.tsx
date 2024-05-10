'use client'
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const FeaturesSection = () => {
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        // Set the initial state
        handleResize();

        // Setup event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [isMobile, setIsMobile] = useState(false);;
    const logoGrid = (
        <div className="mt-12  mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <a href='https://radec-lb.com/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                        src="/logos/radec.png"
                        alt="radec"

                    />
                </a>

                <a href='https://nneng.co/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/logos/nn.png"
                        alt="nn"
                    />
                </a>

                <a href='https://damco-lb.com/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/logos/damco.png"
                        alt="damco"
                    />
                </a>
                <a href='https://nazirmusic.com' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/logos/nazir.png"
                        alt="nazir"
                    />
                </a>

                <a href='https://www.instagram.com/kiwi.agencyme?igsh=MWFndjBpYmhiYTJz' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                        src="/logos/kiwi.png"
                        alt="kiwi"
                    />
                </a>

                <a href='https://www.aeolos.com/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-15 w-full object-contain lg:col-span-1"
                        src="/logos/aeolos.png"
                        alt="aeolos"
                    />
                </a>

                <a href='https://www.drinkduvin.com/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src="/logos/duvin.png"
                        alt="Duvin"
                    />
                </a>

                <a href='https://alphglobal.com/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src="/logos/Alph.png"
                        alt="Alph"
                    />
                </a>

                <a href='https://fitnessvista.co/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src="/logos/fitnessvista.png"
                        alt="fitnessvista"
                    />
                </a>

                <a href='https://www.instagram.com/bcityjewels/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src="/logos/bcityjewels.png"
                        alt="Bcityjewels"
                    />
                </a>

                <a href='https://www.cottonandcolors.com/' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src="/logos/cottonsandcolors.png"
                        alt="Bcityjewels"
                    />
                </a>

                <a href='https://www.ryanmusic.site' target="_blank" rel="noopener noreferrer">
                    <img
                        className="col-span-2 max-h-19 w-full object-contain lg:col-span-1"
                        src="/logos/ryan.png"
                        alt="Bcityjewels"
                    />
                </a>
            </div>
        </div>
    )
    return (
        <section className="lg:p-1">
            <div className="mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-gradientdown rounded-[3rem] overflow-hidden relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="items-center gap-x-8 gap-y-16">
                        <div className="mx-auto w-full max-w-xl lg:mx-0">
                            <span className="text-white">Our clients</span>
                            <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">Trusted by the most innovative teams</h2>
                            <p className="mt-6 text-sm text-zinc-400 sm-hidden font-display">
                                QWERTY adopts a unique approach to project execution. <br /> We harness the power of the global freelance market to assemble the perfect team for each project.
                            </p>
                        </div>
                        <div className="mt-12  mx-auto max-w-7xl px-6 lg:px-8">
                            {isMobile ? (
                                <Marquee speed={100} gradient={false}>
                                    {logoGrid}
                                </Marquee>
                            ) : (
                                logoGrid
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
