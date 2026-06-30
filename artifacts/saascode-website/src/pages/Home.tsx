import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe, Smartphone, Megaphone, Server, Palette, Video,
  Star, ChevronDown, ChevronUp, ArrowRight, Code, Cloud,
  BarChart2, Shield, Zap, Users, CheckCircle, TrendingUp
} from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiDocker, SiPostgresql, SiMongodb } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
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

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#040d1a] dark:via-[#071628] dark:to-[#0a1f40] pt-20">
        {/* Background mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-brand-royal/10 rounded-full blur-3xl" />
          {/* Floating dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-brand-primary/40"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4 px-4 py-1.5 text-sm font-medium">
                Enterprise IT Solutions
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl font-extrabold leading-tight text-card-foreground dark:text-white"
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-brand-primary via-brand-royal to-brand-purple bg-clip-text text-transparent">
                Innovative Digital Solutions
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build professional websites, mobile applications, digital marketing campaigns, branding solutions, and hosting services that help businesses grow.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary to-brand-purple hover:opacity-90 text-white px-8 h-12 text-base shadow-xl shadow-brand-primary/30" data-testid="hero-get-started">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white h-12 text-base" data-testid="hero-view-portfolio">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated orbit logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                className="absolute w-72 h-72 rounded-full border-2 border-brand-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/50" />
              </motion.div>
              {/* Middle ring */}
              <motion.div
                className="absolute w-52 h-52 rounded-full border-2 border-brand-purple/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-purple shadow-lg shadow-brand-purple/50" />
              </motion.div>
              {/* Inner ring */}
              <motion.div
                className="absolute w-36 h-36 rounded-full border border-brand-royal/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-royal" />
              </motion.div>
              {/* Center logo */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-brand-purple/30 rounded-full blur-xl scale-110" />
                <img src="/logo.jpg" alt="Saascode" className="h-24 w-24 rounded-full relative z-10 shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Everything Your Business Needs</h2>
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
            <h2 className="text-4xl font-extrabold text-card-foreground dark:text-white leading-tight">
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
            <h2 className="text-4xl font-extrabold text-card-foreground dark:text-white mb-4">What Our Clients Say</h2>
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

      {/* TECH STACK */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl font-bold text-card-foreground dark:text-white mb-2">Technologies We Master</h2>
            <p className="text-muted-foreground text-sm">Cutting-edge tools for enterprise-grade solutions</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-2 bg-white dark:bg-card rounded-xl px-6 py-4 shadow-sm border border-border hover:border-brand-primary/30 hover:shadow-md transition-all"
                >
                  <Icon className="h-8 w-8 text-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">Blog & Insights</Badge>
            <h2 className="text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Latest from Our Team</h2>
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
            <h2 className="text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Frequently Asked Questions</h2>
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
            <h2 className="text-4xl font-extrabold leading-tight">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg">Let's build something extraordinary together. Get in touch and let's discuss your project.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-deep hover:bg-blue-50 font-bold px-8">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <a href="https://wa.me/263779067013" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
