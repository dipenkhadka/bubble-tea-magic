"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { business } from "@/lib/data";

const links = [
  { href: "#menu", label: "Menu", emoji: "🧋" },
  { href: "#happy-hour", label: "Happy Hour", emoji: "⏰" },
  { href: "#rewards", label: "Rewards", emoji: "⭐" },
  { href: "#catering", label: "Catering", emoji: "🎉" },
  { href: "#location", label: "Visit Us", emoji: "📍" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
                style={{backgroundColor: "#C4956A"}}
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-espresso/10 bg-[#F5F0EB] lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4 sm:px-6">

              {/* Back to Home */}
              <button
                onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="focus-ring flex items-center gap-3 rounded-xl bg-espresso px-4 py-3 font-display text-base font-bold text-cream tracking-wide w-full"
              >
                <span className="text-xl">🏠</span>
                Back to Home
              </button>

              <div className="my-1 h-px bg-espresso/10" />

              {/* Nav links */}
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring flex items-center gap-3 rounded-xl border border-espresso/10 bg-white px-4 py-3 font-display text-base font-bold text-espresso shadow-sm transition-all active:scale-95"
                >
                  <span className="text-xl">{l.emoji}</span>
                  {l.label}
                </a>
              ))}

              <div className="my-1 h-px bg-espresso/10" />

              {/* DoorDash */}
              <a
                href={business.doorDashUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff3008] px-5 py-3.5 text-center font-display text-base font-bold text-white shadow-md tracking-wide"
              >
                <ShoppingBag className="h-5 w-5" />
                Order on DoorDash
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}