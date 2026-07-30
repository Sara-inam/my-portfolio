"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2022 – 2025",
    title: "BS Information Technology",
    institute: "Government Graduate Civil Lines College, Lahore",
    detail: "CGPA: 3.59"
  },
  {
    year: "2020 – 2022",
    title: "FSc Pre-Engineering",
    institute: "Government Women College, Lahore",
    detail: "Marks: 998"
  },
  {
    year: "2018 – 2020",
    title: "Matriculation (Computer Science)",
    institute: "Dar-ul-Islam School",
    detail: "Marks: 996"
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-black via-slate-950 to-gray-900 overflow-hidden"
    >
      {/* 🌟 Background Glow */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
          <span className="text-white">Academic</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Foundation
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          A strong educational foundation in Information Technology and Computer Science.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-40 transform sm:-translate-x-1/2" />

        <div className="space-y-10">

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform sm:-translate-x-1/2 shadow-lg shadow-blue-500/50" />

              {/* Card */}
              <div className="ml-10 sm:ml-0 w-full sm:w-[48%] p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-md hover:shadow-blue-500/20 transition-all group">

                <span className="text-xs text-blue-400 font-semibold">
                  {edu.year}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-white mt-2 group-hover:text-blue-300 transition">
                  {edu.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {edu.institute}
                </p>

                <p className="text-gray-300 text-sm mt-2 font-medium">
                  {edu.detail}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}