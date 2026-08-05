"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    name: "WhatsApp",
    desc: "Chat directly for quick questions or project discussions",
    url: "https://wa.me/923237834507",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.223-.672.223-.2.447-.774.967-.956 1.166-.182.199-.365.298-.671.149a6.23 6.23 0 0 1-1.836-1.135c-.795-.947-1.39-2.132-.782-2.74.49-.48 1.37-.39 1.9.298.53.69 1.39.91 1.79.93.4.02.79-.03 1.14-.153.38-.13.73-.37.99-.66.29-.33.4-.66.39-.99-.01-.33-.04-.66.04-.98.08-.32.25-.61.52-.85.28-.24.63-.38 1.01-.43.38-.05.77.01 1.12.16.35.15.67.38.93.68.26.3.47.66.61 1.06.14.4.22.83.24 1.26.02.43-.02.87-.12 1.30-.2.88-.64 1.73-1.28 2.47-.88 1.01-1.99 1.73-3.22 2.09-.63.18-1.28.27-1.92.25-.64-.02-1.26-.12-1.87-.33-.61-.21-1.18-.52-1.69-.91-.51-.39-.95-.87-1.3-1.41-.35-.54-.6-1.14-.73-1.77-.13-.63-.15-1.28-.04-1.92.11-.64.38-1.26.78-1.8.4-.54.93-1.01 1.54-1.38.61-.37 1.31-.61 2.04-.69.73-.08 1.46.01 2.13.26.67.25 1.26.64 1.72 1.13.46.49.8 1.08 1 1.73.2.65.26 1.35.17 2.05-.09.7-.36 1.37-.78 1.95-.42.58-.99 1.06-1.66 1.39-.67.33-1.42.52-2.17.55-.75.03-1.49-.07-2.17-.31-.68-.24-1.29-.61-1.78-1.08-.49-.47-.87-1.04-1.11-1.67-.24-.63-.33-1.31-.25-2.01.08-.69.33-1.33.73-1.9.39-.57.93-1.04 1.57-1.36.64-.32 1.35-.49 2.07-.49.72 0 1.43.1 2.07.33z" />
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.71 1.32 5.26L2 22l5.74-1.32A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    desc: "View source code and open source projects",
    url: "https://github.com/Sara-inam",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-800">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    desc: "Professional network and project updates",
    url: "https://www.linkedin.com/in/sara-inam-03a460262/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.91 20.45H3.77V9h3.14v11.45z" />
      </svg>
    ),
  },
];

export default function SocialMediaProfiles() {
  return (
    <section className="relative py-16 sm:py-20 bg-purple-50/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Connect <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Socially</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all text-center"
            >
              <span className="mb-3">{s.icon}</span>
              <h4 className="text-base font-bold text-gray-900">{s.name}</h4>
              <p className="text-gray-500 text-xs mt-2">{s.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}