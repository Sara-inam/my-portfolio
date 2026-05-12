"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 py-20 text-center">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full absolute top-10 left-10"
        />

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full absolute bottom-10 right-10"
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl"
      >

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Sara <span className="text-blue-500">Dev</span>
        </h2>

        {/* Text */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
          Full Stack Developer building modern, scalable & animated web apps using{" "}
          <span className="text-white">Next.js, React, Python, Django</span> and{" "}
          <span className="text-white">MERN Stack</span>.
        </p>

        {/* Divider */}
        <div className="w-28 h-[1px] bg-white/10 mx-auto my-8" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Raaziya. Built with passion & clean code.
        </p>

      </motion.div>

      {/* WhatsApp Button */}
    {/* WhatsApp Button */}
<motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  href="https://wa.me/923345540116"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.34.14 11.91c0 2.09.55 4.13 1.6 5.93L0 24l6.32-1.66a11.87 11.87 0 0 0 5.74 1.47h.01c6.57 0 11.91-5.34 11.91-11.91a11.84 11.84 0 0 0-3.46-8.42ZM12.07 21.7a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.75.98 1-3.65-.24-.38a9.82 9.82 0 1 1 8.35 4.62Zm5.69-7.43c-.31-.15-1.83-.9-2.11-1-.28-.1-.48-.15-.68.15s-.78 1-.96 1.2-.35.22-.66.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.29 0-.45.13-.6.14-.14.3-.35.45-.53a2 2 0 0 0 .3-.5.54.54 0 0 0 0-.5c-.05-.15-.68-1.63-.93-2.26-.24-.6-.49-.52-.68-.53h-.58a1.1 1.1 0 0 0-.8.37 3.37 3.37 0 0 0-1.06 2.5 5.86 5.86 0 0 0 1.23 3.08 13.4 13.4 0 0 0 5.15 4.5c.64.28 1.15.45 1.55.58a3.72 3.72 0 0 0 1.72.11 2.8 2.8 0 0 0 1.85-1.3 2.3 2.3 0 0 0 .16-1.3c-.07-.11-.27-.17-.58-.32Z"/>
  </svg>
</motion.a>
    </footer>
  );
}