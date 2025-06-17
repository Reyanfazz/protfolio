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
  We are a results-driven development team specializing in AI-powered solutions, full-stack web and mobile. Our expertise spans modern technologies such as React, Next.js, Node.js, Python, and MongoDB, enabling us to deliver scalable and intelligent products tailored to client needs.
</p>
<p>
  From AI chatbots and machine learning platforms to enterprise web applications and mobile solutions, we focus on creating high-performance, user-centric products. Our mission is to blend innovation, functionality, and efficiency to help businesses achieve their digital goals.
</p>

              </motion.p>
    </section>
  );
}
