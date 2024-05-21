// components/HeroSection.tsx
'use client';
import { useModal } from '@/app/context/ModelContext';
import { FcApproval, FcBusiness, FcBusinessman, FcCustomerSupport, FcFilingCabinet, FcSignature } from 'react-icons/fc';
import React from 'react';

type SectionKeys = 'offering' | 'experience' | 'support' | 'service' | 'embroidery' | 'advice';

interface SectionDetail {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageUrl: string;
}

const sectionDetails: Record<SectionKeys, SectionDetail> = {
  offering: {
    icon: FcBusiness,
    title: 'Offering',
    description: 'Specializes in embroidered uniforms, personalized work wear, and promotional clothing.',
    imageUrl: '/about/offering.png'
  },
  experience: {
    icon: FcApproval,
    title: 'Experience',
    description: 'Many years of experience combined with high quality and efficiency in every order.',
    imageUrl: '/about/experience.png'
  },
  service: {
    icon: FcBusinessman,
    title: 'Customer Service',
    description: 'Outstanding customer service online, over the phone, and through social media.',
    imageUrl: '/about/service.jpeg'
  },
  support: {
    icon: FcCustomerSupport,
    title: 'Support',
    description: 'Supporting you from initial contact, providing embroidery samples and the best work wear solutions.',
    imageUrl: '/about/customers.jpeg'
  },
  embroidery: {
    icon: FcFilingCabinet,
    title: 'Embroidery',
    description: 'We can embroider and print designs in a wide range of positions depending on the garments you select.',
    imageUrl: '/about/embroidery.jpeg'
  },
  advice: {
    icon: FcSignature,
    title: 'Advice',
    description: 'Guidance on customization types and potential limitations.',
    imageUrl: '/about/advice.jpeg'
  }
};

export default function HeroSection() {
  const { openModal } = useModal();

  const toggleSection = (section: SectionKeys) => {
    const { title, description, imageUrl } = sectionDetails[section];
    openModal({ title, description, imageUrl });
  };

  return (
    <div id="about" className="relative mt-7 isolate overflow-hidden bg-white rounded-lg">
      <h2 className="text-5xl mb-3 font-bold tracking-tight text-black">About</h2>
      <div className="rounded-lg overflow-hidden">
        <video className="w-full h-auto rounded-lg" autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 mt-5 mb-12">
        {Object.entries(sectionDetails).map(([key, { icon: Icon, title }]) => (
          <div key={key} className="flex flex-col items-center gap-4 rounded-xl border bg-white/70 p-6 ring-1 ring-inset ring-white/10 cursor-pointer" onClick={() => toggleSection(key as SectionKeys)}>
            <Icon className="h-10 w-10 flex-none" />
            <div>
              <h3 className="font-semibold text-black text-lg">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
