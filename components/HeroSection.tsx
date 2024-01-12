// HeroSection.js
import React from 'react';
import Image from 'next/image';
import { Meteors } from './magicui/meteors';
import { Mail, MapPin } from "lucide-react";
const HeroSection = () => {
    return (
        <section className="lg:p-8 overflow-hidden">
            <div className="mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-gradientup rounded-[3rem] overflow-hidden relative">
                {/* <Image d
                    className="sr-only lg:not-sr-only lg:absolute mt-24 right-0"
                    src="/wave.PNG"
                    alt=""
                    width={600}
                    height={600}

                /> */}
                <div className="max-w-xl">
                    {/* <div className="mb-8 flex">
                        <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/10">
                            Welcome to Buio
                        </span>
                    </div> */}
                    <div className="mt-6">
                        <h1 className="text-3xl mt-6 tracking-tighter font-light lg:text-6xl text-white">
                            qwerty
                            <span className="block text-zinc-400"></span>
                        </h1>
                        {/* <div className="flex items-center gap-3 mt-6 text-zinc-400 ">
                            <a
                                href={`/`}
                                className="flex items-center w-fit gap-2  py-2 text-sm font-medium  rounded-md   "
                            >
                                <MapPin size="14" />
                                United States, New Mexico | Europe, Spain, Madrid
                            </a>
                            
                        </div> */}
                        <p className="text-white mt-6">
                            Bespoke applications, sophisticated software solutions, and interactive websites.
                        </p>
                        <p>

                        </p>

                        <div className="inline-flex flex-wrap items-center mt-8">
                            <a
                                href="https://calendly.com/callqwerty"
                                className="text-sm  py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"
                            >
                                Book A Call With Us!
                            </a>
                        </div>

                    </div>


                </div>


                {/* <Meteors number={30} /> */}
            </div>
            {/* <div className="mx-auto   items-center  relative w-full">
                <div className="relative isolate lg:flex-col overflow-hidden  rounded-[3rem] lg:flex p-3">
                    <div className="2xl:max-7xl border-zinc-800  lg:rounded-3xl overflow-hidden">
                        <div className="mx-auto">
                            <div className="overflow-x-hidden relative">
                                <div className="animate-marquee whitespace-nowrap gap-4 flex">
                                    <img
                                        src="/lightKeyboard.svg"
                                        alt="Lexington thumbnail"
                                        className="lg:w-[30rem] lg:flex-none opacity-50"
                                    />
                                    <img
                                        src="/darkKeyboard.svg"
                                        alt="Lexington thumbnail"
                                        className="lg:w-[30rem] lg:flex-none opacity-50"
                                    />
                                    <img
                                        src="/lightKeyboard.svg"
                                        alt="Lexington thumbnail"
                                        className="lg:w-[30rem] lg:flex-none opacity-50"
                                    />
                                    <img
                                        src="/darkKeyboard.svg"
                                        alt="Lexington thumbnail"
                                        className="lg:w-[30rem] lg:flex-none opacity-50"
                                    />
                                    <img
                                        src="/lightKeyboard.svg"
                                        alt="Lexington thumbnail"
                                        className="lg:w-[30rem] lg:flex-none opacity-50"
                                    />
                                    <img
                                        src="/darkKeyboard.svg"
                                        alt="Lexington thumbnail"
                                        className="lg:w-[30rem] lg:flex-none opacity-50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div> */}



        </section>
    );
};

export default HeroSection;
