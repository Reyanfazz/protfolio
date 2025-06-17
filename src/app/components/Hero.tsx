'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>
        I’m a passionate full-stack developer with a strong background in AI and web/mobile development. I’ve built intelligent chatbots, career platforms, and mobile apps using a wide range of technologies including React, Next.js, Python, and MongoDB.
        </p>
        <p>
          My goal is to create impactful, scalable solutions and continually learn cutting-edge tech. I enjoy working on projects that merge functionality, creativity, and performance.
        </p>
              </motion.p>
    </section>
  );
}
