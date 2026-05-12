"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML","CSS","JavaScript","TypeScript",
  "React","Next.js","Vue.js","Angular","Java","C++","Data Structure",
  "Node.js","Express.js","Python","Django",
  "Flask","FastAPI","PHP","Laravel",
  "MongoDB","PostgreSQL","MySQL","FireBase","Redis",
  "Tailwind CSS","Bootstrap","Styled Components","Docker","Git","Vercel","Netlify","Heroku"
];

export default function Skills() {
  return (
    <section
  id="skills"
  className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-black"
>

      {/* 🔥 Animated Background Glow */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
          <span className="block text-white">Technologies</span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            I Work With
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Tools and technologies I use to build fast, scalable and modern web applications.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">

          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-xl shadow-md hover:shadow-blue-500/30 transition-all overflow-hidden cursor-pointer"
            >
              {/* ✨ Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />

              {/* ✨ Shine Effect */}
              <div className="absolute -top-20 left-[-100%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[100%] transition-all duration-700" />

              {/* Text */}
              <span className="relative z-10 text-xs sm:text-sm lg:text-base font-semibold text-gray-300 group-hover:text-white transition">
                {skill}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}