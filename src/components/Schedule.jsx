"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const timeSlots = [
  "Monday - 10:00 AM",
  "Wednesday - 2:00 PM",
  "Friday - 11:00 AM",
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50"
    >
      <motion.div
        className="absolute w-80 h-80 bg-purple-100 rounded-full blur-3xl -top-20 left-1/4"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-100 rounded-full blur-3xl -bottom-20 right-1/4"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs sm:text-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Currently accepting new projects
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
            Book A <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">Strategy Call</span>
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
              <span className="w-8 h-8 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 text-sm font-bold">CAL</span>
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
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-pulse" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{slot}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-600 font-medium">Open</span>
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
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">What to expect on the call</h3>
              <ul className="space-y-3">
                {[
                  "Project scoping & requirements analysis",
                  "Technical architecture recommendations",
                  "Timeline & cost estimation",
                  "Q&A on my process and experience",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
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
  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/30 transition-all"
>
  <WhatsAppIcon />
  Schedule via WhatsApp
</a>
              <a
                href="https://wa.me/923237834507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 items-center justify-center gap-2 px-6 py-4 border border-purple-200 bg-white hover:bg-purple-50 rounded-xl text-gray-700 font-medium text-sm transition-all hidden sm:flex"
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
