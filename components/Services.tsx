import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const ServicesSection = () => {
    return (
        <section className="lg:p-8" id='services'>
            <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
                <div className="max-w-xl mx-auto text-center">
                    <span className="text-[#89d6fb]">Services</span>
                    <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                        Learn about our services
                    </h2>
                </div>
                <div className='flex justify-center'>
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-11/12 mt-12 "
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious  />
                    <CarouselNext  />
                </Carousel>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;




const TestimonialItem = ({ name, role, imageUrl, testimonial }) => {
    return (
        <li className="bg-ebony shadow-inset rounded-3xl lg:p-8 p-4 text-center">
            <figure>
                <div className="h-full group grid">
                    <figcaption className="relative flex items-center flex-col gap-4 pb-6">
                        <div className="overflow-hidden shrink-0">
                            <img
                                alt={name}
                                src={imageUrl}
                                width="56"
                                height="56"
                                decoding="async"
                                data-mining="future"
                                className="object-cover rounded-full h-14 w-14 grayscale shrink-0"
                            />
                        </div>
                        <div>
                            <div className="text-lg font-medium leading-6 text-white">{name}</div>
                            <div className="mt-1">
                                <a className="text-sm text-white/70 group-hover:text-white" href="#">
                                    {role}
                                </a>
                            </div>
                        </div>
                    </figcaption>
                    <blockquote className="relative mt-2 space-y-3">
                        <p className="text-sm text-white">{testimonial}</p>
                    </blockquote>
                </div>
            </figure>
        </li>
    );
};
