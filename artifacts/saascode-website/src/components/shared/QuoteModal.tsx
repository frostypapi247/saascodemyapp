import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Phone, Mail, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "Brand Identity",
  "Cloud Hosting",
  "Video Production",
  "E-commerce",
  "Custom Software",
];

const SESSION_KEY = "saascode_quote_modal_dismissed";
const DELAY_MS = 30_000;

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(() => { setOpen(false); }, 2800);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md pointer-events-auto rounded-3xl overflow-hidden"
              onClick={e => e.stopPropagation()}
              style={{
                background: "linear-gradient(135deg, rgba(21,61,171,0.97) 0%, rgba(6,15,34,0.99) 60%, rgba(123,77,255,0.18) 100%)",
                boxShadow: "0 0 0 1px rgba(16,158,244,0.25), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(16,158,244,0.1)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #109EF4, #7B4DFF, #1E56E6)" }} />

              {/* Glow orb */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(16,158,244,0.15) 0%, transparent 70%)" }}
              />

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="h-4 w-4 text-white/70" />
              </button>

              <div className="p-7">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-1.5 bg-brand-primary/20 border border-brand-primary/30 rounded-full px-3 py-1 mb-4">
                        <Sparkles className="h-3 w-3 text-brand-primary" />
                        <span className="text-brand-primary text-xs font-semibold tracking-wide">FREE CONSULTATION</span>
                      </div>

                      <h2 className="text-2xl font-extrabold text-white mb-1 leading-tight">
                        Get a Free Quote<br />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #109EF4, #7B4DFF)" }}>
                          for Your Project
                        </span>
                      </h2>
                      <p className="text-white/50 text-sm mb-6">
                        Tell us what you need — we'll get back within 2 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Name */}
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            className="w-full bg-white/8 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-primary/60 focus:bg-white/12 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <input
                            type="email"
                            required
                            placeholder="Email address"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            className="w-full bg-white/8 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-primary/60 focus:bg-white/12 transition-all"
                          />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                          <input
                            type="tel"
                            placeholder="Phone (optional)"
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            className="w-full bg-white/8 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-primary/60 focus:bg-white/12 transition-all"
                          />
                        </div>

                        {/* Service */}
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none" />
                          <select
                            required
                            value={form.service}
                            onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                            className="w-full bg-white/8 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-primary/60 focus:bg-white/12 transition-all appearance-none"
                            style={{ color: form.service ? "white" : "rgba(255,255,255,0.3)" }}
                          >
                            <option value="" disabled style={{ background: "#0a1930", color: "rgba(255,255,255,0.5)" }}>
                              Select a service
                            </option>
                            {SERVICES.map(s => (
                              <option key={s} value={s} style={{ background: "#0a1930", color: "white" }}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 rounded-xl font-bold text-sm mt-1 flex items-center justify-center gap-2"
                          style={{ background: "linear-gradient(135deg, #109EF4, #1E56E6)", boxShadow: "0 4px 24px rgba(16,158,244,0.35)" }}
                        >
                          <Send className="h-4 w-4" />
                          Send My Request — It's Free
                        </Button>
                      </form>

                      <p className="text-white/25 text-xs text-center mt-4">
                        No spam, no commitment. We'll only contact you about your project.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                        className="h-20 w-20 rounded-full flex items-center justify-center mb-5"
                        style={{ background: "linear-gradient(135deg, #109EF4, #7B4DFF)" }}
                      >
                        <motion.svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-10 w-10"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <motion.path d="M5 13l4 4L19 7" />
                        </motion.svg>
                      </motion.div>
                      <h3 className="text-2xl font-extrabold text-white mb-2">Request Sent!</h3>
                      <p className="text-white/60 text-sm max-w-xs">
                        Thanks, <strong className="text-white">{form.name.split(" ")[0]}</strong>! We've received your request and will reach out within 2 hours.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-brand-primary text-xs font-medium">
                        <Phone className="h-3.5 w-3.5" />
                        <span>+263 779 067 012</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
