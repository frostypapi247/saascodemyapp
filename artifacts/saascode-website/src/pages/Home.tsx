import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe, Smartphone, Megaphone, Server, Palette, Video,
  Star, ChevronDown, ChevronUp, ArrowRight, Code, Cloud,
  BarChart2, Shield, Zap, Users, CheckCircle, TrendingUp
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { value: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 5, suffix: "+", label: "Years Experience", icon: TrendingUp },
  { value: 24, suffix: "/7", label: "Support", icon: Shield },
];

const services = [
  { icon: Video, title: "Video & Reels", desc: "Professional video production optimized for Instagram, TikTok, and more.", color: "from-pink-500 to-rose-600" },
  { icon: Palette, title: "Graphic Design", desc: "Premium visuals for print and digital that make your brand unforgettable.", color: "from-purple-500 to-violet-600" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven campaigns that maximize ROI and grow your audience.", color: "from-orange-500 to-amber-600" },
  { icon: Server, title: "Hosting & Email", desc: "Reliable, fast hosting with professional business email solutions.", color: "from-green-500 to-emerald-600" },
  { icon: Globe, title: "Website Development", desc: "Custom websites built to convert visitors into loyal customers.", color: "from-blue-500 to-cyan-600" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS & Android apps built for performance and scale.", color: "from-indigo-500 to-blue-600" },
];

const testimonials = [
  { name: "Tatenda Moyo", company: "TechCorp Zimbabwe", rating: 5, text: "Saascode transformed our online presence completely. The website they built has doubled our leads in just three months." },
  { name: "Rudo Chikwanda", company: "FarmLink Africa", rating: 5, text: "Their mobile app development team is world-class. The app launched on time and our users love it." },
  { name: "James Mutasa", company: "RetailPro Group", rating: 5, text: "The digital marketing campaign they ran for us delivered a 340% ROI. Exceptional work and professionalism." },
  { name: "Grace Sibanda", company: "HealthPlus Clinics", rating: 5, text: "From design to deployment, the Saascode team exceeded every expectation. Highly recommended for enterprise projects." },
  { name: "Farai Zvimba", company: "MinBank Financial", rating: 5, text: "Professional, responsive, and technically excellent. Our brand identity has never looked better." },
  { name: "Chido Matsika", company: "EduTech Academy", rating: 5, text: "Their e-learning platform transformed our business. Students and instructors love the intuitive interface." },
];

const faqs = [
  { q: "What industries do you serve?", a: "We serve startups, SMEs, corporates, and enterprises across all industries including finance, healthcare, retail, agriculture, education, and government." },
  { q: "How long does a website project take?", a: "A standard business website takes 2–4 weeks. Complex e-commerce or enterprise platforms may take 6–12 weeks depending on scope and requirements." },
  { q: "Do you offer ongoing support?", a: "Yes, all our packages include post-launch support. We offer 24/7 technical support, regular updates, and maintenance plans tailored to your needs." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We specialize in website redesigns that improve user experience, performance, and conversion rates while preserving your brand identity." },
  { q: "What payment methods do you accept?", a: "We accept bank transfers, mobile money (EcoCash, OneMoney), and international payment methods. We work with both local and international clients." },
  { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans for larger projects. Typically 50% upfront and 50% on delivery, with options for monthly installments on long-term contracts." },
];

const blogPosts = [
  { tag: "Web Development", title: "10 Essential Features Every Business Website Needs in 2026", date: "June 15, 2026", read: "5 min" },
  { tag: "Digital Marketing", title: "How AI is Revolutionizing Digital Marketing for African Businesses", date: "June 8, 2026", read: "7 min" },
  { tag: "Mobile Apps", title: "React Native vs Flutter: Which Should You Choose for Your Next App?", date: "June 1, 2026", read: "6 min" },
];

const WORDS = ["Websites", "Mobile Apps", "Digital Marketing", "Brand Identity", "Cloud Hosting", "Video Content"];

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.15,
}));

const METEORS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: Math.random() * 60,
  left: Math.random() * 100,
  duration: 1.5 + Math.random() * 2,
  delay: i * 1.8 + Math.random() * 3,
}));

const ORBS = [
  { w: 700, h: 700, top: -200, right: -200, from: "#109EF4", to: "#1E56E6", dur: 12, delay: 0 },
  { w: 600, h: 600, bottom: -150, left: -150, from: "#7B4DFF", to: "#153DAB", dur: 16, delay: 3 },
  { w: 400, h: 400, top: "40%", left: "30%", from: "#1E56E6", to: "#7B4DFF", dur: 10, delay: 6 },
];

