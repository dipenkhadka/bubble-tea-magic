"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { business } from "@/lib/data";

const links = [
  { href: "#menu",       label: "Menu",       emoji: "🧋", desc: "Drinks, food & more" },
  { href: "#happy-hour", label: "Happy Hour", emoji: "⏰", desc: "12–3 PM · 20% off daily" },
  { href: "#rewards",    label: "Rewards",    emoji: "⭐", desc: "Earn points every visit" },
  { href: "#catering",   label: "Catering",   emoji: "🎉", desc: "Events & group orders" },
  { href: "#location",   label: "Visit Us",   emoji: "📍", desc: "Euless, TX · Get directions" },
];

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.28, ease: [0, 0, 0.2, 1] },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

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

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Sticky header ── */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-[#F5F0EB] ${scrolled ? "shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)]" : ""}`}>
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between py-1">

            {/* Logo */}
            <a href="#top" className="focus-ring rounded-lg flex items-center gap-3 shrink-0">
              <div className="relative h-24 w-24">
                <Image src="/images/logo.png" alt="Bubble Tea Magic logo" fill sizes="96px" className="object-contain" priority />
              </div>
              <span className="font-display text-xl sm:text-2xl font-extrabold text-black tracking-wide">
                Bubble Tea Magic
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-2 lg:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  className="focus-ring rounded-full px-4 py-1.5 text-sm font-semibold text-white transition-all hover:opacity-80"
                  style={{ backgroundColor: "#C4956A" }}>
                  {l.label}
                </a>
              ))}
              <a href={business.doorDashUrl} target="_blank" rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#ff3008] px-5 py-1.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 hover:bg-[#e02a07]">
                <ShoppingBag className="h-4 w-4" />
                Order on DoorDash
              </a>
            </div>

            {/* Hamburger */}
            <button aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="focus-ring rounded-lg p-2 text-espresso lg:hidden">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "linear-gradient(170deg,#1e110a 0%,#2a1a0f 45%,#3d2817 100%)" }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-8 pb-6">
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-caramel">Navigation</p>
                <p className="text-xl font-extrabold text-cream mt-0.5">Bubble Tea Magic</p>
              </div>
              <button onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 hover:text-cream transition-colors"
                aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-white/8" />

            {/* Nav items */}
            <nav className="flex flex-col px-6 pt-2 flex-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={close}
                  className="group flex items-center gap-4 py-4 border-b border-white/8 active:opacity-60 transition-opacity"
                >
                  <span className="text-2xl w-8 text-center">{l.emoji}</span>
                  <div className="flex-1">
                    <p className="text-base font-bold text-cream">{l.label}</p>
                    <p className="text-xs text-white/40 mt-0.5">{l.desc}</p>
                  </div>
                  <span className="text-white/25 text-lg group-active:translate-x-1 transition-transform">›</span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom actions */}
            <motion.div
              custom={links.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="px-6 pb-10 pt-5 flex flex-col gap-3"
            >
              {/* DoorDash */}
              <a href={business.doorDashUrl} target="_blank" rel="noopener noreferrer" onClick={close}
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#ff3008] py-4 font-bold text-white text-base shadow-lg active:scale-95 transition-transform">
                <ShoppingBag className="h-5 w-5" />
                Order on DoorDash
              </a>

              {/* Back to top */}
              <button
                onClick={() => { close(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/12 py-3.5 text-sm font-semibold text-white/60 active:scale-95 transition-transform"
              >
                <span className="text-base">↑</span>
                Back to Top
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
