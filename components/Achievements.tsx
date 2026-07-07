"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Users, Code2 } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Adya AI Hack-N-Thon", desc: "Secured Second Place in AI-focused hackathon", color: "from-yellow-500 to-orange-500", badge: "🥈 2nd Place" },
  { icon: Medal, title: "Hacksprint 2.0", desc: "Selected as Finalist in competitive hackathon", color: "from-purple-500 to-blue-500", badge: "🏆 Finalist" },
  { icon: Star, title: "Self-E Hackathon", desc: "Finalist in intra-college hackathon", color: "from-blue-500 to-cyan-500", badge: "⭐ Finalist" },
  { icon: Users, title: "Member of MUN", desc: "Active participant in Model United Nations", color: "from-cyan-500 to-teal-500", badge: "🌍 MUN" },
  { icon: Code2, title: "LeetCode Warrior", desc: "Solved 100+ problems across various difficulty levels", color: "from-orange-500 to-red-500", badge: "💻 100+ Solved" },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">Recognition</p>
          <h2 className="section-title">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 group cursor-default hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <a.icon size={22} className="text-white" />
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full glass text-slate-300 mb-3 inline-block">
                {a.badge}
              </span>
              <h3 className="font-bold text-white mb-2">{a.title}</h3>
              <p className="text-sm text-slate-400">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
