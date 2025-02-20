// app/components/Nav.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white pt-4 pr-12 pb-4 pl-12 shadow-lg flex justify-between items-center ${roboto.className}`}>
      <div className="flex items-center">
        <img src="/images/klassy-logo.png" alt="Logo" className="h-8 md:h-12 lg:h-16 mr-4" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-black hover:text-red-500 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/About" className="text-black hover:text-red-500 transition duration-300">About</Link>
          </li>
          <li>
            <Link href="/Menu" className="text-black hover:text-red-500 transition duration-300">Menu</Link>
          </li>
          <li>
            <Link href="/Chefs" className="text-black hover:text-red-500 transition duration-300">Chefs</Link>
          </li>
          <li>
            <Link href="/ContactUs" className="text-black hover:text-red-500 transition duration-300">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* قائمة منسدلة لأجهزة المحمول */}
      <button onClick={toggleMenu} className="md:hidden flex items-center p-2 text-black hover:text-red-500 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {/* قائمة منسدلة تظهر عند الضغط على الزر */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white shadow-lg z-10 md:hidden">
          <ul className="flex flex-col p-2 space-y-2">
            <li>
              <Link href="/" className="text-black hover:text-red-500 transition duration-300" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/About" className="text-black hover:text-red-500 transition duration-300" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/Menu" className="text-black hover:text-red-500 transition duration-300" onClick={toggleMenu}>Menu</Link>
            </li>
            <li>
              <Link href="/Chefs" className="text-black hover:text-red-500 transition duration-300" onClick={toggleMenu}>Chefs</Link>
            </li>
            <li>
              <Link href="/ContactUs" className="text-black hover:text-red-500 transition duration-300" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}