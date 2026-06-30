import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { Monitor } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040d1a] via-[#071628] to-[#0a1f40]">
        {/* Animated orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-purple/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-royal/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-primary/50"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#109EF4 1px, transparent 1px), linear-gradient(90deg, #109EF4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Blurred dashboard behind card */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <div className="w-[700px] h-[450px] rounded-2xl bg-white/5 border border-white/10 grid grid-cols-3 gap-4 p-8 scale-110">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl bg-white/10 border border-white/10" />
          ))}
        </div>
      </div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              {/* Orbit animation */}
              <motion.div
                className="absolute inset-0 w-20 h-20 rounded-full border-2 border-brand-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ margin: "-4px" }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-primary" />
              </motion.div>
              <img src="/logo.jpg" alt="Saascode" className="h-16 w-16 rounded-full shadow-xl" />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-1">Welcome Back</h1>
            <p className="text-blue-300 text-sm">Sign in to your Saascode account</p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80 text-sm font-medium">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-brand-primary focus:ring-brand-primary"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80 text-sm font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-brand-primary"
                  data-testid="input-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  data-testid="toggle-password"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="border-white/30 data-[state=checked]:bg-brand-primary" data-testid="checkbox-remember" />
                <Label htmlFor="remember" className="text-white/70 text-sm cursor-pointer">Remember me</Label>
              </div>
              <a href="#" className="text-brand-primary text-sm hover:text-blue-300 transition-colors" data-testid="link-forgot-password">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-brand-primary to-brand-purple hover:opacity-90 text-white font-semibold shadow-lg shadow-brand-primary/30"
              data-testid="button-sign-in"
            >
              Sign In
            </Button>

            <div className="relative flex items-center gap-4">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-white/50 text-xs whitespace-nowrap">or continue with</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-11 bg-white/10 border-white/20 text-white hover:bg-white/20 gap-2"
                data-testid="button-google-login"
              >
                <SiGoogle className="h-4 w-4" /> Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11 bg-white/10 border-white/20 text-white hover:bg-white/20 gap-2"
                data-testid="button-microsoft-login"
              >
                <Monitor className="h-4 w-4" /> Microsoft
              </Button>
            </div>
          </form>

          <p className="text-center text-white/50 text-sm mt-6">
            Don't have an account?{" "}
            <Link href="/contact" className="text-brand-primary hover:text-blue-300 transition-colors" data-testid="link-contact">
              Contact us
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
