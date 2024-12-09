import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavLinks from './Navlinks';
import Headerbg from "../../Image/bg.jpg";


const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header style={{ backgroundSize:"cover",backgroundPositionY:"120px",backgroundImage: `url(${Headerbg})` }} className="fixed  top-0 left-0 right-0  bg-white/95 backdrop-blur-sm z-40 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-5 items-center h-16">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center lg:space-x-5 xl:space-x-8">
              <NavLinks />
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
                Online
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-700 font-medium">
                Offline
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span className='text-nowrap hidden xl:block'>Home Tuition</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header2;