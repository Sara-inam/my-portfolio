"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Building AI-Powered Web Apps with Next.js and OpenAI",
    date: "June 2025",
    desc: "How I integrated LLM APIs into a Next.js frontend to build intelligent chat interfaces with real-time responses.",
    likes: 42,
    comments: 8,
  },
  {
    title: "From Zero to Production: My ML Stock Prediction Pipeline",
    date: "May 2025",
    desc: "A walkthrough of building an end-to-end ML pipeline for stock price forecasting using Python, Flask, and Scikit-learn.",
    likes: 38,
    comments: 12,
  },
  {
    title: "Why I Chose Lahore as My Development Hub",
    date: "April 2025",
    desc: "Sharing my experience building a freelance career from Lahore and the opportunities the tech ecosystem offers.",
    likes: 56,
    comments: 15,
  },
];

export default function LinkedInPosts() {
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
            Latest <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Posts</span>
          </h3>
          <p className="text-gray-600 mt-2 text-sm">Trending content from my LinkedIn profile</p>
        </motion.div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-base font-bold text-gray-900">{post.title}</h4>
                <span className="text-xs text-gray-400 shrink-0 ml-3">{post.date}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{post.desc}</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}