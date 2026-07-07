"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Link2, GitBranch, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "vihashini.ks2024cse@sece.ac.in", href: "mailto:vihashini.ks2024cse@sece.ac.in" },
  { icon: Phone, label: "Phone", value: "+91 9629476644", href: "tel:+919629476644" },
  { icon: Link2, label: "LinkedIn", value: "linkedin.com/in/vihashini", href: "https://linkedin.com/in/vihashini" },
  { icon: GitBranch, label: "GitHub", value: "github.com/vihashini", href: "https://github.com/vihashini" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold mb-2 tracking-widest text-sm uppercase">Let&apos;s connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-3" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Open to internships, collaborations, and exciting opportunities. Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{c.label}</p>
                  <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl glass bg-white/5 text-white placeholder-slate-600 outline-none
                      border transition-all focus:border-purple-500 focus:bg-white/8
                      ${errors[f.key] ? "border-red-500/50" : "border-white/10"}`}
                  />
                  {errors[f.key] && <p className="text-red-400 text-xs mt-1">{errors[f.key]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl glass bg-white/5 text-white placeholder-slate-600 outline-none
                    border transition-all focus:border-purple-500 focus:bg-white/8 resize-none
                    ${errors.message ? "border-red-500/50" : "border-white/10"}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {sent ? (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
