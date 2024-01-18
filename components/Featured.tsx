import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="lg:p-8">
            <div className="mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-gradientdown rounded-[3rem] overflow-hidden relative">
                <div className="text-center max-w-xl md:mx-auto">
                    <h2 className="text-3xl tracking-tighter font-light lg:text-4xl text-white">
                        Understanding the value of specialized skills and knowledge{' '}
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
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
