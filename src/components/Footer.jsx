"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// ✅ Custom LinkedIn Icon (SAFE - NO ERRORS)
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.91 20.45H3.77V9h3.14v11.45z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 sm:px-6 py-16 sm:py-20 text-center">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-[220px] sm:w-[350px] lg:w-[400px] h-[220px] sm:h-[350px] lg:h-[400px] bg-blue-500/10 blur-3xl rounded-full absolute top-10 left-5 sm:left-10"
        />

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-[200px] sm:w-[300px] lg:w-[300px] h-[200px] sm:h-[300px] lg:h-[300px] bg-purple-500/10 blur-3xl rounded-full absolute bottom-10 right-5 sm:right-10"
        />
      </div>

      {/* 🧊 MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl"
      >

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Sara <span className="text-blue-500">Dev</span>
        </h2>

        {/* Text */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
          Full Stack Developer building modern, scalable & AI-powered web apps using{" "}
          <span className="text-white">Next.js, React, Python, Django, Flask</span> and{" "}
          <span className="text-white">MERN Stack</span>.
        </p>

        {/* Divider */}
        <div className="w-24 sm:w-28 h-[1px] bg-white/10 mx-auto my-6 sm:my-8" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Sara Inam. Built with passion & clean code.
        </p>
      </motion.div>

      {/* 📱 FLOATING BUTTONS */}

      {/* WhatsApp */}
     <motion.a
  whileHover={{ scale: 1.15 }}
  whileTap={{ scale: 0.9 }}
  href="https://wa.me/923237834507"
  target="_blank"
  className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl flex items-center justify-center z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M19.11 17.52c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.95 2.98 4.73 4.18.66.28 1.17.45 1.57.57.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
    <path d="M16 3C8.83 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.49L3 29l6.7-1.76A12.93 12.93 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.6c-2.1 0-4.15-.55-5.96-1.6l-.43-.25-3.97 1.04 1.06-3.86-.28-.4A10.6 10.6 0 1 1 16 26.6z"/>
  </svg>
</motion.a>

      {/* LinkedIn */}
      <motion.a
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.linkedin.com/in/sara-inam-03a460262/"
        target="_blank"
        className="fixed bottom-20 right-5 sm:bottom-24 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-2xl flex items-center justify-center z-50"
      >
        <LinkedInIcon />
      </motion.a>

    </footer>
  );
}