"use client";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, Code2, Heart } from "lucide-react";

const socials = [
  { icon: GitBranch, href: "https://github.com/vihashini", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com/in/vihashini", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vihashini.ks2024cse@sece.ac.in", label: "Email" },
];

const navLinks = ["About", "Skills", "Projects", "Experience", "Achievements", "Education", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-black text-xl gradient-text mb-3">
              <Code2 size={22} className="text-purple-400" />
              Vihashini K S
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full Stack Developer & CSE Student building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="text-left text-sm text-slate-500 hover:text-purple-400 transition-colors py-0.5"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 glass-card hover:bg-purple-500/20 transition-all text-slate-400 hover:text-purple-400"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Vihashini K S. Made with <Heart size={13} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
          <p className="text-slate-700 text-xs">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
