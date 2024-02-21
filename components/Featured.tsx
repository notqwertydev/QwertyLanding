import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="lg:p-1">
            <div className="mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-gradientdown rounded-[3rem] overflow-hidden relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="items-center gap-x-8 gap-y-16">
                        <div className="mx-auto w-full max-w-xl lg:mx-0">
                            <span className="text-white">Our clients</span>
                            <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">Trusted by the most innovative teams</h2>
                            <p className="mt-6 text-sm text-zinc-400 mt-4 sm-hidden font-display">
                                QWERTY adopts a unique approach to project execution. <br /> We harness the power of the global freelance market to assemble the perfect team for each project.
                            </p>
                        </div>
                            <div className="mt-12 mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="/logos/radec.png"
                                        alt="radec"
                                    />
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="/logos/nn.png"
                                        alt="nn"
                                    />
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="/logos/damco.png"
                                        alt="damco"
                                    />
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                        src="/logos/aeolos.png"
                                        alt="aeolos"
                                    />
                                    <img
                                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                        src="/logos/kiwi.png"
                                        alt="kiwi"
                                    />

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
