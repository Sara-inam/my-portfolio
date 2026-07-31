"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const trustSignals = [
  { color: "bg-emerald-500", label: "Clean, Maintainable Code" },
  { color: "bg-blue-500", label: "Fast Time-to-Market" },
  { color: "bg-purple-500", label: "Production-Ready Delivery" },
  { color: "bg-purple-500", label: "Business-First Approach" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white"
    >
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full mx-auto mb-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight"
        >
          Turning Complex Challenges Into{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">
            Scalable Business Results
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          I partner with founders, startup teams, and business owners to design and ship products that perform. From building fast, modern web platforms to integrating AI/ML automation, I help companies cut development costs and move faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-8"
        >
          {trustSignals.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all"
            >
              <div className="text-2xl sm:text-3xl mb-2">
                <span className={`inline-block w-4 h-4 sm:w-5 sm:h-5 rounded-full ${item.color}`} />
              </div>
              <div className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link
            href="/schedule"
            className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Book A Strategy Call
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-xl border border-purple-200 bg-white text-gray-700 text-sm font-semibold hover:bg-purple-50 transition-all"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
