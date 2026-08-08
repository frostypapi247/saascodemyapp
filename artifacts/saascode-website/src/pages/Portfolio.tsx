import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Globe2,
  Leaf,
  MonitorSmartphone,
  ShoppingBag,
  Smartphone,
  Sofa,
  UsersRound,
} from "lucide-react";

type Category =
  | "All"
  | "Websites"
  | "E-Commerce"
  | "NGO / Organizations"
  | "Mobile Apps";

type ProjectCategory = Exclude<Category, "All">;

type Project = {
  id: number;
  title: string;
  displayTitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  services: string[];
  url: string;
  buttonLabel: "View Live Website" | "View Project";
  previewType: "browser" | "phone";
  icon: typeof Globe2;
  previewLabel: string;
  previewCaption: string;
  accent: string;
  surface: string;
};

const categories: Category[] = [
  "All",
  "Websites",
  "E-Commerce",
  "NGO / Organizations",
  "Mobile Apps",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Close-Knit Interior",
    displayTitle: "Close-Knit Interior",
    category: "Websites",
    categoryLabel: "Website Development / Furniture",
    description:
      "A premium digital presence for Close-Knit Interior, a Zimbabwean furniture and interior brand.",
    services: [
      "Website Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Product Showcase",
      "Brand Integration",
      "SEO-ready structure",
    ],
    url: "https://www.closeknit.co.zw",
    buttonLabel: "View Live Website",
    previewType: "browser",
    icon: Sofa,
    previewLabel: "Close-Knit",
    previewCaption: "Thoughtful interiors. Made for living.",
    accent: "#B77B52",
    surface: "#F1E9E0",
  },
  {
    id: 2,
    title: "ZWIT — Drive Forward",
    displayTitle: "ZWIT — Drive Forward",
    category: "Websites",
    categoryLabel: "Website / Organization",
    description:
      "A professional organizational website designed to establish a strong digital presence for ZWIT — Drive Forward.",
    services: [
      "Website Development",
      "UI/UX Design",
      "Responsive Design",
      "Content Structure",
      "Mobile Optimization",
    ],
    url: "https://twagit-drive-forward.pages.dev",
    buttonLabel: "View Live Website",
    previewType: "browser",
    icon: Globe2,
    previewLabel: "DRIVE FORWARD",
    previewCaption: "Building momentum through opportunity.",
    accent: "#1E90FF",
    surface: "#E8F2FF",
  },
  {
    id: 3,
    title: "D.O.N.E",
    displayTitle: "D.O.N.E",
    category: "NGO / Organizations",
    categoryLabel: "NGO / Environmental Organization",
    description:
      "A professional environmental organization website focused on conservation, environmental education, climate advocacy, community engagement, and environmental stewardship.",
    services: [
      "Website Development",
      "UI/UX Design",
      "NGO Website",
      "Responsive Design",
      "Programs & Initiatives",
      "Contact Experience",
      "SEO-ready structure",
    ],
    url: "https://done-testing.pages.dev",
    buttonLabel: "View Live Website",
    previewType: "browser",
    icon: Leaf,
    previewLabel: "D.O.N.E",
    previewCaption: "Protecting nature through collective action.",
    accent: "#16845B",
    surface: "#E6F4EC",
  },
  {
    id: 4,
    title: "NEHTCO",
    displayTitle: "NEHTCO",
    category: "E-Commerce",
    categoryLabel: "E-Commerce / Technology",
    description:
      "A modern technology and e-commerce platform designed around smartphones, gadgets, buying, selling, swapping, and repair services.",
    services: [
      "Website Development",
      "E-Commerce UI",
      "UI/UX Design",
      "Product Experience",
      "Responsive Design",
      "Technology Solutions",
    ],
    url: "https://nehtco-testing.vercel.app",
    buttonLabel: "View Live Website",
    previewType: "browser",
    icon: ShoppingBag,
    previewLabel: "NEHTCO",
    previewCaption: "Buy. Sell. Swap. Repair.",
    accent: "#1E90FF",
    surface: "#EAF1FC",
  },
  {
    id: 5,
    title: "EGAWOZ",
    displayTitle: "EGAWOZ",
    category: "NGO / Organizations",
    categoryLabel: "NGO / Non-Profit",
    description:
      "A professional nonprofit website for Empower Girls and Women of Zimbabwe, presenting its programs, causes, advocacy initiatives, and community impact.",
    services: [
      "Website Development",
      "UI/UX Design",
      "NGO Website",
      "Responsive Design",
      "Programs & Causes",
      "Contact Forms",
      "Community Engagement",
    ],
    url: "https://egwoz.pages.dev",
    buttonLabel: "View Live Website",
    previewType: "browser",
    icon: UsersRound,
    previewLabel: "EGAWOZ",
    previewCaption: "Empowering girls and women across Zimbabwe.",
    accent: "#8D4EC7",
    surface: "#F2EAF8",
  },
  {
    id: 6,
    title: "UNIFY Mobile Application",
    displayTitle: "UNIFY Mobile Application",
    category: "Mobile Apps",
    categoryLabel: "Mobile Application",
    description:
      "A modern mobile application project developed by SaasCode, demonstrating our capability in building mobile-first digital products and application experiences.",
    services: [
      "Mobile Application Development",
      "UI/UX Design",
      "Mobile-first Experience",
      "Digital Product Development",
    ],
    url: "https://www.unify.co.zw",
    buttonLabel: "View Project",
    previewType: "phone",
    icon: Smartphone,
    previewLabel: "UNIFY",
    previewCaption: "One connected experience.",
    accent: "#1E90FF",
    surface: "#E8F2FF",
  },
];

