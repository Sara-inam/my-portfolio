"use client";

import { motion } from "framer-motion";

const timeSlots = [
  "Monday - 10:00 AM",
  "Wednesday - 2:00 PM",
  "Friday - 11:00 AM",
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-pink-50/50 via-white to-rose-50/50"
    >
      <motion.div
        className="absolute w-80 h-80 bg-pink-100 rounded-full blur-3xl -top-20 left-1/4"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-rose-100 rounded-full blur-3xl -bottom-20 right-1/4"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-xs sm:text-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            Currently accepting new projects
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
            Book A <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">Strategy Call</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Not sure where to start? Let&apos;s discuss your project requirements, technical roadmap, and how I can help you achieve your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 text-sm font-bold">CAL</span>
              Weekly Availability
            </h3>

            <div className="space-y-3">
              {timeSlots.map((slot, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-pink-100 hover:border-pink-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500 group-hover:animate-pulse" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{slot}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-medium">Open</span>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-500 text-xs sm:text-sm">
              * Can&apos;t make these times? Message me with your preferred slot and I&apos;ll do my best to accommodate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-pink-100 shadow-sm shadow-pink-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">What to expect on the call</h3>
              <ul className="space-y-3">
                {[
                  "Project scoping & requirements analysis",
                  "Technical architecture recommendations",
                  "Timeline & cost estimation",
                  "Q&A on my process and experience",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923237834507?text=Hi%20Sara,%20I%20would%20like%20to%20schedule%20a%20strategy%20call.%20My%20preferred%20time%20is:"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.223-.672.223-.2.447-.774.967-.956 1.166-.182.199-.365.298-.671.149a6.23 6.23 0 0 1-1.836-1.135c-.795-.947-1.39-2.132-.782-2.74.49-.48 1.37-.39 1.9.298.53.69 1.39.91 1.79.93.4.02.79-.03 1.14-.153.38-.13.73-.37.99-.66.29-.33.4-.66.39-.99-.01-.33-.04-.66.04-.98.08-.32.25-.61.52-.85.28-.24.63-.38 1.01-.43.38-.05.77.01 1.12.16.35.15.67.38.93.68.26.3.47.66.61 1.06.14.4.22.83.24 1.26.02.43-.02.87-.12 1.30-.2.88-.64 1.73-1.28 2.47-.88 1.01-1.99 1.73-3.22 2.09-.63.18-1.28.27-1.92.25-.64-.02-1.26-.12-1.87-.33-.61-.21-1.18-.52-1.69-.91-.51-.39-.95-.87-1.3-1.41-.35-.54-.6-1.14-.73-1.77-.13-.63-.15-1.28-.04-1.92.11-.64.38-1.26.78-1.8.4-.54.93-1.01 1.54-1.38.61-.37 1.31-.61 2.04-.69.73-.08 1.46.01 2.13.26.67.25 1.26.64 1.72 1.13.46.49.8 1.08 1 1.73.2.65.26 1.35.17 2.05-.09.7-.36 1.37-.78 1.95-.42.58-.99 1.06-1.66 1.39-.67.33-1.42.52-2.17.55-.75.03-1.49-.07-2.17-.31-.68-.24-1.29-.61-1.78-1.08-.49-.47-.87-1.04-1.11-1.67-.24-.63-.33-1.31-.25-2.01.08-.69.33-1.33.73-1.9.39-.57.93-1.04 1.57-1.36.64-.32 1.35-.49 2.07-.49.72 0 1.43.1 2.07.33z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.71 1.32 5.26L2 22l5.74-1.32A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Schedule via WhatsApp
              </a>
              <a
                href="https://wa.me/923237834507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 items-center justify-center gap-2 px-6 py-4 border border-pink-200 bg-white hover:bg-pink-50 rounded-xl text-gray-700 font-medium text-sm transition-all hidden sm:flex"
              >
                Quick Chat Instead
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
