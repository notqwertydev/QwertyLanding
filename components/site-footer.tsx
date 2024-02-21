// components/Footer.tsx

import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const navigation = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/notqwerty.co?igsh=MThuaGs0ZnR2Z2pkNQ%3D%3D&utm_source=qr' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/message/ATF4UTDK33T5D1' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/qwerty-com' },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
