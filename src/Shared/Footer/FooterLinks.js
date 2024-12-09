import React from 'react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Career', href: '#' },
  { name: 'Courses', href: '#' },
  { name: 'Faculty', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Contact', href: '#' },
];

export const FooterLinks = () => {
  return (
    <nav className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-6 md:gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-300 hover:text-yellow-400 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};