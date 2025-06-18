'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import {
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiBootstrap,
  SiMongodb,
  SiPython,
  SiNextdotjs,
  SiFirebase,
  SiKotlin,
  SiAngular,
  SiScikitlearn,
  SiGooglecolab,
  SiMysql,
  SiNodedotjs,
  SiLangchain,
  SiOpenai,
  SiHuggingface,
  SiVuedotjs,
} from 'react-icons/si';

const allProjects = [
  {
    slug: 'ai-agent',
    title: 'AI Agent',
    description: 'Built using Flask, OpenRouter API, and MERN stack for chat UI with file upload.',
    tech: ['AI', 'React', 'Tailwind', 'Flask', 'Bootstrap'],
    categories: ['AI'],
  },
  {
    slug: 'velocitix-ai',
    title: 'Velocitix AI Platform',
    description: 'Career readiness platform with smart assessments and simulation rounds.',
    tech: ['AI', 'MERN', 'Tailwind', 'Python', 'Flask', 'Bootstrap'],
    categories: ['AI'],
  },
  {
    slug: 'shopping-app',
    title: 'Mobile Shopping App',
    description: 'Cross-platform shopping app with real-time inventory and payments.',
    tech: ['Mobile', 'Android', 'Firebase', 'Java', 'XML'],
    categories: ['Mobile App'],
  },
  {
    slug: 'AI-Chatbot',
    title: 'AI Personal Chatbot',
    description: 'Personal chatbot using transformer models hosted on Hugging Face.',
    tech: ['MERN', 'AI', 'HuggingFace', 'Bootstrap', 'Next.js'],
    categories: ['AI', 'WebDevelopment'],
  },
  {
    slug: 'Resume-Parser',
    title: 'AI Resume Phraser',
    description: 'Intelligent assistant that rephrases resume content using NLP models.',
    tech: ['AI', 'React', 'Flask', 'Transformers', 'NLP', 'Bootstrap', 'Tailwind'],
    categories: ['AI'],
  },
  {
    slug: 'AI-Agent-Personal-Memory',
    title: 'AI Agent with Personal Data',
    description: 'LLM agent that remembers and answers based on user-uploaded documents.',
    tech: ['AI', 'MERN', 'LangChain', 'OpenRouter', 'LLM', 'Vector DB', 'Mongodb'],
    categories: ['AI'],
  },
  {
    slug: 'Groot-Bot',
    title: 'AI Chatbot with Gemini API (Groot Bot)',
    description: 'Built in Android Studio for real-time personal assistance.',
    tech: ['AI', 'Android Studio', 'Gemini API', 'Java', 'Kotlin', 'Firebase'],
    categories: ['AI', 'Mobile App'],
  },
  {
    slug: 'Ship-Type-Classification',
    title: 'Ship Type Classification',
    description: 'Multiclass classification of ship types using AIS data from Kaggle',
    tech: ['PySpark', 'MLlib', 'Google Colab', 'Kaggle'],
    categories: ['Machine Learning'],
  },
  {
    slug: 'Face-Recognition',
    title: 'Face Recognition',
    description: 'Facial recognition system using PCA for dimensionality reduction and MLP classifier',
    tech: ['Python', 'OpenCV', 'scikit-learn', 'PCA', 'ANN', 'MLP'],
    categories: ['Machine Learning', 'AI'],
  },
  {
    slug: 'Disease-Prediction',
    title: 'Disease Prediction',
    description: 'ML project to Predict Multiple Diseases',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Jupyter Notebook'],
    categories: ['Machine Learning'],
  },
  {
    slug: 'Blog-Platform',
    title: 'Blog Platform',
    description: 'Multi-framework blogging platform to explore front-end variety and backend SQL support',
    tech: ['MERN', 'Angular', 'Vue', 'MySQL', 'Firebase'],
    categories: ['WebDevelopment'],
  },
  {
    slug: 'Netflix-Clone',
    title: 'Movies and Series Streaming',
    description: 'Streaming Platform similar to Netflix using React and Node, supports video streaming UI',
    tech: ['MERN', 'Angular', 'Vue'],
    categories: ['WebDevelopment'],
  },
];

