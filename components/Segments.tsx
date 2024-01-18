"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FileCode, Package, TabletSmartphone, CircleDollarSign, BrainCircuit, Link } from 'lucide-react';
import Image from 'next/image';

import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";

import { InView } from 'react-intersection-observer';


const Segments = () => {



    const [scope, animate] = useAnimate();
    const staggerGridItems = stagger(0.02, {
        startDelay: 0.5,
    });




    return (
        <section className="lg:p-8" id='services'>
            <div className="mx-auto  py-12  items-center w-full">


                <div>
                    <span className="text-[#89d6fb]">Services</span>
                    <h2 className="text-3xl tracking-tighter mt-6 font-light lg:text-4xl text-white">
                        Translate your ideas into<span className="text-[#89d6fb]"> tangible digital solutions.</span>
                        {/* <span className="md:block text-zinc-400">for complex data</span> */}
                    </h2>
                    <p className="mt-4 text-base text-white max-w-md">
                        Whether it&apos;s a mobile application to engage
                        with users, custom software to streamline business processes, or a
                        website to establish your online presence.
                    </p>
                </div>




                <div ref={scope} className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-4 w-lg">
                    {/* Feature 1 */}
                    <InView >
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{
                                    scale: 0.2,
                                    y: 120,
                                    opacity: 0,
                                }}
                                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 330,
                                    damping: 35,
                                }}
                                className="h-full p-2 bg-gradientdown from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24"
                            >
                                <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                                    {/* <div>
                                <Image src="/business.png" alt="Feature 1" width={500} height={500} />
                            </div> */}
                                    <div className="flex flex-col gap-2 p-4">

                                        <div className='text-white flex gap-2'>
                                            <FileCode />
                                            <p className="text-lg text-white font-display lg:text-xl">

                                                Website
                                            </p>
                                        </div>
                                        <p className="text-sm text-vanta-300">
                                            Web solutions that connect.<br /> Our web development services focus on creating responsive, high-performance websites. From user-friendly interfaces to cutting-edge web applications, we ensure a seamless digital experience for all users.<br />

                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Feature 2 */}
                    <InView >
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{
                                    scale: 0.2,
                                    y: 120,
                                    opacity: 0,
                                }}
                                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 330,
                                    damping: 35,
                                }}

                                className="h-full p-2 bg-gradientup  from-white/20 ring-1 ring-white/10 rounded-3xl">
                                <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony">
                                    <div className="flex flex-col gap-2 p-4">
                                        <div className='text-white flex gap-2'>
                                            <TabletSmartphone />
                                            <p className="text-lg text-white font-display lg:text-xl">
                                                Application
                                            </p>
                                        </div>
                                        <p className="text-sm text-vanta-300">
                                            Your vision, now mobile.<br />We craft custom mobile applications that empower users on-the-go. Our apps boast sleek design and robust performance, tailored for iOS and Android platforms, turning your vision into a pocket-sized reality<br />

                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Feature 4 */}
                    <InView >
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{
                                    scale: 0.2,
                                    y: 120,
                                    opacity: 0,
                                }}
                                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 330,
                                    damping: 35,
                                }}

                                className="h-full p-2 bg-gradientdown   from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                                <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                                    {/* <div>
                                <Image src="/legal.png" alt="Feature 4" width={500} height={500} />
                            </div> */}
                                    <div className="flex flex-col gap-2 p-4">
                                        <div className='text-white flex gap-2'>
                                            <Package />
                                            <p className="text-lg text-white font-display lg:text-xl">
                                                Software
                                            </p>
                                        </div>
                                        <p className="text-sm text-vanta-300">
                                            Software tailored for impact.<br /> We specialize in developing software solutions that drive business growth. Our team designs and builds scalable, secure, and efficient software tailored to meet your unique business challenges.<br />

                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Feature 5 */}
                    <InView >
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{
                                    scale: 0.2,
                                    y: 120,
                                    opacity: 0,
                                }}
                                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 330,
                                    damping: 35,
                                }}


                                className="h-full p-2 bg-gradientup   from-white/20 ring-1 ring-white/10 rounded-3xl">
                                <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                                    {/* <div>
                                <Image src="/tech.png" alt="Feature 5" width={500} height={500} />
                            </div> */}
                                    <div className="flex flex-col gap-2 p-4">
                                        <div className='text-white flex gap-2'>
                                            <CircleDollarSign />
                                            <p className="text-lg text-white font-display lg:text-xl">
                                                E-commerce Platforms
                                            </p>
                                        </div>
                                        <p className="text-sm text-vanta-300">
                                            Streamline your e-commerce success.<br /> Elevate your online retail with our e-commerce development services. We provide comprehensive platforms that offer seamless shopping experiences, complete with custom features to enhance user engagement and sales<br />

                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>


                    <InView >
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{
                                    scale: 0.2,
                                    y: 120,
                                    opacity: 0,
                                }}
                                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 330,
                                    damping: 35,
                                }}



                                className="h-full p-2 bg-gradientdown  from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                                <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                                    {/* <div>
                                <Image src="/graphic.png" alt="Feature 4" width={500} height={500} />
                            </div> */}
                                    <div className="flex flex-col gap-2 p-4">
                                        <div className='text-white flex gap-2'>
                                            <Link />
                                            <p className="text-lg text-white font-display lg:text-xl">
                                                Blockchain Development
                                            </p>
                                        </div>
                                        <p className="text-sm text-vanta-300">
                                            Blockchain for trust.<br /> Leverage the power of blockchain with our development expertise. We create secure, decentralized applications that enhance transparency and efficiency, revolutionizing how your business operates and transfers value.<br />

                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Feature 7 */}
                    <InView >
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{
                                    scale: 0.2,
                                    y: 120,
                                    opacity: 0,
                                }}
                                animate={inView ? { scale: 1, y: 0, opacity: 1 } : {}}
                                transition={{
                                    type: "spring",
                                    stiffness: 330,
                                    damping: 35,
                                }}



                                className="h-full p-2 bg-gradientup  from-white/20 ring-1 ring-white/10 rounded-3xl">
                                <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                                    {/* <div>
                                <Image src="/marketing.png" alt="Feature 5" width={500} height={500} />
                            </div> */}
                                    <div className="flex flex-col gap-2 p-4">
                                        <div className='text-white flex gap-2'>
                                            <BrainCircuit />
                                            <p className="text-lg text-white font-display lg:text-xl">
                                                AI Development
                                            </p>
                                        </div>
                                        <p className="text-sm text-vanta-300">
                                            Innovate with AI.<br /> Embrace the future with our AI development services. From machine learning models to intelligent automation, we harness the power of AI to provide innovative solutions that transform your business operations.<br />

                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                </div>

            </div>
        </section >

    );
};

export default Segments




