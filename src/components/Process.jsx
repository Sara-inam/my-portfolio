"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "I start by understanding your business goals, target audience, and technical requirements. This ensures we build the right solution, not just any solution.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "I design scalable system architecture, database schemas, and UI/UX flows that align with your brand and technical standards.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Sprint-based development with regular updates. You get working code fast, not just documentation. Tech: Next.js, Node.js, Python, AI/ML.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Rigorous QA, performance optimization, and seamless deployment to Vercel, AWS, or your cloud of choice. Zero downtime launches.",
  },
  {
    step: "05",
    title: "Support & Scale",
    desc: "Post-launch monitoring, feature iterations, and scaling support so your product grows with your business.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
            <span className="block">My Work</span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            A proven, transparent workflow that delivers results on time and on budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all text-center flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-3xl mb-3 font-black text-purple-600">{p.step}</div>
                <span className="text-[10px] font-bold text-purple-600 tracking-widest uppercase">{p.step}</span>
                <h3 className="text-base font-bold text-gray-900 mt-2 mb-2 group-hover:text-purple-600 transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Ready to Start?
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
