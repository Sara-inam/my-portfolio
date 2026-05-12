"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center justify-center px-6 sm:px-10 lg:px-20"
    >
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full" />
      </div>

      {/* ✨ Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* 🚀 Main Container */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
      {/* LEFT CONTENT */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center lg:text-left max-w-[520px]"
>
  {/* BADGE */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm mb-5 backdrop-blur-xl">
    ✦ Full Stack Developer
  </div>

  {/* HEADING */}
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1] tracking-tight">
    <span className="text-white">
      Modern
    </span>

    <br />

    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
      Web
    </span>

    <span className="text-white">
      {" "}Solutions
    </span>
  </h1>

  {/* DESCRIPTION */}
  <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
    I build fast and scalable web applications using
    React, Next.js, MERN Stack, Python, Django,
    and Flask with premium modern UI experiences.
  </p>

  {/* TECH BADGES */}
  <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
    {[
      "React",
      "Next.js",
      "MERN",
      "Python",
      "Django",
      "Flask",
    ].map((tech, i) => (
      <div
        key={i}
        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 backdrop-blur-xl"
      >
        {tech}
      </div>
    ))}
  </div>

  {/* BUTTONS */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
    <a
      href="#projects"
      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-xl hover:scale-105 transition-all duration-300 text-center"
    >
      View Projects
    </a>

    <a
      href="#contact"
      className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white text-sm hover:bg-white/10 transition-all duration-300 text-center"
    >
      Contact Me
    </a>
  </div>

  {/* STATS */}
  <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
    {[
      ["6+", "Projects"],
      ["MERN", "Stack"],
      ["Django", "Backend"],
    ].map(([num, label], i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4"
      >
        <h2 className="text-xl sm:text-2xl font-black text-white">
          {num}
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm mt-1">
          {label}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* MAIN CIRCLE */}
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">
            
            {/* ROTATING BORDER */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-[6px] border-dashed border-cyan-400/30"
            />

            {/* INNER GLOW */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl" />

            {/* GLASS CENTER */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="absolute inset-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden"
            >
              {/* CENTER CONTENT */}
              <div className="text-center px-6">
                <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Sara
                </h2>

                <p className="mt-3 text-gray-300 text-lg">
                  Full Stack Developer
                </p>

                {/* TECH STACK */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind",
                    "Node.js",
                    "Python",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARDS */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-0 -left-8 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <p className="text-cyan-400 font-semibold">
                UI/UX Design
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-5 -right-8 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <p className="text-purple-400 font-semibold">
                MERN Stack
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}