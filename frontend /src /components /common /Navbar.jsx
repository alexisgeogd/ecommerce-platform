import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-gray-700"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 py-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
