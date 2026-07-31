"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/skills", label: "Skills" },
    { id: "/projects", label: "Projects" },
    { id: "/services", label: "Services" },
    { id: "/process", label: "Process" },
    { id: "/education", label: "Education" },
    { id: "/resume", label: "Resume" },
    { id: "/schedule", label: "Schedule" },
    { id: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-purple-700 tracking-wide">
            &lt;/&gt;
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-purple-50/80 px-2 py-2 rounded-full border border-purple-100">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.id
                    ? "text-white bg-gradient-to-r from-purple-600 to-purple-500 shadow-md"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 bg-white/95 backdrop-blur-xl border-t border-purple-100">
          <div className="flex flex-col items-center gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`w-full py-3 rounded-2xl text-center font-medium transition-all duration-300 ${
                  pathname === item.id
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg"
                    : "text-gray-700 bg-purple-50/80 hover:bg-purple-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}