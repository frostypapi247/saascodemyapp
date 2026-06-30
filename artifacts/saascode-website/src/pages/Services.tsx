import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

function PricingCard({
  title,
  price,
  period = "",
  features,
  popular = false,
  badge,
  index,
}: {
  title: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative"
      data-testid={`pricing-card-${index}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-brand-primary to-brand-purple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-brand-deep text-white text-xs font-bold px-4 py-1.5 rounded-full">{badge}</span>
        </div>
      )}
      <Card className={`h-full flex flex-col ${popular ? "border-brand-primary shadow-xl shadow-brand-primary/20" : "border-border"} hover:border-brand-primary/50 transition-all`}>
        <CardHeader className={`p-6 rounded-t-xl ${popular ? "bg-gradient-to-br from-brand-primary/10 to-brand-purple/10" : ""}`}>
          <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-extrabold text-card-foreground">{price}</span>
            {period && <span className="text-muted-foreground text-sm mb-1">{period}</span>}
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col flex-1">
          <ul className="space-y-3 flex-1 mb-6">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={`w-full ${popular ? "bg-gradient-to-r from-brand-primary to-brand-purple text-white shadow-lg shadow-brand-primary/20" : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"}`}
            variant={popular ? "default" : "outline"}
            data-testid={`request-quote-${index}`}
          >
            <Link href="/contact">Request Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

type AccordionItem = { title: string; features: string[] };

function AccordionSection({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 mt-6">
      {items.map((item, i) => (
        <div key={item.title} className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <span className="font-medium text-card-foreground">{item.title}</span>
            {open === i ? <ChevronUp className="h-4 w-4 text-brand-primary" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
          </button>
          {open === i && (
            <div className="p-4 bg-white dark:bg-card">
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ badge, title, desc }: { badge: string; title: string; desc: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
      <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-3">{badge}</Badge>
      <h2 className="text-3xl font-extrabold text-card-foreground dark:text-white mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-sm">{desc}</p>
    </motion.div>
  );
}

export default function Services() {
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
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Our Services</Badge>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Premium Services at{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Professional-grade digital services for every budget. No hidden fees, no surprises — just exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VIDEO & REELS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Video Production"
            title="Short Video & Reels"
            desc="Professional video content optimized for Instagram, Facebook, and TikTok that captures attention and drives engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Startup" price="US$150" index={0} features={[
              "1 professionally edited video (15–75 sec)",
              "Creative direction",
              "Script guidance",
              "Motion graphics",
              "Text overlays",
              "2 revisions",
              "Instagram optimized",
              "Facebook optimized",
              "TikTok optimized",
            ]} />
            <PricingCard title="Pro" price="US$299" index={1} popular features={[
              "2 professional videos",
              "Script guidance",
              "Licensed music",
              "Motion graphics",
              "Text overlays",
              "2 revisions",
              "Optimized delivery for all platforms",
            ]} />
            <PricingCard title="Premium" price="US$699" index={2} features={[
              "4 professional videos",
              "Marketing strategy session",
              "Unlimited revisions",
              "Licensed music",
              "Advanced motion graphics",
              "Content calendar",
              "Optimized delivery for all platforms",
            ]} />
          </div>
        </div>
      </section>

      {/* GRAPHIC DESIGN */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Graphic Design"
            title="Graphic Design Packages"
            desc="Premium visual content that builds brand recognition and drives engagement across all channels."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Startup" price="US$250" period="/month" index={3} features={[
              "15 custom designs/month",
              "2 revisions per design",
              "Brand consistency",
              "PNG, JPEG, PDF formats",
            ]} />
            <PricingCard title="Pro" price="US$550" period="/month" index={4} popular features={[
              "30 custom designs/month",
              "3 revisions per design",
              "Priority support",
              "Brand style guide",
              "Monthly strategy call",
            ]} />
            <PricingCard title="Premium" price="US$800" period="/month" index={5} features={[
              "45 premium designs/month",
              "Unlimited revisions",
              "Source files included",
              "Campaign kits",
              "Priority WhatsApp support",
              "Custom templates",
              "Monthly strategy session",
            ]} />
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Digital Marketing"
            title="Digital Marketing Plans"
            desc="Data-driven marketing that builds your brand, captures leads, and converts customers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Presence", price: "US$650", period: "/month",
                items: [
                  { title: "What's Included", features: ["Social media management (2 platforms)", "10 posts per month", "Community management", "Basic monthly analytics report", "Brand voice development"] },
                  { title: "Platforms & Channels", features: ["Facebook management", "Instagram management", "Profile optimization"] },
                ],
              },
              {
                title: "Performance", price: "US$1,200", period: "/month",
                items: [
                  { title: "What's Included", features: ["Social media management (4 platforms)", "20 posts per month", "Paid ad management (Google + Meta)", "SEO content strategy", "Email marketing (2 campaigns)", "Detailed weekly reports"] },
                  { title: "Advertising", features: ["Google Ads campaigns", "Meta Ads (Facebook + Instagram)", "Retargeting campaigns", "A/B testing"] },
                ],
              },
              {
                title: "Authority", price: "US$1,999", period: "/month",
                items: [
                  { title: "Full-Stack Marketing", features: ["All platforms (unlimited)", "35+ posts per month", "Influencer partnership coordination", "PR coverage & media placements", "Custom growth strategy", "Weekly strategy calls", "Real-time performance dashboard"] },
                  { title: "Advanced Features", features: ["Marketing automation", "CRM integration", "Customer journey mapping", "Conversion rate optimization"] },
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                data-testid={`marketing-plan-${i}`}
              >
                <Card className={`h-full flex flex-col ${i === 1 ? "border-brand-primary shadow-xl shadow-brand-primary/20" : "border-border"}`}>
                  {i === 1 && <div className="text-center py-1.5 bg-gradient-to-r from-brand-primary to-brand-purple rounded-t-xl">
                    <span className="text-xs font-bold text-white">Most Popular</span>
                  </div>}
                  <CardHeader className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{plan.title}</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-extrabold text-card-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-sm mb-1">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex flex-col flex-1">
                    <AccordionSection items={plan.items} />
                    <div className="mt-6">
                      <Button
                        asChild
                        className={`w-full ${i === 1 ? "bg-gradient-to-r from-brand-primary to-brand-purple text-white" : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"}`}
                        variant={i === 1 ? "default" : "outline"}
                        data-testid={`marketing-quote-${i}`}
                      >
                        <Link href="/contact">Request Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTING */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Hosting & Email"
            title="Hosting & Business Email"
            desc="Fast, reliable hosting with professional email — everything your business needs to stay online and connected."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Starter" price="US$46" period="/year" index={6} features={[
              ".co.zw domain name",
              "5 professional email addresses",
              "3GB SSD storage",
              "SSL certificate (HTTPS)",
              "99.9% uptime guarantee",
            ]} />
            <PricingCard title="Pro" price="US$100" period="/year" index={7} popular features={[
              "Custom domain included",
              "10 professional email addresses",
              "10GB SSD storage",
              "SSL certificate",
              "Priority technical support",
              "Daily automatic backups",
            ]} />
            <PricingCard title="Premium" price="US$148" period="/year" index={8} features={[
              "Free domain (1st year)",
              "Unlimited email addresses",
              "15GB SSD storage",
              "SSL + DDoS protection",
              "Priority support 24/7",
              "Daily backups + CDN",
            ]} />
          </div>
        </div>
      </section>

      {/* WEBSITE DEV */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Website Development"
            title="Website Development"
            desc="From business websites to enterprise platforms — we build digital experiences that convert visitors into customers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Business Growth" price="US$800" index={9} features={[
              "Up to 15 pages",
              "SEO optimized",
              "Blog module",
              "WhatsApp integration",
              "Payment gateway",
              "Lead generation forms",
              "Google Analytics",
              "Mobile responsive",
              "3 months support",
            ]} />
            <PricingCard title="Custom" price="US$2,700" index={10} popular features={[
              "20–30 pages",
              "Full e-commerce functionality",
              "Inventory management system",
              "Advanced analytics dashboard",
              "Email marketing integration",
              "Customer portal",
              "Multi-currency support",
              "6 months support",
            ]} />
            <PricingCard title="Enterprise" price="From US$3,300" index={11} features={[
              "Unlimited pages",
              "CRM integration",
              "ERP integration",
              "Custom API development",
              "Advanced SEO package",
              "Enterprise security",
              "Staff training",
              "12 months priority support",
            ]} />
          </div>
        </div>
      </section>

      {/* MOBILE APPS */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Mobile Apps"
            title="Mobile App Development"
            desc="Native and cross-platform mobile applications built for performance, scalability, and exceptional user experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Launch" price="US$1,850" index={12} features={[
              "Native iOS & Android",
              "Up to 10 screens",
              "Basic backend/API",
              "User authentication",
              "Push notifications",
              "App Store submission",
              "3 months post-launch support",
            ]} />
            <PricingCard title="Growth" price="US$3,700" index={13} popular features={[
              "Cross-platform (iOS + Android)",
              "Up to 25 screens",
              "Custom backend development",
              "Advanced push notifications",
              "In-app purchases",
              "Analytics dashboard",
              "6 months post-launch support",
            ]} />
            <PricingCard title="Enterprise" price="US$7,000" index={14} features={[
              "Full enterprise application",
              "Unlimited screens",
              "Advanced third-party integrations",
              "Real-time features (WebSockets)",
              "Analytics & crash reporting",
              "White-label options",
              "Staff admin panel",
              "12 months priority support",
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-deep via-brand-royal to-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4">Need a Custom Package?</h2>
            <p className="text-blue-100 mb-8">Every business is unique. Let's create a tailored solution that perfectly fits your goals and budget.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-deep hover:bg-blue-50 font-bold px-8">
                <Link href="/contact">Get a Custom Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <a href="https://wa.me/263779067013" target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
