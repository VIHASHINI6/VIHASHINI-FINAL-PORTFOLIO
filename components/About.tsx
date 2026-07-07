"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Brain, Rocket } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "CSE Student", desc: "Sri Eshwar College of Engineering, 2024–2028 | CGPA: 8.04" },
  { icon: Code2, title: "Full Stack Dev", desc: "MERN Stack specialist building end-to-end web applications" },
  { icon: Brain, title: "Problem Solver", desc: "100+ LeetCode problems | Strong DSA & algorithms foundation" },
  { icon: Rocket, title: "Innovator", desc: "Hackathon finalist with real-world impactful projects" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate about building the <span className="gradient-text">future of web</span>
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m a Computer Science Engineering student at{" "}
                  <span className="text-purple-400 font-semibold">Sri Eshwar College of Engineering</span> (2024–2028),
                  deeply passionate about Full Stack Development, Web Technologies, and Problem Solving.
                </p>
                <p>
                  With a strong foundation in{" "}
                  <span className="text-cyan-400">Data Structures, Algorithms, DBMS, OOPs,</span> and{" "}
                  <span className="text-cyan-400">Computer Networks</span>, I love turning complex problems into
                  elegant, scalable solutions.
                </p>
                <p>
                  I&apos;ve built healthcare platforms, event management systems, and sustainability apps — always
                  aiming for clean code, great UX, and real-world impact.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["MERN Stack", "Next.js", "TypeScript", "Problem Solving", "System Design"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs glass text-purple-300 border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 hover:bg-white/10 transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <h.icon size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{h.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
