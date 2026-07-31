"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-purple-200/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-purple-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,#fbcfe8_1px,transparent_1px),linear-gradient(to_bottom,#fbcfe8_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs sm:text-sm mb-5 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for new business projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-gray-900">
            <span className="block">Scalable Web</span>
            <span className="block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">
              Solutions That
            </span>
            <span className="block">Drive Growth</span>
          </h1>

          <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            I build high-performance web applications and AI-powered systems that solve real business problems, automate workflows, and deliver measurable ROI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#schedule"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-bold shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 text-center"
            >
              Book A Strategy Call
            </Link>
            <Link
              href="#projects"
              className="px-7 py-4 rounded-2xl border border-purple-200 bg-white text-gray-700 text-sm font-semibold hover:bg-purple-50 transition-all duration-300 text-center"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {[
              ["10+", "Projects Delivered"],
              ["3+", "AI Models Live"],
              ["100%", "Client Focused"],
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center p-3 sm:p-4 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100"
              >
                <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  {num}
                </h2>
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider mt-1">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center hidden lg:flex"
        >
          <div className="relative w-[350px] lg:w-[420px] h-[350px] lg:h-[420px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[3px] border-dashed border-purple-200"
            />

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-100 via-purple-100 to-white blur-2xl"
            />

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-8 rounded-full border border-purple-200 bg-white backdrop-blur-2xl shadow-[0_0_80px_rgba(236,72,153,0.15)] flex flex-col items-center justify-center"
            >
              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-3 shadow-lg shadow-purple-500/30">
                  <span className="text-2xl font-black text-white">S</span>
                </div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  Sara Inam
                </h2>
                <p className="mt-1 text-gray-600 text-sm font-medium">
                  Full Stack Developer
                </p>
                <p className="mt-1 text-gray-400 text-xs">
                  React &bull; Node.js &bull; AI/ML &bull; Python
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-8 px-5 py-3 rounded-2xl bg-white border border-purple-200 backdrop-blur-xl shadow-lg"
            >
              <p className="text-purple-600 font-semibold text-sm">Web Applications</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -right-8 px-5 py-3 rounded-2xl bg-white border border-purple-200 backdrop-blur-xl shadow-lg"
            >
              <p className="text-purple-500 font-semibold text-sm">AI Integration</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 -right-12 px-4 py-2 rounded-xl bg-white border border-purple-200 backdrop-blur-xl shadow-lg"
            >
              <p className="text-purple-600 font-semibold text-xs">🚀 Fast Delivery</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
