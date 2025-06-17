'use client';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills'; // ✅ Make sure Skills is a default export
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Hero />
      <Skills />
      <Projects />
    </motion.div>
  );
}
