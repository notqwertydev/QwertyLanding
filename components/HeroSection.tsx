"use client";
// HeroSection.js
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Typed from 'react-typed';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';

const HeroSection = () => {
const codeLines = [
    '  function App() {'+ '\n' +
    ' const greeting = "Hello, World!";'+ '\n' +
    ' console.log(greeting);'+ '\n' +
    ' }'+ '\n' +
    " const addNumbers = (a, b) => {"+ '\n' +
    " return a + b;"+ '\n' +
    " }"+ '\n' +
    " const result = addNumbers(3, 4);"+ '\n' +
    ' console.log(result);'];

    const [typedCode, setTypedCode] = useState("");
    const codePosition = useRef({ line: 0, char: 0 });

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (codePosition.current.line < codeLines.length) {
                const line = codeLines[codePosition.current.line];
                if (codePosition.current.char < line.length) {
                    setTypedCode((prevCode) => prevCode + line[codePosition.current.char]);
                    codePosition.current.char++;
                } else {
                    setTypedCode((prevCode) => prevCode);
                    codePosition.current.char = 0;
                    codePosition.current.line++;
                }
            } else {
                clearInterval(typingInterval);
            }
        }, 75); // Replace '75' with the desired interval duration in milliseconds
    
        return () => clearInterval(typingInterval);
    }, [codeLines, setTypedCode, codePosition]);

    // Declare codeLines as an array of strings
    return (
        <section className="lg:p-8 overflow-hidden ">
            <div className=" rounded-[3rem] relative isolate overflow-hidden">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                </div>
                                <Image
                                    className="image-animation"
                                    src="/logos/qwerty.png"
                                    alt=""
                                    width={250}
                                    height={250}
                                />
                                <p className="text-white mt-6 image-animation" >
                                    Bespoke applications, sophisticated software solutions, and interactive websites.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
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
                    </div>
                    <div className="mt-20  sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-gradientup  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className=" hidden md:block shadow-lg md:rounded-3xl">
                            <div className=" [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        MyFirstWebApp.jsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                                </div>
                                            </div>

                                            <div>
                                                <SyntaxHighlighter language="typescript" style={oneDark}>
                                                    {typedCode}
                                                </SyntaxHighlighter>

                                            </div>

                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t " />





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
