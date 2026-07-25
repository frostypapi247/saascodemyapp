import { useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { ClerkProvider, SignIn, SignUp, Show, useClerk } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { shadcn } from "@clerk/themes";
import { useQueryClient } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";
import CookieBanner from "@/components/shared/CookieBanner";
import LoadingScreen from "@/components/shared/LoadingScreen";
import QuoteModal from "@/components/shared/QuoteModal";

// REQUIRED — resolves the publishable key from window.location.hostname
const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

// REQUIRED — empty in dev (intentional), auto-set in prod by Replit
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

// Clerk passes full paths; strip base to avoid doubling with wouter
function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY");
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: "#109EF4",
    colorForeground: "#ffffff",
    colorMutedForeground: "#94a3b8",
    colorDanger: "#ef4444",
    colorBackground: "#040d1a",
    colorInput: "#0d1f3c",
    colorInputForeground: "#ffffff",
    colorNeutral: "#1e3a5f",
    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
    borderRadius: "0.75rem",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox: "bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl w-[440px] max-w-full overflow-hidden shadow-2xl",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: "text-white font-extrabold",
    headerSubtitle: "text-blue-300",
    socialButtonsBlockButtonText: "text-white",
    formFieldLabel: "text-white/80",
    footerActionLink: "text-brand-primary hover:text-blue-300",
    footerActionText: "text-white/50",
    dividerText: "text-white/50",
    identityPreviewEditButton: "text-brand-primary",
    formFieldSuccessText: "text-green-400",
    alertText: "text-white",
    logoBox: "flex justify-center mb-2",
    logoImage: "h-16 w-16 rounded-full",
    socialButtonsBlockButton: "bg-white/10 border-white/20 text-white hover:bg-white/20",
    formButtonPrimary: "bg-gradient-to-r from-[#109EF4] to-[#7c3aed] hover:opacity-90 text-white font-semibold shadow-lg",
    formFieldInput: "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#109EF4]",
    footerAction: "bg-transparent",
    dividerLine: "bg-white/20",
    alert: "bg-white/10 border-white/20",
    otpCodeFieldInput: "bg-white/10 border-white/20 text-white",
    formFieldRow: "",
    main: "",
  },
};

const queryClient = new QueryClient();

function SignInPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background matching site style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040d1a] via-[#071628] to-[#0a1f40]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-[#109EF4]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#109EF4 1px, transparent 1px), linear-gradient(90deg, #109EF4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 w-full px-4">
        <SignIn routing="path" path={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`} />
      </div>
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#040d1a] via-[#071628] to-[#0a1f40]">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#109EF4]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#109EF4 1px, transparent 1px), linear-gradient(90deg, #109EF4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 w-full px-4">
        <SignUp routing="path" path={`${basePath}/sign-up`} signInUrl={`${basePath}/sign-in`} />
      </div>
    </div>
  );
}

// Invalidates React Query cache when signed-in user changes
function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          {/* Legacy /login → redirect to /sign-in */}
          <Route path="/login">
            <Redirect to="/sign-in" />
          </Route>
          {/* REQUIRED — /*? optional wildcard matches bare URL and OAuth sub-paths */}
          <Route path="/sign-in/*?" component={SignInPage} />
          <Route path="/sign-up/*?" component={SignUpPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        signIn: {
          start: {
            title: "Welcome back",
            subtitle: "Sign in to your Saascode account",
          },
        },
        signUp: {
          start: {
            title: "Get started",
            subtitle: "Create your Saascode account",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkQueryClientCacheInvalidator />
        <TooltipProvider>
          <LoadingScreen />
          <Router />
          <WhatsAppButton />
          <ScrollToTop />
          <CookieBanner />
          <Show when="signed-out">
            <QuoteModal />
          </Show>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <ClerkProviderWithRoutes />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
