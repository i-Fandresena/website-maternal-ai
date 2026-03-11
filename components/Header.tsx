'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto bg-[#F7F5F3] border-2 border-[#E05A5A] rounded-full px-6 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="MaternalAI Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Center - Navigation Links */}
        <div className="flex-1 flex items-center justify-center gap-6 sm:gap-8 mx-4 hidden md:flex">
          <Link 
            href="#histoire" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            L'Histoire
          </Link>
          <Link 
            href="#solution" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            La Solution
          </Link>
          <Link 
            href="#partenaires" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            Partenariats
          </Link>
          <Link 
            href="#impact" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            L'Impact
          </Link>
          <Link 
            href="#galerie" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            Galerie
          </Link>
        </div>

        {/* Right - CTA Button */}
        <Button 
          className="bg-[#E05A5A] hover:bg-[#d94949] text-white rounded-full px-6 sm:px-8 py-2 text-sm font-medium whitespace-nowrap flex-shrink-0 border-0 h-auto"
        >
          Rejoignez le mouvement
        </Button>
      </nav>
    </div>
  );
}
