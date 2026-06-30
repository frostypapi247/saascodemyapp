import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+263 779 067 012", href: "tel:+263779067012" },
  { icon: Mail, label: "Email", value: "info@saascode.net", href: "mailto:info@saascode.net" },
  { icon: MessageCircle, label: "WhatsApp", value: "+263 779 067 012", href: "https://wa.me/263779067012" },
  { icon: MapPin, label: "Location", value: "Harare, Zimbabwe", href: "https://maps.google.com/?q=Harare,Zimbabwe" },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Emergency support only" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Production",
  "Hosting & Email",
  "Brand Identity",
  "SEO",
  "Social Media Management",
  "Business Automation",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

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
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Get in Touch</Badge>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Reach out and let's discuss how Saascode can help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-card-foreground dark:text-white mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're available 6 days a week and respond to all inquiries within 2 hours during business hours. For urgent support, use WhatsApp.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-card rounded-xl border border-border hover:border-brand-primary/30 hover:shadow-md transition-all group"
                      data-testid={`contact-${info.label.toLowerCase()}`}
                    >
                      <div className="h-11 w-11 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <Icon className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">{info.label}</p>
                        <p className="font-semibold text-card-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-brand-primary" />
                    </div>
                    <h3 className="font-bold text-card-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-medium text-card-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border h-52 bg-gradient-to-br from-brand-primary/10 via-brand-royal/10 to-brand-purple/10 flex flex-col items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <p className="font-semibold text-card-foreground">Harare, Zimbabwe</p>
                <p className="text-sm text-muted-foreground">Serving clients across the region</p>
                <a
                  href="https://maps.google.com/?q=Harare,Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-primary hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-border shadow-xl">
                <CardContent className="p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-card-foreground">Full Name *</Label>
                            <Input id="name" placeholder="John Doe" required data-testid="input-name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-card-foreground">Email *</Label>
                            <Input id="email" type="email" placeholder="john@company.com" required data-testid="input-email" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">Phone</Label>
                            <Input id="phone" type="tel" placeholder="+263 7XX XXX XXX" data-testid="input-phone" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-sm font-medium text-card-foreground">Company</Label>
                            <Input id="company" placeholder="Your Company" data-testid="input-company" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-card-foreground">Service of Interest *</Label>
                          <Select value={selectedService} onValueChange={setSelectedService}>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>{s}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-card-foreground">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your project, goals, and timeline..."
                            rows={5}
                            required
                            data-testid="input-message"
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full h-12 bg-gradient-to-r from-brand-primary to-brand-purple hover:opacity-90 text-white font-semibold shadow-lg shadow-brand-primary/20 gap-2"
                          data-testid="button-send-message"
                        >
                          {loading ? (
                            <>
                              <motion.div
                                className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" /> Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground mb-4">Prefer to chat directly? We're on WhatsApp!</p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 shadow-lg shadow-green-500/30">
              <a href="https://wa.me/263779067012" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
