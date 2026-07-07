"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, GitBranch, Link2, Code } from "lucide-react";

const roles = ["Full Stack Developer", "MERN Stack Developer", "CSE Student", "Problem Solver"];

const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "LeetCode Solved", value: "100+" },
  { label: "Hackathons", value: "3+" },
  { label: "Certifications", value: "4+" },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar */}
          <motion.div
            className="w-28 h-28 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center text-5xl font-black text-white shadow-2xl glow-purple"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            V
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-300 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Vihashini K S</span>
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-slate-300 mb-6 h-10">
            <span className="gradient-text">{displayed}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable web applications and innovative solutions through modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary flex items-center gap-2"
            >
              <Code size={18} /> View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="/resume.pdf" download
              className="btn-outline flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-xl glass text-slate-300 font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl font-black gradient-text">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {[
              { icon: GitBranch, href: "https://github.com/vihashini", label: "GitHub" },
              { icon: Link2, href: "https://linkedin.com/in/vihashini", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card hover:bg-purple-500/20 transition-all text-slate-400 hover:text-purple-400"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-purple-400 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
