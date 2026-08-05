"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Self-Taught / Projects",
    year: "2024 – Present",
    desc: "Built 10+ production applications using React, Next.js, Node.js, Python, and AI/ML.",
  },
  {
    title: "AI & Machine Learning",
    issuer: "Self-Taught / Projects",
    year: "2025 – Present",
    desc: "Developed ML models for stock prediction, health risk assessment, and LLM-powered chatbots.",
  },
  {
    title: "BS Information Technology",
    issuer: "Government Graduate Civil Lines College, Lahore",
    year: "2022 – 2025",
    desc: "CGPA: 3.59. Focused on software engineering, databases, and web technologies.",
  },
];

export default function Certifications() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">{c.title}</h4>
                <p className="text-gray-500 text-xs mt-0.5">{c.issuer} | {c.year}</p>
                <p className="text-gray-600 text-sm mt-2">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}