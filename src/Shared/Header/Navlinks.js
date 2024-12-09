import React, { useState } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

const NavLinks = ({ orientation = 'horizontal' }) => {
  const [activeLink, setActiveLink] = useState('Home')
  const links = ['Home', 'Courses', 'Faculty', 'Gallery', 'Contact', 'Career']

  return (
    <>
      {links.map(link => (
        <Link
          to={link == 'Home' ? '/' : `/${link}`}
          onClick={() => setActiveLink(link)}
        >
          <span
            key={link}
            className={`text-gray-600 hover:text-indigo-600 ${
              activeLink == link
                ? 'text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]'
                : 'text-gray-600'
            }  font-medium transition duration-150 ease-in-out
              ${orientation === 'vertical' ? 'block py-2' : ''}`}
          >
            {link}
          </span>
        </Link>
      ))}
    </>
  )
}

export default NavLinks
