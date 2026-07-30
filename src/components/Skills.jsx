"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML","CSS","JavaScript","TypeScript",
  "React","Next.js","React Native","Flutter",
  "Java","Swift","Data Structures",

  "Node.js","Express.js","Python","Django",
  "Flask","FastAPI","PHP","Laravel",

  "MongoDB","PostgreSQL","MySQL","Firebase","Redis",

  "Tailwind CSS","Bootstrap","Styled Components",
  "Docker","Git","Vercel","Netlify","Heroku",

  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "NLP",
  "OpenAI API",
  "LLM Integration",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Data Analysis",
  "REST APIs",
  "GraphQL",
  "PWA",
  "Mobile UI"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-black"
    >
      {/* 🌈 Background Glow */}
      <motion.div
        className="absolute w-[220px] sm:w-72 h-[220px] sm:h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-5 sm:left-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[220px] sm:w-72 h-[220px] sm:h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-5 sm:right-10"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-14 lg:mb-16 relative z-10"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight">
          <span className="block text-white">Technologies</span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            That Power Solutions
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Modern tools I use to build scalable, performant, and AI-ready products for businesses.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">

          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.01 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-xl shadow-md hover:shadow-blue-500/30 transition-all overflow-hidden cursor-pointer"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl" />

              {/* Shine */}
              <div className="absolute -top-20 left-[-120%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

              {/* Text */}
              <span className="relative z-10 text-[11px] sm:text-xs lg:text-sm font-semibold text-gray-300 group-hover:text-white transition">
                {skill}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}