function HeroCinematic() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = WORDS[wordIndex];
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setWordIndex((p) => (p + 1) % WORDS.length);
        setTyping(true);
        return;
      }
    }
  }, [displayed, typing, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, #040d1a 0%, #071628 40%, #0d1f3c 70%, #0a1535 100%)" }}>

      {/* ── Animated gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        {ORBS.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.w,
              height: orb.h,
              top: orb.top ?? "auto",
              bottom: (orb as any).bottom ?? "auto",
              left: orb.left ?? "auto",
              right: orb.right ?? "auto",
              background: `radial-gradient(circle, ${orb.from}22 0%, ${orb.to}08 70%, transparent 100%)`,
              filter: "blur(60px)",
            }}
            animate={{
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.6, 0.9, 0.6],
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{ duration: orb.dur, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #109EF415 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
            animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Meteor streaks ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {METEORS.map((m) => (
          <motion.div
            key={m.id}
            className="absolute h-px"
            style={{ top: `${m.top}%`, left: `${m.left}%`, width: 120, transformOrigin: "left center", rotate: -25 }}
            animate={{ x: ["-10%", "120%"], opacity: [0, 1, 0] }}
            transition={{ duration: m.duration, repeat: Infinity, delay: m.delay, ease: "linear", repeatDelay: 6 + Math.random() * 4 }}
          >
            <div className="h-full w-full" style={{ background: "linear-gradient(90deg, transparent, #109EF4cc, #7B4DFF88, transparent)" }} />
          </motion.div>
        ))}
      </div>

      {/* ── Glowing horizontal lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[20, 45, 70].map((top, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px"
            style={{ top: `${top}%`, background: "linear-gradient(90deg, transparent 0%, #109EF410 30%, #1E56E618 50%, #109EF410 70%, transparent 100%)" }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i * 2, repeat: Infinity, delay: i * 1.5 }}
          />
        ))}
      </div>

      {/* ── Hexagon decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { size: 120, top: "15%", left: "8%", delay: 0 },
          { size: 80, top: "70%", right: "6%", delay: 1.5 },
          { size: 60, top: "30%", right: "12%", delay: 3 },
        ].map((hex, i) => (
          <motion.div
            key={i}
            className="absolute border border-brand-primary/10 rounded-xl"
            style={{ width: hex.size, height: hex.size, top: hex.top, left: (hex as any).left, right: (hex as any).right }}
            animate={{ rotate: [0, 90, 180, 270, 360], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, delay: hex.delay, ease: "linear" }}
          />
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={fadeUp} custom={0}>
            <Badge className="bg-brand-primary/20 text-brand-primary border-brand-primary/30 mb-4 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              ✦ Enterprise IT Solutions — Harare, Zimbabwe
            </Badge>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              We Build World-Class
            </h1>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight min-h-[1.2em] flex items-center">
              <span className="bg-gradient-to-r from-[#109EF4] via-[#1E56E6] to-[#7B4DFF] bg-clip-text text-transparent">
                {displayed}
              </span>
              <motion.span
                className="ml-1 inline-block w-1 h-[1em] bg-brand-primary rounded-full"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white/80">
              For Your Business
            </h1>
          </motion.div>

          <motion.p variants={fadeUp} custom={2} className="text-lg text-blue-200/80 max-w-xl leading-relaxed">
            Transform your digital presence with professional websites, mobile apps, digital marketing, branding, and hosting — all under one roof.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary to-brand-purple hover:opacity-90 text-white px-8 h-13 text-base shadow-2xl shadow-brand-primary/40 border-0" data-testid="hero-get-started">
              <Link href="/contact">
                <span className="flex items-center gap-2">Get Started <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-13 text-base backdrop-blur-sm" data-testid="hero-view-portfolio">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center gap-5 pt-2">
            {[["100+", "Projects"], ["50+", "Clients"], ["5★", "Rating"]].map(([val, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-brand-primary font-extrabold text-lg">{val}</span>
                <span className="text-blue-300/70 text-sm">{label}</span>
              </div>
            ))}
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-blue-300/70 text-sm">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for projects
            </div>
          </motion.div>
        </motion.div>

        {/* Orbit logo visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Glow base */}
            <div className="absolute w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, #109EF430 0%, transparent 70%)", filter: "blur(20px)" }} />

            {/* Orbit rings */}
            {[
              { size: "w-72 h-72", border: "border-brand-primary/25", dur: 22, dot: "bg-brand-primary", dotPos: "-top-2 left-1/2 -translate-x-1/2", dotSize: "w-4 h-4" },
              { size: "w-52 h-52", border: "border-brand-purple/35", dur: -15, dot: "bg-brand-purple", dotPos: "-bottom-2 left-1/2 -translate-x-1/2", dotSize: "w-3 h-3" },
              { size: "w-36 h-36", border: "border-brand-royal/30", dur: 10, dot: "bg-brand-royal", dotPos: "-right-1.5 top-1/2 -translate-y-1/2", dotSize: "w-2.5 h-2.5" },
            ].map((ring, i) => (
              <motion.div
                key={i}
                className={`absolute ${ring.size} rounded-full border ${ring.border}`}
                animate={{ rotate: ring.dur > 0 ? 360 : -360 }}
                transition={{ duration: Math.abs(ring.dur), repeat: Infinity, ease: "linear" }}
              >
                <div className={`absolute ${ring.dotPos} ${ring.dotSize} rounded-full ${ring.dot} shadow-lg`} />
              </motion.div>
            ))}

            {/* Service icons orbiting */}
            {[Globe, Smartphone, Palette, Megaphone].map((Icon, i) => {
              const angle = (i / 4) * 2 * Math.PI;
              const r = 148;
              return (
                <motion.div
                  key={i}
                  className="absolute h-9 w-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg"
                  style={{ left: `calc(50% + ${Math.cos(angle) * r}px - 18px)`, top: `calc(50% + ${Math.sin(angle) * r}px - 18px)` }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div animate={{ rotate: [0, -360] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
                    <Icon className="h-4 w-4 text-brand-primary" />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center logo */}
            <div className="relative z-10">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, #7B4DFF40 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.img
                src="/logo.jpg"
                alt="Saascode"
                className="h-24 w-24 rounded-full relative z-10 shadow-2xl ring-2 ring-brand-primary/40"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-blue-400/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-blue-400/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-brand-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

const LIVE_METRICS = [
  { label: "Projects Delivered This Year", value: 38, suffix: "", icon: CheckCircle, color: "text-emerald-400", bar: "bg-emerald-400", pct: 76 },
  { label: "Active Client Projects", value: 12, suffix: "", icon: Users, color: "text-brand-primary", bar: "bg-brand-primary", pct: 60 },
  { label: "Server Uptime", value: 99, suffix: ".9%", icon: Server, color: "text-violet-400", bar: "bg-violet-400", pct: 99.9 },
  { label: "Avg. Response Time", value: 2, suffix: "h", icon: Zap, color: "text-amber-400", bar: "bg-amber-400", pct: 90 },
];

const TICKER_ITEMS = [
  { icon: Globe, text: "Website launched for RetailPro Group", time: "2h ago", color: "text-blue-400" },
  { icon: Smartphone, text: "FarmLink mobile app update deployed", time: "5h ago", color: "text-green-400" },
  { icon: Palette, text: "Brand identity delivered to Boutique Luxe", time: "1d ago", color: "text-purple-400" },
  { icon: Megaphone, text: "SEO campaign started for AgriZim Trading", time: "1d ago", color: "text-orange-400" },
  { icon: Video, text: "Product reel series completed for Nova Electronics", time: "2d ago", color: "text-rose-400" },
  { icon: Server, text: "Cloud hosting migrated for HealthPlus Clinics", time: "3d ago", color: "text-cyan-400" },
  { icon: Globe, text: "E-commerce site live for SafariTrack Adventures", time: "4d ago", color: "text-teal-400" },
  { icon: Megaphone, text: "Google Ads campaign delivering 280% ROAS", time: "5d ago", color: "text-yellow-400" },
];

function LiveDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState(LIVE_METRICS.map(() => 0));
  const [tickerOffset, setTickerOffset] = useState(0);
  const tickerRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    LIVE_METRICS.forEach((m, i) => {
      let current = 0;
      const target = m.value;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setCounts(prev => { const n = [...prev]; n[i] = current; return n; });
        if (current >= target) clearInterval(timer);
      }, 24);
    });
  }, [inView]);

  useEffect(() => {
    let raf: number;
    const animate = () => {
      tickerRef.current -= 0.4;
      setTickerOffset(tickerRef.current);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const itemWidth = 300;
  const totalWidth = TICKER_ITEMS.length * itemWidth;
  const offset = ((tickerRef.current % totalWidth) - totalWidth) % totalWidth;

  return (
    <section ref={ref} className="py-20 bg-[#060f22] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Live</span>
              </div>
              <span className="text-white/30 text-xs">•</span>
              <span className="text-white/50 text-xs">Updated in real time</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Activity Dashboard</h2>
            <p className="text-white/50 text-sm mt-1">A live look at what we're building right now</p>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-white/70 text-sm font-medium">All systems operational</span>
          </div>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {LIVE_METRICS.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all"
                data-testid={`live-metric-${i}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className={`h-4 w-4 ${m.color}`} />
                  </div>
                  <span className="text-white/30 text-xs">{m.pct}%</span>
                </div>
                <div className={`text-4xl font-extrabold mb-1 ${m.color}`}>
                  {counts[i]}{m.suffix}
                </div>
                <p className="text-white/50 text-xs mb-4 leading-tight">{m.label}</p>
                {/* Progress bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${m.bar} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${m.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent activity ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10">
            <div className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Recent Activity</span>
          </div>
          <div className="relative overflow-hidden py-3" style={{ height: 52 }}>
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #060f22 0%, transparent 100%)" }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, #060f22 0%, transparent 100%)" }} />
            {/* Scrolling track — two copies for seamless loop */}
            <div
              className="absolute flex items-center gap-0"
              style={{ transform: `translateX(${offset}px)`, willChange: "transform" }}
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-5 whitespace-nowrap"
                    style={{ minWidth: itemWidth }}
                  >
                    <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`h-3.5 w-3.5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-white/80 text-xs font-medium">{item.text}</p>
                      <p className="text-white/30 text-[10px]">{item.time}</p>
                    </div>
                    <div className="h-5 w-px bg-white/10 ml-3 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <HeroCinematic />

      {/* STATS */}
      <section className="py-20 bg-brand-deep text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${i}`}
                >
                  <div className="flex justify-center mb-3">
                    <div className="h-12 w-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-brand-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-blue-300 text-sm font-medium">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIVE DASHBOARD */}
      <LiveDashboard />

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Everything Your Business Needs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From digital presence to enterprise systems, we deliver end-to-end technology solutions that drive real results.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  data-testid={`service-card-${i}`}
                >
                  <Card className="h-full border-border hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <Link href="/services" className="text-brand-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              <Link href="/services">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">About Saascode</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white leading-tight">
              Building Africa's Digital Future, One Solution at a Time
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              SaasCode IT Solutions is a full-service digital transformation company headquartered in Zimbabwe. We partner with startups, SMEs, corporates, and enterprises to deliver technology that accelerates growth, improves efficiency, and creates competitive advantage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience and 100+ successful projects, our team of specialists combines technical excellence with deep business understanding to deliver solutions that truly make a difference.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[["Innovation First", "We embrace the latest technologies"], ["Client-Centric", "Your success is our success"], ["Quality Assured", "Rigorous testing and QA"], ["Always Available", "24/7 dedicated support"]].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{title}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="bg-gradient-to-r from-brand-primary to-brand-royal text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code, title: "Custom Development", desc: "Tailored solutions built from scratch" },
              { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
              { icon: BarChart2, title: "Analytics & SEO", desc: "Data-driven growth strategies" },
              { icon: Shield, title: "Security First", desc: "Enterprise-grade protection" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-md hover:border-brand-primary/30 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <h4 className="font-bold text-card-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Trusted by businesses across Zimbabwe and beyond</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg border border-border text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-purple flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div className="text-left">
                  <p className="font-bold text-card-foreground">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  data-testid={`testimonial-dot-${i}`}
                  className={`h-2 rounded-full transition-all ${i === activeTestimonial ? "w-6 bg-brand-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">Blog & Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Latest from Our Team</h2>
            <p className="text-muted-foreground">Expert insights on technology, business, and digital transformation</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                data-testid={`blog-card-${i}`}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:border-brand-primary/20 transition-all group">
                  <div className="h-44 bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-16 w-16 text-brand-primary/20" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-brand-primary text-white border-0">{post.tag}</Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-card-foreground mb-3 group-hover:text-brand-primary transition-colors leading-snug">{post.title}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.read} read</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about working with Saascode</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white dark:bg-card rounded-xl border border-border overflow-hidden"
                data-testid={`faq-${i}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-card-foreground">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-5 w-5 text-brand-primary shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-deep via-brand-royal to-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg">Let's build something extraordinary together. Get in touch and let's discuss your project.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-deep hover:bg-blue-50 font-bold px-8">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <a href="https://wa.me/263779067012" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
