"use client";
import React from 'react';
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";

import { InView } from 'react-intersection-observer';





const TeamMember = ({ name, role, imageUrl }) => {
    return (
        <li>
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



                        className="space-y-4">
                        <img
                            alt=""
                            className="mx-auto h-20 lg:h-24 lg:w-24 rounded-full w-20 object-cover"
                            src={imageUrl}

                        />
                        <div className="space-y-2">
                            <div>
                                <h3 className="text-white font-medium text-base">{name}</h3>
                                <p className="text-sm text-zinc-400 mt-4 font-display">{role}</p>
                            </div>
                        </div>
                    </motion.div>)}
                    </InView>
        </li>
    );
};


const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Michel',
            role: 'Co-Founder / CTO',
            imageUrl: '/team/Michel.jpg',
        },
        {
            name: 'Ryan',
            role: 'Co-Founder / CEO',
            imageUrl: '/team/Ryan.jpg',
        },
        {
            name: 'Karim',
            role: 'Co-Founder / CFO',
            imageUrl: '/team/Karim.jpg',
        },

        // Add other team members here
    ];

    return (
        <section className="lg:p-8 mt-4" id='team'>
            <div className="mx-auto  py-24 lg:px-16 md:px-12 px-8 xl:px-36 items-center lg:py-24 relative w-full  rounded-[3rem]">
                <div className="mx-auto max-w-2xl lg:mx-0 pb-12 border-b border-white/10">
                    <span className="text-white">Our team</span>
                    <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                        For founders,
                        by founders
                        <br></br>
                        <span className="md:block text-zinc-300">
                            Innovation crafted with expert care.
                        </span>
                    </h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
                >
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TeamSection;

