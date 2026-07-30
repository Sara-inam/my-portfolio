"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Stack Web & Mobile Apps",
    desc: "Production-grade websites, PWAs, and mobile-ready apps built with modern frameworks. From SaaS dashboards to cross-platform mobile applications, I deliver fast, secure, and scalable solutions.",
    highlights: ["Next.js / React", "React Native", "Node.js & Express", "MongoDB / PostgreSQL", "SEO & Performance", "PWA & Mobile UI"],
  },
  {
    title: "AI & Automation Integration",
    desc: "I help teams embed intelligence into existing products—chat assistants, predictive analytics, and document automation that save hours of manual work.",
    highlights: ["LLM Integration", "Custom ML Models", "Smart Chatbots", "Data Pipelines"],
  },
  {
    title: "API & Backend Architecture",
    desc: "Robust, well-structured backend systems and REST APIs that connect frontends, databases, and third-party services without bottlenecks.",
    highlights: ["REST / GraphQL APIs", "Authentication", "Cloud Deployment", "Database Design"],
  },
  {
    title: "Digital Transformation",
    desc: "Business-ready digital products—ecommerce platforms, internal tools, LMS, and employee management systems that replace manual workflows.",
    highlights: ["Process Automation", "Ecommerce Solutions", "Internal Dashboards", "MVP to Scale"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900"
    >
      <motion.div
        className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl top-10 left-5 sm:left-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-5 sm:right-10"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-white block">What I Deliver</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              To Your Business
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            I don&apos;t just write code—I build products that help businesses reduce costs, automate work, and scale efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-blue-400/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-lg sm:text-xl">
                    {i === 0 && "💻"}
                    {i === 1 && "🤖"}
                    {i === 2 && "🔌"}
                    {i === 3 && "📈"}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h, idx) => (
                    <span key={idx} className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 group-hover:border-blue-400/20 transition-colors">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
