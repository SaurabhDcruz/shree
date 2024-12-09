import React from 'react'
import { BookOpen, X } from 'lucide-react'
import NavLinks from './Navlinks'
import logo from '../../Image/logo.jpeg'

const MobileMenu = ({ isOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-start p-2'>
          <div className='h-auto w-[60px] lg:w-[90px] p-1'>
            <img src={logo} />
          </div>
          <span
            className='cursor-pointer'
            onClick={() => setIsMobileMenuOpen(!isOpen)}
          >
            <X className='h-6 w-6 text-white' />
          </span>
        </div>
        <div className='h-screen overflow-y-auto '>
          <div className='px-4 py-6 pb-11 space-y-6'>
            {/* Navigation Links */}
            <nav className='flex flex-col space-y-4'>
              <NavLinks orientation='vertical' />
            </nav>

            {/* Action Buttons */}
            <div className='space-y-3 pt-6 border-t'>
              <button className='w-full px-4 py-2 text-left text-indigo-600 hover:bg-indigo-50 rounded-md transition duration-150'>
                Online
              </button>
              <button className='w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-md transition duration-150'>
                Offline
              </button>
              <button className='w-full px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition duration-150 flex items-center justify-center space-x-2'>
                <BookOpen className='w-4 h-4' />
                <span>Home Tuition</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
