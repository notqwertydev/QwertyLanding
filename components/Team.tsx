import React from 'react';

const TestimonialsSection = () => {
    return (
        <section className="lg:p-8">
            <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
                <div className="max-w-xl mx-auto text-center">
                    <span className="text-blue-400">Team</span>
                    <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                        Meet the team at qwerty
                    </h2>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:space-y-0 mt-12">
                    {/* List items go here */}
                    <TestimonialItem
                        name="Amrit Nagi"
                        role="CEO of Tailwind Toolbox"
                        imageUrl="https://d33wubrfki0l68.cloudfront.net/1a2e935392c14749028729b21b20ddbd4c54b70e/1a932/images/testimonials/amrit.jpeg"
                        testimonial="It's amazing just how quickly the quality and variety of his work has developed and evolved!"
                    />
                    <TestimonialItem
                        name="Amrit Nagi"
                        role="CEO of Tailwind Toolbox"
                        imageUrl="https://d33wubrfki0l68.cloudfront.net/1a2e935392c14749028729b21b20ddbd4c54b70e/1a932/images/testimonials/amrit.jpeg"
                        testimonial="It's amazing just how quickly the quality and variety of his work has developed and evolved!"
                    />
                    <TestimonialItem
                        name="Amrit Nagi"
                        role="CEO of Tailwind Toolbox"
                        imageUrl="https://d33wubrfki0l68.cloudfront.net/1a2e935392c14749028729b21b20ddbd4c54b70e/1a932/images/testimonials/amrit.jpeg"
                        testimonial="It's amazing just how quickly the quality and variety of his work has developed and evolved!"
                    />
                </ul>
            </div>
        </section>
    );
};

export default TestimonialsSection;




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
