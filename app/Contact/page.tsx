import React from 'react';
import ContactSection from '@/components/Contact'

const ContactFormSection = () => {
    return (
        <section className="lg:p-8 overflow-hidden min-h-screen ">
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center w-full bg-white lg:rounded-[3rem]">
                <div className="relative md:flex-none sm:justify-center flex items-center justify-center h-full">
                    <div className="w-full h-full mx-auto">
                        <div className="flex flex-col">
                            <div className="border-b pb-12">
                                <p className="text-3xl tracking-tighter font-light lg:text-4xl text-black">
                                    Let&apos;s get started!
                                </p>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Complete the details below so Buio can process your request and then schedule a
                                    time to discuss your goals.
                                </p>
                            </div>
                            <ContactSection />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
