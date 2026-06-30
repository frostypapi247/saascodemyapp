import React from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white pt-16 pb-8 border-t-4 border-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full ring-2 ring-brand-purple" />
              <span className="font-heading font-bold text-2xl">Saascode IT</span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Empowering Innovation through Cloud-Based Solutions. We build enterprise-grade technology for businesses that want to grow.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <SiTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-brand-primary">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/login" className="hover:text-brand-primary transition-colors">Core Login</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-brand-primary">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Hosting & Email</Link></li>
              <li><Link href="/services" className="hover:text-brand-primary transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-brand-primary">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for the latest tech insights and company updates.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white w-full gap-2">
                Subscribe <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 SaasCode IT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
