"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "schedule", label: "Book Call" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">

      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo (Updated) */}
        <h1 className="text-xl font-semibold text-blue-500 tracking-wide">
          Sara.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 px-2 py-2 rounded-full border border-white/10">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* Active Background */}
              {active === item.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70"></span>
              )}

              <span className="relative z-10">{item.label}</span>
            </button>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3 py-6 bg-black/90 backdrop-blur-2xl border-t border-white/10">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-4/5 py-3 rounded-full text-base transition ${
                active === item.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-400 bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}

        </div>
      </div>

    </nav>
  );
}