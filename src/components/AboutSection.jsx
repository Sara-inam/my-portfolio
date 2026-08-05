"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
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

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
            About <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            A passionate Full Stack Developer and AI/ML specialist building products that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-purple-50 border border-purple-100 flex items-center justify-center shadow-lg shadow-purple-100">
              <span className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                SI
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-xl shadow-lg">
              Lahore, Pakistan
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hello, I&apos;m <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Sara Inam</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I am a Full Stack Developer and AI/ML enthusiast based in Lahore, Pakistan. I specialize in building modern web applications, mobile-ready platforms, and intelligent automation systems using cutting-edge technologies.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With 1+ year of hands-on experience, I have delivered 10+ production projects across web development, AI/ML, and digital transformation. I work closely with founders, startup teams, and business owners to turn ideas into scalable, high-performance products.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "Full Stack", color: "bg-purple-100 text-purple-700" },
                { label: "AI/ML", color: "bg-purple-100 text-purple-700" },
                { label: "Mobile-Ready", color: "bg-purple-100 text-purple-700" },
                { label: "1+ Year Exp", color: "bg-purple-100 text-purple-700" },
              ].map((tag) => (
                <span key={tag.label} className={`px-4 py-1.5 rounded-full text-xs font-semibold ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}