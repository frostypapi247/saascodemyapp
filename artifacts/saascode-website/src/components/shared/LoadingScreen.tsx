import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#153DAB]"
          data-testid="loading-screen"
        >
          <div className="relative flex items-center justify-center mb-8">
            {/* Orbit ring */}
            <motion.div
              className="absolute w-28 h-28 rounded-full border-4 border-transparent border-t-[#109EF4] border-r-[#109EF4]/50"
              style={{ borderRadius: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-20 h-20 rounded-full border-4 border-transparent border-b-[#7B4DFF] border-l-[#7B4DFF]/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/logo.jpg"
              alt="Saascode"
              className="h-14 w-14 rounded-full z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.05, 0.95, 1] }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <motion.h1
            className="text-white font-bold text-2xl tracking-wide mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            SAAS-CODE
          </motion.h1>
          <motion.p
            className="text-blue-300 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Empowering Innovation
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#109EF4] to-[#7B4DFF]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
