import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-card border-t border-border shadow-2xl p-4 md:p-5"
          data-testid="cookie-banner"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="h-5 w-5 text-brand-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.{" "}
                <a href="#" className="text-brand-primary hover:underline">Learn more</a>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button variant="outline" size="sm" onClick={decline} data-testid="cookie-decline">
                Decline
              </Button>
              <Button size="sm" onClick={accept} className="bg-brand-primary hover:bg-brand-royal text-white" data-testid="cookie-accept">
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
