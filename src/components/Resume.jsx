"use client";

import { motion } from "framer-motion";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sara_Inam_Resume.pdf";
    link.download = "Sara_Inam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
            Resume & <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Download my full resume to review my experience, technical skills, and project portfolio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-white border border-pink-100 shadow-sm shadow-pink-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">Sara Inam</h3>
                  <p className="text-pink-600 font-semibold mt-1">Full Stack & AI/ML Developer</p>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/30 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-black text-white">SI</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Lahore, Pakistan
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  sarainam60@gmail.com
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  03237834507
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  linkedin.com/in/sara-inam-03a460262
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  github.com/Sara-inam
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                  Professional Summary
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Highly motivated Full Stack Developer and AI/ML Enthusiast with a strong foundation in building scalable web applications and intelligent systems. Proficient in Python (FastAPI, Flask), JavaScript (Next.js, React), and Database Management (PostgreSQL, MongoDB).
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-rose-500 rounded-full inline-block" />
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full Stack Web",
                    "AI / ML",
                    "React & Next.js",
                    "Python FastAPI & Flask",
                    "LLM Integration",
                    "MERN Stack",
                    "MongoDB & PostgreSQL",
                    "Django",
                    "REST APIs",
                    "Mobile-Ready Web Apps",
                    "Vercel",
                    "Tailwind CSS",
                    "Git / GitHub",
                    "Supabase",
                    "NLP",
                  ].map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-pink-500 rounded-full inline-block" />
                  Selected Projects
                </h4>
                <ul className="space-y-2">
                  {[
                    "College LMS — Full-stack LMS with student, teacher, and admin panels (React, Django, PostgreSQL)",
                    "AI Notepad — Voice-to-text with AI-generated summaries (React, FastAPI, Vosk, Gemini AI)",
                    "AI Stock Price Prediction — Forecasting system with real-time data (Python, Flask, Scikit-learn)",
                    "Heart Disease Risk Prediction — Real-time risk scoring app (Python, Flask, Logistic Regression)",
                    "Health Assistant AI Chatbot — LLM-powered conversational assistant (Flask, OpenAI API, NLP)",
                    "Ecommerce Web App — Full-stack storefront with cart and custom APIs (Next.js, React, MongoDB)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 bg-pink-50/50 border-t lg:border-t-0 lg:border-l border-pink-100 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-6">Experience</h4>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-pink-200">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
                    <h5 className="text-gray-900 font-semibold text-sm">AI and ML Engineer</h5>
                    <p className="text-gray-600 text-xs mt-0.5">Developers Hub Corporation (Remote)</p>
                    <p className="text-pink-600 text-xs mt-1 font-medium">04/2026 – Present</p>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                      Engineered embedding-based prediction systems using LLM-based approaches. Developed dynamic prompt-based APIs and order similarity search via vector embeddings.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-rose-200">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-rose-500 shadow-lg shadow-rose-500/50" />
                    <h5 className="text-gray-900 font-semibold text-sm">AI Engineer | Full Stack Developer</h5>
                    <p className="text-gray-600 text-xs mt-0.5">Techling (Private) Limited, Lahore</p>
                    <p className="text-rose-500 text-xs mt-1 font-medium">03/2025 – 03/2026 (1 Year)</p>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                      Built full-stack web applications, integrated AI features, and delivered business-ready digital products for clients.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Education</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-900 text-sm font-medium">BS Information Technology</p>
                      <p className="text-gray-600 text-xs">Govt. Graduate Civil Lines College, Lahore</p>
                      <p className="text-pink-600 text-xs">CGPA: 3.59 | 2022 – 2025</p>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-medium">FSc Pre-Engineering</p>
                      <p className="text-gray-600 text-xs">Govt. Women College, Lahore</p>
                      <p className="text-pink-600 text-xs">Marks: 998/1100 | 2020 – 2022</p>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-medium">Matriculation (Computer Science)</p>
                      <p className="text-gray-600 text-xs">Dar-ul-Islam School</p>
                      <p className="text-pink-600 text-xs">Marks: 996/1100 | 2018 – 2020</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-pink-100">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-pink-500/30 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  Download Resume (PDF)
                </button>
                <p className="text-gray-500 text-xs text-center mt-3">
                  Updated for 2026 • PDF format
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
