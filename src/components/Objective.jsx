"use client";

import { motion } from "framer-motion";

export default function Objective() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            My <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Objective</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Build Scalable Products",
              desc: "I design and develop web applications and AI-powered systems that help businesses automate workflows, reduce costs, and scale efficiently.",
            },
            {
              title: "Deliver Real Results",
              desc: "Every project I take on is focused on delivering measurable outcomes — faster load times, higher conversions, and smarter automation.",
            },
            {
              title: "Continuous Learning",
              desc: "I stay at the forefront of technology by exploring new frameworks, AI models, and development practices to bring the best solutions to every project.",
            },
            {
              title: "Collaborate & Grow",
              desc: "I believe in transparent communication and agile collaboration. Working closely with clients ensures the final product exceeds expectations.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 transition-all"
            >
              <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}