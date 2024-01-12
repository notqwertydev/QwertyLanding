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
                    {/* <div className="items-center w-xl px-8 py-12 lg:py-24 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                        <div className="text-center max-w-xl md:mx-auto">
                            <span className="text-white"> Interactive Data Visualization</span>
                            <h2 className="text-3xl tracking-tighter mt-6 font-light lg:text-4xl text-white">
                                Mechanical keyboards <span className="block text-zinc-300">with zoc-zoc included</span>
                            </h2>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default InteractiveSection;
