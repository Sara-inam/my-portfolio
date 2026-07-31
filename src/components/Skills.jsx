"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    desc: "Building responsive, accessible, and performant user interfaces with modern frameworks and design systems.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Flutter", "Tailwind CSS", "Bootstrap", "PWA", "Mobile UI"],
  },
  {
    category: "Backend",
    desc: "Designing scalable APIs, databases, and cloud infrastructure that power production applications.",
    skills: ["Node.js", "Express.js", "Python", "Django", "Flask", "FastAPI", "PHP", "Laravel", "Java", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis", "Supabase", "Docker", "Git", "CI/CD", "Vercel", "Netlify", "Heroku", "AWS"],
  },
  {
    category: "AI / ML",
    desc: "Engineering intelligent systems, predictive models, and LLM-powered automation for real-world use cases.",
    skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "NLP", "OpenAI API", "LLM Integration", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "TensorFlow", "PyTorch"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white"
    >
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl top-10 left-5 sm:left-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-100 rounded-full blur-3xl bottom-10 right-5 sm:right-10"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
            <span className="block">Technologies</span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 bg-clip-text text-transparent">
              That Power Solutions
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Organised by discipline so you can see exactly where I deliver value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-sm shadow-purple-100 hover:shadow-md hover:shadow-purple-200 hover:border-purple-200 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full tracking-wider uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {group.category}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs mb-5 leading-relaxed">
                  {group.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-gray-700 group-hover:border-purple-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
