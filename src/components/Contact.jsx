"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50" />

      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl sm:max-w-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 rounded-[2rem] p-6 sm:p-8 lg:p-10 relative z-10"
      >
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-purple-600 bg-clip-text text-transparent"
          >
            Let&apos;s Discuss Your <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-gray-600 mt-3 max-w-md mx-auto"
          >
            Share your project details and I&apos;ll get back to you within 24 hours with a tailored proposal.
          </motion.p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) return;

            const btn = form.querySelector("button[type='submit']");
            btn.disabled = true;
            btn.innerText = "Sending...";

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
              });
              const data = await res.json();
              if (data.success) {
                btn.innerText = "Message Sent";
                btn.classList.add("bg-purple-700");
                form.reset();
                setTimeout(() => {
                  btn.innerText = "Send Message";
                  btn.disabled = false;
                  btn.classList.remove("bg-purple-700");
                }, 3000);
              } else {
                btn.innerText = "Send Message";
                btn.disabled = false;
              }
            } catch {
              btn.innerText = "Send Message";
              btn.disabled = false;
            }
          }}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-white border border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none text-gray-900 placeholder-gray-400 text-sm sm:text-base transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-white border border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none text-gray-900 placeholder-gray-400 text-sm sm:text-base transition"
            />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell me about your project, timeline, and budget..."
            required
            className="w-full p-4 bg-white border border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none resize-none text-gray-900 placeholder-gray-400 text-sm sm:text-base transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl font-semibold text-white shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col items-center gap-4">
          <span className="text-gray-600 text-sm">
            Or schedule a call to discuss directly
          </span>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
             href="https://wa.me/923237834507?text=Hi%20Sara,%20I%20would%20like%20to%20schedule%20a%20strategy%20call.%20My%20preferred%20time%20is:"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-50 border border-purple-200 rounded-xl text-purple-700 hover:bg-purple-100 text-sm font-medium transition-all"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.22-8.24 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z"/>
  </svg>
  Schedule Call
</a>

            <a
              href="https://wa.me/923237834507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-purple-200 rounded-xl text-gray-700 hover:bg-purple-50 text-sm font-medium transition-all"
            >
              Quick Message
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
