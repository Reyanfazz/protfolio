'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-32 px-6 sm:px-12 text-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-black">
      {/* Background decorative glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>
      </div>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to <span className="text-indigo-600 dark:text-indigo-400">Our Portfolio</span>
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto mt-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300 space-y-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p>
          We are a results-driven development team specializing in AI-powered solutions,
          full-stack web, and mobile. Our expertise spans React, Next.js, Node.js, Python,
          and MongoDB — enabling us to build scalable, intelligent, and modern products.
        </p>
        <p>
          From AI chatbots and machine learning platforms to enterprise web applications,
          we blend innovation, functionality, and efficiency to help businesses achieve
          their digital goals.
        </p>
      </motion.div>
    </section>
  );
}
