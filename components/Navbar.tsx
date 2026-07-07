"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { useTheme } from "next-themes";

const links = ["About", "Skills", "Projects", "Experience", "Achievements", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10 shadow-lg shadow-purple-500/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <motion.button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 font-black text-xl gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 size={24} className="text-purple-400" />
          Vihashini
        </motion.button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-2 rounded-lg glass hover:bg-white/10 transition-all"
          >
            {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-purple-400" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg glass">
            {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-purple-400" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-lg glass">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="block w-full text-left px-6 py-3 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
