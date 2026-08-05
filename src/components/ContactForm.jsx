"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
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
            Contact <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Us</span>
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
      </motion.div>
    </section>
  );
}