"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 sm:px-6 py-16 sm:py-20 text-center">
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Turn Your Idea Into <span className="text-blue-500">Reality</span>?
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed mb-8">
          Let&apos;s schedule a strategy call to discuss your project goals and how I can help you build a solution that drives real business results.
        </p>

        <a
          href="https://wa.me/923237834507?text=Hi%20Sara,%20I%20would%20like%20to%20schedule%20a%20strategy%20call.%20My%20preferred%20time%20is:"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-green-500/30 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.223-.672.223-.2.447-.774.967-.956 1.166-.182.199-.365.298-.671.149a6.23 6.23 0 0 1-1.836-1.135c-.795-.947-1.39-2.132-.782-2.74.49-.48 1.37-.39 1.9.298.53.69 1.39.91 1.79.93.4.02.79-.03 1.14-.153.38-.13.73-.37.99-.66.29-.33.4-.66.39-.99-.01-.33-.04-.66.04-.98.08-.32.25-.61.52-.85.28-.24.63-.38 1.01-.43.38-.05.77.01 1.12.16.35.15.67.38.93.68.26.3.47.66.61 1.06.14.4.22.83.24 1.26.02.43-.02.87-.12 1.30-.2.88-.64 1.73-1.28 2.47-.88 1.01-1.99 1.73-3.22 2.09-.63.18-1.28.27-1.92.25-.64-.02-1.26-.12-1.87-.33-.61-.21-1.18-.52-1.69-.91-.51-.39-.95-.87-1.3-1.41-.35-.54-.6-1.14-.73-1.77-.13-.63-.15-1.28-.04-1.92.11-.64.38-1.26.78-1.8.4-.54.93-1.01 1.54-1.38.61-.37 1.31-.61 2.04-.69.73-.08 1.46.01 2.13.26.67.25 1.26.64 1.72 1.13.46.49.8 1.08 1 1.73.2.65.26 1.35.17 2.05-.09.7-.36 1.37-.78 1.95-.42.58-.99 1.06-1.66 1.39-.67.33-1.42.52-2.17.55-.75.03-1.49-.07-2.17-.31-.68-.24-1.29-.61-1.78-1.08-.49-.47-.87-1.04-1.11-1.67-.24-.63-.33-1.31-.25-2.01.08-.69.33-1.33.73-1.9.39-.57.93-1.04 1.57-1.36.64-.32 1.35-.49 2.07-.49.72 0 1.43.1 2.07.33z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.71 1.32 5.26L2 22l5.74-1.32A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
          Book A Strategy Call
        </a>

        <div className="w-24 sm:w-28 h-[1px] bg-white/10 mx-auto my-6 sm:my-8" />

        <p className="text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Sara Inam. Built with passion & clean code.
        </p>
      </motion.div>
    </footer>
  );
}
