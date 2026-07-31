"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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


const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-20 text-center border-t border-purple-100">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-[220px] sm:w-[350px] lg:w-[400px] h-[220px] sm:h-[350px] lg:h-[400px] bg-purple-100/50 blur-3xl rounded-full absolute top-10 left-5 sm:left-10"
        />

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-[200px] sm:w-[300px] lg:w-[300px] h-[200px] sm:h-[300px] lg:h-[300px] bg-purple-100/50 blur-3xl rounded-full absolute bottom-10 right-5 sm:right-10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto bg-white border border-purple-100 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm shadow-purple-100"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Ready to Turn Your Idea Into <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Reality</span>?
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed mb-8">
          Let&apos;s schedule a strategy call to discuss your project goals and how I can help you build a solution that drives real business results.
        </p>

        <Link
  href="https://wa.me/923237834507?text=Hi%20Sara,%20I%20would%20like%20to%20schedule%20a%20strategy%20call.%20My%20preferred%20time%20is:"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/30 transition-all"
>
  <WhatsAppIcon />
  Book A Strategy Call
</Link>

        <div className="w-24 sm:w-28 h-[1px] bg-purple-100 mx-auto my-6 sm:my-8" />

        <p className="text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Sara Inam. Built with passion & clean code.
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="https://wa.me/923237834507"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 hover:bg-purple-100 transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://github.com/Sara-inam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 hover:bg-purple-100 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sara-inam-03a460262/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 hover:bg-purple-100 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
