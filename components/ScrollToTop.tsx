"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-4 z-50 flex h-13 w-13 flex-col items-center justify-center rounded-full bg-espresso shadow-lg shadow-black/30 active:scale-95 transition-transform"
          style={{ width: 52, height: 52 }}
        >
          <span className="text-xl leading-none">🏠</span>
          <span className="text-[9px] font-bold text-cream leading-tight mt-0.5">TOP</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
