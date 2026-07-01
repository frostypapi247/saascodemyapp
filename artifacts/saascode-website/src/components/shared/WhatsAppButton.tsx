import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Clock } from "lucide-react";

const PHONE = "263779067012";

const TOPICS = [
  { label: "Website Development", emoji: "🌐", msg: "Hi! I'm interested in getting a website developed. Can we discuss my project?" },
  { label: "Mobile App", emoji: "📱", msg: "Hi! I'd like to discuss building a mobile app. Can you help?" },
  { label: "Digital Marketing", emoji: "📣", msg: "Hi! I'm looking for digital marketing services. Can we chat?" },
  { label: "Brand Identity & Design", emoji: "🎨", msg: "Hi! I need help with brand identity and design. Can we discuss?" },
  { label: "Cloud Hosting", emoji: "☁️", msg: "Hi! I'm interested in cloud hosting solutions. Can we talk?" },
  { label: "General Inquiry", emoji: "💬", msg: "Hi! I'd like to learn more about Saascode IT Solutions and what you offer." },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning 👋";
  if (h < 17) return "Good afternoon 👋";
  return "Good evening 👋";
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 8000);
    return () => clearTimeout(t);
  }, []);

  function startChat() {
    const topic = selected !== null ? TOPICS[selected] : TOPICS[5];
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(topic.msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-3">
      {/* Pre-chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.08)" }}
          >
            {/* Header */}
            <div
              className="px-4 py-4 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #128C7E 0%, #075E54 100%)" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/logo.jpg"
                    alt="Saascode"
                    className="h-10 w-10 rounded-full ring-2 ring-white/30 object-cover"
                    onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-[#075E54]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">SAAS-CODE</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="h-2.5 w-2.5 text-green-300" />
                    <span className="text-green-300 text-[10px] font-medium">Typically replies instantly</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-7 w-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              >
                <X className="h-3.5 w-3.5 text-white" />
              </button>
            </div>

            {/* Chat body */}
            <div className="bg-[#ECE5DD] px-4 py-4" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
              {/* Greeting bubble */}
              <div className="flex justify-start mb-3">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm max-w-[85%]">
                  <p className="text-gray-800 text-sm font-medium">{getGreeting()}</p>
                  <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                    Welcome to <strong>Saascode IT Solutions</strong>. How can we help you today?
                  </p>
                  <p className="text-gray-400 text-[10px] mt-1 text-right">now</p>
                </div>
              </div>

              {/* Topic selector label */}
              <p className="text-gray-500 text-[11px] text-center mb-2 font-medium">Choose your inquiry type:</p>

              {/* Topic chips */}
              <div className="flex flex-col gap-1.5 mb-3">
                {TOPICS.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-left text-sm font-medium transition-all"
                    style={{
                      background: selected === i ? "linear-gradient(135deg, #128C7E, #075E54)" : "white",
                      color: selected === i ? "white" : "#2d3748",
                      boxShadow: selected === i ? "0 2px 12px rgba(18,140,126,0.35)" : "0 1px 3px rgba(0,0,0,0.08)",
                      transform: selected === i ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base leading-none">{t.emoji}</span>
                      <span className="text-xs">{t.label}</span>
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 opacity-50 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Start chat CTA */}
            <button
              onClick={startChat}
              className="w-full flex items-center justify-center gap-2 py-3.5 font-bold text-sm text-white transition-opacity hover:opacity-90 active:opacity-80"
              style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {selected !== null ? `Chat about ${TOPICS[selected].label}` : "Start WhatsApp Chat"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="relative">
        {/* Notification badge */}
        <AnimatePresence>
          {showBadge && !open && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -top-10 right-0 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
            >
              💬 Chat with us!
              <div className="absolute -bottom-1.5 right-4 h-3 w-3 bg-white rotate-45 shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse rings */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" style={{ animationDelay: "0.4s" }} />
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => { setOpen(o => !o); setShowBadge(false); }}
          data-testid="whatsapp-button"
          className="relative h-14 w-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", boxShadow: "0 4px 24px rgba(37,211,102,0.45)" }}
          aria-label="Open WhatsApp chat"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X className="h-6 w-6 text-white" />
              </motion.span>
            ) : (
              <motion.span key="whatsapp" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
