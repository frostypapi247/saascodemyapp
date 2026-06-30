import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Core Login", href: "/login" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-deep/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <img src="/logo.jpg" alt="Saascode IT Solutions" className="h-10 w-10 rounded-full relative z-10" />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? "text-white" : "text-card-foreground dark:text-white"}`}>
            Saascode IT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                location === link.href
                  ? "text-brand-primary"
                  : isScrolled
                  ? "text-gray-200"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={isScrolled ? "text-white hover:text-brand-primary hover:bg-white/10" : ""}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button asChild className="bg-gradient-to-r from-brand-primary to-brand-purple hover:opacity-90 text-white border-0">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={isScrolled ? "text-white" : ""}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button
            className={isScrolled ? "text-white" : "text-foreground"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-md text-sm font-medium ${
                location === link.href
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "text-foreground hover:bg-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-purple text-white">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
