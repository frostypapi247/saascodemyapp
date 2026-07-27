import { type ElementType } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb, Shield, Star, Users, Zap, Award,
  Target, Eye, CheckCircle, ArrowRight
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore and adopt emerging technologies to deliver cutting-edge solutions.", color: "from-amber-400 to-orange-500" },
  { icon: Shield, title: "Integrity", desc: "We operate with complete transparency, honesty, and accountability in everything we do.", color: "from-blue-500 to-cyan-600" },
  { icon: Star, title: "Quality", desc: "We are committed to delivering excellence — every project, every time, without compromise.", color: "from-purple-500 to-violet-600" },
  { icon: Users, title: "Customer Success", desc: "Your growth and success is the primary metric we measure ourselves against.", color: "from-green-500 to-emerald-600" },
  { icon: Zap, title: "Reliability", desc: "We deliver on our promises — on time, within budget, and beyond expectations.", color: "from-rose-500 to-pink-600" },
];

const timeline = [
  { year: "2019", event: "Saascode IT Solutions Founded", desc: "Started with a vision to make enterprise-grade technology accessible to all African businesses." },
  { year: "2020", event: "First 10 Client Milestones", desc: "Delivered 10 successful projects and earned our reputation for quality and reliability." },
  { year: "2021", event: "Mobile App Division Launched", desc: "Expanded services to include native iOS and Android application development." },
  { year: "2022", event: "50+ Happy Clients", desc: "Grew our client base to 50+ businesses across Zimbabwe and neighboring countries." },
  { year: "2023", event: "Digital Marketing Expansion", desc: "Launched full-service digital marketing with dedicated campaign management and analytics." },
  { year: "2024", event: "Enterprise Solutions Division", desc: "Began serving enterprise-level clients with CRM, ERP, and custom API integrations." },
  { year: "2025", event: "Regional Expansion", desc: "Expanded operations regionally, serving clients across Southern and Eastern Africa." },
];

const whyChooseUs = [
  { icon: Award, title: "Proven Track Record", desc: "100+ successful projects delivered across diverse industries and business sizes." },
  { icon: Users, title: "Expert Team", desc: "A multidisciplinary team of developers, designers, marketers, and strategists." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology ensures rapid delivery without compromising on quality." },
  { icon: Shield, title: "Data Security", desc: "Enterprise-grade security protocols protecting your data at every level." },
  { icon: CheckCircle, title: "Ongoing Support", desc: "24/7 technical support and maintenance long after your project launches." },
  { icon: Target, title: "Result-Oriented", desc: "Every solution is engineered to achieve measurable business outcomes." },
];

export default function About() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-deep via-brand-royal to-[#1a3a8f] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Our Story</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Empowering Innovation through{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Cloud-Based Solutions
              </span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are a team of passionate technologists dedicated to helping businesses across Africa harness the power of digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">Company Overview</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              SaasCode IT Solutions is a full-service digital transformation company based in Zimbabwe. We provide comprehensive technology services to startups, small and medium enterprises (SMEs), corporate organizations, and large enterprises.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced developers, designers, and digital strategists work collaboratively to deliver solutions that are not just technically excellent but also strategically aligned with your business goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From custom website development and mobile applications to digital marketing and cloud hosting, we are your one-stop technology partner for the digital age.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Startups", "SMEs", "Corporate", "Enterprise"].map((type) => (
                <div key={type} className="flex items-center gap-2 bg-brand-primary/5 rounded-lg px-4 py-2.5">
                  <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                  <span className="text-sm font-medium text-card-foreground">{type}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 gap-5">
              {[["Mission", Target, "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage."],
                ["Vision", Eye, "To be Africa's leading digital transformation partner, recognized for excellence, innovation, and measurable impact."]].map(([title, Icon, text]) => {
                const I = Icon as ElementType;
                return (
                  <div key={title as string} className="col-span-2 bg-white dark:bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                        <I className="h-5 w-5 text-brand-primary" />
                      </div>
                      <h3 className="font-bold text-card-foreground text-lg">Our {title as string}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{text as string}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our values are not just words on a wall — they guide every decision, every project, and every client interaction.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  data-testid={`value-card-${i}`}
                >
                  <Card className="h-full border-border hover:border-brand-primary/30 hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-brand-deep text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">A Story of Growth</h2>
            <p className="text-blue-200 max-w-xl mx-auto">From a bold idea to Africa's rising digital transformation partner.</p>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/30 -translate-x-1/2 hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                data-testid={`timeline-${i}`}
              >
                <div className="flex-1 md:text-right">
                  {i % 2 === 0 && (
                    <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                      <p className="font-bold text-brand-primary text-2xl mb-1">{item.year}</p>
                      <h3 className="font-semibold text-white mb-2">{item.event}</h3>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  )}
                </div>
                <div className="hidden md:flex items-start justify-center pt-4">
                  <div className="h-4 w-4 rounded-full bg-brand-primary ring-4 ring-brand-primary/30 shrink-0" />
                </div>
                <div className="flex-1">
                  {i % 2 !== 0 && (
                    <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                      <p className="font-bold text-brand-primary text-2xl mb-1">{item.year}</p>
                      <h3 className="font-semibold text-white mb-2">{item.event}</h3>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-4">Why Saascode</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We don't just build technology — we build long-term partnerships built on trust, excellence, and results.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border-border hover:border-brand-primary/30 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex gap-4">
                      <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary to-brand-purple text-white">
              <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
