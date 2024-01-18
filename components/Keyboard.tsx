import React from 'react';

const InteractiveSection = () => {
    return (
        <section className="lg:p-8">
            <div className="mx-auto 2xl:max-w-7xl py-24  items-center lg:py-24 relative w-full">
                <div className="relative isolate lg:flex-col overflow-hidden bg-gradientdown rounded-[3rem] lg:flex p-3">
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
        </section>
    );
};

export default InteractiveSection;