function BrowserPreview({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className="relative flex h-full items-end justify-center overflow-hidden px-5 pt-7"
      style={{
        background: `linear-gradient(145deg, ${project.surface}, #FFFFFF 75%)`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute -right-10 -top-14 h-44 w-44 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: project.accent }}
      />
      <div className="relative h-[90%] w-full max-w-[31rem] overflow-hidden rounded-t-xl border border-black/10 bg-white shadow-[0_18px_45px_rgba(10,44,140,0.18)]">
        <div className="flex h-7 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <div className="ml-3 h-3 w-2/5 rounded-full bg-slate-200" />
        </div>
        <div className="grid h-[calc(100%-1.75rem)] grid-cols-[1.15fr_0.85fr] items-center gap-3 px-5 py-5">
          <div>
            <div className="mb-2 h-1.5 w-10 rounded-full" style={{ backgroundColor: project.accent }} />
            <p className="font-heading text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
              {project.previewLabel}
            </p>
            <p className="mt-1 max-w-[12rem] text-[8px] leading-relaxed text-slate-500 sm:text-[10px]">
              {project.previewCaption}
            </p>
            <div
              className="mt-3 h-4 w-16 rounded-full opacity-90"
              style={{ backgroundColor: project.accent }}
            />
          </div>
          <div
            className="flex aspect-square items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${project.accent}16` }}
          >
            <Icon className="h-12 w-12 sm:h-16 sm:w-16" style={{ color: project.accent }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhonePreview({ project }: { project: Project }) {
  return (
    <div
      className="relative flex h-full items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 55%, ${project.accent}38, transparent 46%), linear-gradient(145deg, #081D5D, #0A2C8C)`,
      }}
      aria-hidden="true"
    >
      <div className="absolute left-7 top-7 flex items-center gap-2 text-white/75">
        <MonitorSmartphone className="h-4 w-4" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
          Mobile product
        </span>
      </div>
      <div className="relative h-[88%] w-[8.4rem] rounded-[1.75rem] border-[5px] border-slate-950 bg-slate-950 p-1 shadow-[0_22px_45px_rgba(0,0,0,0.45)]">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[1.3rem] bg-white">
          <div className="absolute left-1/2 top-1.5 h-3 w-12 -translate-x-1/2 rounded-full bg-slate-950" />
          <div className="flex flex-1 flex-col items-center justify-center px-3 text-center">
            <div
              className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
              style={{ backgroundColor: project.accent }}
            >
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <p className="font-heading text-lg font-extrabold text-[#0A2C8C]">
              {project.previewLabel}
            </p>
            <p className="mt-1 text-[7px] leading-relaxed text-slate-500">
              {project.previewCaption}
            </p>
            <div
              className="mt-4 h-5 w-full rounded-full"
              style={{ backgroundColor: project.accent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const reduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="overflow-x-hidden pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-royal to-[#1a3a8f] py-20 text-white md:py-28">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-20 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 border-white/30 bg-white/20 text-white">
              OUR WORK
            </Badge>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Projects We&apos;ve Built
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
              From business websites and e-commerce platforms to nonprofit organizations
              and mobile applications, SaasCode builds digital solutions designed for
              real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-[#F5F7FA] py-20 dark:bg-background md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <motion.nav
            aria-label="Filter portfolio projects"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex max-w-full flex-wrap justify-center gap-2"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  data-testid={`filter-${category
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:px-5 ${
                    isActive
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-white text-muted-foreground shadow-sm hover:bg-brand-primary/10 hover:text-brand-primary dark:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.nav>

          {/* Grid */}
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={`${activeCategory}-${project.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                data-testid={`portfolio-card-${project.id}`}
              >
                  <Card className="group flex h-full flex-col overflow-hidden border-border bg-white transition-all duration-300 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-deep/10 dark:bg-card">
                    {/* Project preview */}
                    <div className="h-56 overflow-hidden border-b border-border sm:h-60">
                      {project.previewType === "phone" ? (
                        <PhonePreview project={project} />
                      ) : (
                        <BrowserPreview project={project} />
                      )}
                    </div>

                    <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
                      <Badge className="mb-3 w-fit border-brand-primary/20 bg-brand-primary/10 text-xs text-brand-primary">
                        {project.categoryLabel}
                      </Badge>
                      <h2 className="mb-3 text-xl font-bold leading-tight text-card-foreground transition-colors group-hover:text-brand-primary">
                        {project.displayTitle}
                      </h2>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div
                        className="mb-5 flex flex-wrap gap-1.5"
                        aria-label={`Services provided for ${project.displayTitle}`}
                      >
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full bg-[#F5F7FA] px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-secondary dark:text-muted-foreground"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="mt-auto w-full border-brand-primary/30 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                        data-testid={`view-project-${project.id}`}
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.buttonLabel}: ${project.displayTitle} (opens in a new tab)`}
                        >
                          {project.buttonLabel}
                          <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-deep via-brand-royal to-brand-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-extrabold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-8 text-blue-100">
              Join 50+ satisfied clients who trusted Saascode to transform their
              digital presence.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white px-8 font-bold text-brand-deep hover:bg-blue-50"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}