const allCategories = ['All', ...Array.from(new Set(allProjects.flatMap(p => p.categories)))];

const techIcons = {
  AI: null,
  React: <SiReact className="inline-block mr-1 text-lg" />,
  Tailwind: <SiTailwindcss className="inline-block mr-1 text-lg" />,
  Flask: <SiFlask className="inline-block mr-1 text-lg" />,
  Bootstrap: <SiBootstrap className="inline-block mr-1 text-lg" />,
  MERN: null,
  Python: <SiPython className="inline-block mr-1 text-lg" />,
  Mobile: null,
  Android: null,
  Firebase: <SiFirebase className="inline-block mr-1 text-lg" />,
  Java: null,
  XML: null,
  HuggingFace: <SiHuggingface className="inline-block mr-1 text-lg" />,
  'Next.js': <SiNextdotjs className="inline-block mr-1 text-lg" />,
  Transformers: null,
  NLP: null,
  LangChain: <SiLangchain className="inline-block mr-1 text-lg" />,
  OpenRouter: null,
  LLM: null,
  'Vector DB': null,
  Mongodb: <SiMongodb className="inline-block mr-1 text-lg" />,
  'Android Studio': null,
  'Gemini API': null,
  Kotlin: <SiKotlin className="inline-block mr-1 text-lg" />,
  MLlib: null,
  'Google Colab': <SiGooglecolab className="inline-block mr-1 text-lg" />,
  Kaggle: null,
  OpenCV: null,
  'scikit-learn': <SiScikitlearn className="inline-block mr-1 text-lg" />,
  PCA: null,
  ANN: null,
  MLP: null,
  Pandas: null,
  'Jupyter Notebook': null,
  'MySQL': <SiMysql className="inline-block mr-1 text-lg" />,
  Angular: <SiAngular className="inline-block mr-1 text-lg" />,
  Vue: <SiVuedotjs className="inline-block mr-1 text-lg" />,
  Node: <SiNodedotjs className="inline-block mr-1 text-lg" />,
  OpenAI: <SiOpenai className="inline-block mr-1 text-lg" />,
};



export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(project => project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="relative py-20 px-6 sm:px-12">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          <Typewriter
            words={['Projects']}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </span>
      </motion.h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={` px-5 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400
              ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50 scale-105 '
                  : 'bg-transparent relative rounded-3xl  bg-opacity-10 backdrop-blur-md  border-indigo-400 border-opacity-10 p-7 text-white shadow-md shadow-indigo-900/30 cursor-pointer select-none hover:text-white hover:scale-105'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map(project => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(99,102,241,0.5)' }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl  bg-opacity-10 backdrop-blur-md border-indigo-400 border-opacity-10 p-7 text-white shadow-md shadow-indigo-900/30 cursor-pointer select-none"
          >
            <h3 className="text-2xl font-bold mb-3 drop-shadow-md">{project.title}</h3>
            <p className="mb-6 text-sm leading-relaxed drop-shadow-md">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5 text-xs font-semibold drop-shadow-md">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="flex items-center gap-1 rounded-md bg-indigo-700 bg-opacity-30 px-2 py-1"
                >
                  
                 {techIcons[tech as keyof typeof techIcons]}
    {tech}
                </span>
              ))}
            </div>

            <Link href={`/projects/${project.slug}`}>
  <button
    className="px-4 py-2 mt-2 relative rounded-3xl  bg-opacity-10 backdrop-blur-md  border-indigo-400 border-opacity-10 p-7 text-white shadow-md shadow-indigo-900/30 cursor-pointer select-none hover:text-white hover:scale-105"
  >
    View Demo →
  </button>
</Link>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
