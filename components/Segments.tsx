// components/Services.tsx
'use client';

import { useModal } from "@/app/context/ModelContext";

const actions = [
  {
    title: 'Uniforms',
    description: 'High-quality uniforms for various industries.',
    imageUrl: 'https://www.cottonandcolors.com/storage/app/media/SERVICES/UNIFORMS.jpg',
  },
  {
    title: 'Embroidery',
    description: 'Professional embroidery services.',
    imageUrl: 'https://www.cottonandcolors.com/storage/app/media/SERVICES/EMBROIDERY.jpg',
  },
  {
    title: 'Headwear',
    description: 'Stylish and protective headwear.',
    imageUrl: 'https://www.cottonandcolors.com/storage/app/media/SERVICES/HEADWEAR.jpg',
  },
  {
    title: 'Promotional items',
    description: 'Custom promotional items to boost your brand.',
    imageUrl: 'https://www.cottonandcolors.com/storage/app/media/SERVICES/PROMO%20ITEMS.jpg',
  },
  {
    title: 'Safety wear',
    description: 'Top-notch safety wear for all environments.',
    imageUrl: 'https://www.cottonandcolors.com/storage/app/media/SERVICES/SAFETY.jpg',
  },
  {
    title: 'Digital screen printing',
    description: 'High-quality digital screen printing services.',
    imageUrl: 'https://www.cottonandcolors.com/storage/app/media/SERVICES/PRINTING.jpg',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Services() {
  const { openModal } = useModal();

  const toggleAction = (actionIdx: number) => {
    const { title, description, imageUrl } = actions[actionIdx];
    openModal({ title, description, imageUrl });
  };

  return (
    <div id="services" className="relative mt-7 isolate overflow-hidden bg-white rounded-lg">
      <h2 className="text-5xl mb-3 font-bold tracking-tight text-black">Our Services</h2>
      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 mb-12 gap-6">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white border border-gray-400 overflow-hidden rounded-lg cursor-pointer'
            )}
            onClick={() => toggleAction(actionIdx)}
          >
            <div className="flex flex-col h-full">
              <img
                src={action.imageUrl}
                alt={action.title}
                className="w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
