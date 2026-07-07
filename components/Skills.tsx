"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    color: "from-purple-600 to-violet-600",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Technologies",
    color: "from-blue-600 to-indigo-600",
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "Spring Boot", "Flask"],
  },
  {
    category: "Databases",
    color: "from-cyan-600 to-teal-600",
    skills: ["MongoDB", "MySQL", "SQL"],
  },
  {
    category: "Tools & Platforms",
    color: "from-pink-600 to-rose-600",
    skills: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "Power BI", "Jupyter Notebook", "MySQL Workbench", "Google Colab"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15 }}
              className="glass-card p-6 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="font-bold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.15 + si * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium glass border border-white/10
                      hover:border-purple-500/50 hover:text-white text-slate-300 cursor-default transition-all`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
