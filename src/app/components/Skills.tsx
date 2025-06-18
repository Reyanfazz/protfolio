'use client';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress,
  SiMongodb, SiPython, SiFlask, SiTensorflow, SiPytorch, SiFirebase, SiGit,
  SiHtml5, SiCss3, SiJavascript, SiAngular, SiVuedotjs, SiReactrouter,
  SiMysql, SiScikitlearn, SiPandas, SiNumpy, SiLangchain, SiOpenai,
  SiApachespark, SiJupyter, SiKotlin, SiDotnet, SiOpencv,
  SiGooglecloud
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Angular', icon: <SiAngular /> },
  { name: 'Vue.js', icon: <SiVuedotjs /> },
  { name: 'React Native', icon: <SiReactrouter /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'scikit-learn', icon: <SiScikitlearn /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'LangChain', icon: <SiLangchain /> },
  { name: 'OpenAI API', icon: <SiOpenai /> },
  { name: 'Google Gemini API', icon: <SiGooglecloud /> },
  { name: 'PySpark', icon: <SiApachespark /> },
  { name: 'Jupyter Notebook', icon: <SiJupyter /> },
  { name: 'Java' },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'C#' },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          <Typewriter
            words={['Skills & Tech Stack']}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="group relative px-4 py-2 flex items-center gap-2 rounded-full text-sm font-medium cursor-pointer bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm hover:shadow-md transition duration-150"
          >
            <span className="text-lg">{skill.icon}</span>
            <span className="hidden sm:inline">{skill.name}</span>
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-md z-10">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
