import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/263779067013"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
        >
          <MessageCircle className="h-7 w-7 text-white" fill="white" />
        </motion.div>
      </a>
    </div>
  );
}
