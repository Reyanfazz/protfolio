'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample projects with multiple categories
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
    categories: ['AI','Mobile App'],
  },

  {
    slug: 'Ship-Type-Classification',
    title: "Ship Type Classification",
    description: 'Multiclass classification of ship types using AIS data from Kaggle',
    tech: ["PySpark", "MLlib", "Google Colab", "Kaggle"],
    categories: ['Machine Learning'],
  },
  
  {
    slug: 'Face-Recognition',
    title: "Face Recognition",
    description: 'Facial recognition system using PCA for dimensionality reduction and MLP classifier',
    tech: ["Python", "OpenCV", "scikit-learn", "PCA", "ANN", "MLP"],
    categories: ['Machine Learning', 'AI'],
  },

  {
    slug: 'Disease-Prediction',
    title: "Disease Prediction",
    description: 'ML project to Predict Multiple Diseases',
    tech: ["Python", "Pandas", "scikit-learn", "Jupyter Notebook"],
    categories: ['Machine Learning'],
  },
{
  slug: 'Blog-Platform',
    title: "Blog Platform",
    description: 'Multi-framework blogging platform to explore front-end variety and backend SQL support',
    tech: ['MERN', 'Angular', 'Vue', 'MySQL', 'Firebase'],
    categories: ['WebDevelopment'],
},

{
  slug: 'Netflix-Clone',
    title: "Movies and Series Streamming",
    description: 'Streamming Platform similar to Netflix using React and Node, supports video streaming UI',
    tech: ['MERN', 'Angular', 'Vue'],
    categories: ['WebDevelopment'],
},
];

// Unique categories
const allCategories = ['All', ...Array.from(new Set(allProjects.flatMap(p => p.categories)))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(project => project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-sm">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              target="_blank"
              className="text-indigo-600 hover:underline font-semibold text-sm"
            >
              View Demo
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
