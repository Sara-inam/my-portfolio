"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {


  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const [loading, setLoading] = useState(false);

  // handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.placeholder.includes("Name") ? "name" :
       e.target.placeholder.includes("Email") ? "email" : "message"]: e.target.value
    });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

     if (data.success) {
  setStatus({ type: "success", message: "Message sent successfully " });
  setForm({ name: "", email: "", message: "" });
} else {
  setStatus({ type: "error", message: data.error });
}
    } catch (err) {
  setStatus({ type: "error", message: "Something went wrong" });
}

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black" />

      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-gray-300 to-purple-400 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-gray-400 mt-3 max-w-md mx-auto"
          >
            Have a project in mind? Let’s build something amazing together.
          </motion.p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
         {status && (
  <motion.div
    initial={{ opacity: 0, y: 15, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className={`mt-5 px-5 py-4 rounded-xl border backdrop-blur-md flex items-center gap-3 justify-center text-sm font-medium shadow-lg
      ${
        status.type === "success"
          ? "bg-green-500/10 border-green-400/30 text-green-300"
          : "bg-red-500/10 border-red-400/30 text-red-300"
      }`}
  >
    {/* Icon */}
    {/* <span className="text-lg">
      {status.type === "success" ? "✅" : "⚠️"}
    </span> */}

    {/* Message */}
    <span>{status.message}</span>
  </motion.div>
)}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 outline-none text-white placeholder-gray-400 text-sm sm:text-base transition"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 outline-none text-white placeholder-gray-400 text-sm sm:text-base transition"
            />
          </div>

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            rows="4"
            placeholder="Your Message..."
            required
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none resize-none text-white placeholder-gray-400 text-sm sm:text-base transition"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-white shadow-lg transition-all"
          >
            {loading ? "Sending..." : "Send Message "}
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <span className="text-gray-400 text-sm">
            Or contact directly
          </span>

          <motion.a
            href="https://wa.me/923345540116"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            className="px-6 py-3 bg-green-500/20 border border-green-400/40 rounded-xl text-green-300 hover:bg-green-500/30 hover:text-white text-sm font-medium transition-all flex items-center gap-2"
          >
             WhatsApp Chat
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}