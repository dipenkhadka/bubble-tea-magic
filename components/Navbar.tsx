"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, ChevronRight } from "lucide-react";
import Image from "next/image";
import { business } from "@/lib/data";

const links = [
  { href: "#menu", label: "Menu", emoji: "🧋", desc: "Drinks, food & more" },
  { href: "#happy-hour", label: "Happy Hour", emoji: "⏰", desc: "12–3 PM · 20% off daily" },
  { href: "#rewards", label: "Rewards", emoji: "⭐", desc: "Earn points every visit" },
  { href: "#catering", label: "Catering", emoji: "🎉", desc: "Events & group orders" },
  { href: "#location", label: "Visit Us", emoji: "📍", desc: "Euless, TX · Get directions" },
];

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.07, duration: 0.3, ease: "easeOut" } }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F0EB] shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)]"
            : "bg-[#F5F0EB]"
        }`}
      >
        <div className="relative z-10 w-full px-4 sm:px-6">
          <div className="flex items-center justify-between py-1">
            {/* Logo + Brand */}
            <a href="#top" className="focus-ring rounded-lg flex items-center gap-3 shrink-0">
              <div className="relative h-24 w-24">
                <Image
                  src="/images/logo.png"
                  alt="Bubble Tea Magic logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display text-xl sm:text-2xl font-extrabold text-black tracking-wide">
                Bubble Tea Magic
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-2 lg:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="focus-ring rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-all hover:opacity-80"
                  style={{ backgroundColor: "#C4956A" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={business.doorDashUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#ff3008] px-5 py-1.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#e02a07]"
              >
                <ShoppingBag className="h-4 w-4" />
                Order on DoorDash
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="focus-ring rounded-lg p-2 text-espresso lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "linear-gradient(160deg, #2a1a0f 0%, #3d2817 60%, #5c3520 100%)" }}
          >
            {/* Header row inside overlay */}
            <div className="flex items-center justify-between px-5 pt-6 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧋</span>
                <div>
                  <p className="text-xs font-semibold text-caramel tracking-widest uppercase">Bubble Tea Magic</p>
                  <p className="text-xs text-cream/50">Euless, TX</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/10" />

            {/* Back to Home */}
            <motion.button
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="mx-5 mt-5 flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 text-left backdrop-blur-sm border border-white/10 active:scale-95 transition-transform"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-caramel/20 text-2xl">🏠</span>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-cream">Back to Home</p>
                <p className="text-xs text-cream/50">Scroll to top of page</p>
              </div>
              <ChevronRight className="h-4 w-4 text-caramel" />
            </motion.button>

            {/* Nav links */}
            <nav className="flex flex-col gap-2 px-5 mt-3">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  custom={i + 1}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4 border border-white/5 hover:bg-white/10 active:scale-95 transition-all"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl">{l.emoji}</span>
                  <div className="flex-1">
                    <p className="font-display text-base font-bold text-cream">{l.label}</p>
                    <p className="text-xs text-cream/50">{l.desc}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-caramel" />
                </motion.a>
              ))}
            </nav>

            {/* DoorDash CTA */}
            <motion.div
              custom={links.length + 1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mx-5 mt-auto mb-10"
            >
              <div className="mb-3 h-px bg-white/10" />
              <a
                href={business.doorDashUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#ff3008] px-5 py-4 text-center font-display text-base font-bold text-white shadow-lg shadow-red-900/40 active:scale-95 transition-transform"
              >
                <ShoppingBag className="h-5 w-5" />
                Order on DoorDash
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
