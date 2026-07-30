"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-white to-rose-50/50" />

      <motion.div
        className="absolute w-72 h-72 bg-pink-100 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-rose-100 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl sm:max-w-2xl bg-white border border-pink-100 shadow-sm shadow-pink-100 rounded-[2rem] p-6 sm:p-8 lg:p-10 relative z-10"
      >
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-pink-600 bg-clip-text text-transparent"
          >
            Let&apos;s Discuss Your <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">Project</span>
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
                btn.classList.add("bg-pink-700");
                form.reset();
                setTimeout(() => {
                  btn.innerText = "Send Message";
                  btn.disabled = false;
                  btn.classList.remove("bg-pink-700");
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
              className="w-full p-4 bg-white border border-pink-100 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 outline-none text-gray-900 placeholder-gray-400 text-sm sm:text-base transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-white border border-pink-100 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 outline-none text-gray-900 placeholder-gray-400 text-sm sm:text-base transition"
            />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell me about your project, timeline, and budget..."
            required
            className="w-full p-4 bg-white border border-pink-100 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 outline-none resize-none text-gray-900 placeholder-gray-400 text-sm sm:text-base transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 rounded-xl font-semibold text-white shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-pink-100 flex flex-col items-center gap-4">
          <span className="text-gray-600 text-sm">
            Or schedule a call to discuss directly
          </span>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/923237834507?text=Hi%20Sara,%20I%20would%20like%20to%20schedule%20a%20strategy%20call.%20My%20preferred%20time%20is:"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-50 border border-pink-200 rounded-xl text-pink-700 hover:bg-pink-100 text-sm font-medium transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.223-.672.223-.2.447-.774.967-.956 1.166-.182.199-.365.298-.671.149a6.23 6.23 0 0 1-1.836-1.135c-.795-.947-1.39-2.132-.782-2.74.49-.48 1.37-.39 1.9.298.53.69 1.39.91 1.79.93.4.02.79-.03 1.14-.153.38-.13.73-.37.99-.66.29-.33.4-.66.39-.99-.01-.33-.04-.66.04-.98.08-.32.25-.61.52-.85.28-.24.63-.38 1.01-.43.38-.05.77.01 1.12.16.35.15.67.38.93.68.26.3.47.66.61 1.06.14.4.22.83.24 1.26.02.43-.02.87-.12 1.30-.2.88-.64 1.73-1.28 2.47-.88 1.01-1.99 1.73-3.22 2.09-.63.18-1.28.27-1.92.25-.64-.02-1.26-.12-1.87-.33-.61-.21-1.18-.52-1.69-.91-.51-.39-.95-.87-1.3-1.41-.35-.54-.6-1.14-.73-1.77-.13-.63-.15-1.28-.04-1.92.11-.64.38-1.26.78-1.8.4-.54.93-1.01 1.54-1.38.61-.37 1.31-.61 2.04-.69.73-.08 1.46.01 2.13.26.67.25 1.26.64 1.72 1.13.46.49.8 1.08 1 1.73.2.65.26 1.35.17 2.05-.09.7-.36 1.37-.78 1.95-.42.58-.99 1.06-1.66 1.39-.67.33-1.42.52-2.17.55-.75.03-1.49-.07-2.17-.31-.68-.24-1.29-.61-1.78-1.08-.49-.47-.87-1.04-1.11-1.67-.24-.63-.33-1.31-.25-2.01.08-.69.33-1.33.73-1.9.39-.57.93-1.04 1.57-1.36.64-.32 1.35-.49 2.07-.49.72 0 1.43.1 2.07.33z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.71 1.32 5.26L2 22l5.74-1.32A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              Schedule Call
            </a>

            <a
              href="https://wa.me/923237834507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-pink-200 rounded-xl text-gray-700 hover:bg-pink-50 text-sm font-medium transition-all"
            >
              Quick Message
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
