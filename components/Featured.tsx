import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="p-8">
            <div className="mx-auto py-24 items-center lg:py-24 relative w-full bg-gradientdown rounded-[3rem]">
                <div className="text-center max-w-xl md:mx-auto">
                    <h2 className="text-3xl tracking-tighter font-light lg:text-4xl text-white">
                        Understanding the value of specialized skills and knowledge{' '}
                        {/* <span className="block text-zinc-400">for your next website</span> */}
                    </h2>
                    <p className="mt-5 text-white">
                        QWERTY
                        adopts a unique approach to project execution. <br/> We harness the power
                        of the global freelance market to assemble the perfect team for each
                        project. This approach allows us to handpick experts with the exact skill
                        sets required for your specific project. It&apos;s like having a tailor-made
                        team, dedicated to turning your dream project into a reality. This not
                        only ensures the highest quality of work but also brings in diverse
                        perspectives and expertise to the table.
                    </p>
                    {/* <div className="inline-flex flex-wrap items-center mt-8">
                        <a
                            href="/"
                            type="a"
                            className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"
                        >
                            Explore all pages
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
