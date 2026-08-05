"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "AI and ML Engineer",
    company: "Developers Hub Corporation",
    location: "Remote",
    period: "04/2026 – Present",
    desc: "Engineered embedding-based prediction systems using LLM-based approaches. Developed dynamic prompt-based APIs and order similarity search via vector embeddings.",
  },
  {
    role: "AI Engineer | Full Stack Developer",
    company: "Techling (Private) Limited",
    location: "Lahore",
    period: "03/2025 – 03/2026 (1 Year)",
    desc: "Built full-stack web applications, integrated AI features, and delivered business-ready digital products for clients.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full w-fit">
                  {exp.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.role}</h3>
              </div>
              <p className="text-gray-600 text-sm font-medium">{exp.company} — {exp.location}</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}