'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import ScrollToTop from './components/ScrollToTop';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="relative min-h-screen flex flex-col text-gray-200 bg-gradient-to-br from-gray-900 to-black bg-particles overflow-x-hidden selection:bg-indigo-500 selection:text-white">

        {/* Background Glows */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute w-96 h-96 bg-indigo-400 opacity-10 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
          <div className="absolute w-96 h-96 bg-pink-400 opacity-10 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
        </div>

        {/* Navbar */}
        <Navbar
          className={`transition-all duration-300 ${
            scrolled
              ? 'shadow-lg backdrop-blur-md bg-black/50'
              : 'bg-transparent'
          }`}
        />

        {/* Main content */}
        <main className="relative z-10 flex-grow container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {children}
        </main>

        
        <ScrollToTop />
      </body>
    </html>
  );
}
