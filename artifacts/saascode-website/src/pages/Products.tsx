import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe, Smartphone, Mail, Server, Building2, Megaphone,
  Palette, PenTool, Video, Search, Share2, Cpu, ArrowRight
} from "lucide-react";

const products = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom websites built with modern frameworks that convert visitors into loyal customers. SEO-optimized, fast, and fully responsive.",
    color: "from-blue-500 to-cyan-500",
    tags: ["React", "Next.js", "SEO"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native iOS and Android applications, or cross-platform solutions, built for performance, scalability, and exceptional user experience.",
    color: "from-indigo-500 to-blue-600",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: Mail,
    title: "Business Email Hosting",
    desc: "Professional email addresses with your custom domain. Secure, reliable, and packed with enterprise collaboration features.",
    color: "from-green-500 to-emerald-500",
    tags: [".co.zw", "SSL", "5GB+"],
  },
  {
    icon: Server,
    title: "Cloud Hosting",
    desc: "Reliable, fast, and scalable cloud hosting solutions with 99.9% uptime guarantee. Perfect for businesses of any size.",
    color: "from-sky-500 to-blue-500",
    tags: ["SSD", "CDN", "Auto-backup"],
  },
  {
    icon: Building2,
    title: "Corporate Email",
    desc: "Enterprise email systems for your entire team. Advanced spam filtering, shared calendars, and seamless integration.",
    color: "from-slate-600 to-gray-700",
    tags: ["Teams", "Exchange", "SMTP"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven marketing campaigns across Google Ads, social media, and email that deliver measurable ROI and sustainable growth.",
    color: "from-orange-500 to-amber-500",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Comprehensive brand packages including logo design, style guides, brand guidelines, and complete visual identity systems.",
    color: "from-violet-500 to-purple-600",
    tags: ["Logo", "Guidelines", "Visual ID"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    desc: "Premium visual content for print and digital media — from social media graphics to billboards, brochures to banners.",
    color: "from-pink-500 to-rose-500",
    tags: ["Print", "Digital", "Social"],
  },
  {
    icon: Video,
    title: "Video Production",
    desc: "Professional video content including corporate videos, product demos, social media reels, and motion graphics.",
    color: "from-red-500 to-rose-600",
    tags: ["Reels", "Corporate", "Motion"],
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Technical and content SEO strategies that improve your rankings, drive organic traffic, and generate qualified leads 24/7.",
    color: "from-teal-500 to-cyan-600",
    tags: ["On-Page", "Technical", "Local"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Consistent, engaging social media presence across all platforms — content creation, scheduling, community management and analytics.",
    color: "from-blue-400 to-indigo-500",
    tags: ["Content", "Analytics", "Community"],
  },
  {
    icon: Cpu,
    title: "Business Automation",
    desc: "Automate repetitive workflows, integrate your tools, and streamline operations with custom automation solutions and APIs.",
    color: "from-gray-600 to-slate-700",
    tags: ["APIs", "Workflows", "Integration"],
  },
];

export default function Products() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-brand-deep via-brand-royal to-[#1a3a8f] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Our Products</Badge>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Complete Digital Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Every Business Need
              </span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              From your first website to enterprise-scale systems, we have the right solution to power your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-card-foreground dark:text-white mb-4">
              Explore Our Full Product Range
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every product is crafted with precision and delivered with the expertise that has earned us 100+ satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  data-testid={`product-card-${i}`}
                >
                  <Card className="h-full border-border hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 group overflow-hidden">
                    <div className={`h-2 w-full bg-gradient-to-r ${product.color}`} />
                    <CardContent className="p-6">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-brand-primary transition-colors">{product.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{product.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" data-testid={`product-learn-more-${i}`}>
                        <Link href="/services">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-deep via-brand-royal to-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4">Not Sure Which Product You Need?</h2>
            <p className="text-blue-100 mb-8">Our experts will analyze your business requirements and recommend the perfect solution combination.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-deep hover:bg-blue-50 font-bold">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/services">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
