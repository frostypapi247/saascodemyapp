import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser, useClerk, Show } from "@clerk/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const { user } = useUser();
  const { signOut } = useClerk();

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
    { label: "Contact", href: "/contact" },
  ];

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

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
            SAAS-CODE
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

          {/* Auth buttons — signed out */}
          <Show when="signed-out">
            <Button
              asChild
              variant="ghost"
              className={`text-sm font-medium ${isScrolled ? "text-gray-200 hover:text-brand-primary hover:bg-white/10" : "text-foreground hover:text-brand-primary"}`}
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </Show>

          {/* Auth buttons — signed in */}
          <Show when="signed-in">
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 text-sm ${isScrolled ? "text-gray-200" : "text-foreground"}`}>
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-primary to-brand-purple flex items-center justify-center">
                  {user?.imageUrl ? (
                    <img src={user.imageUrl} alt={user.firstName ?? "User"} className="h-7 w-7 rounded-full object-cover" />
                  ) : (
                    <User className="h-4 w-4 text-white" />
                  )}
                </div>
                <span className="font-medium hidden lg:inline">{user?.firstName ?? user?.emailAddresses?.[0]?.emailAddress?.split("@")[0]}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => signOut({ redirectUrl: basePath || "/" })}
                title="Sign out"
                className={isScrolled ? "text-gray-200 hover:text-red-400 hover:bg-white/10" : "text-foreground hover:text-red-400"}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </Show>

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

          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="block px-4 py-2 rounded-md text-sm font-medium text-brand-primary hover:bg-brand-primary/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </Show>

          <Show when="signed-in">
            <button
              className="text-left px-4 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-secondary flex items-center gap-2"
              onClick={() => { signOut({ redirectUrl: basePath || "/" }); setMobileMenuOpen(false); }}
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </Show>

          <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-purple text-white">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
