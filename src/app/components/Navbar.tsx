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

      <ul className="hidden md:flex gap-4 font-semibold">
  {navItems.map((item) => (
    <li key={item}>
      <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}>
        <button
  className="px-3 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 focus:outline-none
    bg-transparent backdrop-blur-md shadow-md shadow-indigo-900/30 border-indigo-400 border-opacity-30 text-white shadow-md
    hover:border-indigo-500 hover:shadow-[0_0_10px_2px_rgba(99,102,241,0.7)] hover:scale-105"
>
  {item}
</button>
      </Link>
    </li>
  ))}
</ul>



      
    </nav>
  );
}
