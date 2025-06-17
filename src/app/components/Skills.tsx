'use client';
import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express',
  'MongoDB', 'Python', 'Flask', 'TensorFlow', 'PyTorch', 'Firebase', 'Git',
  'HTML5', 'CSS3', 'JavaScript', 'Angular', 'Vue.js', 'React Native',
  'MySQL', 'scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'Transformers',
  'OpenRouter', 'Google Gemini API', 'OpenAI API', 'PySpark', 'MLlib',
  'Google Colab', 'Jupyter Notebook', 'Java', 'Kotlin', 'C#', '.NET', 'OpenCV'
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Skills & Tech Stack</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.span
  key={index}
  variants={item}
   initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
  className="px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-100 rounded-full text-sm font-medium cursor-pointer"
>
  {skill}
</motion.span>
        ))}
      </motion.div>
    </section>
  );
}