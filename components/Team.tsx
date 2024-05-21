"use client";
import React from 'react';
import { FaNewspaper, FaCar, FaHeadphones, FaVideo, FaCertificate, FaPencilAlt, FaUsers, FaMobileAlt } from 'react-icons/fa';

const TeamSection = () => {
    const services = [
        {
            icon: FaNewspaper,
            title: "Competitive Market Prices:",
            description: "The whole production process is made In House. This allows us to provide Unbeatable prices for Top Quality Uniforms."
        },
        {
            icon: FaCar,
            title: "Short Notice And Same Day Delivery:",
            description: "We process orders very quickly. Same Day Delivery is available for regular items from our catalogue, subject to terms & conditions."
        },
        {
            icon: FaHeadphones,
            title: "Decorative Support:",
            description: "Our team of highly skilled designers will ensure you make the right choice of garment and customisation. We make sure your Logo will be as elegant as possible."
        },
        {
            icon: FaVideo,
            title: "The Live! Concept:",
            description: "Immerse yourselves in our Live! retail showroom, where anything can be embroidered on the Spot, from Caps & Hats to T-shirts, Polo Shirts & Hoodies."
        },
        {
            icon: FaCertificate,
            title: "Top Quality Garments:",
            description: "We ensure the best quality garments. All catalogue products meet OEKO-TEX Standard 100."
        },
        {
            icon: FaPencilAlt,
            title: "Embroidery Specialists:",
            description: "Our years of experience in the embroidery field reflect in our top quality and precise embroidery. We are very generous with stitch count and embroidery positions."
        },
        {
            icon: FaUsers,
            title: "Customer Satisfaction:",
            description: "We commit to customer needs to guarantee every order is as per their expectations. Assistance to our customers starts from the meeting point until after-sales service."
        },
        {
            icon: FaMobileAlt,
            title: "24/7 Orders",
            description: "We are here 24/7 to receive your orders. Just get in touch or leave a message on our website!"
        }
    ];
    return (
        <section id="why-us" className="py-12 bg-white">
            <div className="relative mt-7 isolate overflow-hidden bg-white rounded-lg">
            <h2 className="text-5xl mb-3 font-bold tracking-tight text-black">Why us?</h2>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                
                    <div className="mt-2 w-24 h-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-start">
                            <div className="w-12 h-12 flex items-center justify-center  text-blue rounded-full mr-4">
                                <service.icon className="text-2xl text-red-600" />
                            </div>
                            <div>
                                <h4 className="text-xl text-blue-600 font-bold">{service.title}</h4>
                                <p className="mt-2 text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default TeamSection;
