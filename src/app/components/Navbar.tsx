'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Home, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { label: 'Projects', path: '/#projects', icon: <Folder className="w-5 h-5" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className=" dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors no-underline"
            >
              My Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex space-x-4"
          >
            {navLinks.map(({ label, path, icon }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={path}
                  className={` underline flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === path
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200'
                      : 'hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation Menu">
              {isOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-white" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 space-y-2"
        >
          {navLinks.map(({ label, path, icon }, index) => (
            <Link
              key={index}
              href={path}
              className="flex items-center gap-2 py-2 px-3 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {icon}
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
