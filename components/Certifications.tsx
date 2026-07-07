"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Mastering Data Structures & Algorithms in C and C++", issuer: "Udemy", color: "from-purple-600 to-violet-600" },
  { title: "Java Basic Completion", issuer: "Oracle", color: "from-red-600 to-orange-600" },
  { title: "SQL Basic & Intermediate", issuer: "HackerRank", color: "from-green-600 to-teal-600" },
  { title: "Full Stack Web Development", issuer: "Udemy", color: "from-blue-600 to-cyan-600" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex items-start gap-4 group hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                <Award size={22} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-sm leading-snug mb-1">{c.title}</h3>
                <p className="text-xs text-purple-400 font-semibold">{c.issuer}</p>
              </div>
              <ExternalLink size={14} className="text-slate-600 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
