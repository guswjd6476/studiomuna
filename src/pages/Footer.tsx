import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-white text-[#296129] py-8 border-t border-gray-200">
      <div className="w-[90%] max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-3">
          <Image width={96} height={96} className="h-14" src="/logo.png" alt="Studio Moona Logo" />
          <div className="text-left leading-tight">
            <p className="text-lg font-semibold">STUDIO</p>
            <p className="text-lg font-semibold">MOONA</p>
          </div>
        </div>

        <div className="text-sm text-[#296129]/80 text-center sm:text-left">
          © 2024 Studio Moona. All Rights Reserved.
        </div>

        <div>
          <Link
            href="https://www.instagram.com/studio_moona?igsh=aHpnM2g3MjVqbml6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#296129] hover:text-[#62a362] transition-colors text-4xl"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
