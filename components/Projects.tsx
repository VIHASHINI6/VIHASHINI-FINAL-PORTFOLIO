"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Tag } from "lucide-react";

const projects = [
  {
    title: "Maruthuvan",
    category: "Healthcare",
    desc: "A unified digital healthcare platform connecting government hospitals, doctors, and patients into a secure ecosystem for digital health records, emergency support, and seamless consultations.",
    tech: ["React", "Node.js", "Next.js", "Tailwind CSS", "MongoDB"],
    features: ["Digital health records", "Doctor-patient connectivity", "Emergency support", "Secure medical data"],
    color: "from-purple-600 to-blue-600",
    github: "#",
    live: "#",
  },
  {
    title: "EventHub",
    category: "Management",
    desc: "Full-stack event management platform with role-based authentication, event registration, attendee tracking, analytics dashboard, and RESTful APIs.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Axios"],
    features: ["Event creation", "Registration management", "Analytics dashboard", "Admin & member roles"],
    color: "from-blue-600 to-cyan-600",
    github: "#",
    live: "#",
  },
  {
    title: "Survex",
    category: "Sustainability",
    desc: "A sustainability-focused campus platform encouraging eco-friendly activities such as tree planting and watering through a task-based engagement system.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    features: ["Sustainability tracking", "Task management", "Student participation", "Environmental dashboard"],
    color: "from-cyan-600 to-teal-600",
    github: "#",
    live: "#",
  },
];

const categories = ["All", "Healthcare", "Management", "Sustainability"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">What I&apos;ve built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                  : "glass text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
              >
                {/* Header gradient */}
                <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1 mb-1">
                        <Tag size={10} /> {p.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">{p.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <a href={p.github} className="p-2 glass rounded-lg hover:bg-purple-500/20 transition-all text-slate-400 hover:text-purple-400">
                        <GitBranch size={16} />
                      </a>
                      <a href={p.live} className="p-2 glass rounded-lg hover:bg-cyan-500/20 transition-all text-slate-400 hover:text-cyan-400">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>

                  <ul className="space-y-1 mb-4 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-xs glass text-cyan-300 border border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
