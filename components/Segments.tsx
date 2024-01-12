"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
const Segments = () => {

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




                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-4 w-lg">
                    {/* Feature 1 */}
                    <div className="h-full p-2 bg-gradientdown  from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            {/* <div>
                                <Image src="/business.png" alt="Feature 1" width={500} height={500} />
                            </div> */}
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Website
                                </p>
                                <p className="text-sm text-vanta-300">
                                Web solutions that connect.<br /> Our web development services focus on creating responsive, high-performance websites. From user-friendly interfaces to cutting-edge web applications, we ensure a seamless digital experience for all users.<br />

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="h-full p-2 bg-gradientup  from-white/20 ring-1 ring-white/10 rounded-3xl">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony">
                            {/* <div>
                                <Image src="/funds.png" alt="Feature 2" width={500} height={500} />
                            </div> */}
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Application
                                </p>
                                <p className="text-sm text-vanta-300">
                                Your vision, now mobile.<br />We craft custom mobile applications that empower users on-the-go. Our apps boast sleek design and robust performance, tailored for iOS and Android platforms, turning your vision into a pocket-sized reality<br />

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    {/* <div className="h-full p-2 bg-gradient-to-t from-white/20 ring-1 ring-white/10 rounded-3xl lg:-mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony">
                            <div>
                                <img src="/heart.png" alt="Feature 3" />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Legal
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Establish a robust legal framework for your startup. Our legal experts specialize in delivering customized solutions, guaranteeing compliance, and safeguarding the interests of your venture.
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Feature 4 */}
                    <div className="h-full p-2 bg-gradientdown   from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            {/* <div>
                                <Image src="/legal.png" alt="Feature 4" width={500} height={500} />
                            </div> */}
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Software
                                </p>
                                <p className="text-sm text-vanta-300">
                                Software tailored for impact.<br /> We specialize in developing software solutions that drive business growth. Our team designs and builds scalable, secure, and efficient software tailored to meet your unique business challenges.<br />

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="h-full p-2 bg-gradientup   from-white/20 ring-1 ring-white/10 rounded-3xl">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            {/* <div>
                                <Image src="/tech.png" alt="Feature 5" width={500} height={500} />
                            </div> */}
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    E-commerce Platforms
                                </p>
                                <p className="text-sm text-vanta-300">
                                Streamline your e-commerce success.<br /> Elevate your online retail with our e-commerce development services. We provide comprehensive platforms that offer seamless shopping experiences, complete with custom features to enhance user engagement and sales<br />

                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="h-full p-2 bg-gradientdown  from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            {/* <div>
                                <Image src="/graphic.png" alt="Feature 4" width={500} height={500} />
                            </div> */}
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Blockchain Development
                                </p>
                                <p className="text-sm text-vanta-300">
                                Blockchain for trust.<br /> Leverage the power of blockchain with our development expertise. We create secure, decentralized applications that enhance transparency and efficiency, revolutionizing how your business operates and transfers value.<br />

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 7 */}
                    <div className="h-full p-2 bg-gradientup  from-white/20 ring-1 ring-white/10 rounded-3xl">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            {/* <div>
                                <Image src="/marketing.png" alt="Feature 5" width={500} height={500} />
                            </div> */}
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    AI Development
                                </p>
                                <p className="text-sm text-vanta-300">
                                Innovate with AI.<br /> Embrace the future with our AI development services. From machine learning models to intelligent automation, we harness the power of AI to provide innovative solutions that transform your business operations.<br />

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    {/* <div className="p-2 bg-gradient-to-t from-white/20 ring-1 ring-white/10 rounded-3xl lg:-mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony">
                            <div>
                                <img src="/widget1.svg" alt="Feature 6" />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Expert instructors
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Learn from accomplished experts and industry professionals,
                                    gaining insights from their real-world experience.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>




                {/* <div className=" mt-10 md:mt-40 items-center w-full">
                    <div className="h-full bg-gradientdown ring-1 text-center ring-white/10 rounded-3xl p-8 lg:p-20 lg:col-span-full">
                        <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                            Consulting <span className="text-zinc-400">and Mentoring</span>
                        </h2>
                        <p className="mt-4 text-sm text-zinc-300 max-w-lg mx-auto">
                            Navigate challenges and make informed decisions with our comprehensive consulting services. Our team of proven experts spans all seven critical sectors— business design, funds, legal, technology development, graphic design, marketing, and consulting. By tapping into our collective knowledge, we provide invaluable insights tailored to your startup&apos;s unique journey, empowering you to steer confidently towards unparalleled success.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://calendly.com/brandaob/42"
                                className="text-sm py-2 px-4 border focus:ring-2 rounded-full w-auto border-transparent bg-white/5 hover:bg-transparent text-white duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-white/10"
                            >
                                Book a 30 Min Call Today!
                            </a>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <Image src="/fuser.gif" alt="Consulting" width={200} height={200} />
                        </div>
                    </div>

                </div> */}






            </div>
        </section >

    );
};

export default Segments



