'use client';
import React from 'react';
import Link from 'next/link';

type NavbarProps = {
  className?: string;
};

const navItems = ['Home'];

export default function Navbar({ className = '' }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md border-b border-gray-700 text-gray-300 transition-colors duration-300 ${className}`}
    >
      <div className="text-xl font-bold tracking-wide text-white select-none cursor-default">
        Portfolio
      </div>

      <ul className="hidden md:flex gap-8 font-semibold">
  {navItems.map((item) => (
    <li key={item} className="relative group">
      <Link
        href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
        className="inline-block px-2 py-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 no-underline hover:no-underline transition duration-300"
      >
        
      </Link>
      {/* Underline effect */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
      {/* Glowing hover blur */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 blur-md bg-indigo-400 transition duration-300 pointer-events-none"></span>
    </li>
  ))}
</ul>


      {/* Mobile Hamburger Placeholder */}
      <button
        aria-label="Toggle menu"
        className="md:hidden p-2 rounded-md text-gray-300 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
}
