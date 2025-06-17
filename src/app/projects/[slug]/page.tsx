'use client';

import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { use } from 'react';

const allProjects = [
  {
    slug: 'ai-agent',
    title: 'AI Agent',
    detailedDescription: `
### Project Concept

This is a modern AI-powered chat assistant built using the MERN stack (MongoDB, Express.js, React.js, Node.js/Flask) and integrated with OpenRouter’s Mistral 7B LLM to enable:

- Natural conversation with an AI assistant  
- Tool use: Web Search, Calculator, File Reader  
- File uploads (up to 3 files) with smart AI processing  
- Interactive, professional UI with markdown/code support

This AI chatbot uses Flask + OpenRouter + React. It supports file uploads, user authentication, and tools like web search and math solver. It stores chat history and provides an admin dashboard.
`,
    video: '/videos/aiagent.mp4',
  },
  {
    slug: 'velocitix-ai',
    title: 'Velocitix AI Platform',
    description: 'Career readiness platform with smart assessments and simulation rounds.',
    detailedDescription: `- Velocitix AI is an AI-powered, full-stack career readiness and placement platform built with the MERN stack (MongoDB, Express.js, React, Node.js). 
- It is designed to assess, guide, train, and connect students with job opportunities while enabling colleges, recruiters, and admins to manage the ecosystem through role-based dashboards.

Velocitix AI is a full-stack MERN application with AI-based career assessments, interview simulations, learning dashboards, and placement analytics.`,
    tech: ['AI', 'MERN', 'Tailwind', 'Python', 'Flask'],
    video: '/videos/vel.mp4',
  },
  {
    slug: 'shopping-app',
    title: 'Mobile Shopping App',
    description: 'Cross-platform shopping app with real-time inventory and payments.',
    detailedDescription: `This Shopping app supports secure login, inventory sync with Firebase, in-app payments, and real-time notifications. 
    
Built for Android.`,
    tech: ['Mobile', 'Android', 'Firebase', 'Java', 'XML'],
    video: '/videos/shopping-app-demo.mp4',
  },
  {
    slug: 'AI-Chatbot',
    title: 'AI Personal Chatbot',
    description: 'Personal Conversational chatbot using transformer models hosted on Hugging Face integrated via Flask backend.',
    detailedDescription: `This project is a personalized AI-powered chatbot built using the MERN stack and integrated with Hugging Face's transformer-based language models. The chatbot is capable of holding natural, context-aware conversations with users in real time.

The backend is developed with Node.js and Express.js, while MongoDB is used to store user messages and chat history. On the frontend, a modern, responsive UI is developed using React and styled with Bootstrap and Next.js for enhanced performance and SEO.

The core intelligence of the chatbot comes from Hugging Face models like DialoGPT and GPT-2, which are integrated through the backend using REST APIs. The system handles prompt management, user session tracking, and safe input/output sanitization.

This chatbot is suitable for use cases such as customer service bots, FAQ assistants, and personal productivity tools. The project also includes features like session persistence, avatar-based chat UI, and message loading indicators for a smooth user experience.`,
    tech: ['MERN', 'AI', 'HuggingFace', 'Bootstrap', 'Next.js'],
    video: '/videos/pcai.mp4',
  },

  {
    slug: 'Resume-Parser',
    title: "AI Resume Phraser",
    description: 'Intelligent assistant that rephrases resume content using NLP models.',
    detailedDescription: `AI Resume Phraser is an intelligent assistant that helps users optimize their resume content using advanced Natural Language Processing techniques. Built with the MERN stack for the frontend and Flask for backend AI logic, the system uses transformer-based models like BERT and T5 for semantic rephrasing.

The tool allows users to upload resumes (PDF or DOCX), which are parsed and structured into editable sections. Based on the target job role or keywords provided by the user, the system rephrases bullet points or summary content to improve clarity, relevance, and impact.

Key features include resume file preview, intelligent sentence suggestions, manual edit options, and export functionality. The app provides a user-friendly interface and ensures data privacy by handling all processing locally on the server.

Ideal for job seekers looking to improve their resume quality and stand out in competitive application processes.`,

    tech: ["AI","React", "Flask", "Transformers", "NLP", "Bootstrap", "Tailwind"],
    video: '/videos/resumeparser.mp4',
  },

  {
    slug: 'AI-Agent-Personal-Memory',
    title: "AI Agent with Personal Data Memory",
    description: 'Custom LLM agent that can remember and answer queries based on user-uploaded personal documents.',
    tech: ["AI","MERN", "Flask", "LangChain", "OpenRouter", "LLM", "Vector DB", "Mongodb", "Tailwind", "Bootstrap"],
    video: '/videos/customai.mp4',
    detailedDescription: `This project is a personalized AI agent designed to ingest, retain, and retrieve information from user-uploaded documents such as PDFs, DOCX files, and text files. Built using the MERN stack for the frontend and Flask for the AI logic, the agent leverages LangChain and OpenRouter's LLM APIs to deliver context-aware, document-informed responses.

When users upload files, the content is extracted and stored in a vector database using semantic embeddings. LangChain manages document chunking, retrieval, and prompt engineering. The AI agent can then answer user queries based on the ingested knowledge, effectively acting as a memory-augmented assistant.

Key features include document preview, multi-file support, contextual memory, and conversational QA. This system is ideal for building document-based helpdesks, smart assistants, or personal knowledge agents.`,
    
  },

  {
    slug: 'Groot-Bot',
    title: "AI Chatbot with Gemini API (Groot Bot)",
    description: 'Built a Gemini-powered chatbot in Android Studio for real-time personal assistance.',
    tech: ["AI", "Android Studio", "Gemini API", "Java", "Kotlin", "Material UI"],
    video: '/videos/grootbot.mp4',
    detailedDescription: `This project is a mobile-based AI chatbot built in Android Studio, integrated with Google's Gemini API to provide real-time intelligent conversations. Designed as a personal virtual assistant, the app offers a smooth and intuitive chat interface built using Material Design components.

The chatbot supports natural language understanding and context-aware replies powered by Gemini’s advanced LLM capabilities. Users can interact through typed prompts, and the app provides quick suggestion chips to streamline conversations.

The system also includes message persistence, typing indicators, and error handling to ensure a user-friendly experience. It serves as a foundation for building AI-powered productivity tools, educational bots, or customer support apps on Android.`,
  },

  {
    slug: 'Groot-Bot',
    title: "AI Chatbot with Gemini API (Groot Bot)",
    description: 'Built a Gemini-powered chatbot in Android Studio for real-time personal assistance.',
    tech: ["AI", "Android Studio", "Gemini API", "Java", "Kotlin", "Material UI"],
    video: '/videos/grootbot.mp4',
    detailedDescription: `This project is a mobile-based AI chatbot built in Android Studio, integrated with Google's Gemini API to provide real-time intelligent conversations. Designed as a personal virtual assistant, the app offers a smooth and intuitive chat interface built using Material Design components.

The chatbot supports natural language understanding and context-aware replies powered by Gemini’s advanced LLM capabilities. Users can interact through typed prompts, and the app provides quick suggestion chips to streamline conversations.

The system also includes message persistence, typing indicators, and error handling to ensure a user-friendly experience. It serves as a foundation for building AI-powered productivity tools, educational bots, or customer support apps on Android.`,
  },

  {
    slug: 'Ship-Type-Classification',
    title: "Ship Type Classification",
    description: 'Multiclass classification of ship types using AIS data from Kaggle',
    tech: ["PySpark", "MLlib", "Google Colab", "Kaggle"],
    categories: ['Machine Learning'],
    video: '/videos/stc.mp4',
    detailedDescription: `This project focuses on the supervised multiclass classification of ship types using AIS (Automatic Identification System) data sourced from Kaggle. The original dataset contains 50+ raw ship categories, which were mapped into 6 major classes to improve classification efficiency.

Using PySpark on Google Colab, data preprocessing included handling missing values, feature transformation, and normalization. The MLlib library was used to implement classification models like Naive Bayes and SVM, with hyperparameter tuning and evaluation using metrics such as accuracy, confusion matrix, and precision-recall.

Visualizations were integrated to interpret data distribution and model performance, making it suitable for big data applications in maritime analytics.`,

  },

  {
    slug: 'Face-Recognition',
    title: "Face Recognition",
    description: 'Facial recognition system using PCA for dimensionality reduction and MLP classifier',
    tech: ["Python", "OpenCV", "scikit-learn", "PCA", "ANN", "MLP"],
    categories: ['Machine Learning', 'AI'],
    video:'/videos/fc.mp4',
    detailedDescription: `This face recognition system uses Principal Component Analysis (PCA) for dimensionality reduction followed by an Artificial Neural Network (ANN) for classification. Developed in Python, the system captures and processes face images to identify individuals with high accuracy.

The pipeline includes preprocessing with OpenCV, PCA for feature extraction, and a Multi-Layer Perceptron (MLPClassifier) from scikit-learn. The model predicts face identities along with confidence probability scores, and visual output shows the predicted vs. actual class.

The system is designed to perform real-time recognition and is suitable for authentication systems, surveillance, or biometric verification tasks.`,
  },

  {
    slug: 'Disease-Prediction',
    title: "Disease Prediction",
    description: 'ML project to Predict Multiple Diseases',
    tech: ["Python", "Pandas", "scikit-learn", "Jupyter Notebook"],
    categories: ['Machine Learning'],
    video:'/videos/dps.mp4',
    detailedDescription: `
This machine learning project predicts the likelihood of multiple diseases (e.g., diabetes, heart disease, liver disease) based on user input data. The dataset includes key medical parameters such as blood pressure, glucose level, BMI, and cholesterol.

Using Python and scikit-learn, we performed data cleaning, feature selection, and model training using classifiers like Logistic Regression, Decision Tree, and Random Forest. The system provides real-time predictions and recommendations based on probability scores.

It can be integrated into health tech platforms or used as a base model for more complex diagnostic systems.`,
  },

  {
    slug: 'Blog-Platform',
    title: "Blog Platform",
    description: 'Multi-framework blogging platform to explore front-end variety and backend SQL support',
    tech: ['MERN', 'Angular', 'Vue', 'MySQL', 'Firebase'],
    categories: ['WebDevelopment'],
    video:'/videos/blog.mp4',
    detailedDescription: `
A dynamic blog platform built to demonstrate versatility in front-end frameworks (React, Angular, Vue) and back-end database integration (MySQL and Firebase). Each version showcases similar blogging features but with a different front-end stack, making it a great tool for learning and comparing frameworks.

Key features include user authentication, blog post creation and editing, comment system, and database CRUD operations. This project serves as a playground to understand how various modern web technologies work in real-world content management use cases.`,
  },



];

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // ✅ Unwrap params
  const project = allProjects.find(p => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {project.title}
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row gap-10 items-start mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Description Section */}
        <motion.div
          className="flex-1 prose dark:prose-invert"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <ReactMarkdown>{project.detailedDescription}</ReactMarkdown>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="flex-1 w-full max-w-xl"
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <video
            className="w-full rounded-2xl shadow-2xl"
            src={project.video}
            controls
            autoPlay
            muted
            loop
            playsInline
            controlsList="nodownload"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
