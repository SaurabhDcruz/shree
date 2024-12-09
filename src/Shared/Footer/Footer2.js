import React from 'react';
import { FooterLogo } from './FooterLogo';
import { FooterLinks } from './FooterLinks';
import { ContactInfo } from './ContactInfo';

export const Footer2 = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <FooterLogo />
            <p className="mt-4 text-gray-400 text-center md:text-left">
              Ready to start your journey with us? Get in touch for Education
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FooterLinks />
          </div>
          <div className="flex justify-center md:justify-end">
            <ContactInfo />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Shri ji Tution 2024 All Rights Reserved
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed by{' '}
              <span className="text-yellow-400">Saurabh Gupta & Bhola Prasad</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};