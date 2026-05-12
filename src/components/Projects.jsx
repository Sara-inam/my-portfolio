"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl top-10 left-5 sm:left-10 animate-pulse" />
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-5 sm:right-10 animate-pulse" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16 text-white"
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto perspective-[1200px]">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition duration-700 group-hover:scale-110"
              />

              {/* Overlay (FIXED: click issue solved) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 pointer-events-none" />

              {/* Buttons */}
              <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                
                {/* LIVE BUTTON (FIXED: empty link handled) */}
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-blue-600 rounded-lg text-white text-xs sm:text-sm hover:scale-105 transition"
                  >
                    Live
                  </a>
                ) : (
                  <span className="px-3 sm:px-4 py-2 text-xs sm:text-sm ">
                  
                  </span>
                )}

                {/* CODE BUTTON */}
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm text-white font-semibold
                  bg-gradient-to-r from-gray-800 to-gray-900 border border-white/20
                  shadow-lg shadow-black/40
                  hover:scale-110 hover:shadow-blue-500/30 hover:border-blue-500
                  transition-all duration-300"
                >
                  Code
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-5 lg:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition">
                {p.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                {p.desc}
              </p>

              {/* TECH STACK */}
              {p.tech && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.split(",").map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs px-2 py-1 bg-white/10 border border-white/10 rounded-full text-blue-300"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}