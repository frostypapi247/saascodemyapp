import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Websites" | "Mobile Apps" | "Branding" | "Graphic Design" | "Digital Marketing" | "Videos";

const categories: Category[] = ["All", "Websites", "Mobile Apps", "Branding", "Graphic Design", "Digital Marketing", "Videos"];

const projects = [
  {
    id: 1, category: "Websites", title: "TechCorp Zimbabwe Corporate Site",
    client: "TechCorp Zimbabwe", description: "A modern enterprise website with custom CMS, SEO optimization, and lead generation tools that boosted inquiries by 200%.",
    technologies: ["React", "Next.js", "TypeScript", "Prisma"],
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    id: 2, category: "Mobile Apps", title: "FarmLink Agricultural Marketplace",
    client: "FarmLink Africa", description: "A cross-platform marketplace connecting farmers to buyers with real-time pricing, inventory management, and payment integration.",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-green-500/30 to-emerald-500/30",
  },
  {
    id: 3, category: "Branding", title: "Boutique Luxe Brand Identity",
    client: "Boutique Luxe ZW", description: "Complete brand overhaul including logo, style guide, color palette, typography system, and full brand guidelines documentation.",
    technologies: ["Adobe Illustrator", "Figma", "Brand Strategy"],
    gradient: "from-purple-500/30 to-violet-500/30",
  },
  {
    id: 4, category: "Digital Marketing", title: "RetailPro Q4 Campaign",
    client: "RetailPro Group", description: "A full-funnel digital marketing campaign that delivered a 340% ROI through targeted Google Ads, social media, and email marketing.",
    technologies: ["Google Ads", "Meta Ads", "Mailchimp", "Analytics"],
    gradient: "from-orange-500/30 to-amber-500/30",
  },
  {
    id: 5, category: "Videos", title: "Product Launch Reel Series",
    client: "Nova Electronics", description: "A series of 6 product launch videos that collectively achieved 2M+ views across Instagram, TikTok, and YouTube.",
    technologies: ["Adobe Premiere", "After Effects", "DaVinci Resolve"],
    gradient: "from-red-500/30 to-rose-500/30",
  },
  {
    id: 6, category: "Websites", title: "HealthPlus Patient Portal",
    client: "HealthPlus Clinics", description: "HIPAA-compliant patient management system with appointment booking, medical records, and telehealth features.",
    technologies: ["TypeScript", "React", "Express", "PostgreSQL"],
    gradient: "from-teal-500/30 to-cyan-500/30",
  },
  {
    id: 7, category: "Mobile Apps", title: "RetailPro Mobile Commerce",
    client: "RetailPro Group", description: "Feature-rich e-commerce app with AI-powered recommendations, loyalty program, and real-time inventory tracking.",
    technologies: ["Flutter", "Firebase", "Stripe", "ML Kit"],
    gradient: "from-indigo-500/30 to-blue-500/30",
  },
  {
    id: 8, category: "Branding", title: "MinBank Financial Rebrand",
    client: "MinBank Financial", description: "Comprehensive brand refresh for a leading financial institution, including new visual identity, branch signage, and digital assets.",
    technologies: ["Figma", "Illustrator", "Brand Strategy"],
    gradient: "from-slate-500/30 to-gray-500/30",
  },
  {
    id: 9, category: "Graphic Design", title: "EduTech Social Media Pack",
    client: "EduTech Academy", description: "Monthly social media graphic packages including 45 unique posts, story templates, carousel designs, and animated elements.",
    technologies: ["Canva Pro", "Illustrator", "Photoshop"],
    gradient: "from-pink-500/30 to-rose-400/30",
  },
  {
    id: 10, category: "Digital Marketing", title: "AgriZim SEO Domination",
    client: "AgriZim Trading", description: "Technical SEO overhaul and content strategy that took AgriZim from page 5 to page 1 rankings for 40+ keywords in 90 days.",
    technologies: ["SEMrush", "Google Analytics", "WordPress"],
    gradient: "from-lime-500/30 to-green-500/30",
  },
  {
    id: 11, category: "Videos", title: "Brand Story Documentary",
    client: "SunEnergy Zimbabwe", description: "A compelling 3-minute brand story documentary featuring customer testimonials, company culture, and impact stories.",
    technologies: ["Sony FX6", "Adobe Suite", "Color Grading"],
    gradient: "from-yellow-500/30 to-amber-500/30",
  },
  {
    id: 12, category: "Websites", title: "SafariTrack Tour Platform",
    client: "SafariTrack Adventures", description: "Full-featured tourism booking platform with tour packages, real-time availability, multi-currency payments, and admin dashboard.",
    technologies: ["React", "Django", "Stripe", "AWS"],
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

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
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Our Portfolio</Badge>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Work That Speaks{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                For Itself
              </span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              A curated selection of our best work across websites, mobile apps, branding, design, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                    : "bg-secondary text-muted-foreground hover:bg-brand-primary/10 hover:text-brand-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  data-testid={`portfolio-card-${project.id}`}
                >
                  <Card className="h-full border-border hover:border-brand-primary/30 hover:shadow-xl transition-all overflow-hidden group">
                    {/* Preview Image */}
                    <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="grid grid-cols-3 gap-3 p-6 w-full h-full">
                          {[...Array(9)].map((_, j) => (
                            <div key={j} className="bg-white/30 rounded-lg" style={{ opacity: 0.3 + Math.random() * 0.5 }} />
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-brand-primary/90 text-white border-0 text-xs">{project.category}</Badge>
                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ExternalLink className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="font-bold text-card-foreground text-lg mb-1 group-hover:text-brand-primary transition-colors leading-tight">{project.title}</h3>
                      <p className="text-brand-primary text-xs font-medium mb-3">{project.client}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">{tech}</span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" data-testid={`view-project-${project.id}`}>
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-deep via-brand-royal to-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-blue-100 mb-8">Join 50+ satisfied clients who trusted Saascode to transform their digital presence.</p>
            <Button asChild size="lg" className="bg-white text-brand-deep hover:bg-blue-50 font-bold px-8">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
