"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "College LMS (Learning Management System)",
    desc: "A full-stack LMS platform built to digitize academic workflows for students, teachers, and admins. Delivered role-based dashboards, course management, attendance tracking, and automated grading—cutting manual admin work by ~40%.",
    image: "/projects/LMS.png",
    live: "",
    code: "https://github.com/sarainam-bsit/College_LMS_FYP_Project.git",
    tech: "React, Django, REST API, Bootstrap, PostgreSQL",
    outcome: "Role-based automation, reduced manual work",
  },
  {
    title: "Ecommerce Web App (Next.js + API)",
    desc: "A full-stack commerce platform with product discovery, real-time cart, and custom checkout flow. Built to replace static storefronts with a fast, conversion-focused shopping experience.",
    image: "/projects/eco.png",
    live: "https://razia-ecommerce-web-app-vjk8.vercel.app",
    code: "https://github.com/Sara-inam/Razia_Ecommerce_Web_App.git",
    tech: "Next.js, React, API Routes, MongoDB, Tailwind CSS",
    outcome: "Fast storefront + scalable order management",
  },
  {
    title: "AI Notepad (Voice to Text + Summarizer)",
    desc: "An AI-powered notepad that converts voice into text and auto-summarizes note content. Built with Flask + React to help users capture ideas 3× faster than manual writing.",
    image: "/projects/notepad.png",
    live: "",
    code: "https://github.com/Sara-inam/python-fast-api-notepad.git",
    tech: "React.js, Python Fast API, Vosk, Gemini AI, PostgreSQL",
    outcome: "Faster note capture + intelligent summaries",
  },
  {
    title: "Employee Management System (MERN)",
    desc: "A full-featured employee management system with authentication, CRUD controls, and an admin dashboard. Built to replace spreadsheets and give teams real-time visibility into HR data.",
    image: "/projects/EMS.png",
    live: "https://ems-frontend-murex.vercel.app",
    code: "https://github.com/Sara-inam/employee_management_system.git",
    tech: "React, Express.js, Node.js, MongoDB",
    outcome: "Automated HR workflows + secure access control",
  },
  {
    title: "Employee Management System (Next.js)",
    desc: "A follow-up EMS rebuilt with Next.js API routes and server-side capabilities for faster performance, better auth flows, and easier scaling for growing teams.",
    image: "/projects/EMS.png",
    live: "https://ems-frontend-murex.vercel.app",
    code: "https://github.com/Sara-inam/EMS_PROJECT_NEXT.JS.git",
    tech: "React, Next.js, API Routes, MongoDB",
    outcome: "Improved speed + server-rendered reliability",
  },
  {
    title: "Allied Axis — Business Website",
    desc: "A premium, responsive business website for a corporate client. Optimized for speed, accessibility, and brand presence—helping the company project a modern, trustworthy digital identity.",
    image: "/projects/allied-axis.PNG",
    live: "https://sara-allied-axis.vercel.app/",
    code: "https://github.com/Sara-inam/AlliedAxis.git",
    tech: "Next.js, React, API Routes, Tailwind CSS",
    outcome: "Stronger brand presence + faster page loads",
  },
  {
    title: "AI Stock Price Prediction System",
    desc: "A machine learning application that forecasts stock trends using Linear Regression and Random Forest models trained on Yahoo Finance data. Delivers real-time predictions through an interactive dashboard—enabling data-driven investment decisions.",
    image: "/projects/stock-prediction.png",
    live: "",
    code: "https://github.com/Sara-inam/DeveloperHub-Coperation/tree/main/stock-price-prediction",
    tech: "Python, Flask, Scikit-learn, Pandas, NumPy, Yahoo Finance API, ML, HTML, CSS, JavaScript",
    outcome: "Data-driven decision support via forecasting",
  },
  {
    title: "Heart Disease Risk Prediction (AI Web App)",
    desc: "A full-stack ML web app that predicts heart disease risk from 13 medical parameters using Logistic Regression. Provides a medically interpretable risk score and probability breakdown in a clean, patient-friendly interface.",
    image: "/projects/heart-disease.png",
    live: "",
    code: "https://github.com/Sara-inam/DeveloperHub-Coperation/tree/main/heart-disease-prediction",
    tech: "Python, Flask, Scikit-learn, Logistic Regression, NumPy, Pandas, Flask-CORS",
    outcome: "Instant risk scoring + transparent predictions",
  },
  {
    title: "Health Assistant AI Chatbot (LLM Powered)",
    desc: "A conversational AI assistant powered by OpenAI, integrated with Flask backend and a dynamic frontend. Features real-time chat, safety filtering, and a scalable API layer—ready for production healthcare assistant use cases.",
    image: "/projects/health-chatbot.png",
    live: "",
    code: "https://github.com/Sara-inam/DeveloperHub-Coperation/tree/main/health-chatbot",
    tech: "Python, Flask, OpenAI API, LLM Integration, Flask-CORS, JavaScript, HTML, CSS, NLP",
    outcome: "24/7 automated patient query handling",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white"
    >
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-100 rounded-full blur-3xl top-10 left-5 sm:left-10" />
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-100 rounded-full blur-3xl bottom-10 right-5 sm:right-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-3 text-gray-900"
        >
          Selected <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <p className="text-gray-600 text-sm sm:text-base text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          Work that delivered real value for businesses and end-users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-purple-100 shadow-sm shadow-purple-100 transition-all duration-300 hover:shadow-md hover:shadow-purple-200"
            >
              <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden bg-purple-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/80 via-purple-50/40 to-transparent opacity-80 pointer-events-none" />

                <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-purple-600 rounded-lg text-white text-xs sm:text-sm hover:scale-105 transition"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="px-3 sm:px-4 py-2 text-xs sm:text-sm ">
                    </span>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm text-white font-semibold bg-gradient-to-r from-gray-800 to-gray-900 border border-white/20 shadow-lg shadow-black/40 hover:scale-110 hover:shadow-purple-500/30 hover:border-purple-500 transition-all duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-2">
                  {p.desc}
                </p>

                {p.outcome && (
                  <p className="text-[11px] sm:text-xs text-purple-600 mt-2 font-medium flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    {p.outcome}
                  </p>
                )}

                {p.tech && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.split(",").map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs px-2 py-1 bg-purple-50 border border-purple-100 rounded-full text-purple-700"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-purple-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 blur-xl transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
