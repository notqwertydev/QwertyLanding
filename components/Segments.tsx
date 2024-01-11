"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
const Segments = () => {

    return (
        <section className="lg:p-8" id='segments'>
            <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-40 items-center w-full">


                <div>
                    <span className="text-blue-400">Segments</span>
                    <h2 className="text-3xl tracking-tighter mt-6 font-light lg:text-4xl text-white">
                        Are you looking for an<span className="text-zinc-400"> associate</span> or an <span className="md:block text-zinc-400">operating partner </span>
                        {/* <span className="md:block text-zinc-400">for complex data</span> */}
                    </h2>
                    <p className="mt-4 text-base text-white max-w-md">
                        in the seven segments where start-up needs the most!
                        <br /> Get Support on the segments corresponding to your needs.
                    </p>
                </div>




                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-4 w-lg">
                    {/* Feature 1 */}
                    <div className="h-full p-2 bg-gradientdown  from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            <div>
                                <Image src="/business.png" alt="Feature 1" width={500} height={500} />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Business Design
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Unlock the potential of your vision!<br /> Whether it&apos;s rallying co-founders, attracting investors, or captivating customers, your pitch is the gateway to success. Strategically showcase your project as a revolutionary business. Validate and prove, within ecosystems:<br />
                                    •Desirability & acceptance of your idea<br />
                                    •Feasibility and scalability of your technological solution<br />
                                    A top entrepreneur knows she/he can&apos;t do everything on her/his own.<br />
                                    With you & Vianeo partner, we build your perfect pitches
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="h-full p-2 bg-gradientup  from-white/20 ring-1 ring-white/10 rounded-3xl">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony">
                            <div>
                                <Image src="/funds.png" alt="Feature 2" width={500} height={500} />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Funds
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Navigate the intricate landscape of funding with certainty. From engaging private players to tapping into public funds, we assist you in optimizing your financial strategy and forging connections with investors who share your vision. Our ecosystem (network) is made up of fund managers specializing in the ideation, pre-seed, seed, growth and expansion phases.
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
                            <div>
                                <Image src="/legal.png" alt="Feature 4" width={500} height={500} />
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
                    </div>

                    {/* Feature 5 */}
                    <div className="h-full p-2 bg-gradientup   from-white/20 ring-1 ring-white/10 rounded-3xl">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            <div>
                                <Image src="/tech.png" alt="Feature 5" width={500} height={500} />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Technology Development
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Translate your innovative ideas into cutting-edge solutions. Our team of developers and coders collaborates with you to breathe life into your technological vision.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="h-full p-2 bg-gradientdown  from-white/20 ring-1 ring-white/10 rounded-3xl lg:mt-24">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            <div>
                                <Image src="/graphic.png" alt="Feature 4" width={500} height={500} />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Graphic Design
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Command attention with visually stunning designs. Our graphic designers meticulously craft compelling visuals that not only elevate your brand and articulate your narrative but also prioritize the essential elements of User Experience (UX) and User Interface (Ul). We understand that seamless interaction and a visually appealing interface are integral to creating a lasting impression and ensuring a positive user journey. Let us bring your brand to life with designs that captivate and enhance the overall user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 7 */}
                    <div className="h-full p-2 bg-gradientup  from-white/20 ring-1 ring-white/10 rounded-3xl">
                        <div className="flex flex-col justify-between h-full p-4 overflow-hidden shadow-massive ring-1 ring-white/10 rounded-2xl bg-ebony ">
                            <div>
                                <Image src="/marketing.png" alt="Feature 5" width={500} height={500} />
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-lg text-white font-display lg:text-xl">
                                    Marketing
                                </p>
                                <p className="text-sm text-vanta-300">
                                    Fuel your startup&apos;s growth through strategic marketing. Our marketing professionals formulate customized campaigns to amplify your brand visibility, attract the right audience, and expedite your market presence.<br />
                                    Ideation Phase: Conduct thorough market research, define a unique value proposition, and engage with potential customers to validate the startup idea.<br />
                                    Pre-Seed and Seed Phase: Build a cohesive brand, establish a digital presence, and focus on content marketing and lead generation to attract initial users and investors.<br />
                                    Growth Phase: Implement scalable marketing campaigns, optimize user acquisition channels, and explore partnerships to expand the user base.<br />
                                    Expansion Phase: Plan international market entry, reinforce the brand message, utilize data-driven marketing, and stay innovative and adaptable to evolving industry trends.
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




                <div className=" mt-10 md:mt-40 items-center w-full">
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
                </div>






            </div>
        </section >

    );
};

export default Segments




