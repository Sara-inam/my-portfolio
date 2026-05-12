"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      {/* 🔥 Background Glow */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* CONTENT */}
      <div className="w-full max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
        >
          I build modern, scalable and high-performance web applications 
          using cutting-edge technologies with clean code and elegant UI/UX.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
        >
          {[
            { value: "1+", label: "Years Experience" },
            { value: "6", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-400/50 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {item.value}
              </div>
              <div className="text-gray-400 text-xs uppercase mt-1">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
  href="#contact"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.97 }}
  className="inline-block mt-6 px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-blue-500/30 transition-all"
>
  Get In Touch
</motion.a>
        </motion.div>

      </div>
    </section>
  );
}