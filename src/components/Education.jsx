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
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50"
    >
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            <span className="block">Academic</span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            A strong educational foundation in Information Technology and Computer Science.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full w-fit">
                  {edu.year}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                    {edu.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {edu.institute}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 font-medium">
                    {edu.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
