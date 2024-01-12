
import React from 'react';

const TeamMember = ({ name, role, imageUrl }) => {
    return (
        <li>
            <div className="space-y-4">
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
            </div>
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
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36 items-center lg:py-24 relative w-full bg-gradientup rounded-[3rem]">
                <div className="mx-auto max-w-2xl lg:mx-0 pb-12 border-b border-white/10">
                    <span className="text-white">Our team</span>
                    <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
                        For founders,
                        by founders
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


// const TestimonialsSection = () => {
//     return (
//         <section className="lg:p-8" id='team'>
//             <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
//                 <div className="max-w-xl mx-auto text-center">
//                     <span className="text-[#89d6fb]">Team</span>
//                     <h2 className="text-3xl mt-6 tracking-tighter font-light lg:text-4xl text-white">
//                         Meet the team at qwerty
//                     </h2>
//                 </div>
//                 <ul role="list" className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:space-y-0 mt-12">
//                     {/* List items go here */}
//                     <TestimonialItem
//                         name="Amrit Nagi"
//                         role="CEO of Tailwind Toolbox"
//                         imageUrl="https://d33wubrfki0l68.cloudfront.net/1a2e935392c14749028729b21b20ddbd4c54b70e/1a932/images/testimonials/amrit.jpeg"
//                         testimonial="It's amazing just how quickly the quality and variety of his work has developed and evolved!"
//                     />
//                     <TestimonialItem
//                         name="Amrit Nagi"
//                         role="CEO of Tailwind Toolbox"
//                         imageUrl="https://d33wubrfki0l68.cloudfront.net/1a2e935392c14749028729b21b20ddbd4c54b70e/1a932/images/testimonials/amrit.jpeg"
//                         testimonial="It's amazing just how quickly the quality and variety of his work has developed and evolved!"
//                     />
//                     <TestimonialItem
//                         name="Amrit Nagi"
//                         role="CEO of Tailwind Toolbox"
//                         imageUrl="https://d33wubrfki0l68.cloudfront.net/1a2e935392c14749028729b21b20ddbd4c54b70e/1a932/images/testimonials/amrit.jpeg"
//                         testimonial="It's amazing just how quickly the quality and variety of his work has developed and evolved!"
//                     />
//                 </ul>
//             </div>
//         </section>
//     );
// };

// export default TestimonialsSection;




// const TestimonialItem = ({ name, role, imageUrl, testimonial }) => {
//     return (
//         <li className="bg-ebony shadow-inset rounded-3xl lg:p-8 p-4 text-center">
//             <figure>
//                 <div className="h-full group grid">
//                     <figcaption className="relative flex items-center flex-col gap-4 pb-6">
//                         <div className="overflow-hidden shrink-0">
//                             <img
//                                 alt={name}
//                                 src={imageUrl}
//                                 width="56"
//                                 height="56"
//                                 decoding="async"
//                                 data-mining="future"
//                                 className="object-cover rounded-full h-14 w-14 grayscale shrink-0"
//                             />
//                         </div>
//                         <div>
//                             <div className="text-lg font-medium leading-6 text-white">{name}</div>
//                             <div className="mt-1">
//                                 <a className="text-sm text-white/70 group-hover:text-white" href="#">
//                                     {role}
//                                 </a>
//                             </div>
//                         </div>
//                     </figcaption>
//                     <blockquote className="relative mt-2 space-y-3">
//                         <p className="text-sm text-white">{testimonial}</p>
//                     </blockquote>
//                 </div>
//             </figure>
//         </li>
//     );
// };
