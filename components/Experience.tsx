"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">Work history</p>
          <h2 className="section-title">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative pl-8 border-l-2 border-purple-500/30"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>

          <div className="glass-card p-8 hover:bg-white/8 transition-all duration-300 group">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-purple-400" />
                  <h3 className="text-xl font-bold text-white">MERN Stack Development Intern</h3>
                </div>
                <p className="text-purple-400 font-semibold text-lg">AlgoTutor</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-slate-400">
                <Calendar size={14} className="text-cyan-400" />
                December 2025
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Developed a full-featured Movie Booking System from scratch",
                "Worked with MongoDB, Express.js, React, Node.js (MERN Stack)",
                "Integrated Flowise for AI-powered workflow automation",
                "Built and tested RESTful API endpoints for booking management",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                  <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["MongoDB", "Express.js", "React", "Node.js", "Flowise", "REST APIs"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg text-xs glass text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
