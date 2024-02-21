"use client";
// HeroSection.js
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Meteors } from './magicui/meteors';
import { Mail, MapPin } from "lucide-react";
import Link from 'next/link';
const HeroSection = () => {


    return (
        <section className="lg:p-8 overflow-hidden">
                    <div className="mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-gradientup rounded-[3rem] overflow-hidden relative">
                        <img
                            className="hidden lg:block lg:absolute mt-6 bottom-8 right-0 mr-2 h-[500px] w-[500px]"
                            src="/logos/qwertyanimationwhite.gif">
                        </img>
                <div className="max-w-xl">
                    <div className="mt-6">
                        <h1 className="text-3xl mt-6 tracking-tighter font-light lg:text-6xl text-white">
                            <Image
                                className="image-animation"
                                src="/logos/qwerty.png"
                                alt=""
                                width={250}
                                height={250}
                            />
                            <span className="block text-zinc-400"></span>
                        </h1>
                        <p className="text-white mt-6 image-animation" >
                            Bespoke applications, sophisticated software solutions, and interactive websites.
                        </p>
                        <p>

                        </p>

                        <div className="inline-flex flex-wrap items-center mt-8">
                            <Link
                                href="https://calendly.com/callqwerty/30min"
                                target="_blank"
                                rel='noreferrer noopener'
                                className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent button-animation"
                            >
                                Book A Call With Us!
                            </Link>
                        </div>

                    </div>


                </div>


                {/* <Meteors number={30} /> */}
            </div >
            <div className="mx-auto   items-center  relative w-full">
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
            </div>



        </section >
    );
};

export default HeroSection;
