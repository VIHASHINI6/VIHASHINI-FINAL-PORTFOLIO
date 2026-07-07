"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";

const education = [
  {
    degree: "B.E Computer Science Engineering",
    school: "Sri Eshwar College of Engineering",
    period: "2024 – 2028",
    score: "CGPA: 8.04",
    scoreLabel: "Current",
    current: true,
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Subbiah Central School",
    period: "2022 – 2024",
    score: "81%",
    scoreLabel: "Score",
    current: false,
  },
  {
    degree: "SSLC (10th)",
    school: "Subbiah Central School",
    period: "2021 – 2022",
    score: "96%",
    scoreLabel: "Score",
    current: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">Academic journey</p>
          <h2 className="section-title">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600 opacity-30" />

          <div className="space-y-8">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16"
              >
                <div className={`absolute left-3 top-6 w-6 h-6 rounded-full flex items-center justify-center
                  ${e.current ? "bg-gradient-to-br from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50" : "bg-slate-700 border-2 border-purple-500/30"}`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className={`glass-card p-6 hover:bg-white/8 transition-all duration-300 ${e.current ? "border-purple-500/30" : ""}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={16} className="text-purple-400" />
                        <h3 className="font-bold text-white">{e.degree}</h3>
                        {e.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-purple-400 font-semibold">{e.school}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <Calendar size={13} className="text-cyan-400" />
                        {e.period}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 glass rounded-lg">
                        <Star size={12} className="text-yellow-400" />
                        <span className="text-sm font-bold gradient-text">{e.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
