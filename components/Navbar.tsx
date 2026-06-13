"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { business } from "@/lib/data";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#happy-hour", label: "Happy Hour" },
  { href: "#rewards", label: "Rewards" },
  { href: "#catering", label: "Catering" },
  { href: "#location", label: "Visit Us" },
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
          ? "bg-[#c9b8e8]/95 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)]"
          : "bg-[#c9b8e8]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 lg:justify-center">
          <a href="#top" className="flex items-center gap-3 focus-ring rounded-lg">
            <div className="relative h-28 w-28 shrink-0 sm:h-36 sm:w-36">
              <Image
                src="/images/logo.png"
                alt="Bubble Tea Magic logo"
                fill
                sizes="144px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight">
              Bubble Tea Magic
            </span>
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring rounded-lg p-2 text-espresso lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden items-center justify-center gap-2 pb-3 lg:flex">
          {links.map((l) => (
  <a
    key={l.href}
    href={l.href}
    className="focus-ring rounded-full border border-espresso/20 bg-white/40 px-4 py-1.5 text-sm font-semibold text-espresso transition-all hover:border-espresso hover:bg-white/70"
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-espresso/10 bg-[#c9b8e8] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((l) => (
  <a
    key={l.href}
    href={l.href}
    onClick={() => setOpen(false)}
    className="focus-ring rounded-lg px-3 py-3 text-base font-semibold text-espresso hover:bg-espresso/10"
  >
    {l.label}
  </a>
))}

<a
  href={business.doorDashUrl}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
  className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff3008] px-5 py-3 text-center text-base font-bold text-white"
>
  <ShoppingBag className="h-4 w-4" />
  Order on DoorDash
</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}